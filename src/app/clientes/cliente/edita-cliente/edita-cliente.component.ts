import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteModel } from '../../../models/cliente-model';
import { ClienteService } from '../../../services/cliente-service/cliente.service';
import { Router } from '@angular/router';
import { RefreshPageService } from '../../../services/refresh-page.service';
import { AlertController } from '@ionic/angular';
import { AlertService } from '../../../services/alert-service/alert.service';
import { ThrowStmt } from '@angular/compiler';
import { SpinnerService } from '../../../services/spinner-service/spinner.service';
import { ProjetoService } from '../../../services/projeto-service/projeto.service';
import { ProjetoModel } from '../../../models/servicos-model';

@Component({
  selector: 'app-edita-cliente',
  templateUrl: './edita-cliente.component.html',
  styleUrls: ['./edita-cliente.component.scss']
})
export class EditaClienteComponent implements OnInit {
  clientForm: FormGroup;
  editable = false;
  projectList: Array<ProjetoModel> = []
  @Input() cliente: ClienteModel;

  constructor(
    private fb: FormBuilder,
    private clienteSrvc: ClienteService,
    private router: Router,
    private refreshSrvc: RefreshPageService,
    private alertSrvc: AlertService,
    private spinnerSrvc: SpinnerService,
    private projetoSrvc: ProjetoService
  ) {}

  ngOnInit() {
    this.clientForm = this.fb.group({
      _id: this.cliente._id,
      nome: [this.cliente.nome],
      tel: this.cliente.tel,
      email: this.cliente.email,
      cep: this.cliente.cep,
      endereco: this.cliente.endereco,
      bairro: this.cliente.bairro,
      cidade: this.cliente.cidade,
      estado: this.cliente.estado
    });
    this.clientForm.disable();

    this.projetoSrvc.projectByClient(this.cliente._id).subscribe(projects =>{
      this.projectList = projects;
      console.log('projetos do cliente', this.projectList)
      this.spinnerSrvc.hide();
});

  }

  salvar() {
    this.clienteSrvc
      .alterClient(this.clientForm.value, this.clientForm.get('_id').value)
      .subscribe(data => {
        this.router.navigate(['/tabs/clientes']);
        this.refreshSrvc.refreshClient.emit();
        this.spinnerSrvc.hide();
      });
    // console.log('Valor do formulário', this.clientForm.value);
  }

  edit() {
    this.clientForm.enable();
    this.editable = true;
  }

  cancel() {
    this.clientForm.disable();
    this.editable = false;
  }

  async delete() {
    this.alertSrvc.confirm(
      `Deseja excluir o cliente ${this.clientForm.get('nome').value} ?`,
      () => {
        this.clienteSrvc
          .deleteClient(this.clientForm.get('_id').value)
          .subscribe(() => {
            this.alertSrvc.toast(
              `O cliente ${
                this.clientForm.get('nome').value
              } foi excluido com sucesso. `,
              2000,
              'top');
            this.router.navigate(['/tabs/clientes']);
            this.refreshSrvc.refreshClient.emit();
            this.spinnerSrvc.hide();
          });
      }
    );
  }
}
