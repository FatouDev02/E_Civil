import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopupaddtypestructPageRoutingModule } from './popupaddtypestruct-routing.module';

import { PopupaddtypestructPage } from './popupaddtypestruct.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopupaddtypestructPageRoutingModule
  ],
  declarations: [PopupaddtypestructPage]
})
export class PopupaddtypestructPageModule {}
