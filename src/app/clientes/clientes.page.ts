import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente-service/cliente.service';
import { configHelper } from '../configHelper';
import { ClienteModel } from '../models/cliente-model';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { RefreshPageService } from '../services/refresh-page.service';
import { ModalController, LoadingController, MenuController } from '@ionic/angular';
import { ModalCadastroClientePage } from './modal-cadastro-cliente/modal-cadastro-cliente.page';
import { SpinnerService } from '../services/spinner-service/spinner.service';
import { config } from 'rxjs';
import { UtilsService } from '../services/utils/utils.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss']
})
export class ClientesPage implements OnInit {
  clientes: ClienteModel[] = [];
  lista: any[] = [
    {id: 1, viewValue: 'Teste1'},
    {id: 2, viewValue: 'Teste2'},
    {id: 3, viewValue: 'Teste'}
  ];
  formGroup: FormGroup;
  color = "primary"
  constructor(
    private clienteSrvc: ClienteService,
    private refreshSrvc: RefreshPageService,
    private modalCtrl: ModalController,
    private spinnerSrvc: SpinnerService,
    private fb: FormBuilder,
    private utilSrvc: UtilsService,
    private router: Router
  ) {

    if(!localStorage.getItem(configHelper.storageKeys.token)){
        this.router.navigate(['']);
    }

    this.color = localStorage.getItem(configHelper.storageKeys.color) != null ? 
    localStorage.getItem(configHelper.storageKeys.color) : 'primary'; 
    this.color = this.utilSrvc.colorConvert(this.color);
    this.ionViewWillEnter();
  }

  teste(){
    console.log('Valor escolhido', this.formGroup.get('option').value)
  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      option: ['']
    })

    console.log('Page principal');

    const userData = JSON.parse(
      localStorage.getItem(configHelper.storageKeys.user)
    );
    this.clienteSrvc.getClientsByIdUser(userData._id).subscribe(clientes => {
      this.clientes = clientes;
      console.log('Teste de reload')
      this.spinnerSrvc.hide();
    });
  }

  ionViewWillEnter() {
    this.refreshSrvc.refreshClient.subscribe(() => {
      this.ngOnInit();
    });
  }

  logout() {
    localStorage.removeItem(configHelper.storageKeys.token);
    this.router.navigate(['']);
  }

  async addClient() {
    const modal = await this.modalCtrl.create({
      component: ModalCadastroClientePage
    });
    return await modal.present();
  }

}
