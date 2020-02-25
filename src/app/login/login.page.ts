import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login-service/login.service';
import { Router } from '@angular/router';
import { configHelper } from '../configHelper';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: any = {}
  constructor(public loginSrvc: LoginService,
               private route: Router,
               private navCtrl: NavController
               ) { }

  ngOnInit() {
    console.log('usuario', localStorage.getItem(configHelper.storageKeys.user))
    if(localStorage.getItem(configHelper.storageKeys.user)){
      this.route.navigate(['/tabs/tabs/clientes'])

    }
  }

   login(){
    console.log('Formulário', this.form)
    this.loginSrvc.authenticate(this.form.email, this.form.senha).subscribe(data=>{
      console.log('token enviado', data.token)
      this.loginSrvc.registerLogin(data);
      this.route.navigate(['/tabs/tabs/clientes'])
    })
  }

  cadastroUser(){
    //this.navCtrl.setRoot('CadastroUserPage')
  }


}
