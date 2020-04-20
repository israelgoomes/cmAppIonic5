import { ProjetoModel } from '../../models/servicos-model';
import { Component, OnInit, Input } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.scss'],
})
export class ServicoComponent implements OnInit {

  constructor(private route: Router) { }

  @Input() projeto: ProjetoModel;
  ngOnInit() {

   
    console.log('Projeto', this.projeto)
  }

  detalheProjeto(){
    const navigationExtras: NavigationExtras ={
      state: {
        valorParaEnviar: this.projeto
      }
    };
    console.log('projeto', this.projeto)
    this.route.navigate(['/detalhe-projeto'], navigationExtras);
  }

}
