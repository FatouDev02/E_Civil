import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StrucuturesPageRoutingModule } from './strucutures-routing.module';

import { StrucuturesPage } from './strucutures.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StrucuturesPageRoutingModule
  ],
  declarations: [StrucuturesPage]
})
export class StrucuturesPageModule {}
