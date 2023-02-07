import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccueilagentPageRoutingModule } from './accueilagent-routing.module';

import { AccueilagentPage } from './accueilagent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccueilagentPageRoutingModule
  ],
  declarations: [AccueilagentPage]
})
export class AccueilagentPageModule {}
