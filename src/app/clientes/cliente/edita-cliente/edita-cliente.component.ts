import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ClienteModel } from '../../../models/cliente-model';
import { ClienteService } from '../../../services/cliente-service/cliente.service';

@Component({
  selector: 'app-edita-cliente',
  templateUrl: './edita-cliente.component.html',
  styleUrls: ['./edita-cliente.component.scss'],
})
export class EditaClienteComponent implements OnInit {

  clientForm: FormGroup

  @Input() cliente: ClienteModel;

  constructor(private fb: FormBuilder, private clienteSrvc: ClienteService) { }

  ngOnInit() {

    console.log('cliente no componente ', this.cliente)

    this.clientForm = this.fb.group({
      _id: this.cliente._id,
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

  salvar(){
    this.clienteSrvc.alterClient(this.clientForm.value, this.clientForm.get('_id').value)
    .subscribe(data =>{
      console.log('Dados Atualizado com sucesso')
    })
    //console.log('Valor do formulário', this.clientForm.value);
  }

}
