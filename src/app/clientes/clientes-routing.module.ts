import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesPage } from './clientes.page';
import { CmSelectComponent } from '../components/cm-select/cm-select.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ClientesPage
  }
];

@NgModule({
  declarations:[],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class ClientesPageRoutingModule {}
