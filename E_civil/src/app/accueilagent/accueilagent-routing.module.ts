import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilagentPage } from './accueilagent.page';

const routes: Routes = [
  {
    path: '',
    component: AccueilagentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccueilagentPageRoutingModule {}
