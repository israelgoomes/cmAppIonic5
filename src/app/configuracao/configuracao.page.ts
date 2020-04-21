import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario-service/usuario.service';
import { configHelper } from '../configHelper';
import { SpinnerService } from '../services/spinner-service/spinner.service';
import { MenuController, ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { CameraService } from '../services/camera-service/camera.service';
import { UsuarioModel } from '../models/usuario-model';
import { config } from 'rxjs';
import { RefreshPageService } from '../services/refresh-page.service';

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.page.html',
  styleUrls: ['./configuracao.page.scss']
})
export class ConfiguracaoPage implements OnInit {
  class = "origin";
  usuario: UsuarioModel;
  constructor(private userSrvc: UsuarioService,
              private spinnerSrvc: SpinnerService,
              private menuCtrl: MenuController,
              private router: Router,
              private actionSheetCtrl: ActionSheetController,
              private cameraSrvc: CameraService,
              private refreshSrvc: RefreshPageService) {
              this.class = localStorage.getItem(configHelper.storageKeys.color)
                          != null ? localStorage.getItem(configHelper.storageKeys.color) : 'origin';
              }

  ngOnInit() {
    console.log('COnfigurações')
    this.menuCtrl.isOpen('false')
    const idUser = JSON.parse(
      localStorage.getItem(configHelper.storageKeys.user)
    );
    this.userSrvc.getByIdUser(idUser._id).subscribe(data => {
      this.usuario = data;   
      console.log('User', this.usuario)   
      this.spinnerSrvc.hide();
    });
  }

async getPicture(){
  let actionSheet = this.actionSheetCtrl.create({
    header: "Alterar Foto",
    buttons: [
      {
       text: 'Tirar foro',
       handler: () =>{
          this.cameraSrvc.takePicture(photo =>{
              //ação salvar
              console.log(this.usuario)
              this.usuario.foto = photo;
              this.userSrvc.upadateUser(this.usuario._id, this.usuario).subscribe(()=>{
                  console.log('Foto alterada com sucesso', this.usuario.foto)
                  this.spinnerSrvc.hide();
              });
          })
       }, icon: "camera" 
      },
      //pegar da galeria
      {
        text: "Pegar galeria",
        handler: () =>{
          this.cameraSrvc.getPictureFromGalery(photo =>{
            //ação salvar
            this.usuario.foto = photo;
            this.userSrvc.upadateUser(this.usuario._id, this.usuario).subscribe(()=>{
              console.log('Foto alterada com sucesso');
              this.spinnerSrvc.hide();
            });
          })
        },
        icon: "images"
      },

      {
        text: "cancelar",
        role: "destructive",
        icon: "close",
        handler: ()=>{
          //cancela a ação
        }
      }

    ]
  });
  (await actionSheet).present();
}

setTheme(param: string){
  this.class = param; 
  localStorage.setItem(configHelper.storageKeys.color, this.class);
  this.refreshSrvc.changeTheme.emit();

}

voltar(){
 this.router.navigate(['/tabs/tabs/clientes'])
}

delete(){

}

logout(){
  localStorage.removeItem(configHelper.storageKeys.token);
  this.router.navigate(['login']);
}

}
