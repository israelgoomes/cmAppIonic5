import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroPojetoPage } from './cadastro-pojeto.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroPojetoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroPojetoPageRoutingModule {}
