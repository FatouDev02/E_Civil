import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgatpwdPage } from './forgatpwd.page';

const routes: Routes = [
  {
    path: '',
    component: ForgatpwdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgatpwdPageRoutingModule {}
