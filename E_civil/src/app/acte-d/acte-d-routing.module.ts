import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActeDPage } from './acte-d.page';

const routes: Routes = [
  {
    path: '',
    component: ActeDPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActeDPageRoutingModule {}
