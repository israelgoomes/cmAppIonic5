import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ClienteModel } from '../../../models/cliente-model';
import { ClienteService } from '../../../services/cliente-service/cliente.service';
import { Router } from '@angular/router';
import { RefreshPageService } from '../../../services/refresh-page.service';

@Component({
  selector: 'app-edita-cliente',
  templateUrl: './edita-cliente.component.html',
  styleUrls: ['./edita-cliente.component.scss'],
})
export class EditaClienteComponent implements OnInit {

  clientForm: FormGroup

  @Input() cliente: ClienteModel;

  constructor(private fb: FormBuilder, 
              private clienteSrvc: ClienteService,
              private router: Router,
              private refreshSrvc: RefreshPageService
            ) { }

  ngOnInit() {


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
      this.router.navigate(['/tabs/clientes']);
      this.refreshSrvc.refresh.emit();
    })
    //console.log('Valor do formulário', this.clientForm.value);
  }

}
