import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgenttestPage } from './agenttest.page';

const routes: Routes = [
  {
    path: '',
    component: AgenttestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgenttestPageRoutingModule {}
