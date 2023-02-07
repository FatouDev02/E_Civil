import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValideagentnextPageRoutingModule } from './valideagentnext-routing.module';

import { ValideagentnextPage } from './valideagentnext.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValideagentnextPageRoutingModule
  ],
  declarations: [ValideagentnextPage]
})
export class ValideagentnextPageModule {}
