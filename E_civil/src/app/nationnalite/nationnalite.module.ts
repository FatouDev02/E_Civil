import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NationnalitePageRoutingModule } from './nationnalite-routing.module';

import { NationnalitePage } from './nationnalite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NationnalitePageRoutingModule
  ],
  declarations: [NationnalitePage]
})
export class NationnalitePageModule {}
