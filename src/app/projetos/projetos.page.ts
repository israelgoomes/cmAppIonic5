import { Component, OnInit } from '@angular/core';
import { ProjetoModel } from '../models/servicos-model';
import { ProjetoService } from '../services/projeto-service/projeto.service';
import { SpinnerService } from '../services/spinner-service/spinner.service';
import { ModalController } from '@ionic/angular';
import { RefreshPageService } from '../services/refresh-page.service';
import { configHelper } from '../configHelper';
import { ModalCadastroProjetoPage } from './modal-cadastro-projeto/modal-cadastro-projeto.page';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.page.html',
  styleUrls: ['./projetos.page.scss'],
})
export class ProjetosPage implements OnInit {

  listaServicos: ProjetoModel[] = [];
  constructor(private servicoSrvc: ProjetoService,
              public spinnerSrvc: SpinnerService,
              private modalCtrl: ModalController,
              private refreshSrvc: RefreshPageService) { }


  ngOnInit() {
    const userData = JSON.parse(
      localStorage.getItem(configHelper.storageKeys.user)
    );
    this.servicoSrvc.getServicesByUser(userData._id).subscribe(servicos => {
      this.listaServicos = servicos;
      console.log('Projetos', this.listaServicos);
      this.spinnerSrvc.hide();
    });
  }


  ionViewWillEnter() {
    this.refreshSrvc.refreshProject.subscribe(() => {
      this.ngOnInit();
    });
  }

async cadastroProjeto() {
  console.log(`TESTE`);
  const modal = await this.modalCtrl.create({component: ModalCadastroProjetoPage});
  return await modal.present();
}
}
