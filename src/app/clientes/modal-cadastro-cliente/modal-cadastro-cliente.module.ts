import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCadastroClientePageRoutingModule } from './modal-cadastro-cliente-routing.module';

import { ModalCadastroClientePage } from './modal-cadastro-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCadastroClientePageRoutingModule
  ],
  declarations: [ModalCadastroClientePage]
})
export class ModalCadastroClientePageModule {}
