import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgenttestPageRoutingModule } from './agenttest-routing.module';

import { AgenttestPage } from './agenttest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgenttestPageRoutingModule
  ],
  declarations: [AgenttestPage]
})
export class AgenttestPageModule {}
