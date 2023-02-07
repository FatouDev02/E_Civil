import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValideagentnextPage } from './valideagentnext.page';

const routes: Routes = [
  {
    path: '',
    component: ValideagentnextPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValideagentnextPageRoutingModule {}
