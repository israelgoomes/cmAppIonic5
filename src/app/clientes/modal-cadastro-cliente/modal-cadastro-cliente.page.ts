import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { configHelper } from 'src/app/configHelper';

@Component({
  selector: 'app-modal-cadastro-cliente',
  templateUrl: './modal-cadastro-cliente.page.html',
  styleUrls: ['./modal-cadastro-cliente.page.scss'],
})
export class ModalCadastroClientePage implements OnInit {
  class = "origin"
  constructor(private navCtrl: NavController, private modalCtrl: ModalController) {
    this.class = localStorage.getItem(configHelper.storageKeys.color);
   }

  ngOnInit() {
  }

  voltar(){
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
