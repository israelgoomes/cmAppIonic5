import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-cadastro-cliente',
  templateUrl: './modal-cadastro-cliente.page.html',
  styleUrls: ['./modal-cadastro-cliente.page.scss'],
})
export class ModalCadastroClientePage implements OnInit {

  constructor(private navCtrl: NavController, private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  voltar(){
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
