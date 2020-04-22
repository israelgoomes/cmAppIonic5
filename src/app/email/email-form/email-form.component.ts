import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario-service/usuario.service';
import { config } from 'rxjs';
import { configHelper } from '../../configHelper';
import { ClienteService } from '../../services/cliente-service/cliente.service';
import { SpinnerService } from '../../services/spinner-service/spinner.service';
import { UtilsService } from 'src/app/services/utils/utils.service';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss'],
})
export class EmailFormComponent implements OnInit {
  emailForm: FormGroup;
  class = 'primary';
  color;
  @Output() emailData = new EventEmitter();
  constructor(private fb: FormBuilder,
              private clientSrvc: ClienteService,
              private spinnerSrvc: SpinnerService,
              private utilSrvc: UtilsService) { 
                this.class = localStorage.getItem(configHelper.storageKeys.color) != null ? 
                localStorage.getItem(configHelper.storageKeys.color) : 'origin'; 
               // this.class = this.utilSrvc.colorConvert(this.class);
                this.color = this.class

                console.log('COLOR', this.color)
                if(this.color == 'origin'){
                  this.class = 'primary';
                  this.color = '#527F76';
                }

   }

  ngOnInit() {

    this.emailForm = this.fb.group({
      assunto: [''],
      text: [''],
      emails: this.fb.array([
        this.fb.group({
          email: null
        })
      ])
    });
    this.loadEmails();

  }

   loadEmails() {
    const emails = this.emailForm.get('emails') as FormArray;
    const user = JSON.parse(localStorage.getItem(configHelper.storageKeys.user));
    this.clientSrvc.getClientsByIdUser(user._id).subscribe(client => {
      console.log('clientes', client)
      client.forEach(i => {
        emails.push(this.fb.group({
          email: i.email
        }));
      });
      this.emailForm.value.emails.forEach(i=>{
        if(i.email == null){
          const index =  this.emailForm.value.emails.indexOf(i);
          this.emailForm.value.emails.splice(index, 1)
        }
      })
      this.spinnerSrvc.hide();

    });

   
  }

event() {
  this.emailData.emit(this.emailForm.value);
  this.emailForm.reset();
}

}
