import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FingePrintAioPageRoutingModule } from './finge-print-aio-routing.module';

import { FingePrintAioPage } from './finge-print-aio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FingePrintAioPageRoutingModule
  ],
  declarations: [FingePrintAioPage]
})
export class FingePrintAioPageModule {}
