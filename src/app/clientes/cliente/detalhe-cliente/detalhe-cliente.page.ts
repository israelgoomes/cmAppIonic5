import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteModel } from '../../../models/cliente-model';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detalhe-cliente',
  templateUrl: './detalhe-cliente.page.html',
  styleUrls: ['./detalhe-cliente.page.scss'],
})
export class DetalheClientePage implements OnInit {
  cliente: ClienteModel;
  iniciais: string;
  constructor(private route: ActivatedRoute, 
              private router: Router,
              private navCtrl: NavController) { }

  ngOnInit() {
    
    this.route.queryParams.subscribe(params => {
      const getNav = this.router.getCurrentNavigation();
      if (getNav.extras.state) {
        this.cliente = getNav.extras.state.valorParaEnviar;
        console.log('Dados', this.cliente)
      }
    });

    let split = this.cliente.nome.toString().split(' ')
    console.log('SPLIT', this.cliente.nome.toString().split(' '));
    if(split.length > 1){
    this.iniciais = split[0].split('')[0].toUpperCase() + split[1].split('')[0].toUpperCase();
    } else {
      this.iniciais = split[0].split('')[0]
    }

    
    console.log('Split por letra', this.iniciais)

    // let teste =this.route.snapshot.params['param']
    // console.log('Teste de passagem de parametro', teste)
  }

  voltar(){
    this.navCtrl.pop();
  }

  salvar(event){
    console.log('Evento', event)
  }

}
