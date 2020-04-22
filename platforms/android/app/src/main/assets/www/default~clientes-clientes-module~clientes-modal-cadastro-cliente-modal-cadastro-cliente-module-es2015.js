(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~clientes-clientes-module~clientes-modal-cadastro-cliente-modal-cadastro-cliente-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/cliente/cadastro-cliente/cadastro-cliente.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/cliente/cadastro-cliente/cadastro-cliente.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card>\n  <ion-card-header>\n    Dados do cliente    \n  </ion-card-header>\n  <ion-card-content>\n     <form [formGroup]=\"clientForm\">\n\n    \n    <mat-form-field style=\"width: 100%;\">\n      <input matInput placeholder=\"Nome\" formControlName=\"nome\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput placeholder=\"Telefone\" formControlName=\"tel\">\n    </mat-form-field>\n\n      <mat-form-field>\n      <input matInput placeholder=\"E-mail\" formControlName=\"email\">\n    </mat-form-field>\n\n      <mat-form-field>\n      <input matInput placeholder=\"Cep\" formControlName=\"cep\">\n    </mat-form-field>\n  \n      <mat-form-field>\n      <input matInput placeholder=\"Rua\" formControlName=\"endereco\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput placeholder=\"Bairro\" formControlName=\"bairro\">\n    </mat-form-field>\n          <mat-form-field>\n      <input matInput placeholder=\"Cidade\" formControlName=\"cidade\">\n    </mat-form-field>\n  \n    <mat-form-field>\n      <input matInput placeholder=\"Estado\" formControlName=\"estado\">\n    </mat-form-field>\n\n    <!-- <ion-icon *ngIf=\"!editable\" style=\"float: left\" (click)=\"edit()\" name=\"settings-outline\"></ion-icon>\n    <ion-icon *ngIf=\"editable\" style=\"float: left\" (click)=\"cancel()\" name=\"close-circle-outline\"></ion-icon>\n    <ion-icon *ngIf=\"!editable\" style=\"float: right\" (click)=\"delete()\" name=\"trash\"></ion-icon> -->\n\n    \n\n    <!-- <ion-button expand=\"full\" fill=\"outline\">Salvar Cliente</ion-button>  -->\n   </form>\n  </ion-card-content>\n</ion-card>\n\n<ion-card>\n\n  <ion-card-content style=\"padding: 05px;\">\n    <ion-button (click)=\"salvar()\" [disabled]=\"!clientForm.valid\" expand=\"block\" fill=\"outline\">Salvar Cliente</ion-button>\n  </ion-card-content>\n</ion-card>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/modal-cadastro-cliente/modal-cadastro-cliente.page.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/modal-cadastro-cliente/modal-cadastro-cliente.page.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <ion-toolbar>\n    <ion-icon (click)=\"voltar()\" name=\"arrow-back-outline\"></ion-icon>\n  </ion-toolbar>\n\n<ion-content [ngClass]=\"class\">\n\n  <section [ngClass]=\"class\">\n    <img class=\"logo\" src=\"./../../assets/imgs/cliente.png\">  \n  </section>\n\n  <section id=\"sec-02\">\n  <app-cadastro-cliente></app-cadastro-cliente>\n  </section>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/clientes/cliente/cadastro-cliente/cadastro-cliente.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/clientes/cliente/cadastro-cliente/cadastro-cliente.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  background-color: white;\n}\n\nmat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50ZXMvY2xpZW50ZS9jYWRhc3Ryby1jbGllbnRlL0M6XFxVc2Vyc1xcbHNyYWVsXFxEZXNrdG9wXFxQcm9qZXRvc1xcY21BcHBJb25pYzUvc3JjXFxhcHBcXGNsaWVudGVzXFxjbGllbnRlXFxjYWRhc3Ryby1jbGllbnRlXFxjYWRhc3Ryby1jbGllbnRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jbGllbnRlcy9jbGllbnRlL2NhZGFzdHJvLWNsaWVudGUvY2FkYXN0cm8tY2xpZW50ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jbGllbnRlcy9jbGllbnRlL2NhZGFzdHJvLWNsaWVudGUvY2FkYXN0cm8tY2xpZW50ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxubWF0LWZvcm0tZmllbGR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSIsImlvbi1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/clientes/cliente/cadastro-cliente/cadastro-cliente.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/clientes/cliente/cadastro-cliente/cadastro-cliente.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CadastroClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroClienteComponent", function() { return CadastroClienteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_cliente_service_cliente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/cliente-service/cliente.service */ "./src/app/services/cliente-service/cliente.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/refresh-page.service */ "./src/app/services/refresh-page.service.ts");
/* harmony import */ var _configHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../configHelper */ "./src/app/configHelper.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/spinner-service/spinner.service */ "./src/app/services/spinner-service/spinner.service.ts");









let CadastroClienteComponent = class CadastroClienteComponent {
    constructor(fb, clienteSrvc, router, refreshSrvc, modalCtrl, spinnerSrvc) {
        this.fb = fb;
        this.clienteSrvc = clienteSrvc;
        this.router = router;
        this.refreshSrvc = refreshSrvc;
        this.modalCtrl = modalCtrl;
        this.spinnerSrvc = spinnerSrvc;
    }
    ngOnInit() {
        let user = JSON.parse(localStorage.getItem(_configHelper__WEBPACK_IMPORTED_MODULE_6__["configHelper"].storageKeys.user));
        this.clientForm = this.fb.group({
            nome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            tel: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cep: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            endereco: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            bairro: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cidade: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            estado: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            usuario: [user._id]
        });
    }
    salvar() {
        console.log(this.clientForm.value);
        this.clienteSrvc.includesClient(this.clientForm.value).subscribe(() => {
            this.modalCtrl.dismiss();
            this.refreshSrvc.refreshClient.emit();
            this.spinnerSrvc.hide();
            this.router.navigate(['/tabs/tabs/clientes']);
        });
    }
};
CadastroClienteComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_cliente_service_cliente_service__WEBPACK_IMPORTED_MODULE_3__["ClienteService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_5__["RefreshPageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: src_app_services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_8__["SpinnerService"] }
];
CadastroClienteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cadastro-cliente',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cadastro-cliente.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/cliente/cadastro-cliente/cadastro-cliente.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cadastro-cliente.component.scss */ "./src/app/clientes/cliente/cadastro-cliente/cadastro-cliente.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_cliente_service_cliente_service__WEBPACK_IMPORTED_MODULE_3__["ClienteService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_5__["RefreshPageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"],
        src_app_services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_8__["SpinnerService"]])
], CadastroClienteComponent);



/***/ }),

/***/ "./src/app/clientes/modal-cadastro-cliente/modal-cadastro-cliente-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/clientes/modal-cadastro-cliente/modal-cadastro-cliente-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: ModalCadastroClientePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCadastroClientePageRoutingModule", function() { return ModalCadastroClientePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _modal_cadastro_cliente_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-cadastro-cliente.page */ "./src/app/clientes/modal-cadastro-cliente/modal-cadastro-cliente.page.ts");




const routes = [
    {
        path: '',
        component: _modal_cadastro_cliente_page__WEBPACK_IMPORTED_MODULE_3__["ModalCadastroClientePage"]
    }
];
let ModalCadastroClientePageRoutingModule = class ModalCadastroClientePageRoutingModule {
};
ModalCadastroClientePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ModalCadastroClientePageRoutingModule);



/***/ }),

/***/ "./src/app/clientes/modal-cadastro-cliente/modal-cadastro-cliente.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/clientes/modal-cadastro-cliente/modal-cadastro-cliente.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ModalCadastroClientePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCadastroClientePageModule", function() { return ModalCadastroClientePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _modal_cadastro_cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-cadastro-cliente-routing.module */ "./src/app/clientes/modal-cadastro-cliente/modal-cadastro-cliente-routing.module.ts");
/* harmony import */ var _modal_cadastro_cliente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-cadastro-cliente.page */ "./src/app/clientes/modal-cadastro-cliente/modal-cadastro-cliente.page.ts");
/* harmony import */ var _cliente_cadastro_cliente_cadastro_cliente_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../cliente/cadastro-cliente/cadastro-cliente.component */ "./src/app/clientes/cliente/cadastro-cliente/cadastro-cliente.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");















let ModalCadastroClientePageModule = class ModalCadastroClientePageModule {
};
ModalCadastroClientePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _modal_cadastro_cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalCadastroClientePageRoutingModule"]
        ],
        declarations: [_modal_cadastro_cliente_page__WEBPACK_IMPORTED_MODULE_6__["ModalCadastroClientePage"], _cliente_cadastro_cliente_cadastro_cliente_component__WEBPACK_IMPORTED_MODULE_7__["CadastroClienteComponent"]],
        entryComponents: [_modal_cadastro_cliente_page__WEBPACK_IMPORTED_MODULE_6__["ModalCadastroClientePage"]]
    })
], ModalCadastroClientePageModule);



/***/ }),

/***/ "./src/app/clientes/modal-cadastro-cliente/modal-cadastro-cliente.page.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/clientes/modal-cadastro-cliente/modal-cadastro-cliente.page.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  font-size: 30px;\n}\n\nsection#sec-01 {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 30%;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527F76));\n  background-image: linear-gradient(to bottom, white, #527F76);\n}\n\n.origin {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 30%;\n  --ion-background-color: #527F76;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527F76));\n  background-image: linear-gradient(to bottom, white, #527F76);\n}\n\n.purple {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 30%;\n  --ion-background-color: purple;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(purple));\n  background-image: linear-gradient(to bottom, white, purple);\n}\n\n.blue {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 30%;\n  --ion-background-color: blue;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(blue));\n  background-image: linear-gradient(to bottom, white, blue);\n}\n\n.black {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 30%;\n  --ion-background-color: black;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(black));\n  background-image: linear-gradient(to bottom, white, black);\n}\n\nsection#sec-02 {\n  padding-top: 20px;\n  height: 100%;\n  border-top-right-radius: 30px;\n  border-top-left-radius: 30px;\n  background-color: white;\n}\n\n.content {\n  --ion-background-color: #527F76;\n}\n\nion-card {\n  margin-top: 30px;\n  background-color: white;\n}\n\n.logo {\n  width: 300px;\n  height: 200px;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50ZXMvbW9kYWwtY2FkYXN0cm8tY2xpZW50ZS9DOlxcVXNlcnNcXGxzcmFlbFxcRGVza3RvcFxcUHJvamV0b3NcXGNtQXBwSW9uaWM1L3NyY1xcYXBwXFxjbGllbnRlc1xcbW9kYWwtY2FkYXN0cm8tY2xpZW50ZVxcbW9kYWwtY2FkYXN0cm8tY2xpZW50ZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2NsaWVudGVzL21vZGFsLWNhZGFzdHJvLWNsaWVudGUvbW9kYWwtY2FkYXN0cm8tY2xpZW50ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUVBLDJGQUFBO0VBQUEsNERBQUE7QUNBSjs7QURNQTtFQUNHLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBRUEsK0JBQUE7RUFDQSwyRkFBQTtFQUFBLDREQUFBO0FDTEg7O0FEVUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUVBLDhCQUFBO0VBQ0EsMEZBQUE7RUFBQSwyREFBQTtBQ1JGOztBRFlBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLFdBQUE7RUFFQSw0QkFBQTtFQUNBLHdGQUFBO0VBQUEseURBQUE7QUNYRjs7QURlQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBRUEsNkJBQUE7RUFDQSx5RkFBQTtFQUFBLDBEQUFBO0FDZEY7O0FEb0JBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLHVCQUFBO0FDakJKOztBRHNCQTtFQUNJLCtCQUFBO0FDbkJKOztBRHFCQTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7QUNsQko7O0FEcUJBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDbEJKIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50ZXMvbW9kYWwtY2FkYXN0cm8tY2xpZW50ZS9tb2RhbC1jYWRhc3Ryby1jbGllbnRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29ue1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG5zZWN0aW9uI3NlYy0wMXtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsICM1MjdGNzYpOyBcclxuXHJcbn1cclxuXHJcblxyXG5cclxuLm9yaWdpbntcclxuICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAvLyBoZWlnaHQ6IDM1JTtcclxuICAgaGVpZ2h0OiAzMCU7XHJcbiAgIC8vYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjNTI3Rjc2O1xyXG4gICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgIzUyN0Y3Nik7IFxyXG5cclxufVxyXG5cclxuXHJcbi5wdXJwbGV7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAzMCU7XHJcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCBwdXJwbGUpOyBcclxuXHJcbn1cclxuXHJcbi5ibHVle1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8vIGhlaWdodDogMzUlO1xyXG4gIGhlaWdodDogMzAlO1xyXG4gIC8vYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsIGJsdWUpOyBcclxuXHJcbn1cclxuXHJcbi5ibGFja3tcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvLyBoZWlnaHQ6IDM1JTtcclxuICBoZWlnaHQ6IDMwJTtcclxuICAvL2JhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgYmxhY2spOyBcclxuXHJcbn1cclxuXHJcblxyXG5cclxuc2VjdGlvbiNzZWMtMDJ7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIFxyXG59XHJcblxyXG4uY29udGVudHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICM1MjdGNzY7XHJcbn1cclxuaW9uLWNhcmR7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5sb2dve1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59IiwiaW9uLWljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbnNlY3Rpb24jc2VjLTAxIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDMwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsICM1MjdGNzYpO1xufVxuXG4ub3JpZ2luIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDMwJTtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzUyN0Y3NjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsICM1MjdGNzYpO1xufVxuXG4ucHVycGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDMwJTtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgcHVycGxlKTtcbn1cblxuLmJsdWUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMzAlO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgYmx1ZSk7XG59XG5cbi5ibGFjayB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAzMCU7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgYmxhY2spO1xufVxuXG5zZWN0aW9uI3NlYy0wMiB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjNTI3Rjc2O1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ubG9nbyB7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/clientes/modal-cadastro-cliente/modal-cadastro-cliente.page.ts":
/*!********************************************************************************!*\
  !*** ./src/app/clientes/modal-cadastro-cliente/modal-cadastro-cliente.page.ts ***!
  \********************************************************************************/
/*! exports provided: ModalCadastroClientePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCadastroClientePage", function() { return ModalCadastroClientePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_configHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/configHelper */ "./src/app/configHelper.ts");




let ModalCadastroClientePage = class ModalCadastroClientePage {
    constructor(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.class = "origin";
        this.class = localStorage.getItem(src_app_configHelper__WEBPACK_IMPORTED_MODULE_3__["configHelper"].storageKeys.color) != null ?
            localStorage.getItem(src_app_configHelper__WEBPACK_IMPORTED_MODULE_3__["configHelper"].storageKeys.color) : 'origin';
    }
    ngOnInit() {
    }
    voltar() {
        this.modalCtrl.dismiss({
            'dismissed': true
        });
    }
};
ModalCadastroClientePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
ModalCadastroClientePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-cadastro-cliente',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal-cadastro-cliente.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/modal-cadastro-cliente/modal-cadastro-cliente.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal-cadastro-cliente.page.scss */ "./src/app/clientes/modal-cadastro-cliente/modal-cadastro-cliente.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], ModalCadastroClientePage);



/***/ })

}]);
//# sourceMappingURL=default~clientes-clientes-module~clientes-modal-cadastro-cliente-modal-cadastro-cliente-module-es2015.js.map