import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ProjetoModel } from "src/app/models/servicos-model";
import { ActivatedRoute, Router } from "@angular/router";
import { MachineTextService } from "../../../services/machine-servico/machine-text.service";
import { UtilsService } from '../../../services/utils/utils.service';
import { configHelper } from 'src/app/configHelper';

@Component({
  selector: "app-detalhe-projeto",
  templateUrl: "./detalhe-projeto.page.html",
  styleUrls: ["./detalhe-projeto.page.scss"],
})
export class DetalheProjetoPage implements OnInit {
  colors = []
  changeColorOptions = [];
  color = 0;
  class= "origin"
  colorOption = 0;
  iniciais: string;
  project: ProjetoModel;
  leftStyle = {
    'border': 'none',
    'width': '28%',
    'float': 'left',
    'height': '100px',
    'background-image': `linear-gradient(to bottom, white, ${this.class})`,
  };

  rightStyle = {
     'border': 'none',
     'background-image': `linear-gradient(to bottom, white, ${this.class})`,
     'width': '72%',
     'height': '100px',
     'float': 'left',

    }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private util: UtilsService
  ) {
    this.class = localStorage.getItem(configHelper.storageKeys.color) != null ?
                 localStorage.getItem(configHelper.storageKeys.color) : 'primary' ;
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
        this.project = getNav.extras.state.valorParaEnviar;
        console.log("Dados", this.project);
        let concatText = "";
        concatText += `${this.project.tituloProjeto} * ${this.project.cliente.nome} * ${this.project.cliente.email}`;
        let utilsSrvc = new UtilsService();
        const componente = document.querySelector(".titulo-principal");
        utilsSrvc.textTomachineWrite(concatText, componente);
        this.iniciais = utilsSrvc.iniciais(this.project.cliente.nome);
      }
    });
  }
  changeColor() {
    this.colorOption = (this.colorOption + 1) % this.changeColorOptions.length;
  }
}
