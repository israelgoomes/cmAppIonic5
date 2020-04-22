function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~clientes-clientes-module~clientes-modal-cadastro-cliente-modal-cadastro-cliente-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/cliente/cadastro-cliente/cadastro-cliente.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/cliente/cadastro-cliente/cadastro-cliente.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppClientesClienteCadastroClienteCadastroClienteComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-card>\r\n  <ion-card-header>\r\n    Dados do cliente    \r\n  </ion-card-header>\r\n  <ion-card-content>\r\n     <form [formGroup]=\"clientForm\">\r\n\r\n    \r\n    <mat-form-field style=\"width: 100%;\">\r\n      <input matInput placeholder=\"Nome\" formControlName=\"nome\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"Telefone\" formControlName=\"tel\">\r\n    </mat-form-field>\r\n\r\n      <mat-form-field>\r\n      <input matInput placeholder=\"E-mail\" formControlName=\"email\">\r\n    </mat-form-field>\r\n\r\n      <mat-form-field>\r\n      <input matInput placeholder=\"Cep\" formControlName=\"cep\">\r\n    </mat-form-field>\r\n  \r\n      <mat-form-field>\r\n      <input matInput placeholder=\"Rua\" formControlName=\"endereco\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"Bairro\" formControlName=\"bairro\">\r\n    </mat-form-field>\r\n          <mat-form-field>\r\n      <input matInput placeholder=\"Cidade\" formControlName=\"cidade\">\r\n    </mat-form-field>\r\n  \r\n    <mat-form-field>\r\n      <input matInput placeholder=\"Estado\" formControlName=\"estado\">\r\n    </mat-form-field>\r\n\r\n    <!-- <ion-icon *ngIf=\"!editable\" style=\"float: left\" (click)=\"edit()\" name=\"settings-outline\"></ion-icon>\r\n    <ion-icon *ngIf=\"editable\" style=\"float: left\" (click)=\"cancel()\" name=\"close-circle-outline\"></ion-icon>\r\n    <ion-icon *ngIf=\"!editable\" style=\"float: right\" (click)=\"delete()\" name=\"trash\"></ion-icon> -->\r\n\r\n    \r\n\r\n    <!-- <ion-button expand=\"full\" fill=\"outline\">Salvar Cliente</ion-button>  -->\r\n   </form>\r\n  </ion-card-content>\r\n</ion-card>\r\n\r\n<ion-card>\r\n\r\n  <ion-card-content style=\"padding: 05px;\">\r\n    <ion-button (click)=\"salvar()\" [disabled]=\"!clientForm.valid\" expand=\"block\" fill=\"outline\">Salvar Cliente</ion-button>\r\n  </ion-card-content>\r\n</ion-card>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/modal-cadastro-cliente/modal-cadastro-cliente.page.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/modal-cadastro-cliente/modal-cadastro-cliente.page.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppClientesModalCadastroClienteModalCadastroClientePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <ion-toolbar>\r\n    <ion-icon (click)=\"voltar()\" name=\"arrow-back-outline\"></ion-icon>\r\n  </ion-toolbar>\r\n\r\n<ion-content [ngClass]=\"class\">\r\n\r\n  <section [ngClass]=\"class\">\r\n    <img class=\"logo\" src=\"./../../assets/imgs/cliente.png\">  \r\n  </section>\r\n\r\n  <section id=\"sec-02\">\r\n  <app-cadastro-cliente></app-cadastro-cliente>\r\n  </section>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/clientes/cliente/cadastro-cliente/cadastro-cliente.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/clientes/cliente/cadastro-cliente/cadastro-cliente.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppClientesClienteCadastroClienteCadastroClienteComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  background-color: white;\n}\n\nmat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50ZXMvY2xpZW50ZS9jYWRhc3Ryby1jbGllbnRlL0M6XFxVc2Vyc1xcaWdvbWVzbGFcXERvY3VtZW50c1xcaW9uaWNcXGNtQXBwSW9uaWM1L3NyY1xcYXBwXFxjbGllbnRlc1xcY2xpZW50ZVxcY2FkYXN0cm8tY2xpZW50ZVxcY2FkYXN0cm8tY2xpZW50ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2xpZW50ZXMvY2xpZW50ZS9jYWRhc3Ryby1jbGllbnRlL2NhZGFzdHJvLWNsaWVudGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50ZXMvY2xpZW50ZS9jYWRhc3Ryby1jbGllbnRlL2NhZGFzdHJvLWNsaWVudGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbm1hdC1mb3JtLWZpZWxke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iLCJpb24tY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/clientes/cliente/cadastro-cliente/cadastro-cliente.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/clientes/cliente/cadastro-cliente/cadastro-cliente.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: CadastroClienteComponent */

  /***/
  function srcAppClientesClienteCadastroClienteCadastroClienteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CadastroClienteComponent", function () {
      return CadastroClienteComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_cliente_service_cliente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/cliente-service/cliente.service */
    "./src/app/services/cliente-service/cliente.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/refresh-page.service */
    "./src/app/services/refresh-page.service.ts");
    /* harmony import */


    var _configHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../configHelper */
    "./src/app/configHelper.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/spinner-service/spinner.service */
    "./src/app/services/spinner-service/spinner.service.ts");

    var CadastroClienteComponent =
    /*#__PURE__*/
    function () {
      function CadastroClienteComponent(fb, clienteSrvc, router, refreshSrvc, modalCtrl, spinnerSrvc) {
        _classCallCheck(this, CadastroClienteComponent);

        this.fb = fb;
        this.clienteSrvc = clienteSrvc;
        this.router = router;
        this.refreshSrvc = refreshSrvc;
        this.modalCtrl = modalCtrl;
        this.spinnerSrvc = spinnerSrvc;
      }

      _createClass(CadastroClienteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var user = JSON.parse(localStorage.getItem(_configHelper__WEBPACK_IMPORTED_MODULE_6__["configHelper"].storageKeys.user));
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
      }, {
        key: "salvar",
        value: function salvar() {
          var _this = this;

          console.log(this.clientForm.value);
          this.clienteSrvc.includesClient(this.clientForm.value).subscribe(function () {
            _this.modalCtrl.dismiss();

            _this.refreshSrvc.refreshClient.emit();

            _this.spinnerSrvc.hide();

            _this.router.navigate(['/tabs/tabs/clientes']);
          });
        }
      }]);

      return CadastroClienteComponent;
    }();

    CadastroClienteComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_cliente_service_cliente_service__WEBPACK_IMPORTED_MODULE_3__["ClienteService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_5__["RefreshPageService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
      }, {
        type: src_app_services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_8__["SpinnerService"]
      }];
    };

    CadastroClienteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cadastro-cliente',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cadastro-cliente.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/cliente/cadastro-cliente/cadastro-cliente.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cadastro-cliente.component.scss */
      "./src/app/clientes/cliente/cadastro-cliente/cadastro-cliente.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_cliente_service_cliente_service__WEBPACK_IMPORTED_MODULE_3__["ClienteService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_5__["RefreshPageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"], src_app_services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_8__["SpinnerService"]])], CadastroClienteComponent);
    /***/
  },

  /***/
  "./src/app/clientes/modal-cadastro-cliente/modal-cadastro-cliente-routing.module.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/clientes/modal-cadastro-cliente/modal-cadastro-cliente-routing.module.ts ***!
    \******************************************************************************************/

  /*! exports provided: ModalCadastroClientePageRoutingModule */

  /***/
  function srcAppClientesModalCadastroClienteModalCadastroClienteRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalCadastroClientePageRoutingModule", function () {
      return ModalCadastroClientePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _modal_cadastro_cliente_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./modal-cadastro-cliente.page */
    "./src/app/clientes/modal-cadastro-cliente/modal-cadastro-cliente.page.ts");

    var routes = [{
      path: '',
      component: _modal_cadastro_cliente_page__WEBPACK_IMPORTED_MODULE_3__["ModalCadastroClientePage"]
    }];

    var ModalCadastroClientePageRoutingModule = function ModalCadastroClientePageRoutingModule() {
      _classCallCheck(this, ModalCadastroClientePageRoutingModule);
    };

    ModalCadastroClientePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ModalCadastroClientePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/clientes/modal-cadastro-cliente/modal-cadastro-cliente.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/clientes/modal-cadastro-cliente/modal-cadastro-cliente.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: ModalCadastroClientePageModule */

  /***/
  function srcAppClientesModalCadastroClienteModalCadastroClienteModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalCadastroClientePageModule", function () {
      return ModalCadastroClientePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _modal_cadastro_cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modal-cadastro-cliente-routing.module */
    "./src/app/clientes/modal-cadastro-cliente/modal-cadastro-cliente-routing.module.ts");
    /* harmony import */


    var _modal_cadastro_cliente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./modal-cadastro-cliente.page */
    "./src/app/clientes/modal-cadastro-cliente/modal-cadastro-cliente.page.ts");
    /* harmony import */


    var _cliente_cadastro_cliente_cadastro_cliente_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../cliente/cadastro-cliente/cadastro-cliente.component */
    "./src/app/clientes/cliente/cadastro-cliente/cadastro-cliente.component.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");

    var ModalCadastroClientePageModule = function ModalCadastroClientePageModule() {
      _classCallCheck(this, ModalCadastroClientePageModule);
    };

    ModalCadastroClientePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _modal_cadastro_cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalCadastroClientePageRoutingModule"]],
      declarations: [_modal_cadastro_cliente_page__WEBPACK_IMPORTED_MODULE_6__["ModalCadastroClientePage"], _cliente_cadastro_cliente_cadastro_cliente_component__WEBPACK_IMPORTED_MODULE_7__["CadastroClienteComponent"]],
      entryComponents: [_modal_cadastro_cliente_page__WEBPACK_IMPORTED_MODULE_6__["ModalCadastroClientePage"]]
    })], ModalCadastroClientePageModule);
    /***/
  },

  /***/
  "./src/app/clientes/modal-cadastro-cliente/modal-cadastro-cliente.page.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/clientes/modal-cadastro-cliente/modal-cadastro-cliente.page.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppClientesModalCadastroClienteModalCadastroClientePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-icon {\n  font-size: 30px;\n}\n\nsection#sec-01 {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 30%;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527F76));\n  background-image: linear-gradient(to bottom, white, #527F76);\n}\n\n.origin {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 30%;\n  --ion-background-color: #527F76;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527F76));\n  background-image: linear-gradient(to bottom, white, #527F76);\n}\n\n.purple {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 30%;\n  --ion-background-color: purple;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(purple));\n  background-image: linear-gradient(to bottom, white, purple);\n}\n\n.blue {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 30%;\n  --ion-background-color: blue;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(blue));\n  background-image: linear-gradient(to bottom, white, blue);\n}\n\n.black {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 30%;\n  --ion-background-color: black;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(black));\n  background-image: linear-gradient(to bottom, white, black);\n}\n\nsection#sec-02 {\n  padding-top: 20px;\n  height: 100%;\n  border-top-right-radius: 30px;\n  border-top-left-radius: 30px;\n  background-color: white;\n}\n\n.content {\n  --ion-background-color: #527F76;\n}\n\nion-card {\n  margin-top: 30px;\n  background-color: white;\n}\n\n.logo {\n  width: 300px;\n  height: 200px;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50ZXMvbW9kYWwtY2FkYXN0cm8tY2xpZW50ZS9DOlxcVXNlcnNcXGlnb21lc2xhXFxEb2N1bWVudHNcXGlvbmljXFxjbUFwcElvbmljNS9zcmNcXGFwcFxcY2xpZW50ZXNcXG1vZGFsLWNhZGFzdHJvLWNsaWVudGVcXG1vZGFsLWNhZGFzdHJvLWNsaWVudGUucGFnZS5zY3NzIiwic3JjL2FwcC9jbGllbnRlcy9tb2RhbC1jYWRhc3Ryby1jbGllbnRlL21vZGFsLWNhZGFzdHJvLWNsaWVudGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFFQSwyRkFBQTtFQUFBLDREQUFBO0FDQUo7O0FETUE7RUFDRyxtQkFBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtFQUVBLCtCQUFBO0VBQ0EsMkZBQUE7RUFBQSw0REFBQTtBQ0xIOztBRFVBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFFQSw4QkFBQTtFQUNBLDBGQUFBO0VBQUEsMkRBQUE7QUNSRjs7QURZQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBRUEsNEJBQUE7RUFDQSx3RkFBQTtFQUFBLHlEQUFBO0FDWEY7O0FEZUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtFQUVBLDZCQUFBO0VBQ0EseUZBQUE7RUFBQSwwREFBQTtBQ2RGOztBRG9CQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtBQ2pCSjs7QURzQkE7RUFDSSwrQkFBQTtBQ25CSjs7QURxQkE7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0FDbEJKOztBRHFCQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ2xCSiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudGVzL21vZGFsLWNhZGFzdHJvLWNsaWVudGUvbW9kYWwtY2FkYXN0cm8tY2xpZW50ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbntcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuc2VjdGlvbiNzZWMtMDF7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCAjNTI3Rjc2KTsgXHJcblxyXG59XHJcblxyXG5cclxuXHJcbi5vcmlnaW57XHJcbiAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgLy8gaGVpZ2h0OiAzNSU7XHJcbiAgIGhlaWdodDogMzAlO1xyXG4gICAvL2JhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzUyN0Y3NjtcclxuICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsICM1MjdGNzYpOyBcclxuXHJcbn1cclxuXHJcblxyXG4ucHVycGxle1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogMzAlO1xyXG4gIC8vYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgcHVycGxlKTsgXHJcblxyXG59XHJcblxyXG4uYmx1ZXtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvLyBoZWlnaHQ6IDM1JTtcclxuICBoZWlnaHQ6IDMwJTtcclxuICAvL2JhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCBibHVlKTsgXHJcblxyXG59XHJcblxyXG4uYmxhY2t7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLy8gaGVpZ2h0OiAzNSU7XHJcbiAgaGVpZ2h0OiAzMCU7XHJcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsIGJsYWNrKTsgXHJcblxyXG59XHJcblxyXG5cclxuXHJcbnNlY3Rpb24jc2VjLTAye1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICBcclxufVxyXG5cclxuLmNvbnRlbnR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjNTI3Rjc2O1xyXG59XHJcbmlvbi1jYXJke1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubG9nb3tcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufSIsImlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG5zZWN0aW9uI3NlYy0wMSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAzMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCAjNTI3Rjc2KTtcbn1cblxuLm9yaWdpbiB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAzMCU7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICM1MjdGNzY7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCAjNTI3Rjc2KTtcbn1cblxuLnB1cnBsZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAzMCU7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsIHB1cnBsZSk7XG59XG5cbi5ibHVlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDMwJTtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsIGJsdWUpO1xufVxuXG4uYmxhY2sge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMzAlO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsIGJsYWNrKTtcbn1cblxuc2VjdGlvbiNzZWMtMDIge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzUyN0Y3Njtcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmxvZ28ge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/clientes/modal-cadastro-cliente/modal-cadastro-cliente.page.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/clientes/modal-cadastro-cliente/modal-cadastro-cliente.page.ts ***!
    \********************************************************************************/

  /*! exports provided: ModalCadastroClientePage */

  /***/
  function srcAppClientesModalCadastroClienteModalCadastroClientePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalCadastroClientePage", function () {
      return ModalCadastroClientePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_configHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/configHelper */
    "./src/app/configHelper.ts");

    var ModalCadastroClientePage =
    /*#__PURE__*/
    function () {
      function ModalCadastroClientePage(navCtrl, modalCtrl) {
        _classCallCheck(this, ModalCadastroClientePage);

        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.class = "origin";
        this.class = localStorage.getItem(src_app_configHelper__WEBPACK_IMPORTED_MODULE_3__["configHelper"].storageKeys.color) != null ? localStorage.getItem(src_app_configHelper__WEBPACK_IMPORTED_MODULE_3__["configHelper"].storageKeys.color) : 'origin';
      }

      _createClass(ModalCadastroClientePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "voltar",
        value: function voltar() {
          this.modalCtrl.dismiss({
            'dismissed': true
          });
        }
      }]);

      return ModalCadastroClientePage;
    }();

    ModalCadastroClientePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    ModalCadastroClientePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modal-cadastro-cliente',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./modal-cadastro-cliente.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/modal-cadastro-cliente/modal-cadastro-cliente.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./modal-cadastro-cliente.page.scss */
      "./src/app/clientes/modal-cadastro-cliente/modal-cadastro-cliente.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], ModalCadastroClientePage);
    /***/
  }
}]);
//# sourceMappingURL=default~clientes-clientes-module~clientes-modal-cadastro-cliente-modal-cadastro-cliente-module-es5.js.map