import { Component, OnInit } from '@angular/core';
import { StorageService } from '../Services/storage.service';
import { StructService } from '../Services/struct.service';
import * as L from 'leaflet';
import { Router } from '@angular/router';
import { threadId } from 'worker_threads';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-accueilagent',
  templateUrl: './accueilagent.page.html',
  styleUrls: ['./accueilagent.page.scss'],
})
export class AccueilagentPage implements OnInit {
  [x: string]: any;
count:any
countm:any
countd:any
countc:any
countn:any
countr:any
photoacten:any

  id: any
  p=1;
  username: any
  nom: any
  prenom: any
  structid: any;
  longitude: any;
  latitude: any;
  listacten: any;
  listactem: any;
  newdet1:any
  listacted: any;
  listcas: any;
  listnat: any;
  listres: any;
  iddelastructure: any;
  newid: any;
  nonuser: any;
  nomutilisateur: any;
  mailutilisateur: any;
  prenonuser: any;
  nomacte: any;
  ddd: any
  detailacte: any;
  usernom: any;
  newdet: any=false;
  textFiltre: any;
  longueur: any
  rdv: any
  nombre:any
  rdvusername: any
  user: any
  nbreacten: any
  nbreacted: any
  nbreactem: any
  l3: any
  teststruct: any
  showcas: false
  showres: false
  showacte: false

  nbrecas: any
  nbreres: any
  nbrenat: any
  agentnotif: any
  actembyid:any
  actedbyid:any
  casbyid:any
  resbyid:any
  natbyid:any
  mademandeetat:any
  listfiltre:any
  messageerreur:any
  constructor(private storageService: StorageService,
    private structservice: StructService,
    private router: Router) { }

  ngOnInit() {
    //RECUPEPER LES DONNÉES DE L'UTILISATEUR
    const user = this.storageService.getUser();
    console.log(user);
    //ID DE L'UTILISATEUR
    this.id = user.id

    this.username = user.username
    //NOM ET PRENOM DE L'UTILISATEUR 
    this.usernom = user.nom
    this.prenom = user.prenom
    //RECUPERER LA STRUCTURE D'UN AGENT PAR L'ID DE L'AGENT
    this.structservice.getstructbyidagent(this.id).subscribe(data => {
      this.structid = data
      this.nom = data.nom
      this.iddelastructure = data.id
      this.longitude = data.longitude
      this.latitude = data.latitude

      console.log("//////////////////" + JSON.stringify(this.structid))
      console.log("//////////// idstructtt:   " + this.iddelastructure)
      this.newid = this.iddelastructure
      console.log(this.newid)


      //TOUT LES ACTES DE NAISANCE D'UNE STRUCTURE FONCTION POUR LE FILTRE
      //this.actenbystruct(this.newid)
      //RECUPÉRER LA LISTE DE PRESENCE
      // this.structservice.getrdvdujour(this.newid,2).subscribe(data => {
      //   this.rdv = data
      //   this.rdvusername = data.nom
      //   console.log(this.rdv)

      // })
      //compteur

      this.teststruct = this.structid.typestructure.type
      this.showacte = this.teststruct.includes('Mairies')
      this.showcas = this.teststruct.includes('Tribunaux')
      this.showres = this.teststruct.includes('Commissariats')


      //TOUT LES ACTES DE NAISSANCE D'UNE STRUCTURE
      this.structservice.getactenbyidstruct(this.newid).subscribe(data => {

        this.listacten = data
        console.log(this.listacten)

      })
      this.structservice.getactembyidstruct(this.newid).subscribe(data => {
        this.listactem = data


      })
      this.structservice.getcasbyidstruct(this.newid).subscribe(data => {
        this.listcas = data;

      })
      this.structservice.getnatbyidstruct(this.newid).subscribe(data => {
        this.listnat = data;

      })
      this.structservice.getresbyidstruct(this.newid).subscribe(data => {
        this.listres = data;


      })



      this.structservice.getactedbyidstruct(this.newid).subscribe(data => {
        this.listacted = data;


        //console.log(this.listacted.length)
        if (this.teststruct == "Mairies") {
          this.structservice.countacten(this.newid).subscribe(data=>{
            this.count=data

            this.nbreacten = this.count.length
        

          }),
          this.structservice.countactem(this.newid).subscribe(data=>{
            this.countm=data
            this.nbreactem = this.countm.length
            console.log(this.countm)
            console.log(this.nbreactem)



          }),
          this.structservice.countacted(this.newid).subscribe(data=>{
            this.countd=data
            this.nbreacted = this.countd.length

          })

         


        


        } 
        else if (this.teststruct == "Tribunaux") {
          this.structservice.countacas(this.newid).subscribe(data=>{
            this.countc=data
            this.nbrecas = this.countc.length
          
          }) ,
          this.structservice.countnat(this.newid).subscribe(data=>{
            this.countn=data
            this.nbrenat = this.countn.length
            console.log(this.countc)

            console.log(this.nbrecas)

          })
          
       
        } else if (this.teststruct == "Commissariats") {

          this.structservice.countres(this.newid).subscribe(data=>{
            this.countr=data
            this.nbreacted = this.countr.length

          })


        }

      })


    }
    )

    this.OnClick(1)


  }
  //GENERER LA LISTE DE PRESENCE()
  Lister(){
    if (this.listfiltre == "Acte de naissance") {


      this.structservice.getrdvdujour(this.newid,this.nombre).subscribe(data => {
      
           this.rdv = data
           
           this.rdvusername = data.nom
            this.messageerreur=this.rdv.contenue
            console.log(this.messageerreur)

          

         })
    }
    else if (this.listfiltre == "Acte de mariage") {
      this.structservice.getrdvactem(this.newid,this.nombre).subscribe(data => {
      
        this.rdv = data
        this.messageerreur=this.rdv.contenue

         })
    }
    else if (this.listfiltre == "Acte de décès") {
      this.structservice.getrdvacted(this.newid,this.nombre).subscribe(data => {
      
        this.rdv = data
           this.rdvusername = data.nom
           this.messageerreur=this.rdv.contenue

         })
    }
    else if (this.listfiltre == "Casier Judiciaire") {

      this.structservice.getrdvcas(this.newid,this.nombre).subscribe(data => {
      
        this.rdv = data
        this.messageerreur=this.rdv.contenue

           this.rdvusername = data.nom
         })
    }
    else if (this.listfiltre == "Certificat de résidence") {
      this.structservice.getrdvres(this.newid,this.nombre).subscribe(data => {
      
        this.rdv = data
        this.messageerreur=this.rdv.contenue

           this.rdvusername = data.nom
         })
    }
    else if (this.listfiltre == "Certificat de nationnalité") {
      this.structservice.getrdvdunat(this.newid,this.nombre).subscribe(data => {
      
        this.rdv = data
        this.messageerreur=this.rdv.contenue

           this.rdvusername = data.nom
         })
    }
  

  }
  //POUR LA GEOLOCALISATION
  ionViewDidEnter() {

    //if(div){
    //autres methodes
    const icon = L.icon({
      iconUrl: 'assets/images/marker.png',
      popupAnchor: [13, 0],
    });
    this.loadMap(icon);

  }

  //POUR LA GEOLOCALISATION
  loadMap(icon: any): void {
    var map;

    map = L.map('map').setView([this.longitude, this.latitude], 6);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',

    }).addTo(map);


    const marker = L.marker([this.longitude, this.latitude], { icon }).bindPopup(this.nom);
    marker.addTo(map);



  }
  //TOUT LES ACTES DE NAISANCE D'UNE STRUCTURE FONCTION POUR LE FILTRE

  actenbystruct(id: any) {
    this.structservice.getactenbyidstruct(this.newid).subscribe(data => {
      this.listacten = data

      //console.log(this.listacten)
    })
  }

  //FILTRER LE SDEMANDES
  filtrer() {

    if (this.textFiltre == "Acte de naissance") {
      this.structservice.getactenbyidstruct(this.newid).subscribe(data => {
        this.listacten = data
        this.longueur = this.listacten.length;
       // console.log(this.longueur)
      })
    }
    else if (this.textFiltre == "Acte de mariage") {
      this.structservice.getactembyidstruct(this.newid).subscribe(data => {
        this.listacten = data;
      })
    }
    else if (this.textFiltre == "Acte de décès") {
      this.structservice.getactedbyidstruct(this.newid).subscribe(data => {
        this.listacten = data;
      })
    }
    else if (this.textFiltre == "Casier Judiciaire") {

      this.structservice.getcasbyidstruct(this.newid).subscribe(data => {
        this.listacten = data;
      })
    }
    else if (this.textFiltre == "Certificat de résidence") {
      this.structservice.getresbyidstruct(this.newid).subscribe(data => {
        this.listacten = data;

      })
    }
    else if (this.textFiltre == "Certificat de nationnalité") {
      this.structservice.getnatbyidstruct(this.newid).subscribe(data => {
        this.listacten = data
      })
    }
    else {
      this.Alldemande();
    }

  }
  //RECUPERATION DES DONNÉES   D'UNE DEMANDE PAR DANS LE POPUP
  OnClick(id: any) {

    if (this.textFiltre =="Acte de naissance") {
      this.structservice.getactenbyid(id).subscribe(dataa => {
        this.detailacte = dataa
       // console.log(this.detailacte)
        this.newdet = (" Nom : " + "  " + this.detailacte.nom + "    \n                " +
          "Prenom :" + this.detailacte.prenom + "                    " +
          " Nom du père : " + "  " + this.detailacte.nompere + "                    " +
          " Nom  de la mère: " + "  " + this.detailacte.nommere + "                    " +
          " Date de Naissance : " + "  " + this.detailacte.datedenaissance + "                    " +
          " Genre : " + "  " + this.detailacte.genre + "                    " +
          " Lieu de Naissance : " + "  " + this.detailacte.lieudenaissance + "                    " +
          " Numéro du Volet  : " + "  " + this.detailacte.numvolet + "                    " +
          " Profession du père  : " + "  " + this.detailacte.profpere + "                    " +
          " Profession de la mère : " + "  " + this.detailacte.profmere + "                    "
        )
      

      }
      )
    }
    else if (this.textFiltre =="Acte de mariage") {
      this.structservice.getactembyid(id).subscribe(data=>{
        this.actembyid=data
        this.newdet = (" Nom et Prenom de l'homme : " + "  " + this.actembyid.nomh + " \n" +
        "Nom et Prénom de la femme :" + this.actembyid.nomf + " " +
        "Profession de l'homme: " + "  " + this.actembyid.proh + "" +
        "Profession de la femme" + "  " + this.actembyid.prof + "" + 
        "Date  de Naissance de l'homme " + "  " + this.actembyid.datenh + "" +
        "Date  de Naissance de la femme " + "  " + this.actembyid.datenf + ""+ 
        "Témoin de l'homme:" + this.actembyid.temoinh + " " +
        "Témoin de la femme :" + this.actembyid.temoinf + " " 


      )
     //  console.log(this.actembyid)

      })

    }
    else if (this.textFiltre == "Acte de décès") {
      this.structservice.getactedbyid(id).subscribe(data=>{
        this.actedbyid=data
        this.newdet = (" Nom  " + "  " + this.actedbyid.nom + " \n" +
        " Prénom " + this.actedbyid.prenom + " " +
        "Date  de Naissance  " + "  " + this.actedbyid.daten + "" +
        "Date  de décès" + "  " + this.actedbyid.dated + ""+ 
        "Profession :" + this.actedbyid.profession + " " +
        "Lieu de Naissance:" + this.actedbyid.lieunaiss + " " +
        "Lieu de décès:" + this.actedbyid.lieudeces + " " +
        "Volet de l'hopital:" + this.actedbyid.numvolet + " " 
      )

      })
    }
    else if (this.textFiltre == "Casier Judiciaire") {
      console.log(this.casbyid)

      this.structservice.getcasbyid(id).subscribe(data=>{
        this.casbyid=data
        this.newdet = (" Nom  " + "  " + this.casbyid.nom + " \n" +
        " Prénom " + this.casbyid.prenom + " " +
        
        "Lieu de Naissance:" + this.casbyid.lieudenaissance + " "  
      )
      this.photoacten=this.casbyid.photoacten
    console.log(this.casbyid)

      })
    }
     else if (this.textFiltre =="Certificat de résidence") {
      this.structservice.getresbyid(id).subscribe(data=>{
        this.resbyid=data
        this.newdet = (" Nom  " + "  " + this.resbyid.nom + " \n" +
        " Prénom " + this.resbyid.prenom + " " +
        "Lieu de Naissance:" + this.resbyid.lieudenaissance + " " 
      )
      this.photoacten=this.resbyid.photoacten

     // console.log(this.resbyid)

      })
    } 
    else if (this.textFiltre =="Certificat de nationnalité") {
      this.structservice.getnatbyid(id).subscribe(data=>{
        this.natbyid=data
        this.newdet =  (" Nom  " + "  " + this.natbyid.nom + " \n" +
        " Prénom " + this.natbyid.prenom + " " +
        "Lieu de Naissance:" + this.natbyid.lieudenaissance + " "  
             )
     // console.log(this.natbyid)
     this.photoacten=this.resbyid.photoacten

      })
    }
  }

  Alldemande() {
    this.structservice.getactenbyidstruct(this.newid).subscribe(data => {
      this.listacten = data;
      this.longueur = this.listacten.length;
     // console.log(this.longueur)

    })
  }
  getnotif() {
    this.structservice.getagentbyid(this.id).subscribe(data => {
      this.agentnotif = data.notification

     // console.log(this.agentnotif);
    })


  }
  
  validerdemande(){
    Swal.fire({
      title: 'Vous etes sur de valider cette declaration ?',
      text: "Cette action est irréversible",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ACBE11',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, Valider!',
      heightAuto: false

    }).then((result) => {
      if (result.isConfirmed) {



       if (this.listfiltre == "Acte de naissance") {
       
        this.structservice.validerdem(this.detailacte.id).subscribe(data=>{
          this.mademandeetat=data
        //  console.log(this.mademandeetat)
       })
       }
      
       else if (this.listfiltre == "Acte de mariage") {
      
        this.structservice.valideractem(this.actembyid.id).subscribe(data=>{
          this.mademandeetat=data
        })
      }
      

      else if (this.listfiltre == "Acte de décès") {
        console.log(this.listfiltre)

        this.structservice.valideracted(this.actedbyid.id).subscribe(data => {
          this.mademandeetat=data
          console.log(this.mademandeetat)

           })
      }

      else if (this.listfiltre== "Casier Judiciaire") {
        this.structservice.validercas(this.casbyid.id).subscribe(data => {
          this.mademandeetat=data

           })
      }   else if (this.listfiltre == "Certificat de résidence") {
        this.structservice.validerres(this.resbyid.id).subscribe(data => {
          this.mademandeetat=data

           })
      }   else if (this.listfiltre ==  "Certificat de nationnalité") {
        this.structservice.validernat(this.natbyid.id).subscribe(data => {
          this.mademandeetat=data

           })
      }
    
   
       Swal.fire({
        title: 'Valider!',
        text: 'La demande a été validée ',
        icon: 'success',
        confirmButtonColor: '#ACBE11',

        heightAuto: false
      });
      }


    })
   

  }

}
