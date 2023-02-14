import { Component, OnInit } from '@angular/core';
import { StorageService } from '../Services/storage.service';
import { StructService } from '../Services/struct.service';
import * as L from 'leaflet';
import { Router } from '@angular/router';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-accueilagent',
  templateUrl: './accueilagent.page.html',
  styleUrls: ['./accueilagent.page.scss'],
})
export class AccueilagentPage implements OnInit {
  [x: string]: any;

  id: any
  username: any
  nom: any
  prenom: any
  structid: any;
  longitude: any;
  latitude: any;
  listacten: any;
  listactem: any;
  listacted: any;
  listcas:any;
  listnat:any;
  listres:any;
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
  newdet: any
  textFiltre: any;
  longueur: any
  rdv: any
  rdvusername: any
  user: any
  nbreacten: any
  nbreacted: any
  nbreactem: any
  l3:any
  teststruct: any

  nbrecas:any
  nbreres:any
  nbrenat:any

  constructor(private storageService: StorageService,
    private structservice: StructService,
    private router: Router) { }

  ngOnInit() {
    //RECUPEPER LES DONNÉES DE L'UTILISATEUR
    const user = this.storageService.getUser();
    console.log(user);
    //ID DE L'UTILISATEUR
    this.id = user.id
    console.log(this.id)

    this.username = user.username
    console.log(this.username)
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
      console.log("//////////// iddddddd   " + this.iddelastructure)
      this.newid = this.iddelastructure
      console.log(this.newid)


      //TOUT LES ACTES DE NAISANCE D'UNE STRUCTURE FONCTION POUR LE FILTRE
      //this.actenbystruct(this.newid)
      //RECUPÉRER LA LISTE DE PRESENCE
      this.structservice.getrdvdujour(this.newid).subscribe(data => {
        this.rdv = data
        this.rdvusername = data.nom
        console.log(this.rdv)

      })
            //compteur

      this.teststruct = this.structid.typestructure.type
      console.log(this.teststruct)
      //TOUT LES ACTES DE NAISSANCE D'UNE STRUCTURE
      this.structservice.getactenbyidstruct(this.newid).subscribe(data => {
        this.listacten = data
        console.log(this.listacten)
      })
      this.structservice.getactembyidstruct(this.newid).subscribe(data => {
        this.listactem = data
        console.log(this.listactem)


      })
      this.structservice.getcasbyidstruct(this.newid).subscribe(data => {
        this.listcas = data;
        console.log(this.listcas)

      })
      this.structservice.getnatbyidstruct(this.newid).subscribe(data => {
        this.listnat = data;

      })
      this.structservice.getresbyidstruct(this.newid).subscribe(data => {
        this.listres = data;
        console.log(this.listres)


      })



      this.structservice.getactedbyidstruct(this.newid).subscribe(data => {
        this.listacted = data;


       //console.log(this.listacted.length)
       if (this.teststruct == "Mairies") {
        this.nbreacten=this.listacten.length
        this.nbreactem=this.listactem.length
        this.nbreacted=this.listacted.length
        


         console.log(this.nbreacten)
         console.log(this.nbreactem)
         console.log(this.nbreacted)
        


       } else if(this.teststruct == "Tribunaux"){
        this.nbrecas=this.listcas.length
        this.nbrenat=this.listnat.length
        console.log(this.nbrecas)
        console.log(this.nbrenat)
       }else if(this.teststruct == "Commissariats"){

        this.nbreres=this.listres.length
        console.log(this.nbreres)


       }



      // else
      //   if (this.teststruct == "Tribunaux") {
      //     console.log("trib")
      //   } else
      //     if (this.teststruct == "Commissariats") {
      //       console.log("comm")


      })
     
  
    }
    )

    this.OnClick(1)


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

      console.log(this.listacten)
    })
  }
  //RECUPERATION DES DONNÉES   D'UNE DEMANDE PAR DANS LE POPUP

  OnClick(id: any) {
    this.structservice.getactenbyid(id).subscribe(dataa => {
      this.detailacte = dataa
      this.newdet = JSON.stringify(" Nom : " + "  " + this.detailacte.nom +
        "Prenom :" + this.detailacte.prenom)
      // console.log("/////////////"+ JSON.stringify(this.detailacte))
    })
  }
  //FILTRER LE SDEMANDES
  filtrer() {
    console.log(this.textFiltre);

    if (this.textFiltre == "Acte de naissance") {
      this.structservice.getactenbyidstruct(this.newid).subscribe(data => {
        this.listacten = data
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
      this.structservice.getnatbyidstruct(this.newid).subscribe(data => {
        this.listacten = data;
      })
    }
    else if (this.textFiltre == "Certificat de nationnalité") {
      this.structservice.getresbyidstruct(this.newid).subscribe(data => {
        this.listacten = data
      })
    }
    else {
      this.Alldemande();
    }

  }

  Alldemande() {
    this.structservice.getactenbyidstruct(this.newid).subscribe(data => {
      this.listacten = data;
      this.longueur = data.listacten.length;

    })
  }
  compteur() {

  }

}
