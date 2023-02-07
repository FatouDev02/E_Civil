import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValideagentPage } from './valideagent.page';

const routes: Routes = [
  {
    path: '',
    component: ValideagentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValideagentPageRoutingModule {}
