import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente-service/cliente.service';
import { configHelper } from '../configHelper';
import { ClienteModel } from '../models/cliente-model';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  clientes: ClienteModel[] = [];

  constructor(private clienteSrvc: ClienteService, private ngxService: NgxUiLoaderService) { }

  ngOnInit() {
    console.log('Page principal')

    let userData = JSON.parse(localStorage.getItem(configHelper.storageKeys.user));

    this.clienteSrvc.getClientsByIdUser(userData._id).subscribe(clientes => {
      this.clientes = clientes;
       this.ngxService.stop();
    })
  }

  ionViewDidEnter(){
    this.ngOnInit();
  }

}
