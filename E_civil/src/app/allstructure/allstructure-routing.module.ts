import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllstructurePage } from './allstructure.page';

const routes: Routes = [
  {
    path: '',
    component: AllstructurePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllstructurePageRoutingModule {}
