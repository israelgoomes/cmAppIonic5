import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HowToCmAppPageRoutingModule } from './how-to-cm-app-routing.module';

import { HowToCmAppPage } from './how-to-cm-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HowToCmAppPageRoutingModule
  ],
  declarations: [HowToCmAppPage]
})
export class HowToCmAppPageModule {}
