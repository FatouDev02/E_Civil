import { Component, OnInit } from '@angular/core';
import { StorageService } from '../Services/storage.service';
import { StructService } from '../Services/struct.service';
import * as L from 'leaflet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueilagent',
  templateUrl: './accueilagent.page.html',
  styleUrls: ['./accueilagent.page.scss'],
})
export class AccueilagentPage implements OnInit {
[x: string]: any;

  id:any
  username:any
  nom:any
  prenom:any
  structid: any;
  longitude: any;
  latitude: any;
  listacten: any;
  iddelastructure: any;
  newid:any;
  nonuser: any;
  nomutilisateur: any;
  mailutilisateur: any;
  prenonuser: any;
  nomacte: any;
  ddd:any
  detailacte: any;
  usernom: any;
  newdet:any
  textFiltre:any;
  longueur:any
  
  constructor( private storageService: StorageService,
    private structservice:StructService,
    private router:Router) { }
  
  ngOnInit() {
    const user=this.storageService.getUser();
    console.log(user);

    this.id=user.id
    console.log(this.id)
    this.username=user.username
    console.log(this.username)
    this.usernom=user.nom
    this.prenom=user.prenom
    this.structservice.getstructbyidagent(this.id).subscribe(data=>{
      this.structid=data
      this.nom=data.nom
      this.iddelastructure=data.id

      this.longitude=data.longitude
      this.latitude=data.latitude

      console.log("//////////////////"+JSON.stringify(this.structid))
      console.log(this.nom)
      console.log("//////////// iddddddd   "  +this.iddelastructure)
      this.newid=this.iddelastructure
      console.log(this.newid)


      this.actenbystruct(this.newid)
      this.structservice.getactenbyidstruct(this.newid).subscribe(data=>{
        this.listacten=data

        for(var i=0;i<=this.listacten.length;i++){
          
          this.nomutilisateur=data[i].user.nom
          this.mailutilisateur=data[i].user.email
          this.prenonuser=data[i].user.prenom

          console.log(this.nomutilisateur)
          console.log(this.mailutilisateur)
          console.log(this.prenonuser)

        }

        this.nonuser=data[0].user.nom
       
    })

    })
   this.OnClick(1)


  }
  ionViewDidEnter(){

    //if(div){
       //autres methodes
      const icon = L.icon({
        iconUrl: 'assets/images/marker.png',
        popupAnchor: [13, 0],
      });
      this.loadMap(icon);

  }

  ///autres methodes
  loadMap(icon:any): void {
    var map;

    map = L.map('map').setView([this.longitude,this.latitude],6);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      
    }).addTo(map);

    
    const marker = L.marker([this.longitude, this.latitude], {icon} ).bindPopup(this.nom);
    marker.addTo(map);
  

    
  } 
  actenbystruct(id:any){
    this.structservice.getactenbyidstruct(this.newid).subscribe(data=>{
      this.listacten=data
      
      console.log(this.listacten)
  })
  }

  OnClick(id:any){
      this.structservice.getactenbyid(id).subscribe(dataa=>{
     this.detailacte=dataa
     this.newdet=JSON.stringify(" Nom : " +"  "+ this.detailacte.nom +
                                "Prenom :" + this.detailacte.prenom) 
     console.log("/////////////"+ JSON.stringify(this.detailacte))
    })
  }
  //return this.router.navigate([''])
  filtrer(){
    console.log(this.textFiltre);

    if(this.textFiltre=="Acte de naissance"){
      this.structservice.getactenbyidstruct(this.newid).subscribe(data=>{
        this.listacten=data
        
        console.log(this.listacten)
      })
    }
    else if(this.textFiltre=="Acte de mariage"){
      this.structservice.getactembyidstruct(this.newid).subscribe(data=>{
        this.listacten=data;
        this.longueur=data.length
        console.log(this.listacten)
      })
    } 
    else if(this.textFiltre=="Acte de décès"){
      this.structservice.getactedbyidstruct(this.newid).subscribe(data=>{
        this.listacten=data;
        this.longueur=data.length
        console.log(this.listacten)
      })
    } 
    else{
      this.Alldemande();
    }

  }
  Alldemande(){
    this.structservice.getactenbyidstruct(this.newid).subscribe(data=>{
        this.listacten=data;
        this.longueur=data.listacten.length;

    })
  }
 
}
