import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StructService } from '../Services/struct.service';
import { latLng, Marker, marker, tileLayer } from 'leaflet';

import * as L from 'leaflet';

import { Geolocation } from "@ionic-native/geolocation/ngx";
import { StorageService } from '../Services/storage.service';
@Component({
  selector: 'app-structurebytype',
  templateUrl: './structurebytype.page.html',
  styleUrls: ['./structurebytype.page.scss'],
  providers: [
    Geolocation
  ]
})
export class StructurebytypePage implements OnInit {
id:any
type:any
allstruct:any
length:any
longitude:any
latitude:any



nom:any
  lat!: number;
  long!: number;
  idd:any
  mastruct: any;
  type1: any;
  roles: any;
  showAdmin: any;
  showuser: any;
  showagent: any;
  mystruct: any;
  iddem: any;

  constructor(private route:ActivatedRoute,private router:Router,
    private geolocation:Geolocation,
    private storageService:StorageService,
    private structservice:StructService) { }
  //map!: L.Map;

  ///autres methodes
  rapports:any=[]
  

  ngOnInit() {
////LES DETAILS DE L'UTILISATEURS
const user=this.storageService.getUser();
this.id=user.id
console.log(this.id)
this.roles = user.roles;
console.log(this.roles)
this.showAdmin = this.roles.includes('ADMIN');
this.showuser = this.roles.includes('USER');
this.showagent = this.roles.includes('Agent');
    

    var idstruct = this.route.snapshot.params['id']
    this.id = idstruct

    var iddem = this.route.snapshot.params['iddem']
    this.iddem = iddem
    console.log("id de la demande : " + iddem)

    const typestruct = this.route.snapshot.params['type']
    this.type = typestruct
  
    console.log("id de la structure : " + idstruct)
    
   
this.structservice.gettypestructbyid(idstruct).subscribe(data =>{
  this.mastruct=data
  console.log("/////////////////////////////"+JSON.stringify(this.mastruct))
  this.type1=data.type;
  console.log("je code mon code dans vs code" + this.mastruct.type);
  console.log("/////////////////" +JSON.stringify(data));
}),
    this.structservice.getstructbytype(idstruct).subscribe(data =>{
      this.allstruct=data;
      this.length=this.allstruct.length

      //this.long=data.longitude
      console.log(this.allstruct);



      /*for(let i=0;i<=this.length;i++){
        for(let i=0;i<=this.length;i++){
          this.long=this.allstruct[i].longitude
        console.log("Les longitudes"+this.long)

        this.lat=this.allstruct[i].latitude
        console.log("Les Latitudes " +this.lat)
        }
        
      }*/
      
    })

    //this.ionViewDidEnter()
    // Listdembystruct(){

  //   this.structservice.getdemandebytypestruct().subscribe(
  //     (data)=>{
  //         this.struct=data
  //         console.log(this.struct)
  //     }
  //   );
  // }


  }
  ionViewDidEnter(){

    //if(div){
       //autres methodes
      const icon = L.icon({
        iconUrl: 'assets/images/marker.png',
        popupAnchor: [13, 0],
      });
      this.loadMap(icon);

      


    //}
    /*for(let i=0;i<=this.length;i++){
     
      console.log(" long " +this.length+this.allstruct[i].longitude)
        this.long=this.allstruct[i].longitude
        this.lat=this.allstruct[i].latitude
       // this.idd=this.allstruct[i].id
      console.log(" longitude"+this.long)

      console.log(" Latitude " +this.lat)
      
     this.map=L.map('mapId').setView([this.long,this.lat],6);
     const lmarker=L.marker([this.lat,this.long])
    console.log("zerty"+ this.map)
    //permet d'afficher la vue en plusieur forme de map
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }  
      ).addTo(this.map);
  
        //creer un marqueur
        const markPoint=L.marker([this.long,this.lat],
          )
        
        this.map.addLayer(markPoint); 
      
      
    }*/
    

  }
 
  // ionViewDidEnter(){

    
  //   //Afficher la crate dans l'element avec l'id mapId 
  //   this.map=L.map('mapId').setView([12.72686,-8.05997],6);
    
  //   //permet d'afficher la vue en plusieur forme de map
  //   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //   }  
  //   ).addTo(this.map);
  
  //       //creer un marqueur
  //       const markPoint=L.marker([12.72686,-8.05997],
  //         )
        
  //       this.map.addLayer(markPoint); 
  // }




  AddStruct(){
    var structt2=[{
      'nom':this.nom,
      'latitude':this.latitude,
      'longitude':this.longitude,
      
    }]
    const data=new FormData()
    data.append('structt2',JSON.stringify(structt2).slice(1,JSON.stringify(structt2).lastIndexOf(']')))
  this.structservice.addstruct(this.id,structt2).subscribe(
    data=>{
        this.mystruct=data
        console.log(this.mystruct)
       
       // this.router.navigate(['/dash/strucutures'])

    }
  )
}


  ///autres methodes
  loadMap(icon:any): void {

    for(let i=0;i<this.allstruct.length;i++){

      var map;

      map = L.map('map'+i).setView([12.72686,-8.05997],6);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery ?? <a href="https://www.mapbox.com/">Mapbox</a>',
        //maxZoom: 18,
        //id: 'mapbox/streets-v11',
        //tileSize: 512,
        //zoomOffset: -1,
      }).addTo(map);

      //autres methodes
      //for(const el of this.allstruct) {
        //console.log(el.longitude);
      const marker = L.marker([this.allstruct[i].longitude, this.allstruct[i].latitude], {icon} ).bindPopup(this.allstruct[i].nom);
      marker.addTo(map);
      //};
    }

    
  } 

}
