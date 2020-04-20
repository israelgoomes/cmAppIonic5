import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteModel } from '../../../models/cliente-model';
import { NavController } from '@ionic/angular';
import { ProjetoModel } from 'src/app/models/servicos-model';
import { ProjetoService } from '../../../services/projeto-service/projeto.service';
import { UtilsService } from '../../../services/utils/utils.service';
import { configHelper } from 'src/app/configHelper';

@Component({
  selector: 'app-detalhe-cliente',
  templateUrl: './detalhe-cliente.page.html',
  styleUrls: ['./detalhe-cliente.page.scss'],
})
export class DetalheClientePage implements OnInit {
  cliente: ClienteModel;
  iniciais: string;
  colors = [];
  changeColorOptions = [];
  color = 0;
  colorOption = 0;
  projectList: Array<ProjetoModel> = [];
  class = 'origin'
  leftStyle = {
    'border': 'none',
    'width': '28%',
    'float': 'left',
    'height': '100px',
    'background-image': `linear-gradient(to bottom, white, ${this.class})`
  };

  rightStyle = {
     'border': 'none',
     'background-image': `linear-gradient(to bottom, white, ${this.class})`,
     'width': '72%',
     'height': '100px',
     'float': 'left'
  }

  fontColor = 'black'
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController,
    private projetoSrvc: ProjetoService,
    private util: UtilsService
  ) {
    this.class = localStorage.getItem(configHelper.storageKeys.color);

    if(this.class == 'black'){
      this.fontColor = 'white';
    }

    this.colors = util.populaColor();
    this.changeColorOptions = util.populaColorOption();
  }

  ngOnInit() {
    setInterval(() => {
      this.color = this.color + 1;
    }, 200);
    this.route.queryParams.subscribe((params) => {
      const getNav = this.router.getCurrentNavigation();
      if (getNav.extras.state) {
        this.cliente = getNav.extras.state.valorParaEnviar;
        console.log('Dados', this.cliente);
      }
      let concatText = '';
      concatText += `${this.cliente.nome} * ${this.cliente.email} * ${this.cliente.tel}`;
      const componente = document.querySelector('.titulo-principal');
      const utilsSrvc = new UtilsService();
      utilsSrvc.textTomachineWrite(concatText, componente);
      this.iniciais = utilsSrvc.iniciais(this.cliente.nome);
      console.log('iniciais', this.iniciais);
    });
  }

  changeColor() {
    this.colorOption = (this.colorOption + 1) % this.changeColorOptions.length;
  }

  voltar() {
    this.navCtrl.pop();
  }

  salvar(event) {
    console.log('Evento', event);
  }
}
