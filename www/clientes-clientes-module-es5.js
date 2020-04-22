function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["clientes-clientes-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/cliente/cliente.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/cliente/cliente.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppClientesClienteClienteComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-card (click)=\"detalheCliente()\">\r\n  <ion-card-content>\r\n  Nome: {{cliente.nome}} <br/>\r\n  E-mail: {{cliente.email}} <br/>\r\n  Telefone: {{cliente.tel}} <br/>\r\n\r\n</ion-card-content>\r\n</ion-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/clientes.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/clientes.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppClientesClientesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-buttons >\r\n  <ion-menu-button autoHide=\"false\"></ion-menu-button>\r\n</ion-buttons>\r\n<ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\r\n  <ion-fab-button [color]=\"color\" >\r\n    <ion-icon name=\"chevron-back-circle-outline\"></ion-icon>\r\n  </ion-fab-button>\r\n  <ion-fab-list side=\"start\">\r\n    <ion-fab-button><ion-icon (click)=\"addClient()\" name=\"add\"></ion-icon></ion-fab-button>\r\n    <ion-fab-button><ion-icon (click)=\"logout()\" name=\"power\"></ion-icon></ion-fab-button>\r\n  </ion-fab-list>\r\n</ion-fab>\r\n\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n<app-header></app-header>\r\n\r\n  \r\n\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">clientes</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n<div *ngFor=\"let cliente of clientes\">\r\n<app-cliente [cliente]=\"cliente\" ></app-cliente>\r\n</div>\r\n</ion-content> \r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppExploreContainerExploreContainerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"container\">\r\n  <strong>{{ name }}</strong>\r\n  <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/clientes/cliente/cliente.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/clientes/cliente/cliente.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppClientesClienteClienteComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50ZXMvY2xpZW50ZS9DOlxcVXNlcnNcXGlnb21lc2xhXFxEb2N1bWVudHNcXGlvbmljXFxjbUFwcElvbmljNS9zcmNcXGFwcFxcY2xpZW50ZXNcXGNsaWVudGVcXGNsaWVudGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NsaWVudGVzL2NsaWVudGUvY2xpZW50ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jbGllbnRlcy9jbGllbnRlL2NsaWVudGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59IiwiaW9uLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/clientes/cliente/cliente.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/clientes/cliente/cliente.component.ts ***!
    \*******************************************************/

  /*! exports provided: ClienteComponent */

  /***/
  function srcAppClientesClienteClienteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClienteComponent", function () {
      return ClienteComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ClienteComponent =
    /*#__PURE__*/
    function () {
      function ClienteComponent(fb, navCtrl, router) {
        _classCallCheck(this, ClienteComponent);

        this.fb = fb;
        this.navCtrl = navCtrl;
        this.router = router;
        this.getChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        console.log('cliente no componente', this.cliente);
      }

      _createClass(ClienteComponent, [{
        key: "change",
        value: function change() {
          this.getChange.emit(this.clientForm.value);
        }
      }, {
        key: "detalheCliente",
        value: function detalheCliente() {
          var navigationExtras = {
            state: {
              valorParaEnviar: this.cliente
            }
          };
          this.router.navigate(['/detalhe-cliente'], navigationExtras);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
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
      }]);

      return ClienteComponent;
    }();

    ClienteComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ClienteComponent.prototype, "cliente", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ClienteComponent.prototype, "getChange", void 0);
    ClienteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cliente',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cliente.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/cliente/cliente.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cliente.component.scss */
      "./src/app/clientes/cliente/cliente.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], ClienteComponent);
    /***/
  },

  /***/
  "./src/app/clientes/clientes-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/clientes/clientes-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: ClientesPageRoutingModule */

  /***/
  function srcAppClientesClientesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientesPageRoutingModule", function () {
      return ClientesPageRoutingModule;
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


    var _clientes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./clientes.page */
    "./src/app/clientes/clientes.page.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var routes = [{
      path: '',
      component: _clientes_page__WEBPACK_IMPORTED_MODULE_3__["ClientesPage"]
    }];

    var ClientesPageRoutingModule = function ClientesPageRoutingModule() {
      _classCallCheck(this, ClientesPageRoutingModule);
    };

    ClientesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ClientesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/clientes/clientes.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/clientes/clientes.module.ts ***!
    \*********************************************/

  /*! exports provided: ClientesPageModule */

  /***/
  function srcAppClientesClientesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientesPageModule", function () {
      return ClientesPageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _clientes_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./clientes-routing.module */
    "./src/app/clientes/clientes-routing.module.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");
    /* harmony import */


    var _clientes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./clientes.page */
    "./src/app/clientes/clientes.page.ts");
    /* harmony import */


    var _cliente_cliente_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./cliente/cliente.component */
    "./src/app/clientes/cliente/cliente.component.ts");
    /* harmony import */


    var _modal_cadastro_cliente_modal_cadastro_cliente_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./modal-cadastro-cliente/modal-cadastro-cliente.module */
    "./src/app/clientes/modal-cadastro-cliente/modal-cadastro-cliente.module.ts");
    /* harmony import */


    var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-ui-loader */
    "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var configSpinner = {
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

    var ClientesPageModule = function ClientesPageModule() {
      _classCallCheck(this, ClientesPageModule);
    };

    ClientesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _clientes_routing_module__WEBPACK_IMPORTED_MODULE_4__["ClientesPageRoutingModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponentModule"], _modal_cadastro_cliente_modal_cadastro_cliente_module__WEBPACK_IMPORTED_MODULE_8__["ModalCadastroClientePageModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_9__["NgxUiLoaderModule"].forRoot(configSpinner)],
      declarations: [_clientes_page__WEBPACK_IMPORTED_MODULE_6__["ClientesPage"], _cliente_cliente_component__WEBPACK_IMPORTED_MODULE_7__["ClienteComponent"]]
    })], ClientesPageModule);
    /***/
  },

  /***/
  "./src/app/clientes/clientes.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/clientes/clientes.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppClientesClientesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".logo {\n  width: 140px;\n  height: 200px;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n}\n\n#sec-logo {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527F76));\n  background-image: linear-gradient(to bottom, white, #527F76);\n  border-radius: 30px;\n  margin-bottom: 50px;\n}\n\nion-card {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527F76));\n  background-image: linear-gradient(to bottom, white, #527F76);\n}\n\n.purple {\n  color: purple;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50ZXMvQzpcXFVzZXJzXFxpZ29tZXNsYVxcRG9jdW1lbnRzXFxpb25pY1xcY21BcHBJb25pYzUvc3JjXFxhcHBcXGNsaWVudGVzXFxjbGllbnRlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2NsaWVudGVzL2NsaWVudGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSwyRkFBQTtFQUFBLDREQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBRENBO0VBQ0ksMkZBQUE7RUFBQSw0REFBQTtBQ0VKOztBREVBO0VBQ0ksYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50ZXMvY2xpZW50ZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ297XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNzZWMtbG9nb3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCAjNTI3Rjc2KTsgXHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5pb24tY2FyZHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCAjNTI3Rjc2KTsgXHJcblxyXG59XHJcblxyXG4ucHVycGxle1xyXG4gICAgY29sb3I6IHB1cnBsZTtcclxufSIsIi5sb2dvIHtcbiAgd2lkdGg6IDE0MHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNzZWMtbG9nbyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCAjNTI3Rjc2KTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuaW9uLWNhcmQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgIzUyN0Y3Nik7XG59XG5cbi5wdXJwbGUge1xuICBjb2xvcjogcHVycGxlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/clientes/clientes.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/clientes/clientes.page.ts ***!
    \*******************************************/

  /*! exports provided: ClientesPage */

  /***/
  function srcAppClientesClientesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientesPage", function () {
      return ClientesPage;
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


    var _services_cliente_service_cliente_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/cliente-service/cliente.service */
    "./src/app/services/cliente-service/cliente.service.ts");
    /* harmony import */


    var _configHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../configHelper */
    "./src/app/configHelper.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/refresh-page.service */
    "./src/app/services/refresh-page.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _modal_cadastro_cliente_modal_cadastro_cliente_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./modal-cadastro-cliente/modal-cadastro-cliente.page */
    "./src/app/clientes/modal-cadastro-cliente/modal-cadastro-cliente.page.ts");
    /* harmony import */


    var _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/spinner-service/spinner.service */
    "./src/app/services/spinner-service/spinner.service.ts");
    /* harmony import */


    var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../services/utils/utils.service */
    "./src/app/services/utils/utils.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ClientesPage =
    /*#__PURE__*/
    function () {
      function ClientesPage(clienteSrvc, refreshSrvc, modalCtrl, spinnerSrvc, fb, utilSrvc, router) {
        _classCallCheck(this, ClientesPage);

        this.clienteSrvc = clienteSrvc;
        this.refreshSrvc = refreshSrvc;
        this.modalCtrl = modalCtrl;
        this.spinnerSrvc = spinnerSrvc;
        this.fb = fb;
        this.utilSrvc = utilSrvc;
        this.router = router;
        this.clientes = [];
        this.lista = [{
          id: 1,
          viewValue: 'Teste1'
        }, {
          id: 2,
          viewValue: 'Teste2'
        }, {
          id: 3,
          viewValue: 'Teste'
        }];
        this.color = "primary";

        if (!localStorage.getItem(_configHelper__WEBPACK_IMPORTED_MODULE_3__["configHelper"].storageKeys.token)) {
          this.router.navigate(['']);
        }

        this.color = localStorage.getItem(_configHelper__WEBPACK_IMPORTED_MODULE_3__["configHelper"].storageKeys.color) != null ? localStorage.getItem(_configHelper__WEBPACK_IMPORTED_MODULE_3__["configHelper"].storageKeys.color) : 'primary';
        this.color = this.utilSrvc.colorConvert(this.color);
        this.ionViewWillEnter();
      }

      _createClass(ClientesPage, [{
        key: "teste",
        value: function teste() {
          console.log('Valor escolhido', this.formGroup.get('option').value);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.formGroup = this.fb.group({
            option: ['']
          });
          console.log('Page principal');
          var userData = JSON.parse(localStorage.getItem(_configHelper__WEBPACK_IMPORTED_MODULE_3__["configHelper"].storageKeys.user));
          this.clienteSrvc.getClientsByIdUser(userData._id).subscribe(function (clientes) {
            _this.clientes = clientes;
            console.log('Teste de reload');

            _this.spinnerSrvc.hide();
          });
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this2 = this;

          this.refreshSrvc.refreshClient.subscribe(function () {
            _this2.ngOnInit();
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem(_configHelper__WEBPACK_IMPORTED_MODULE_3__["configHelper"].storageKeys.token);
          this.router.navigate(['']);
        }
      }, {
        key: "addClient",
        value: function addClient() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalCtrl.create({
                      component: _modal_cadastro_cliente_modal_cadastro_cliente_page__WEBPACK_IMPORTED_MODULE_7__["ModalCadastroClientePage"]
                    });

                  case 2:
                    modal = _context.sent;
                    _context.next = 5;
                    return modal.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return ClientesPage;
    }();

    ClientesPage.ctorParameters = function () {
      return [{
        type: _services_cliente_service_cliente_service__WEBPACK_IMPORTED_MODULE_2__["ClienteService"]
      }, {
        type: _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_5__["RefreshPageService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }, {
        type: _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_8__["SpinnerService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_9__["UtilsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
      }];
    };

    ClientesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-clientes',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./clientes.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/clientes.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./clientes.page.scss */
      "./src/app/clientes/clientes.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cliente_service_cliente_service__WEBPACK_IMPORTED_MODULE_2__["ClienteService"], _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_5__["RefreshPageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_8__["SpinnerService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_9__["UtilsService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]])], ClientesPage);
    /***/
  },

  /***/
  "./src/app/explore-container/explore-container.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/explore-container/explore-container.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppExploreContainerExploreContainerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwbG9yZS1jb250YWluZXIvQzpcXFVzZXJzXFxpZ29tZXNsYVxcRG9jdW1lbnRzXFxpb25pY1xcY21BcHBJb25pYzUvc3JjXFxhcHBcXGV4cGxvcmUtY29udGFpbmVyXFxleHBsb3JlLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZXhwbG9yZS1jb250YWluZXIvZXhwbG9yZS1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQ0ZGOztBREtBO0VBQ0UscUJBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL2V4cGxvcmUtY29udGFpbmVyL2V4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbiNjb250YWluZXIgc3Ryb25nIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIgcCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cclxuICBjb2xvcjogIzhjOGM4YztcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jY29udGFpbmVyIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufSIsIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/explore-container/explore-container.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/explore-container/explore-container.component.ts ***!
    \******************************************************************/

  /*! exports provided: ExploreContainerComponent */

  /***/
  function srcAppExploreContainerExploreContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExploreContainerComponent", function () {
      return ExploreContainerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ExploreContainerComponent =
    /*#__PURE__*/
    function () {
      function ExploreContainerComponent() {
        _classCallCheck(this, ExploreContainerComponent);
      }

      _createClass(ExploreContainerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExploreContainerComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ExploreContainerComponent.prototype, "name", void 0);
    ExploreContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-explore-container',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./explore-container.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./explore-container.component.scss */
      "./src/app/explore-container/explore-container.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ExploreContainerComponent);
    /***/
  },

  /***/
  "./src/app/explore-container/explore-container.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/explore-container/explore-container.module.ts ***!
    \***************************************************************/

  /*! exports provided: ExploreContainerComponentModule */

  /***/
  function srcAppExploreContainerExploreContainerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExploreContainerComponentModule", function () {
      return ExploreContainerComponentModule;
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


    var _explore_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./explore-container.component */
    "./src/app/explore-container/explore-container.component.ts");

    var ExploreContainerComponentModule = function ExploreContainerComponentModule() {
      _classCallCheck(this, ExploreContainerComponentModule);
    };

    ExploreContainerComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
      declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]],
      exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]]
    })], ExploreContainerComponentModule);
    /***/
  }
}]);
//# sourceMappingURL=clientes-clientes-module-es5.js.map