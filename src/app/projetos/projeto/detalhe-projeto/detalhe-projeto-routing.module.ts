import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalheProjetoPage } from './detalhe-projeto.page';

const routes: Routes = [
  {
    path: '',
    component: DetalheProjetoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalheProjetoPageRoutingModule {}
