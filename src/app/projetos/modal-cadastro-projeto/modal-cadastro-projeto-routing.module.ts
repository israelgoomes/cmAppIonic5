import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalCadastroProjetoPage } from './modal-cadastro-projeto.page';

const routes: Routes = [
  {
    path: 'modal',
    component: ModalCadastroProjetoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalCadastroProjetoPageRoutingModule {}
