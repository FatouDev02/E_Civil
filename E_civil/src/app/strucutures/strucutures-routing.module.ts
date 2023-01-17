import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StrucuturesPage } from './strucutures.page';

const routes: Routes = [
  {
    path: '',
    component: StrucuturesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StrucuturesPageRoutingModule {}
