import { ModalController } from '@ionic/angular';
import { SpinnerService } from './../services/spinner-service/spinner.service';
import { ServicoService } from './../services/servico-service/servico.service';
import { Component, OnInit } from '@angular/core';
import { ServicoModel } from '../models/servicos-model';
import { configHelper } from '../configHelper';
import { CadastroPojetoPage } from './servico/cadastro-pojeto/cadastro-pojeto.page';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.page.html',
  styleUrls: ['./servicos.page.scss'],
})
export class ServicosPage implements OnInit {

  listaServicos: ServicoModel[] = [];
  constructor(private servicoSrvc: ServicoService, 
              public spinnerSrvc: SpinnerService,
              private modalCtrl: ModalController) { }


  ngOnInit() {
    const userData = JSON.parse(
      localStorage.getItem(configHelper.storageKeys.user)
    );
    this.servicoSrvc.getServicesByUser(userData._id).subscribe(servicos=>{
      this.listaServicos = servicos;
      console.log("Projetos", this.listaServicos)
      this.spinnerSrvc.hide();
    })
  }

async cadastroProjeto(){
  console.log(`TESTE`)
 const modal = await this.modalCtrl.create({component: CadastroPojetoPage});
 return await modal.present()
}

}
