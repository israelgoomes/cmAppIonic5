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

  usuarioLogado: any;

  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Configurações',
      url: '/servico',
      icon: 'mail'
    },
    {
      title: 'Serviços',

      icon: 'paper-plane'
    },
    {
      title: 'E-mail',
      url: '/folder/Favorites',
      icon: 'heart'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private userSrvc: UsuarioService,
    private route: Router,
    private spinnerSrvc: SpinnerService,
    private refreshSrvc: RefreshPageService,
    private menuCtrl: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.refreshSrvc.newUser.subscribe(()=>{
        this.ngOnInit();
    })
  }

  ngOnInit() {
   console.log('Teste componente *******************************');
   this.menuCtrl.enable(true);
   const path = window.location.pathname.split('folder/')[1];
   if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
   this.atualizaUser();
  }

  sair() {
    localStorage.removeItem(configHelper.storageKeys.user);
    localStorage.removeItem(configHelper.storageKeys.token);
    this.route.navigate(['login']);

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
