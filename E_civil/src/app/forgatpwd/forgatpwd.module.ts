import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgatpwdPageRoutingModule } from './forgatpwd-routing.module';

import { ForgatpwdPage } from './forgatpwd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgatpwdPageRoutingModule
  ],
  declarations: [ForgatpwdPage]
})
export class ForgatpwdPageModule {}
