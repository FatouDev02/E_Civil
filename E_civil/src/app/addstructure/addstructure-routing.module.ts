import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddstructurePage } from './addstructure.page';

const routes: Routes = [
  {
    path: '',
    component: AddstructurePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddstructurePageRoutingModule {}
