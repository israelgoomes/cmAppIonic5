import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ClienteModel } from '../../models/cliente-model';
import { NavController } from '@ionic/angular';
import { DetalheClientePage } from './detalhe-cliente/detalhe-cliente.page';
import {Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
})
export class ClienteComponent implements OnInit {

@Input() cliente: ClienteModel;
@Output() getChange = new EventEmitter<ClienteModel>();
  clientForm: FormGroup;
  constructor(private fb: FormBuilder,
              private navCtrl: NavController,
              private router: Router) {
    console.log('cliente no componente', this.cliente);
   }

change() {
  this.getChange.emit(this.clientForm.value);
}

detalheCliente() {
  const navigationExtras: NavigationExtras = {
    state: {
      valorParaEnviar: this.cliente
    }
  };
  this.router.navigate(['/detalhe-cliente'], navigationExtras);
}


  ngOnInit() {
    this.clientForm = this.fb.group({
      nome: this.cliente.nome,
      telefone: this.cliente.tel,
      email: this.cliente.email,
      cep: this.cliente.cep,
      rua: this.cliente.endereco,
      bairro: this.cliente.bairro,
      cidade: this.cliente.cidade,
      estado: this.cliente.estado
    });
  }

}
