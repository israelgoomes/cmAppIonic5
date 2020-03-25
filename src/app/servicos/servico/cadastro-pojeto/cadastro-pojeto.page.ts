import { FormBuilder, FormGroup } from '@angular/forms';
import { ClienteModel } from './../../../models/cliente-model';
import { configHelper } from 'src/app/configHelper';
import { ClienteService } from './../../../services/cliente-service/cliente.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-cadastro-pojeto',
  templateUrl: './cadastro-pojeto.page.html',
  styleUrls: ['./cadastro-pojeto.page.scss'],
})
export class CadastroPojetoPage implements OnInit {
  formGroup: FormGroup
  constructor(private clienteSrvc: ClienteService, private fb: FormBuilder) { }
  @Output() add = new EventEmitter();
  listaClientes: ClienteModel[] = []
  ngOnInit() {
    this.formGroup = this.fb.group({
      descricaoProjeto: [''],
      tituloProjeto: [''],
      option: ['']
    })
    let userData = JSON.parse(localStorage.getItem(configHelper.storageKeys.user));

    this.clienteSrvc.getClientsByIdUser(userData._id).subscribe(clientes =>{
        this.listaClientes = clientes;
    })
  }

  event(){
    this.add.emit(this.formGroup.value)
  }

}
