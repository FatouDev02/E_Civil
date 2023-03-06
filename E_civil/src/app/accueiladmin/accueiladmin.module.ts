import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccueiladminPageRoutingModule } from './accueiladmin-routing.module';

import { AccueiladminPage } from './accueiladmin.page';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxPaginationModule,
    AccueiladminPageRoutingModule
  ],
  declarations: [AccueiladminPage]
})
export class AccueiladminPageModule {}
