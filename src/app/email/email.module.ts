import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmailPageRoutingModule } from './email-routing.module';

import { EmailPage } from './email.page';
import { SharedModule } from '../shared/shared.module';
import { EmailFormComponent } from './email-form/email-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    EmailPageRoutingModule
  ],
  declarations: [EmailPage, EmailFormComponent]
})
export class EmailPageModule {}
