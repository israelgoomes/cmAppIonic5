import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login-service/login.service';
import { Router } from '@angular/router';
import { configHelper } from '../configHelper';
import { NavController, MenuController, AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SpinnerService } from '../services/spinner-service/spinner.service';
import { RefreshPageService } from '../services/refresh-page.service';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth/ngx';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { AlertService } from '../services/alert-service/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
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
    private refreshSrvc: RefreshPageService,
    private androidFingerprintAuth: AndroidFingerprintAuth,
    private faio: FingerprintAIO,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    console.log('Teste 3333333333')
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required],
    });

    if (localStorage.getItem(configHelper.storageKeys.token)) {
      if(localStorage.getItem(configHelper.storageKeys.token)){
        let user = JSON.parse(localStorage.getItem(configHelper.storageKeys.user));
        console.log('Teste 3333333333')
        this.loginForm = this.fb.group({
          email: [user.email, Validators.required],
          senha: ['', Validators.required],
        });
      }
      this.faio.show({
        title: 'Acessar Conta',
        subtitle: 'Toque no sensor de digital'
      }).then((result) => {
        this.menuCtrl.enable(true);
        if(!localStorage.getItem(configHelper.storageKeys.concluded)){
          this.route.navigate(['/how-to-cm-app'])
        }else{
        this.route.navigate(['/tabs/tabs/clientes']);
        }
        console.log('Result message', result)
      }).catch((err) => {
        console.error('Erro na autenticação', err)

      })
      // console.log('TESTE ********')
      // this.androidFingerprintAuth
      //   .isAvailable()
      //   .then((result) => {
      //     console.log('Result', result)
      //     if (result.isAvailable) {
      //       console.log('TEste 2222')
      //       // it is available

      //       this.androidFingerprintAuth
      //         .encrypt({
      //           clientId: 'myAppName',
      //           username: 'myUsername',
      //           password: 'myPassword',
      //           dialogTitle: 'Acessar conta',
      //           dialogMessage: 'Toque no sensor de digital e confirme a biometria.',
      //           dialogHint: '',
      //           disableBackup: true,
      //           maxAttempts: 3
      //         })
      //         .then((result) => {
      //           if (result.withFingerprint) {
      //             this.menuCtrl.enable(true);
      //             this.route.navigate(['/tabs/tabs/clientes']);
      //             console.log('Successfully encrypted credentials.', result);
      //             console.log('Encrypted credentials: ' + result.token);
      //           } else if (result.withBackup) {
      //             console.log(
      //               'Successfully authenticated with backup password!'
      //             );
      //           } else { console.log("Didn't authenticate!"); }
      //         } ,err=>{
      //             console.log('Erro', err)
      //         })
      //         .catch((error) => {
      //           if (
      //             error ===
      //             this.androidFingerprintAuth.ERRORS.FINGERPRINT_CANCELLED
      //           ) {
      //             console.log('Fingerprint authentication cancelled');
      //           } else { console.error(error); }
      //         });
      //     } else {
      // fingerprint auth isn't available
      //   }
      // })
      // .catch((error) => console.error(error));
    }
  }

  login() {
    this.loginSrvc
      .authenticate(
        this.loginForm.get('email').value,
        this.loginForm.get('senha').value
      )
      .subscribe((data) => {
        console.log('token enviado', data.token);
        this.loginSrvc.registerLogin(data);

        if(!localStorage.getItem(configHelper.storageKeys.concluded)){
          this.route.navigate(['/how-to-cm-app'])
        }else{
        this.route.navigate(['/tabs/tabs/clientes']);
        }
        this.refreshSrvc.newUser.emit();
        this.loginForm.reset();
        this.spinnerSrvc.hide();
      },async  error =>{
        let alert = await this.alertCtrl.create({
          header: 'Erro na autenticação',
          message: error.error.message,
          buttons: ['OK']
        });
        alert.present();
        this.spinnerSrvc.hide();
      });
  }

  cadastroUser() {
    // this.navCtrl.setRoot('CadastroUserPage')
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
    let user = JSON.parse(localStorage.getItem(configHelper.storageKeys.user));
    this.loginForm = this.fb.group({
      email: [user.email, Validators.required],
      senha: ['', Validators.required],
    });
  }

  visiblePassword() {
    this.isVisiblePassword = !this.isVisiblePassword;
  }
}
