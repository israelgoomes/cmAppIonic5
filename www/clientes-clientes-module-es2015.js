(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["clientes-clientes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/cliente/cliente.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/cliente/cliente.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card (click)=\"detalheCliente()\">\n  <ion-card-content>\n  Nome: {{cliente.nome}} <br/>\n  E-mail: {{cliente.email}} <br/>\n  Telefone: {{cliente.tel}} <br/>\n\n</ion-card-content>\n</ion-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/clientes.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/clientes.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-buttons >\r\n  <ion-menu-button autoHide=\"false\"></ion-menu-button>\r\n</ion-buttons>\r\n<ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\r\n  <ion-fab-button (click)=\"addClient()\">\r\n    <ion-icon name=\"add\"></ion-icon>\r\n  </ion-fab-button>\r\n</ion-fab>\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n<app-header></app-header>\r\n\r\n  \r\n\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">clientes</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n<div *ngFor=\"let cliente of clientes\">\r\n<app-cliente [cliente]=\"cliente\" ></app-cliente>\r\n</div>\r\n\r\n<ion-button ion-button shape=\"block\" fill=\"outline\" routerLink=\"/geolocation-test\">Geolocation</ion-button>\r\n\r\n<!-- <form [formGroup]=\"formGroup\">\r\n<app-cm-select formControlName=\"option\" [lista]=\"lista\" view=\"viewValue\" valueAtr=\"id\"></app-cm-select>\r\n<button ion-button (click)=\"teste()\">Testar</button>\r\n</form> -->\r\n</ion-content> \r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"container\">\n  <strong>{{ name }}</strong>\n  <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\n</div>");

/***/ }),

/***/ "./src/app/clientes/cliente/cliente.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/clientes/cliente/cliente.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50ZXMvY2xpZW50ZS9DOlxcVXNlcnNcXGxzcmFlbFxcRGVza3RvcFxcUHJvamV0b3NcXGNtQXBwSW9uaWM1L3NyY1xcYXBwXFxjbGllbnRlc1xcY2xpZW50ZVxcY2xpZW50ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2xpZW50ZXMvY2xpZW50ZS9jbGllbnRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudGVzL2NsaWVudGUvY2xpZW50ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn0iLCJpb24tY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/clientes/cliente/cliente.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/clientes/cliente/cliente.component.ts ***!
  \*******************************************************/
/*! exports provided: ClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteComponent", function() { return ClienteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ClienteComponent = class ClienteComponent {
    constructor(fb, navCtrl, router) {
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.router = router;
        this.getChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        console.log('cliente no componente', this.cliente);
    }
    change() {
        this.getChange.emit(this.clientForm.value);
    }
    detalheCliente() {
        const navigationExtras = {
            state: {
                valorParaEnviar: this.cliente
            }
        };
        this.router.navigate(['/detalhe-cliente'], navigationExtras);
    }
    ngOnInit() {
        this.clientForm = this.fb.group({
            nome: this.cliente.nome,
            telefone: this.cliente.tel,
            email: this.cliente.email,
            cep: this.cliente.cep,
            rua: this.cliente.endereco,
            bairro: this.cliente.bairro,
            cidade: this.cliente.cidade,
            estado: this.cliente.estado
        });
    }
};
ClienteComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ClienteComponent.prototype, "cliente", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ClienteComponent.prototype, "getChange", void 0);
ClienteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cliente',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cliente.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/cliente/cliente.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cliente.component.scss */ "./src/app/clientes/cliente/cliente.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], ClienteComponent);



/***/ }),

/***/ "./src/app/clientes/clientes-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/clientes/clientes-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ClientesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesPageRoutingModule", function() { return ClientesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _clientes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clientes.page */ "./src/app/clientes/clientes.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");





const routes = [
    {
        path: '',
        component: _clientes_page__WEBPACK_IMPORTED_MODULE_3__["ClientesPage"]
    }
];
let ClientesPageRoutingModule = class ClientesPageRoutingModule {
};
ClientesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ClientesPageRoutingModule);



/***/ }),

/***/ "./src/app/clientes/clientes.module.ts":
/*!*********************************************!*\
  !*** ./src/app/clientes/clientes.module.ts ***!
  \*********************************************/
/*! exports provided: ClientesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesPageModule", function() { return ClientesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _clientes_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clientes-routing.module */ "./src/app/clientes/clientes-routing.module.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _clientes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clientes.page */ "./src/app/clientes/clientes.page.ts");
/* harmony import */ var _cliente_cliente_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cliente/cliente.component */ "./src/app/clientes/cliente/cliente.component.ts");
/* harmony import */ var _modal_cadastro_cliente_modal_cadastro_cliente_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal-cadastro-cliente/modal-cadastro-cliente.module */ "./src/app/clientes/modal-cadastro-cliente/modal-cadastro-cliente.module.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");











const configSpinner = {
    bgsColor: 'red',
    bgsPosition: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_9__["POSITION"].centerCenter,
    bgsSize: 40,
    bgsType: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_9__["SPINNER"].wanderingCubes,
    fgsType: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_9__["SPINNER"].threeStrings,
    pbDirection: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_9__["PB_DIRECTION"].leftToRight,
    pbThickness: 5,
    text: "Carregando dados...",
    fgsColor: '#527F76',
    logoUrl: "../assets/imgs/logo_app.png"
};
let ClientesPageModule = class ClientesPageModule {
};
ClientesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _clientes_routing_module__WEBPACK_IMPORTED_MODULE_4__["ClientesPageRoutingModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponentModule"],
            _modal_cadastro_cliente_modal_cadastro_cliente_module__WEBPACK_IMPORTED_MODULE_8__["ModalCadastroClientePageModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_9__["NgxUiLoaderModule"].forRoot(configSpinner),
        ],
        declarations: [_clientes_page__WEBPACK_IMPORTED_MODULE_6__["ClientesPage"], _cliente_cliente_component__WEBPACK_IMPORTED_MODULE_7__["ClienteComponent"]]
    })
], ClientesPageModule);



/***/ }),

/***/ "./src/app/clientes/clientes.page.scss":
/*!*********************************************!*\
  !*** ./src/app/clientes/clientes.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo {\n  width: 140px;\n  height: 200px;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n}\n\n#sec-logo {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527F76));\n  background-image: linear-gradient(to bottom, white, #527F76);\n  border-radius: 30px;\n  margin-bottom: 50px;\n}\n\nion-card {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527F76));\n  background-image: linear-gradient(to bottom, white, #527F76);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50ZXMvQzpcXFVzZXJzXFxsc3JhZWxcXERlc2t0b3BcXFByb2pldG9zXFxjbUFwcElvbmljNS9zcmNcXGFwcFxcY2xpZW50ZXNcXGNsaWVudGVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2xpZW50ZXMvY2xpZW50ZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLDJGQUFBO0VBQUEsNERBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSwyRkFBQTtFQUFBLDREQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jbGllbnRlcy9jbGllbnRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb3tcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI3NlYy1sb2dve1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsICM1MjdGNzYpOyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcbmlvbi1jYXJke1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsICM1MjdGNzYpOyBcclxuXHJcbn0iLCIubG9nbyB7XG4gIHdpZHRoOiAxNDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jc2VjLWxvZ28ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgIzUyN0Y3Nik7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsICM1MjdGNzYpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/clientes/clientes.page.ts":
/*!*******************************************!*\
  !*** ./src/app/clientes/clientes.page.ts ***!
  \*******************************************/
/*! exports provided: ClientesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesPage", function() { return ClientesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_cliente_service_cliente_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cliente-service/cliente.service */ "./src/app/services/cliente-service/cliente.service.ts");
/* harmony import */ var _configHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configHelper */ "./src/app/configHelper.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/refresh-page.service */ "./src/app/services/refresh-page.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _modal_cadastro_cliente_modal_cadastro_cliente_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modal-cadastro-cliente/modal-cadastro-cliente.page */ "./src/app/clientes/modal-cadastro-cliente/modal-cadastro-cliente.page.ts");
/* harmony import */ var _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/spinner-service/spinner.service */ "./src/app/services/spinner-service/spinner.service.ts");









let ClientesPage = class ClientesPage {
    constructor(clienteSrvc, refreshSrvc, modalCtrl, spinnerSrvc, fb) {
        this.clienteSrvc = clienteSrvc;
        this.refreshSrvc = refreshSrvc;
        this.modalCtrl = modalCtrl;
        this.spinnerSrvc = spinnerSrvc;
        this.fb = fb;
        this.clientes = [];
        this.lista = [
            { id: 1, viewValue: 'Teste1' },
            { id: 2, viewValue: 'Teste2' },
            { id: 3, viewValue: 'Teste' }
        ];
        this.ionViewWillEnter();
    }
    teste() {
        console.log('Valor escolhido', this.formGroup.get('option').value);
    }
    ngOnInit() {
        this.formGroup = this.fb.group({
            option: ['']
        });
        console.log('Page principal');
        const userData = JSON.parse(localStorage.getItem(_configHelper__WEBPACK_IMPORTED_MODULE_3__["configHelper"].storageKeys.user));
        this.clienteSrvc.getClientsByIdUser(userData._id).subscribe(clientes => {
            this.clientes = clientes;
            console.log('Teste de reload');
            this.spinnerSrvc.hide();
        });
    }
    ionViewWillEnter() {
        this.refreshSrvc.refreshClient.subscribe(() => {
            this.ngOnInit();
        });
    }
    addClient() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modal_cadastro_cliente_modal_cadastro_cliente_page__WEBPACK_IMPORTED_MODULE_7__["ModalCadastroClientePage"]
            });
            return yield modal.present();
        });
    }
};
ClientesPage.ctorParameters = () => [
    { type: _services_cliente_service_cliente_service__WEBPACK_IMPORTED_MODULE_2__["ClienteService"] },
    { type: _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_5__["RefreshPageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_8__["SpinnerService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
ClientesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-clientes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./clientes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/clientes.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./clientes.page.scss */ "./src/app/clientes/clientes.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cliente_service_cliente_service__WEBPACK_IMPORTED_MODULE_2__["ClienteService"],
        _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_5__["RefreshPageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
        _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_8__["SpinnerService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], ClientesPage);



/***/ }),

/***/ "./src/app/explore-container/explore-container.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwbG9yZS1jb250YWluZXIvQzpcXFVzZXJzXFxsc3JhZWxcXERlc2t0b3BcXFByb2pldG9zXFxjbUFwcElvbmljNS9zcmNcXGFwcFxcZXhwbG9yZS1jb250YWluZXJcXGV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9leHBsb3JlLWNvbnRhaW5lci9leHBsb3JlLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FDRkY7O0FES0E7RUFDRSxxQkFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvZXhwbG9yZS1jb250YWluZXIvZXhwbG9yZS1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcblxuICBjb2xvcjogIzhjOGM4YztcblxuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iLCIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/explore-container/explore-container.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.ts ***!
  \******************************************************************/
/*! exports provided: ExploreContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreContainerComponent", function() { return ExploreContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ExploreContainerComponent = class ExploreContainerComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ExploreContainerComponent.prototype, "name", void 0);
ExploreContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-explore-container',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./explore-container.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./explore-container.component.scss */ "./src/app/explore-container/explore-container.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ExploreContainerComponent);



/***/ }),

/***/ "./src/app/explore-container/explore-container.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/explore-container/explore-container.module.ts ***!
  \***************************************************************/
/*! exports provided: ExploreContainerComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreContainerComponentModule", function() { return ExploreContainerComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _explore_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./explore-container.component */ "./src/app/explore-container/explore-container.component.ts");






let ExploreContainerComponentModule = class ExploreContainerComponentModule {
};
ExploreContainerComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
        declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]],
        exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]]
    })
], ExploreContainerComponentModule);



/***/ })

}]);
//# sourceMappingURL=clientes-clientes-module-es2015.js.map