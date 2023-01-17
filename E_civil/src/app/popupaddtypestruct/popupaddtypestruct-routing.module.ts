import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopupaddtypestructPage } from './popupaddtypestruct.page';

const routes: Routes = [
  {
    path: '',
    component: PopupaddtypestructPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopupaddtypestructPageRoutingModule {}
