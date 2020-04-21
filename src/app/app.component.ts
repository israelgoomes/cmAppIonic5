import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UsuarioService } from './services/usuario-service/usuario.service';
import { configHelper } from './configHelper';
import { Router } from '@angular/router';
import { SpinnerService } from './services/spinner-service/spinner.service';
import { RefreshPageService } from './services/refresh-page.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
class = 'origin';
  usuarioLogado: any;

  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Configurações',
      url: '/configuracao',
      icon: 'mail'
    },
    {
    title: 'Localização',
    url: '/geolocation-test',
    icon: 'location'
    },
    {
      title: 'Sair',
      url: '',
      icon: 'power'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private userSrvc: UsuarioService,
    private router: Router,
    private spinnerSrvc: SpinnerService,
    private refreshSrvc: RefreshPageService,
    private menuCtrl: MenuController
  ) {
    if(!localStorage.getItem(configHelper.storageKeys.token)){
      this.router.navigate(['']);
  }
    this.initializeApp();
  }

  initializeApp() {
    this.class = localStorage.getItem(configHelper.storageKeys.color) != null ?
                 localStorage.getItem(configHelper.storageKeys.color) : 'origin';
    console.log('this.classs', this.class)
    this.platform.ready().then(() => {
      if (this.platform.is('android')) {
        console.log('Teste android')
        this.statusBar.backgroundColorByHexString("#33000000");
      }
      //this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.refreshSrvc.newUser.subscribe(()=>{
        this.ngOnInit();
    })
  }

  ngOnInit() {

    this.refreshSrvc.changeTheme.subscribe(v=>{
      console.log('Evento emitido')
      this.initializeApp();
    })

   console.log('Teste componente *******************************');
   this.menuCtrl.enable(true);
   const path = window.location.pathname.split('folder/')[1];
   if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
   this.atualizaUser();
  }

  sair() {
    localStorage.removeItem(configHelper.storageKeys.token);
    this.router.navigate(['login']);
  }

  atualizaUser() {
    const user = JSON.parse(localStorage.getItem(configHelper.storageKeys.user));
    this.userSrvc.getByIdUser(user._id).subscribe(data => {
      console.log('Dados do usuario logado', data);
      this.usuarioLogado = data;
      this.spinnerSrvc.hide();

    });

  }
}
