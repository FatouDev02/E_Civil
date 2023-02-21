import { Component, OnInit } from '@angular/core';
import { DemandeService } from '../Services/demande.service';
import { StorageService } from '../Services/storage.service';
import { StructService } from '../Services/struct.service';

@Component({
  selector: 'app-declarations',
  templateUrl: './declarations.page.html',
  styleUrls: ['./declarations.page.scss'],
})
export class DeclarationsPage implements OnInit {
  textFiltre:any="Acte de naissance";
  alldem:any
  longueur:any
  id: any;
  shownonh:any
  detailacte: any;
  newdet: string;
  actembyid: any;
  actedbyid: any;
  casbyid: any;
  resbyid: any;
  natbyid: any;
  photo:any
  constructor(private demandeservice:DemandeService, private storageService:StorageService, private structservice:StructService
    ) { }

  ngOnInit() {
    const user=this.storageService.getUser();
    this.id=user.id
    console.log(this.id)
this.activitesavenir()

  }

  activitesavenir(){
    console.log(this.textFiltre);

    if(this.textFiltre=="Acte de naissance"){
      this.demandeservice.Getacten(this.id).subscribe(data=>{
        this.alldem=data;
        this.longueur=data.length
        console.log(this.alldem)
      })
    }
    else if(this.textFiltre=="Acte de mariage"){
      this.demandeservice.Getactem(this.id).subscribe(data=>{
        this.alldem=data;
        this.longueur=data.length
        for(var i=0;i<data.length;i++){
          this.shownonh=data[i].nomh
          console.log(this.shownonh)
        }
        
        console.log(this.alldem)
      })
    } else if(this.textFiltre=="Acte de décès"){
      this.demandeservice.Getacted(this.id).subscribe(data=>{
        this.alldem=data;

        this.longueur=data.length
        console.log(this.alldem)
      })
    } else if(this.textFiltre=="Casier judiciaire"){
      this.demandeservice.Getcasier(this.id).subscribe(data=>{
        this.alldem=data;
        this.longueur=data.length
        console.log(this.alldem)
      })
    } else if(this.textFiltre=="Certificat de residence"){
      this.demandeservice.Getresidence(this.id).subscribe(data=>{
        this.alldem=data;
        this.longueur=data.length
        console.log(this.alldem)
      })
    } else if(this.textFiltre=="Certificat de Nationnalité"){
      this.demandeservice.Getnation(this.id).subscribe(data=>{
        this.alldem=data;
        this.longueur=data.length
        console.log(this.alldem)
      })
    }
    else{
      this.Alldemande();
    }
    console.log(this.longueur)


    }

   
    Alldemande(){
      this.demandeservice.Getacten(this.id).subscribe(data=>{
        console.log(data.message)
        console.log("////////////////////////" +JSON.stringify(this.alldem))
          this.alldem=data;
          console.log(this.alldem)

        // if(data.message =="ok"){
        //   this.alldem=data;
        //   this.longueur=data.length
        //   console.log(this.alldem)
        // }else{
        //   this.alldem="Aucune Déclarations enregistrée"
        // }
  
      })
    }

 //RECUPERATION DES DONNÉES   D'UNE DEMANDE PAR DANS LE POPUP
  OnClick(id: any) {

    if (this.textFiltre =="Acte de naissance") {
      this.structservice.getactenbyid(id).subscribe(dataa => {
        this.detailacte = dataa
       // this.longueur=this.detailacte.length
        console.log(this.longueur)
        this.newdet = (" Nom : " + "  " + this.detailacte.nom + "    \n                " +
          "Prenom :" + this.detailacte.prenom + "                    " +
          " Nom du père : " + "  " + this.detailacte.nompere + "                    " +
          " Nom  de la mère: " + "  " + this.detailacte.nommere + "                    " +
          " Date de Naissance : " + "  " + this.detailacte.datedenaissance + "                    " +
          " Genre : " + "  " + this.detailacte.genre + "                    " +
          " Lieu de Naissance : " + "  " + this.detailacte.lieudenaissance + "                    " +
          " Numéro du Volet  : " + "  " + this.detailacte.numvolet + "                    " +
          " Profession du père  : " + "  " + this.detailacte.profmere + "                    " +
          " Profession de la mère : " + "  " + this.detailacte.profpere + "                    "
        )
       // console.log(this.detailacte)
      }
      )
    }
    else if (this.textFiltre =="Acte de mariage") {
      this.structservice.getactembyid(id).subscribe(data=>{
        this.actembyid=data
        //this.longueur=this.actembyid.length
console.log(this.longueur)
        this.newdet = (" Nom et Prenom de l'homme : " + "  " + this.actembyid.nomh + " \n" +
        "Nom et Prénom de la femme :" + this.actembyid.nomf + " " +
        "Profession de l'homme: " + "  " + this.actembyid.proh + "" +
        "Profession de la femme" + "  " + this.actembyid.prof + "" + 
        "Date  de Naissance de l'homme " + "  " + this.actembyid.datenh + "" +
        "Date  de Naissance de la femme " + "  " + this.actembyid.datenf + ""+ 
        "Témoin de l'homme:" + this.actembyid.temoinh + " " +
        "Témoin de la femme :" + this.actembyid.temoinf + " " 


      )
       console.log(this.actembyid)

      })

    }
    else if (this.textFiltre == "Acte de décès") {
      this.structservice.getactedbyid(id).subscribe(data=>{
        this.actedbyid=data
        //this.longueur=this.actedbyid.length

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
    else if (this.textFiltre=="Casier judiciaire") {
      this.structservice.getcasbyid(id).subscribe(data=>{
        this.casbyid=data
        this.photo= this.casbyid.photoacten
        this.newdet = (" Nom  " + "  " + this.casbyid.nom + " \n" +
        " Prénom " + this.casbyid.prenom + " " +
        " Lieu de Naissance " + this.casbyid.lieudenaissance + " " +
        "Photo de l'acte de Naissance" + "  " + this.casbyid.photoacten + ""
        

              )
              console.log(this.photo)

     console.log(this.casbyid)

      })
    }
     else if (this.textFiltre =="Certificat de résidence") {
      this.structservice.getresbyid(id).subscribe(data=>{
        this.resbyid=data
        this.newdet = (" Nom  " + "  " + this.resbyid.nom + " \n" +
        " Prénom " + this.resbyid.prenom + " " +
        " Lieu de Naissance " + this.casbyid.lieuderesidence + " " +

        "Photo de l'acte de Naissance" + "  " + this.resbyid.dated + "" 
              )
      console.log(this.resbyid)

      })
    } 
    else if (this.textFiltre =="Certificat de nationnalité") {
      this.structservice.getnatbyid(id).subscribe(data=>{
        this.natbyid=data
        this.newdet =  (" Nom  " + "  " + this.natbyid.nom + " \n" +
        " Prénom " + this.natbyid.prenom + " " +
        " Lieu de Naissance " + this.casbyid.lieudenaissance + " " +

        "Photo de l'acte de Naissance" + "  " + this.natbyid.dated 
              )
      console.log(this.natbyid)
      })
    }
  }
 

}
