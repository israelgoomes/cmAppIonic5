import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DetalheClientePageRoutingModule } from './detalhe-cliente-routing.module';
import { DetalheClientePage } from './detalhe-cliente.page';
import { EditaClienteComponent } from '../edita-cliente/edita-cliente.component';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,  
    IonicModule,
    DetalheClientePageRoutingModule
  ],
  declarations: [DetalheClientePage, EditaClienteComponent]
})
export class DetalheClientePageModule {}
