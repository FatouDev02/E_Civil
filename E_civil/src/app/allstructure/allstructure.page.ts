import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as L from 'leaflet';
import { Geolocation } from "@ionic-native/geolocation/ngx";
import {Icon} from 'leaflet'
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
 
  constructor(private geolocation:Geolocation) {}

  ngOnInit(): void {
   
  }
ionViewDidEnter(){
  //Afficher la crate dans l'element avec l'id mapId 
  this.map=L.map('mapId').setView([12.72686,-8.05997],6);
	
  //permet d'afficher la vue en plusieur forme de map
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }   ).addTo(this.map);

      //creer un marqueur
      const markPoint=L.marker([12.72686,-8.05997],)
      
      this.map.addLayer(markPoint); 
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
