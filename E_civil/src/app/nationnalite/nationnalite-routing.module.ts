import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NationnalitePage } from './nationnalite.page';

const routes: Routes = [
  {
    path: '',
    component: NationnalitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NationnalitePageRoutingModule {}
