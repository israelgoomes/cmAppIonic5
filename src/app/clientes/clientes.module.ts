import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import {MatExpansionModule} from '@angular/material/expansion';

import { ClientesPageRoutingModule } from './clientes-routing.module';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ClientesPage } from './clientes.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClienteComponent } from './cliente/cliente.component';
import { HeaderComponent } from '../header/header.component';
import { ModalCadastroClientePage } from './modal-cadastro-cliente/modal-cadastro-cliente.page';
import { ModalCadastroClientePageModule } from './modal-cadastro-cliente/modal-cadastro-cliente.module';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule, NgxUiLoaderConfig, SPINNER, POSITION, PB_DIRECTION  } from 'ngx-ui-loader';

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
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatInputModule,
    MatExpansionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    IonicModule,
    ClientesPageRoutingModule,
    ExploreContainerComponentModule,
    ModalCadastroClientePageModule,
    NgxUiLoaderModule.forRoot(configSpinner),

  ],
  declarations: [ClientesPage, ClienteComponent, HeaderComponent]
})
export class ClientesPageModule {}
