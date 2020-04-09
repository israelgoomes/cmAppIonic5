import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalCadastroClientePageRoutingModule } from './modal-cadastro-cliente-routing.module';
import { ModalCadastroClientePage } from './modal-cadastro-cliente.page';
import { CadastroClienteComponent } from '../cliente/cadastro-cliente/cadastro-cliente.component';

import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    ReactiveFormsModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCadastroClientePageRoutingModule
  ],
  declarations: [ModalCadastroClientePage, CadastroClienteComponent],
  entryComponents: [ModalCadastroClientePage]
})
export class ModalCadastroClientePageModule {}
