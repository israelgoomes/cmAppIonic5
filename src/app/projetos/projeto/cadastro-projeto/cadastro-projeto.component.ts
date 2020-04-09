import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente-service/cliente.service';
import { ClienteModel } from 'src/app/models/cliente-model';
import { configHelper } from 'src/app/configHelper';
import { ProjetoService } from '../../../services/projeto-service/projeto.service';
import { SpinnerService } from '../../../services/spinner-service/spinner.service';
import { ModalController } from '@ionic/angular';
import { RefreshPageService } from '../../../services/refresh-page.service';

@Component({
  selector: 'app-cadastro-projeto',
  templateUrl: './cadastro-projeto.component.html',
  styleUrls: ['./cadastro-projeto.component.scss'],
})
export class CadastroProjetoComponent implements OnInit {

  projectForm: FormGroup;
  constructor(private clienteSrvc: ClienteService,
              private fb: FormBuilder,
              private projetoSrvc: ProjetoService,
              private spinnerSrvc: SpinnerService,
              private modalCtrl: ModalController,
              private refreshSrvc: RefreshPageService) { }
  @Output() add = new EventEmitter();
  listaClientes: ClienteModel[] = [];
  ngOnInit() {
    const userData = JSON.parse(localStorage.getItem(configHelper.storageKeys.user));
    this.projectForm = this.fb.group({
      descricaoProjeto: ['', Validators.required],
      tituloProjeto: ['', Validators.required],
      preco: ['', Validators.required],
      cliente: ['', Validators.required],
      usuario: userData._id,
      status: true
    });

    this.clienteSrvc.getClientsByIdUser(userData._id).subscribe(clientes => {
        this.listaClientes = clientes;
    });
  }

  event() {
    this.add.emit(this.projectForm.value);
  }

  salvar() {
    console.log('Objeto a ser salvo', this.projectForm.value);
    this.projetoSrvc.includesProject(this.projectForm.value).subscribe(data => {
        console.log('Resposta', data);
        this.modalCtrl.dismiss();
        this.refreshSrvc.refreshProject.emit();
        this.spinnerSrvc.hide();
    });
  }

}
