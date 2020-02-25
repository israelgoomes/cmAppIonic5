import { ClientesPageModule } from './../clientes/clientes.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'clientes',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../clientes/clientes.module').then(m => m.ClientesPageModule)
          }
        ]
      },
      {
        path: 'servicos',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../servicos/servicos.module').then(m => m.ServicosPageModule)
          }
        ]
      },
      {
        path: 'email',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../email/email.module').then(m => m.EmailPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/clientes',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/clientes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
