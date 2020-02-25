import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteModel } from '../../../models/cliente-model';
import { ClienteService } from '../../../services/cliente-service/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edita-cliente',
  templateUrl: './edita-cliente.component.html',
  styleUrls: ['./edita-cliente.component.scss'],
})
export class EditaClienteComponent implements OnInit {

  clientForm: FormGroup
  editable: boolean = false;
  @Input() cliente: ClienteModel;

  constructor(private fb: FormBuilder, 
              private clienteSrvc: ClienteService,
              private router: Router
            ) { }

  ngOnInit() {

    
    this.clientForm = this.fb.group({
      _id: this.cliente._id,
      nome: [this.cliente.nome],
      telefone: this.cliente.tel,
      email: this.cliente.email,
      cep: this.cliente.cep,
      rua: this.cliente.endereco,
      bairro: this.cliente.bairro,
      cidade: this.cliente.cidade,
      estado: this.cliente.estado
    });
    this.clientForm.disable()
  }

  salvar(){
    this.clienteSrvc.alterClient(this.clientForm.value, this.clientForm.get('_id').value)
    .subscribe(data =>{
      this.router.navigate(['/tabs/tabs/clientes']);    })
    //console.log('Valor do formulário', this.clientForm.value);
  }

  edit(){
    this.clientForm.enable();
  }

  cancel(){
    this.clientForm.disable()
  }

}
