import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroPojetoPageRoutingModule } from './cadastro-pojeto-routing.module';

import { CadastroPojetoPage } from './cadastro-pojeto.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroPojetoPageRoutingModule,
    SharedModule
  ],
  declarations: [CadastroPojetoPage]
})
export class CadastroPojetoPageModule {}
