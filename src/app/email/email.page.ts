import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario-service/usuario.service';
import { EmailService } from '../services/email-service/email.service';
import { configHelper } from '../configHelper';
import { SpinnerService } from '../services/spinner-service/spinner.service';
import { AlertController } from '@ionic/angular';
import { UtilsService } from '../services/utils/utils.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.page.html',
  styleUrls: ['./email.page.scss'],
})
export class EmailPage implements OnInit {
  emailSended = false;
  emailData: any;
  emails: string = '';
  color = "primary"
  constructor(private userSrvc: UsuarioService,
              private emailSrvc: EmailService,
              private spinnerSrvc: SpinnerService,
              private alertCtrl: AlertController,
              private utilSrvc: UtilsService) { 
                this.color = localStorage.getItem(configHelper.storageKeys.color) != null ? 
                localStorage.getItem(configHelper.storageKeys.color) : 'primary'; 
                this.color = this.utilSrvc.colorConvert(this.color);
              }

  ngOnInit() {
  }

sendEmail(event){
  this.emailData = event;

  this.emailData.emails.forEach(i=>{
    this.emails += `${i.email}; `
  })

  console.log('Dados do email', event);
  this.emailSrvc.sendEmail(event).subscribe(async (v)=>{
    console.log('PRONTO', v)
    this.spinnerSrvc.hide();
    this.emailSended = true;
  },async err =>{
    
    const alert = await this.alertCtrl.create({
      header: 'Erro',
     // subHeader: 'Email enviado com sucesso',
      message: 'Erro ao enviar o email, tente novamente.',
      buttons: ['OK']
    });

    await alert.present();

  });
}

newEmail(){
  this.emailSended = !this.emailSended;
}

}
