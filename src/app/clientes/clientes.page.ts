import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente-service/cliente.service';
import { configHelper } from '../configHelper';
import { ClienteModel } from '../models/cliente-model';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { FormGroup, FormControl } from '@angular/forms';
import { RefreshPageService } from '../services/refresh-page.service';
import { ModalController, LoadingController } from '@ionic/angular';
import { ModalCadastroClientePage } from './modal-cadastro-cliente/modal-cadastro-cliente.page';
import { SpinnerService } from '../services/spinner-service/spinner.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss']
})
export class ClientesPage implements OnInit {
  clientes: ClienteModel[] = [];

  constructor(
    private clienteSrvc: ClienteService,
    private ngxService: NgxUiLoaderService,
    private refreshSrvc: RefreshPageService,
    private modalCtrl: ModalController,
    private spinnerSrvc: SpinnerService,
    private loadingCtrl: LoadingController
  ) {
    this.ionViewWillEnter();
  }

  ngOnInit() {
    console.log('Page principal');

    const userData = JSON.parse(
      localStorage.getItem(configHelper.storageKeys.user)
    );

    this.clienteSrvc.getClientsByIdUser(userData._id).subscribe(clientes => {
      this.clientes = clientes;
      this.spinnerSrvc.hide();
    });
  }

  ionViewWillEnter() {
    this.refreshSrvc.refresh.subscribe(() => {
      this.ngOnInit();
    });
  }

  async addClient() {
    const modal = await this.modalCtrl.create({
      component: ModalCadastroClientePage
    });
    return await modal.present();
  }

}
