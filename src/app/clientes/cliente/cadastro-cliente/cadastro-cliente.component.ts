import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../../../services/cliente-service/cliente.service';
import { Router } from '@angular/router';
import { RefreshPageService } from '../../../services/refresh-page.service';
import { configHelper } from '../../../configHelper';
import { ModalController } from '@ionic/angular';
import { SpinnerService } from 'src/app/services/spinner-service/spinner.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.scss'],
})
export class CadastroClienteComponent implements OnInit {
  clientForm: FormGroup;

  constructor(private fb: FormBuilder,
              private clienteSrvc: ClienteService,
              private router: Router,
              private refreshSrvc: RefreshPageService,
              private modalCtrl: ModalController,
              private spinnerSrvc: SpinnerService
              ) { }

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem(configHelper.storageKeys.user))
    this.clientForm = this.fb.group({
      nome: ['', Validators.required],
      tel: ['', Validators.required],
      email: ['', Validators.required],
      cep: ['', Validators.required],
      endereco: ['', Validators.required],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      usuario: [user._id]
    });
  }

  salvar() {
    console.log(this.clientForm.value)
    this.clienteSrvc.includesClient(this.clientForm.value).subscribe(() => {
      this.modalCtrl.dismiss();
      this.refreshSrvc.refresh.emit();
      this.spinnerSrvc.hide();
    });
  }

}
