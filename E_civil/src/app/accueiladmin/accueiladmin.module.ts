import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccueiladminPageRoutingModule } from './accueiladmin-routing.module';

import { AccueiladminPage } from './accueiladmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccueiladminPageRoutingModule
  ],
  declarations: [AccueiladminPage]
})
export class AccueiladminPageModule {}
