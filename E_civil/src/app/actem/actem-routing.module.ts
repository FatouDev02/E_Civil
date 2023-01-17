import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActemPage } from './actem.page';

const routes: Routes = [
  {
    path: '',
    component: ActemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActemPageRoutingModule {}
