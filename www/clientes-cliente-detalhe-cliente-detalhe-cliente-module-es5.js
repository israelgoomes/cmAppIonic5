function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["clientes-cliente-detalhe-cliente-detalhe-cliente-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/cliente/detalhe-cliente/detalhe-cliente.page.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/cliente/detalhe-cliente/detalhe-cliente.page.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppClientesClienteDetalheClienteDetalheClientePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/detalhe-cliente\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n<ion-content [ngClass]=\"class\">\r\n\r\n  <section [ngClass]=\"class\" >\r\n\r\n  <div [ngStyle]=\"leftStyle\">\r\n    <div class=\"circle\" (click)=\"changeColor()\" [ngStyle]=\"{color: changeColorOptions[colorOption] }\" style=\"text-align: center;\">\r\n      <p style=\"margin-left: auto; margin-right: auto; font-size: 25px;\" [ngStyle]=\"{'color':colors[color]}\">\r\n      {{iniciais}}\r\n    </p>   \r\n    </div>\r\n  </div>  \r\n\r\n  <div [ngStyle]=\"rightStyle\">\r\n    <div class=\"titulo-principal\" [ngStyle]=\"{ color: fontColor}\" style=\"margin-top: 07px; text-align: left;\">\r\n</div>\r\n  </div>\r\n\r\n  </section>\r\n\r\n  <section id=\"sec-02\">\r\n<div>\r\n&nbsp;\r\n<app-edita-cliente [cliente]=\"cliente\"></app-edita-cliente>\r\n</div>\r\n</section>\r\n</ion-content>\r\n\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/cliente/edita-cliente/edita-cliente.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/cliente/edita-cliente/edita-cliente.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppClientesClienteEditaClienteEditaClienteComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-card>\r\n  <ion-card-header>\r\n    Dados do cliente    \r\n  </ion-card-header>\r\n  <ion-card-content>\r\n     <form [formGroup]=\"clientForm\">\r\n\r\n    \r\n    <mat-form-field style=\"width: 100%;\">\r\n      <input matInput placeholder=\"Nome\" formControlName=\"nome\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"Telefone\" formControlName=\"tel\">\r\n    </mat-form-field>\r\n\r\n      <mat-form-field>\r\n      <input matInput placeholder=\"E-mail\" formControlName=\"email\">\r\n    </mat-form-field>\r\n\r\n      <mat-form-field>\r\n      <input matInput placeholder=\"Cep\" formControlName=\"cep\">\r\n    </mat-form-field>\r\n  \r\n      <mat-form-field>\r\n      <input matInput placeholder=\"Rua\" formControlName=\"endereco\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"Bairro\" formControlName=\"bairro\">\r\n    </mat-form-field>\r\n          <mat-form-field>\r\n      <input matInput placeholder=\"Cidade\" formControlName=\"cidade\">\r\n    </mat-form-field>\r\n  \r\n    <mat-form-field>\r\n      <input matInput placeholder=\"Estado\" formControlName=\"estado\">\r\n    </mat-form-field>\r\n\r\n<h2>Projetos</h2>\r\n\r\n<mat-accordion>\r\n  <mat-expansion-panel *ngFor=\"let item of projectList\">\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        Projeto: {{item.tituloProjeto}}\r\n      </mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n    <p> Descricao: {{item.descricaoProjeto}}</p> <br/>\r\n    <p> Preco: {{item.preco}}</p> <br/>\r\n    <p> Data: {{item.data}}</p> <br/>\r\n  </mat-expansion-panel>\r\n</mat-accordion>\r\n    \r\n\r\n    <ion-icon *ngIf=\"!editable\" style=\"float: left\" (click)=\"edit()\" name=\"settings-outline\"></ion-icon>\r\n    <ion-icon *ngIf=\"editable\" style=\"float: left\" (click)=\"cancel()\" name=\"close-circle-outline\"></ion-icon>\r\n    <ion-icon *ngIf=\"!editable\" style=\"float: right\" (click)=\"delete()\" name=\"trash\"></ion-icon>\r\n\r\n    \r\n<!-- </ion-row> -->\r\n  </form>\r\n  </ion-card-content>\r\n</ion-card>\r\n\r\n<ion-card *ngIf=\"editable\" style=\"height: 50px; padding-top: 07px;\" (click)=\"salvar()\">\r\n  <ion-card-content style=\"padding-top: 5px; padding-bottom: 0px; \">\r\n    \r\n<label>Editar cliente</label><ion-note slot=\"end\">\r\n  <ion-icon style=\"font-size: 20px; float: right;\" name=\"build-outline\"></ion-icon> </ion-note>\r\n      <br/>\r\n  </ion-card-content>\r\n</ion-card>";
    /***/
  },

  /***/
  "./src/app/clientes/cliente/detalhe-cliente/detalhe-cliente-routing.module.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/clientes/cliente/detalhe-cliente/detalhe-cliente-routing.module.ts ***!
    \************************************************************************************/

  /*! exports provided: DetalheClientePageRoutingModule */

  /***/
  function srcAppClientesClienteDetalheClienteDetalheClienteRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetalheClientePageRoutingModule", function () {
      return DetalheClientePageRoutingModule;
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


    var _detalhe_cliente_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./detalhe-cliente.page */
    "./src/app/clientes/cliente/detalhe-cliente/detalhe-cliente.page.ts");

    var routes = [{
      path: '',
      component: _detalhe_cliente_page__WEBPACK_IMPORTED_MODULE_3__["DetalheClientePage"]
    }];

    var DetalheClientePageRoutingModule = function DetalheClientePageRoutingModule() {
      _classCallCheck(this, DetalheClientePageRoutingModule);
    };

    DetalheClientePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DetalheClientePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/clientes/cliente/detalhe-cliente/detalhe-cliente.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/clientes/cliente/detalhe-cliente/detalhe-cliente.module.ts ***!
    \****************************************************************************/

  /*! exports provided: DetalheClientePageModule */

  /***/
  function srcAppClientesClienteDetalheClienteDetalheClienteModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetalheClientePageModule", function () {
      return DetalheClientePageModule;
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


    var _detalhe_cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./detalhe-cliente-routing.module */
    "./src/app/clientes/cliente/detalhe-cliente/detalhe-cliente-routing.module.ts");
    /* harmony import */


    var _detalhe_cliente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./detalhe-cliente.page */
    "./src/app/clientes/cliente/detalhe-cliente/detalhe-cliente.page.ts");
    /* harmony import */


    var _edita_cliente_edita_cliente_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../edita-cliente/edita-cliente.component */
    "./src/app/clientes/cliente/edita-cliente/edita-cliente.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var DetalheClientePageModule = function DetalheClientePageModule() {
      _classCallCheck(this, DetalheClientePageModule);
    };

    DetalheClientePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _detalhe_cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetalheClientePageRoutingModule"]],
      declarations: [_detalhe_cliente_page__WEBPACK_IMPORTED_MODULE_6__["DetalheClientePage"], _edita_cliente_edita_cliente_component__WEBPACK_IMPORTED_MODULE_7__["EditaClienteComponent"]]
    })], DetalheClientePageModule);
    /***/
  },

  /***/
  "./src/app/clientes/cliente/detalhe-cliente/detalhe-cliente.page.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/clientes/cliente/detalhe-cliente/detalhe-cliente.page.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppClientesClienteDetalheClienteDetalheClientePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.circle {\n  text-align: center;\n  background-color: black;\n  border-radius: 50%;\n  width: 80px;\n  height: 80px;\n  overflow: hidden;\n  position: relative;\n  margin-left: 5px;\n  padding-left: 0px !important;\n}\n#left {\n  border: none;\n  width: 28%;\n  float: left;\n  height: 100px;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527F76));\n  background-image: linear-gradient(to bottom, white, #527F76);\n}\n#right {\n  border: none;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527F76));\n  background-image: linear-gradient(to bottom, white, #527F76);\n  width: 72%;\n  height: 100px;\n  float: left;\n}\nsection#sec-01 {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 80px;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527F76));\n  background-image: linear-gradient(to bottom, white, #527F76);\n}\n.origin {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 80px;\n  --ion-background-color: #527F76;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527F76));\n  background-image: linear-gradient(to bottom, white, #527F76);\n}\n.purple {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 80px;\n  --ion-background-color: purple;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(purple));\n  background-image: linear-gradient(to bottom, white, purple);\n}\n.blue {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 80px;\n  --ion-background-color: blue;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(blue));\n  background-image: linear-gradient(to bottom, white, blue);\n}\n.black {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 80px;\n  --ion-background-color: black;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(black));\n  background-image: linear-gradient(to bottom, white, black);\n}\nsection#sec-02 {\n  padding-top: 20px;\n  height: 100%;\n  border-top-right-radius: 30px;\n  border-top-left-radius: 30px;\n  background-color: white;\n}\nion-content {\n  --ion-background-color: #527F76;\n}\nion-card {\n  background-color: white;\n}\n.titulo-principal {\n  max-width: 480px;\n  text-align: center;\n  margin: 60px auto;\n  font-family: \"Courier New\", Courier, monospace;\n  color: black;\n}\n.titulo-principal:after {\n  content: \"|\";\n  margin-left: 5px;\n  opacity: 1;\n  -webkit-animation: pisca 0.7s infinite;\n          animation: pisca 0.7s infinite;\n}\n/* Animação aplicada ao content referente a classe *.titulo-principal* resultando num efeito de cursor piscando. */\n@-webkit-keyframes pisca {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n}\n@keyframes pisca {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50ZXMvY2xpZW50ZS9kZXRhbGhlLWNsaWVudGUvZGV0YWxoZS1jbGllbnRlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2xpZW50ZXMvY2xpZW50ZS9kZXRhbGhlLWNsaWVudGUvQzpcXFVzZXJzXFxsc3JhZWxcXERlc2t0b3BcXFByb2pldG9zXFxjbUFwcElvbmljNS9zcmNcXGFwcFxcY2xpZW50ZXNcXGNsaWVudGVcXGRldGFsaGUtY2xpZW50ZVxcZGV0YWxoZS1jbGllbnRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FERUo7QUNDRTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSwyRkFBQTtFQUFBLDREQUFBO0FERUo7QUNFSTtFQUNJLFlBQUE7RUFFQSwyRkFBQTtFQUFBLDREQUFBO0VBRUEsVUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FERFI7QUNXSTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBRUEsMkZBQUE7RUFBQSw0REFBQTtBRFRSO0FDYUk7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBRUEsWUFBQTtFQUVBLCtCQUFBO0VBQ0EsMkZBQUE7RUFBQSw0REFBQTtBRFpSO0FDaUJLO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFFQSw4QkFBQTtFQUNBLDBGQUFBO0VBQUEsMkRBQUE7QURmUDtBQ21CSztFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSxZQUFBO0VBRUEsNEJBQUE7RUFDQSx3RkFBQTtFQUFBLHlEQUFBO0FEbEJQO0FDc0JLO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLFlBQUE7RUFFQSw2QkFBQTtFQUNBLHlGQUFBO0VBQUEsMERBQUE7QURyQlA7QUN5Qkk7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsdUJBQUE7QUR0QlI7QUMyQkk7RUFDSSwrQkFBQTtBRHhCUjtBQzJCTTtFQUNFLHVCQUFBO0FEeEJSO0FDMEJJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOENBQUE7RUFDQSxZQUFBO0FEdkJSO0FDeUJJO0VBQ0MsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLHNDQUFBO1VBQUEsOEJBQUE7QUR0Qkw7QUN3Qkksa0hBQUE7QUFFQTtFQUNJO0lBQ0ksVUFBQTtFRHRCVjtFQ3dCTTtJQUNJLFVBQUE7RUR0QlY7QUFDRjtBQ2dCSTtFQUNJO0lBQ0ksVUFBQTtFRHRCVjtFQ3dCTTtJQUNJLFVBQUE7RUR0QlY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudGVzL2NsaWVudGUvZGV0YWxoZS1jbGllbnRlL2RldGFsaGUtY2xpZW50ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY2lyY2xlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbiNsZWZ0IHtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMjglO1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsICM1MjdGNzYpO1xufVxuXG4jcmlnaHQge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCAjNTI3Rjc2KTtcbiAgd2lkdGg6IDcyJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbnNlY3Rpb24jc2VjLTAxIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCAjNTI3Rjc2KTtcbn1cblxuLm9yaWdpbiB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA4MHB4O1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjNTI3Rjc2O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgIzUyN0Y3Nik7XG59XG5cbi5wdXJwbGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogODBweDtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgcHVycGxlKTtcbn1cblxuLmJsdWUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogODBweDtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsIGJsdWUpO1xufVxuXG4uYmxhY2sge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogODBweDtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCBibGFjayk7XG59XG5cbnNlY3Rpb24jc2VjLTAyIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICM1MjdGNzY7XG59XG5cbmlvbi1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi50aXR1bG8tcHJpbmNpcGFsIHtcbiAgbWF4LXdpZHRoOiA0ODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDYwcHggYXV0bztcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi50aXR1bG8tcHJpbmNpcGFsOmFmdGVyIHtcbiAgY29udGVudDogXCJ8XCI7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG9wYWNpdHk6IDE7XG4gIGFuaW1hdGlvbjogcGlzY2EgMC43cyBpbmZpbml0ZTtcbn1cblxuLyogQW5pbWHDp8OjbyBhcGxpY2FkYSBhbyBjb250ZW50IHJlZmVyZW50ZSBhIGNsYXNzZSAqLnRpdHVsby1wcmluY2lwYWwqIHJlc3VsdGFuZG8gbnVtIGVmZWl0byBkZSBjdXJzb3IgcGlzY2FuZG8uICovXG5Aa2V5ZnJhbWVzIHBpc2NhIHtcbiAgMCUsIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59IiwiLmNpcmNsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICNsZWZ0IHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiAyOCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgIzUyN0Y3Nik7IFxyXG4gICAgLy9ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAjcmlnaHQge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgIzUyN0Y3Nik7IFxyXG4gICAgICAgLy8gcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgICAgd2lkdGg6IDcyJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIC8vYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vICNzZWMtbG9nb3tcclxuICAgIC8vICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgIzUyN0Y3Nik7IFxyXG4gICBcclxuICAgIC8vIH1cclxuXHJcbiAgICBzZWN0aW9uI3NlYy0wMXtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsICM1MjdGNzYpOyBcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5vcmlnaW57XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgLy8gaGVpZ2h0OiAzNSU7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICM1MjdGNzY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsICM1MjdGNzYpOyBcclxuICAgICBcclxuICAgICB9XHJcbiAgICAgXHJcbiAgICAgXHJcbiAgICAgLnB1cnBsZXtcclxuICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcclxuICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCBwdXJwbGUpOyBcclxuICAgICBcclxuICAgICB9XHJcbiAgICAgXHJcbiAgICAgLmJsdWV7XHJcbiAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgLy8gaGVpZ2h0OiAzNSU7XHJcbiAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgYmx1ZSk7IFxyXG4gICAgIFxyXG4gICAgIH1cclxuICAgICBcclxuICAgICAuYmxhY2t7XHJcbiAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgLy8gaGVpZ2h0OiAzNSU7XHJcbiAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsIGJsYWNrKTsgXHJcbiAgICAgXHJcbiAgICAgfVxyXG4gICAgXHJcbiAgICBzZWN0aW9uI3NlYy0wMntcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jb250ZW50e1xyXG4gICAgICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICM1MjdGNzY7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlvbi1jYXJke1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgLnRpdHVsby1wcmluY2lwYWx7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA0ODBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiA2MHB4IGF1dG87XHJcbiAgICAgICAgZm9udC1mYW1pbHk6J0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICAgIC50aXR1bG8tcHJpbmNpcGFsOmFmdGVye1xyXG4gICAgIGNvbnRlbnQ6ICd8JztcclxuICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgYW5pbWF0aW9uOiBwaXNjYSAuN3MgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICAvKiBBbmltYcOnw6NvIGFwbGljYWRhIGFvIGNvbnRlbnQgcmVmZXJlbnRlIGEgY2xhc3NlICoudGl0dWxvLXByaW5jaXBhbCogcmVzdWx0YW5kbyBudW0gZWZlaXRvIGRlIGN1cnNvciBwaXNjYW5kby4gKi9cclxuICAgIFxyXG4gICAgQGtleWZyYW1lcyBwaXNjYXtcclxuICAgICAgICAwJSwgMTAwJXtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgNTAle1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICBcclxuXHJcbiAiXX0= */";
    /***/
  },

  /***/
  "./src/app/clientes/cliente/detalhe-cliente/detalhe-cliente.page.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/clientes/cliente/detalhe-cliente/detalhe-cliente.page.ts ***!
    \**************************************************************************/

  /*! exports provided: DetalheClientePage */

  /***/
  function srcAppClientesClienteDetalheClienteDetalheClientePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetalheClientePage", function () {
      return DetalheClientePage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_projeto_service_projeto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/projeto-service/projeto.service */
    "./src/app/services/projeto-service/projeto.service.ts");
    /* harmony import */


    var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/utils/utils.service */
    "./src/app/services/utils/utils.service.ts");
    /* harmony import */


    var src_app_configHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/configHelper */
    "./src/app/configHelper.ts");

    var DetalheClientePage =
    /*#__PURE__*/
    function () {
      function DetalheClientePage(route, router, navCtrl, projetoSrvc, util) {
        _classCallCheck(this, DetalheClientePage);

        this.route = route;
        this.router = router;
        this.navCtrl = navCtrl;
        this.projetoSrvc = projetoSrvc;
        this.util = util;
        this.colors = [];
        this.changeColorOptions = [];
        this.color = 0;
        this.colorOption = 0;
        this.projectList = [];
        this.class = localStorage.getItem(src_app_configHelper__WEBPACK_IMPORTED_MODULE_6__["configHelper"].storageKeys.color) != null ? localStorage.getItem(src_app_configHelper__WEBPACK_IMPORTED_MODULE_6__["configHelper"].storageKeys.color) : 'origin';
        this.leftStyle = {
          'border': 'none',
          'width': '28%',
          'float': 'left',
          'height': '100px',
          'background-image': "linear-gradient(to bottom, white, ".concat(this.class, ")")
        };
        this.rightStyle = {
          'border': 'none',
          'background-image': "linear-gradient(to bottom, white, ".concat(this.class, ")"),
          'width': '72%',
          'height': '100px',
          'float': 'left'
        };
        this.fontColor = 'black';

        if (this.class == 'black') {
          this.fontColor = 'white';
        }

        console.log('Class', this.class);
        this.colors = util.populaColor();
        this.changeColorOptions = util.populaColorOption();
      }

      _createClass(DetalheClientePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          console.log('Style', this.rightStyle);
          setInterval(function () {
            _this.color = _this.color + 1;
          }, 200);
          this.route.queryParams.subscribe(function (params) {
            var getNav = _this.router.getCurrentNavigation();

            if (getNav.extras.state) {
              _this.cliente = getNav.extras.state.valorParaEnviar;
              console.log('Dados', _this.cliente);
            }

            var concatText = '';
            concatText += "".concat(_this.cliente.nome, " * ").concat(_this.cliente.email, " * ").concat(_this.cliente.tel);
            var componente = document.querySelector('.titulo-principal');
            var utilsSrvc = new _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"]();
            utilsSrvc.textTomachineWrite(concatText, componente);
            _this.iniciais = utilsSrvc.iniciais(_this.cliente.nome);
            console.log('iniciais', _this.iniciais);
          });
        }
      }, {
        key: "changeColor",
        value: function changeColor() {
          this.colorOption = (this.colorOption + 1) % this.changeColorOptions.length;
        }
      }, {
        key: "voltar",
        value: function voltar() {
          this.navCtrl.pop();
        }
      }, {
        key: "salvar",
        value: function salvar(event) {
          console.log('Evento', event);
        }
      }]);

      return DetalheClientePage;
    }();

    DetalheClientePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _services_projeto_service_projeto_service__WEBPACK_IMPORTED_MODULE_4__["ProjetoService"]
      }, {
        type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"]
      }];
    };

    DetalheClientePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-detalhe-cliente',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./detalhe-cliente.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/cliente/detalhe-cliente/detalhe-cliente.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./detalhe-cliente.page.scss */
      "./src/app/clientes/cliente/detalhe-cliente/detalhe-cliente.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _services_projeto_service_projeto_service__WEBPACK_IMPORTED_MODULE_4__["ProjetoService"], _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"]])], DetalheClientePage);
    /***/
  },

  /***/
  "./src/app/clientes/cliente/edita-cliente/edita-cliente.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/clientes/cliente/edita-cliente/edita-cliente.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppClientesClienteEditaClienteEditaClienteComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-form-field {\n  width: 100%;\n}\n\nion-card {\n  background-color: white;\n}\n\nion-content {\n  --ion-background-color: white !important;\n}\n\nlabel {\n  color: black;\n  font-size: 16px;\n}\n\nion-icon {\n  font-size: 40px;\n  color: #4f413b;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\nh2 {\n  text-align: center;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50ZXMvY2xpZW50ZS9lZGl0YS1jbGllbnRlL0M6XFxVc2Vyc1xcbHNyYWVsXFxEZXNrdG9wXFxQcm9qZXRvc1xcY21BcHBJb25pYzUvc3JjXFxhcHBcXGNsaWVudGVzXFxjbGllbnRlXFxlZGl0YS1jbGllbnRlXFxlZGl0YS1jbGllbnRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jbGllbnRlcy9jbGllbnRlL2VkaXRhLWNsaWVudGUvZWRpdGEtY2xpZW50ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSx3Q0FBQTtBQ0NKOztBREVFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNDSjs7QURFRTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NOOztBREVFO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQ0NOIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50ZXMvY2xpZW50ZS9lZGl0YS1jbGllbnRlL2VkaXRhLWNsaWVudGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBsYWJlbHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcblxyXG4gIGlvbi1pY29ue1xyXG4gICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgIGNvbG9yOiAjNGY0MTNiO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgaDJ7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDVweDtcclxuICB9IiwibWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG5sYWJlbCB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6ICM0ZjQxM2I7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/clientes/cliente/edita-cliente/edita-cliente.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/clientes/cliente/edita-cliente/edita-cliente.component.ts ***!
    \***************************************************************************/

  /*! exports provided: EditaClienteComponent */

  /***/
  function srcAppClientesClienteEditaClienteEditaClienteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditaClienteComponent", function () {
      return EditaClienteComponent;
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


    var _services_alert_service_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../services/alert-service/alert.service */
    "./src/app/services/alert-service/alert.service.ts");
    /* harmony import */


    var _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../services/spinner-service/spinner.service */
    "./src/app/services/spinner-service/spinner.service.ts");
    /* harmony import */


    var _services_projeto_service_projeto_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../services/projeto-service/projeto.service */
    "./src/app/services/projeto-service/projeto.service.ts");

    var EditaClienteComponent =
    /*#__PURE__*/
    function () {
      function EditaClienteComponent(fb, clienteSrvc, router, refreshSrvc, alertSrvc, spinnerSrvc, projetoSrvc) {
        _classCallCheck(this, EditaClienteComponent);

        this.fb = fb;
        this.clienteSrvc = clienteSrvc;
        this.router = router;
        this.refreshSrvc = refreshSrvc;
        this.alertSrvc = alertSrvc;
        this.spinnerSrvc = spinnerSrvc;
        this.projetoSrvc = projetoSrvc;
        this.editable = false;
        this.projectList = [];
      }

      _createClass(EditaClienteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

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
          this.projetoSrvc.projectByClient(this.cliente._id).subscribe(function (projects) {
            _this2.projectList = projects;
            console.log('projetos do cliente', _this2.projectList);

            _this2.spinnerSrvc.hide();
          });
        }
      }, {
        key: "salvar",
        value: function salvar() {
          var _this3 = this;

          this.clienteSrvc.alterClient(this.clientForm.value, this.clientForm.get('_id').value).subscribe(function (data) {
            _this3.refreshSrvc.refreshClient.emit();

            _this3.spinnerSrvc.hide();

            _this3.router.navigate(['/tabs/tabs/clientes']);
          }); // console.log('Valor do formulário', this.clientForm.value);
        }
      }, {
        key: "edit",
        value: function edit() {
          this.clientForm.enable();
          this.editable = true;
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.clientForm.disable();
          this.editable = false;
        }
      }, {
        key: "delete",
        value: function _delete() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.alertSrvc.confirm("Deseja excluir o cliente ".concat(this.clientForm.get('nome').value, " ?"), function () {
                      _this4.clienteSrvc.deleteClient(_this4.clientForm.get('_id').value).subscribe(function () {
                        _this4.alertSrvc.toast("O cliente ".concat(_this4.clientForm.get('nome').value, " foi excluido com sucesso. "), 2000, 'top');

                        _this4.router.navigate(['/tabs/clientes']);

                        _this4.refreshSrvc.refreshClient.emit();

                        _this4.spinnerSrvc.hide();
                      });
                    });

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return EditaClienteComponent;
    }();

    EditaClienteComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_cliente_service_cliente_service__WEBPACK_IMPORTED_MODULE_3__["ClienteService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_5__["RefreshPageService"]
      }, {
        type: _services_alert_service_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]
      }, {
        type: _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_7__["SpinnerService"]
      }, {
        type: _services_projeto_service_projeto_service__WEBPACK_IMPORTED_MODULE_8__["ProjetoService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], EditaClienteComponent.prototype, "cliente", void 0);
    EditaClienteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edita-cliente',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edita-cliente.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/cliente/edita-cliente/edita-cliente.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edita-cliente.component.scss */
      "./src/app/clientes/cliente/edita-cliente/edita-cliente.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_cliente_service_cliente_service__WEBPACK_IMPORTED_MODULE_3__["ClienteService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_5__["RefreshPageService"], _services_alert_service_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"], _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_7__["SpinnerService"], _services_projeto_service_projeto_service__WEBPACK_IMPORTED_MODULE_8__["ProjetoService"]])], EditaClienteComponent);
    /***/
  },

  /***/
  "./src/app/services/alert-service/alert.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/alert-service/alert.service.ts ***!
    \*********************************************************/

  /*! exports provided: AlertService */

  /***/
  function srcAppServicesAlertServiceAlertServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertService", function () {
      return AlertService;
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

    var AlertService =
    /*#__PURE__*/
    function () {
      function AlertService(alertCtrl, toastCtrl) {
        _classCallCheck(this, AlertService);

        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
      }

      _createClass(AlertService, [{
        key: "confirm",
        value: function confirm(message, callback) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertCtrl.create({
                      header: "Excluir?",
                      message: message,
                      buttons: [{
                        text: "Cancelar",
                        role: "cancel",
                        cssClass: "secondary",
                        handler: function handler(blah) {
                          console.log("Confirm Cancel: blah");
                        }
                      }, {
                        text: "Ok",
                        handler: function handler() {
                          callback();
                        }
                      }]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "toast",
        value: function toast(message, duration, position) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var toast;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.toastCtrl.create({
                      message: message,
                      duration: duration,
                      position: position
                    });

                  case 2:
                    toast = _context3.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return AlertService;
    }();

    AlertService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };

    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])], AlertService);
    /***/
  }
}]);
//# sourceMappingURL=clientes-cliente-detalhe-cliente-detalhe-cliente-module-es5.js.map