import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FingePrintAioPage } from './finge-print-aio.page';

const routes: Routes = [
  {
    path: '',
    component: FingePrintAioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FingePrintAioPageRoutingModule {}
