import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuardService } from './services/auth-guard-service/auth-guard.service';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule), canActivate: [AuthGuardService]
  },
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'detalhe-cliente',
    loadChildren: () => import('./clientes/cliente/detalhe-cliente/detalhe-cliente.module').then( m => m.DetalheClientePageModule)
  },
  {
    path: 'modal-cadastro-cliente',
    loadChildren: () => import('./clientes/modal-cadastro-cliente/modal-cadastro-cliente.module')
    .then( m => m.ModalCadastroClientePageModule)
  },
  {
    path: 'configuracao',
    loadChildren: () => import('./configuracao/configuracao.module').then( m => m.ConfiguracaoPageModule)
  },
  {
    path: 'projetos',
    loadChildren: () => import('./projetos/projetos.module').then( m => m.ProjetosPageModule)
  },
  {
  path: 'detalhe-projeto',
  loadChildren: () => import('./projetos/projeto/detalhe-projeto/detalhe-projeto.module').then( m => m.DetalheProjetoPageModule)
  },
  {
    path: 'geolocation-test',
    loadChildren: () => import('./geolocation-test/geolocation-test.module').then( m => m.GeolocationTestPageModule)
  },
  {
    path: 'finge-print-aio',
    loadChildren: () => import('./finge-print-aio/finge-print-aio.module').then( m => m.FingePrintAioPageModule)
  },
  {
    //path: '',
    path: 'how-to-cm-app',
    loadChildren: () => import('./how-to-cm-app/how-to-cm-app.module').then( m => m.HowToCmAppPageModule), canActivate: [AuthGuardService]
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
