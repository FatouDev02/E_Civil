import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActemPageRoutingModule } from './actem-routing.module';

import { ActemPage } from './actem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActemPageRoutingModule
  ],
  declarations: [ActemPage]
})
export class ActemPageModule {}
