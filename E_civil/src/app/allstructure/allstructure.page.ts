import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';
import { CapacitorGoogleMaps } from '@capacitor-community/capacitor-googlemaps-native';

@Component({
  selector: 'app-allstructure',
  templateUrl: './allstructure.page.html',
  styleUrls: ['./allstructure.page.scss'],
})
export class AllstructurePage implements OnInit {

 
  constructor() {
    // CapacitorGoogleMaps.initialize({
    //   key: environment.mapsKey
    // });
   }

  ngOnInit(): void {
  }

  @ViewChild('map')mapRef!: ElementRef;
  map!: GoogleMap;
ionViewDidEnter(){
  this.createMap();
}
async createMap(){
  this.map = await GoogleMap.create({
     /**
     * A unique identifier for the map instance.
     */
     id: 'my-map',
     /**
      * The Google Maps SDK API Key.
      */
     apiKey: environment.mapsKey,
     
     /**
      * The DOM element that the Google Map View will be mounted on which determines size and positioning.
      */
     element: this.mapRef.nativeElement,
     /**
      * Destroy and re-create the map instance if a map with the supplied id already exists
      * @default false
      */
   //  forceCreate: true,
     /**
      * The initial configuration settings for the map.
      */
     config: {
      center:{
        lat:33.6,
        lng:-117.9,
      },
      zoom:8,
      
     }

  })
}


}
