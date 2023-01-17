import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActenPage } from './acten.page';
import Swal from 'sweetalert2';
const routes: Routes = [
  {
    path: '',
    component: ActenPage
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActenPageRoutingModule {}
 