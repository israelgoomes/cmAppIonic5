import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalheProjetoPageRoutingModule } from './detalhe-projeto-routing.module';

import { DetalheProjetoPage } from './detalhe-projeto.page';
import { SharedModule } from '../../../shared/shared.module';
import { EditaProjetoComponent } from '../edita-projeto/edita-projeto.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SharedModule,
    DetalheProjetoPageRoutingModule
  ],
  declarations: [DetalheProjetoPage, EditaProjetoComponent]
})
export class DetalheProjetoPageModule {}
