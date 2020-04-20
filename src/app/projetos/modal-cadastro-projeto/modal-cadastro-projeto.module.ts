import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ModalCadastroProjetoPage } from './modal-cadastro-projeto.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    //ModalCadastroProjetoPage
  ],
  declarations: [],
  entryComponents: []
})
export class ModalCadastroProjetoPageModule {}
