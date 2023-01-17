import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActeDPageRoutingModule } from './acte-d-routing.module';

import { ActeDPage } from './acte-d.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActeDPageRoutingModule
  ],
  declarations: [ActeDPage]
})
export class ActeDPageModule {}
