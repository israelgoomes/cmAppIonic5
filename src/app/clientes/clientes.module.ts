import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { ClientesPageRoutingModule } from './clientes-routing.module';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ClientesPage } from './clientes.page';
import { ClienteComponent } from './cliente/cliente.component';
import { ModalCadastroClientePageModule } from './modal-cadastro-cliente/modal-cadastro-cliente.module';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule, NgxUiLoaderConfig, SPINNER, POSITION, PB_DIRECTION  } from 'ngx-ui-loader';
import { SharedModule } from '../shared/shared.module';
import { CmSelectComponent } from '../components/cm-select/cm-select.component';

const configSpinner: NgxUiLoaderConfig ={
  bgsColor: 'red',
  bgsPosition: POSITION.centerCenter,
  bgsSize: 40,
  bgsType: SPINNER.wanderingCubes, // background spinner type
  fgsType: SPINNER.threeStrings, // foreground spinner type
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 5, // progress bar thickness
  text: "Carregando dados...",
  fgsColor: '#527F76',
  logoUrl: "../assets/imgs/logo_app.png"
  
}


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ClientesPageRoutingModule,
    ExploreContainerComponentModule,
    ModalCadastroClientePageModule,
    SharedModule,
    NgxUiLoaderModule.forRoot(configSpinner),

  ],
  declarations: [ClientesPage, ClienteComponent]
})
export class ClientesPageModule {}
