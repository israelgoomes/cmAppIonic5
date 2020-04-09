import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-cadastro-projeto',
  templateUrl: './modal-cadastro-projeto.page.html',
  styleUrls: ['./modal-cadastro-projeto.page.scss'],
})
export class ModalCadastroProjetoPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  voltar(){
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
