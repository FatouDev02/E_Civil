import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddstructurePageRoutingModule } from './addstructure-routing.module';

import { AddstructurePage } from './addstructure.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddstructurePageRoutingModule
  ],
  declarations: [AddstructurePage]
})
export class AddstructurePageModule {}
