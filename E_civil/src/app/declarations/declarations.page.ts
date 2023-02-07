import { Component, OnInit } from '@angular/core';
import { DemandeService } from '../Services/demande.service';

@Component({
  selector: 'app-declarations',
  templateUrl: './declarations.page.html',
  styleUrls: ['./declarations.page.scss'],
})
export class DeclarationsPage implements OnInit {
  textFiltre:any="Filtrer par Status";
  alldem:any
  longueur:any
  constructor(private demandeservice:DemandeService) { }

  ngOnInit() {
this.activitesavenir()

  }

  activitesavenir(){
    console.log(this.textFiltre);

    if(this.textFiltre=="Acte de naissance"){
      this.demandeservice.Getacten().subscribe(data=>{
        this.alldem=data;
        this.longueur=data.length
        console.log(this.alldem)
      })
    }
    else if(this.textFiltre=="Acte de mariage"){
      this.demandeservice.Getactem().subscribe(data=>{
        this.alldem=data;
        this.longueur=data.length
        console.log(this.alldem)
      })
    } else{
      this.Alldemande();
    }

    }

   
    Alldemande(){
      this.demandeservice.Getacten().subscribe(data=>{
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


 

}
