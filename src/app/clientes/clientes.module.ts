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
    ModalCadastroClientePageModule
  ],
  declarations: [ClientesPage, ClienteComponent, HeaderComponent]
})
export class ClientesPageModule {}
