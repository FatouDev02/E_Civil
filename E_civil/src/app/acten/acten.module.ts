import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActenPageRoutingModule } from './acten-routing.module';
import {  ReactiveFormsModule } from '@angular/forms';

import { ActenPage } from './acten.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ActenPageRoutingModule
  ],
  declarations: [ActenPage]
})
export class ActenPageModule {}
