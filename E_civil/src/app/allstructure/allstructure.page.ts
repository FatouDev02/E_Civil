import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as L from 'leaflet';
import { Geolocation } from "@ionic-native/geolocation/ngx";
import {Icon} from 'leaflet'
import { StructService } from '../Services/struct.service';
@Component({
  selector: 'app-allstructure',
  templateUrl: './allstructure.page.html',
  styleUrls: ['./allstructure.page.scss'],
  providers: [
    Geolocation
  ]
})
export class AllstructurePage implements OnInit {
  map!: L.Map;
  messetruct: any;
  longueur: any;
  allstruct: any;
i: any;
 
  constructor(private geolocation:Geolocation,private structservice:StructService) {}

  ngOnInit(): void {
    this.structservice.getallstruct().subscribe(data=>{
      this.messetruct=data
    //  this.longueur=data.length
      console.log(this.messetruct)
     })
  }

ionViewDidEnter(){

  //if(div){
     //autres methodes
    const icon = L.icon({
      iconUrl: 'assets/images/marker.png',
      popupAnchor: [13, 0],
    });

    //var map;

    this.map = L.map('mapId').setView([12.72686,-8.05997],6);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      //maxZoom: 18,
      //id: 'mapbox/streets-v11',
      //tileSize: 512,
      //zoomOffset: -1,
    }).addTo(this.map);
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
loadMap(icon:any): void {

  for(let i=0;i<this.messetruct.length;i++){
    console.log(this.messetruct.length)

    

    //autres methodes
    //for(const el of this.allstruct) {
      //console.log(el.longitude);
      console.log(this.messetruct[i].longitude)
    const marker = L.marker([this.messetruct[i].longitude, this.messetruct[i].latitude], {icon} ).bindPopup(this.messetruct[i].nom);
    
    marker.addTo(this.map);
    //};
  }

  
} 

// getCurrentPosition() {
//   this.geolocation.getCurrentPosition().then((resp) => {
//     console.log(resp.coords.latitude, resp.coords.longitude);

//   }).catch((error) => {
//     console.log('Error getting location', error);
//   });
// }

// watchPosition(){
//   let watch = this.geolocation.watchPosition();
// watch.subscribe((data: any) => {
//  // data can be a set of coordinates, or an error (if an error occurred).
//  // data.coords.latitude
//  // data.coords.longitude
// });
// }


}
