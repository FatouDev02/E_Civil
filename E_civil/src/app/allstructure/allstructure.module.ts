import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllstructurePageRoutingModule } from './allstructure-routing.module';

import { AllstructurePage } from './allstructure.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
        AllstructurePageRoutingModule
  ],
  declarations: [AllstructurePage]
})
export class AllstructurePageModule {}
