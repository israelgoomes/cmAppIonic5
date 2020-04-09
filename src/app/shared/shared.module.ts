import { HeaderComponent } from './../header/header.component';
import {NgModule} from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ServicoComponent } from '../projetos/projeto/projeto.component';
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
import { CadastroProjetoComponent } from '../projetos/projeto/cadastro-projeto/cadastro-projeto.component';


@NgModule({
    declarations: [HeaderComponent, ServicoComponent, CmSelectComponent, CadastroProjetoComponent],
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
        MatCardModule,
      //  CadastroPojetoPageModule
     ],
    exports: [HeaderComponent, 
        ServicoComponent,
        CmSelectComponent,
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
        MatCardModule,
        CadastroProjetoComponent
    //    CadastroPojetoPageModule
    ]
})

export class SharedModule {}