import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario-service/usuario.service';
import { configHelper } from '../configHelper';
import { SpinnerService } from '../services/spinner-service/spinner.service';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.page.html',
  styleUrls: ['./configuracao.page.scss']
})
export class ConfiguracaoPage implements OnInit {
  usuario: any;
  constructor(private userSrvc: UsuarioService,
              private spinnerSrvc: SpinnerService,
              private menuCtrl: MenuController,
              private router: Router) {}

  ngOnInit() {
    console.log('COnfigurações')
    this.menuCtrl.isOpen('false')
    const idUser = JSON.parse(
      localStorage.getItem(configHelper.storageKeys.user)
    );
    this.userSrvc.getByIdUser(idUser._id).subscribe(data => {
      this.usuario = data;      
      this.spinnerSrvc.hide();
    });
  }


}
