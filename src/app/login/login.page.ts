import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login-service/login.service';
import { Router } from '@angular/router';
import { configHelper } from '../configHelper';
import { NavController, MenuController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SpinnerService } from '../services/spinner-service/spinner.service';
import { RefreshPageService } from '../services/refresh-page.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  isVisiblePassword = false;
  constructor(
    public loginSrvc: LoginService,
    private route: Router,
    private navCtrl: NavController,
    private fb: FormBuilder,
    private menuCtrl: MenuController,
    private spinnerSrvc: SpinnerService,
    private refreshSrvc: RefreshPageService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  login() {
    this.loginSrvc
      .authenticate(
        this.loginForm.get('email').value,
        this.loginForm.get('senha').value
      )
      .subscribe(data => {
        console.log('token enviado', data.token);
        this.loginSrvc.registerLogin(data);
        this.route.navigate(['/tabs/clientes']);
        this.refreshSrvc.newUser.emit();
        this.spinnerSrvc.hide();
      });
  }

  cadastroUser() {
    // this.navCtrl.setRoot('CadastroUserPage')
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  visiblePassword() {
    this.isVisiblePassword = !this.isVisiblePassword;
  }
}
