import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccueilagentPageRoutingModule } from './accueilagent-routing.module';

import { AccueilagentPage } from './accueilagent.page';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccueilagentPageRoutingModule,
  NgxPaginationModule
  ],
  declarations: [AccueilagentPage]
})
export class AccueilagentPageModule {}
