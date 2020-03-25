import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicosPage } from './servicos.page';

const routes: Routes = [
  {
    path: '',
    component: ServicosPage
  },
  {
    path: 'modal-cadastri-projeto',
    loadChildren: () => import('./modal-cadastri-projeto/modal-cadastri-projeto.module').then( m => m.ModalCadastriProjetoPageModule)
  },
  {
    path: 'cadastro-pojeto',
    loadChildren: () => import('./servico/cadastro-pojeto/cadastro-pojeto.module').then( m => m.CadastroPojetoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicosPageRoutingModule {}
