import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueiladminPage } from './accueiladmin.page';

const routes: Routes = [
  {
    path: '',
    component: AccueiladminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccueiladminPageRoutingModule {}
