import { ServicoModel } from './../../models/servicos-model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.scss'],
})
export class ServicoComponent implements OnInit {

  constructor() { }

  @Input() projeto: ServicoModel;
  ngOnInit() {

   
    console.log('Projeto', this.projeto)
  }

}
