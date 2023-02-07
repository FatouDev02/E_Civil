import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValideagentPageRoutingModule } from './valideagent-routing.module';

import { ValideagentPage } from './valideagent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValideagentPageRoutingModule
  ],
  declarations: [ValideagentPage]
})
export class ValideagentPageModule {}
