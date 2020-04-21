import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { configHelper } from 'src/app/configHelper';

@Component({
  selector: 'app-modal-cadastro-projeto',
  templateUrl: './modal-cadastro-projeto.page.html',
  styleUrls: ['./modal-cadastro-projeto.page.scss'],
})
export class ModalCadastroProjetoPage implements OnInit {
  class = "origin"
  constructor(private modalCtrl: ModalController) { 
      this.class = localStorage.getItem(configHelper.storageKeys.color) != null ?
                   localStorage.getItem(configHelper.storageKeys.color) : 'origin';
  }

  ngOnInit() {
  }

  voltar(){
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
