import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopupaddstructPageRoutingModule } from './popupaddstruct-routing.module';

import { PopupaddstructPage } from './popupaddstruct.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopupaddstructPageRoutingModule
  ],
  declarations: [PopupaddstructPage]
})
export class PopupaddstructPageModule {}
