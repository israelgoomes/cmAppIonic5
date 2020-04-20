import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjetosPageRoutingModule } from './projetos-routing.module';

import { ProjetosPage } from './projetos.page';
import { ModalCadastroProjetoPage } from './modal-cadastro-projeto/modal-cadastro-projeto.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
   // ModalCadastroProjetoPageModule,
    ProjetosPageRoutingModule
  ],
  entryComponents: [ModalCadastroProjetoPage],
  declarations: [ProjetosPage, ModalCadastroProjetoPage],
})
export class ProjetosPageModule {}
