import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjetosPage } from './projetos.page';

const routes: Routes = [
  {
    path: '',
    component: ProjetosPage
  },
  {
    path: 'detalhe-projeto',
    loadChildren: () => import('./projeto/detalhe-projeto/detalhe-projeto.module').then( m => m.DetalheProjetoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjetosPageRoutingModule {}
