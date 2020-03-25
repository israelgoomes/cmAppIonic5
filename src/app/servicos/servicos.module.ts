import { ModalCadastriProjetoPageModule } from './modal-cadastri-projeto/modal-cadastri-projeto.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ServicosPageRoutingModule } from './servicos-routing.module';
import { ServicosPage } from './servicos.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    ModalCadastriProjetoPageModule,
    ServicosPageRoutingModule
  ],
  declarations: [ServicosPage]
})
export class ServicosPageModule {}
