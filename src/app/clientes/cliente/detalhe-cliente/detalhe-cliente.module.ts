import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DetalheClientePageRoutingModule } from './detalhe-cliente-routing.module';
import { DetalheClientePage } from './detalhe-cliente.page';
import { EditaClienteComponent } from '../edita-cliente/edita-cliente.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    DetalheClientePageRoutingModule
  ],
  declarations: [DetalheClientePage, EditaClienteComponent]
})
export class DetalheClientePageModule {}
