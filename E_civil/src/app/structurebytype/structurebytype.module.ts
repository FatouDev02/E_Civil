import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StructurebytypePageRoutingModule } from './structurebytype-routing.module';

import { StructurebytypePage } from './structurebytype.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StructurebytypePageRoutingModule
  ],
  declarations: [StructurebytypePage]
})
export class StructurebytypePageModule {}
