import { HeaderComponent } from './../header/header.component';
import {NgModule} from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ServicoComponent } from '../servicos/servico/servico.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { CmSelectComponent } from '../components/cm-select/cm-select.component';


@NgModule({
    declarations: [HeaderComponent, ServicoComponent, CmSelectComponent],
    imports: [IonicModule.forRoot(),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatMenuModule,
        MatInputModule,
        MatExpansionModule,
        MatSelectModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatCardModule, ],
    exports: [HeaderComponent, 
        ServicoComponent,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatMenuModule,
        MatInputModule,
        MatExpansionModule,
        MatSelectModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatCardModule,]
})

export class SharedModule {}