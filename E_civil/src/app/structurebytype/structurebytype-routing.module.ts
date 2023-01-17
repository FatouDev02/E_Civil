import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StructurebytypePage } from './structurebytype.page';

const routes: Routes = [
  {
    path: '',
    component: StructurebytypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StructurebytypePageRoutingModule {}
