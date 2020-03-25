import { CadastroPojetoPageModule } from './../servico/cadastro-pojeto/cadastro-pojeto.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCadastriProjetoPageRoutingModule } from './modal-cadastri-projeto-routing.module';

import { ModalCadastriProjetoPage } from './modal-cadastri-projeto.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { CadastroPojetoPage } from '../servico/cadastro-pojeto/cadastro-pojeto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    // CadastroPojetoPageModule,
    ModalCadastriProjetoPageRoutingModule
  ],
  declarations: [ModalCadastriProjetoPage, CadastroPojetoPage]
})
export class ModalCadastriProjetoPageModule {}
