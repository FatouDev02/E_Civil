import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopupaddstructPage } from './popupaddstruct.page';

const routes: Routes = [
  {
    path: '',
    component: PopupaddstructPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopupaddstructPageRoutingModule {}
