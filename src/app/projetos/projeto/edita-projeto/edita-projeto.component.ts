import { Component, OnInit, Input } from "@angular/core";
import { ProjetoModel } from "../../../models/servicos-model";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { ClienteModel } from "../../../models/cliente-model";
import { ClienteService } from "../../../services/cliente-service/cliente.service";
import { configHelper } from "../../../configHelper";
import { AlertService } from "../../../services/alert-service/alert.service";
import { Router } from "@angular/router";
import { RefreshPageService } from "../../../services/refresh-page.service";
import { SpinnerService } from "../../../services/spinner-service/spinner.service";
import { ProjetoService } from "../../../services/projeto-service/projeto.service";

@Component({
  selector: "app-edita-projeto",
  templateUrl: "./edita-projeto.component.html",
  styleUrls: ["./edita-projeto.component.scss"]
})
export class EditaProjetoComponent implements OnInit {
  listaClientes: ClienteModel[];
  projectForm: FormGroup;
  hasClient = false;
  editable: boolean;
  @Input() projeto: ProjetoModel;
  constructor(
    private fb: FormBuilder,
    private clienteSrvc: ClienteService,
    private alertSrvc: AlertService,
    private router: Router,
    private refreshSrvc: RefreshPageService,
    private spinnerSrvc: SpinnerService,
    private projetoSrvc: ProjetoService
  ) {}

  ngOnInit() {
    this.projectForm = this.fb.group({
      _id: this.projeto._id,
      tituloProjeto: [this.projeto.tituloProjeto, Validators.required],
      descricaoProjeto: [this.projeto.descricaoProjeto, Validators.required],
      preco: [this.projeto.preco, Validators.required],
      cliente: [this.projeto.cliente._id, Validators.required],
      nmCliente: new FormControl({
        value: this.projeto.cliente.nome,
        disabled: true
      }),
      emailCliente: new FormControl({
        value: this.projeto.cliente.email,
        disabled: true
      }),
      telCliente: [this.projeto.cliente.tel, Validators.required]
    });
    const userData = JSON.parse(
      localStorage.getItem(configHelper.storageKeys.user)
    );
    this.clienteSrvc.getClientsByIdUser(userData._id).subscribe(clientes => {
      this.listaClientes = clientes;
      this.spinnerSrvc.hide();
    });
    this.projectForm.disable();
    }

  alterarCliente() {
    this.hasClient = !this.hasClient;
    if (this.hasClient == false) {
      this.projectForm = this.fb.group({
        _id: this.projeto._id,
        tituloProjeto: [this.projeto.tituloProjeto, Validators.required],
        descricaoProjeto: [this.projeto.descricaoProjeto, Validators.required],
        preco: [this.projeto.preco, Validators.required],
        cliente: [this.projeto.cliente._id, Validators.required],
        nmCliente: new FormControl({
          value: this.projeto.cliente.nome,
          disabled: true
        }),
        emailCliente: new FormControl({
          value: this.projeto.cliente.email,
          disabled: true
        }),
        telCliente: [this.projeto.cliente.tel, Validators.required]
      });
    }
  }

  edit() {
    this.projectForm.enable();
    this.editable = true;
  }

  cancel() {
    this.projectForm.disable();
    this.editable = false;
  }

  async delete() {
    this.alertSrvc.confirm(
      `Deseja excluir o cliente ${
        this.projectForm.get("tituloProjeto").value
      } ?`,
      () => {
        this.projetoSrvc
          .deleteProject(this.projectForm.get("_id").value)
          .subscribe(() => {
            this.alertSrvc.toast(
              `O Projeto ${
                this.projectForm.get("tituloProjeto").value
              } foi excluido com sucesso. `,
              2000,
              "top"
            );
            this.router.navigate(["/tabs/projetos"]);
            this.refreshSrvc.refreshProject.emit();
            this.spinnerSrvc.hide();
          });
      }
    );
  }

  salvar() {
    const { nmCliente, emailCliente, ...teste } = this.projectForm.value;
    console.log("Nova lista", teste);

    this.projetoSrvc
      .updateProject(this.projectForm.get("_id").value, this.projectForm.value)
      .subscribe(() => {
        this.alertSrvc.toast(`Projeto atualizado com sucesso.`, 2000, "top");
        this.refreshSrvc.refreshProject.emit();
        this.spinnerSrvc.hide();
        this.router.navigate(["/tabs/tabs/projetos"]);
      });
  }
}
