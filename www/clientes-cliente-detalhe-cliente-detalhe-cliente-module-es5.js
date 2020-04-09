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


    __webpack_exports__["default"] = "\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/detalhe-cliente\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n<ion-content>\r\n\r\n  <section id=\"sec-01\" >\r\n\r\n  <div id=\"left\">\r\n    <div class=\"circle\" (click)=\"changeColor()\" [ngStyle]=\"{color: changeColorOptions[colorOption] }\" style=\"text-align: center;\">\r\n      <p style=\"margin-left: auto; margin-right: auto; font-size: 25px;\" [ngStyle]=\"{'color':colors[color]}\">\r\n      {{iniciais}}\r\n    </p>   \r\n    </div>\r\n  </div>  \r\n\r\n  <div id=\"right\">\r\n    <div class=\"titulo-principal\" style=\"margin-top: 07px; text-align: left;\">\r\n</div>\r\n  </div>\r\n\r\n  </section>\r\n\r\n  <section id=\"sec-02\">\r\n<div>\r\n&nbsp;\r\n<app-edita-cliente [cliente]=\"cliente\"></app-edita-cliente>\r\n</div>\r\n</section>\r\n</ion-content>\r\n\r\n\r\n\r\n";
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


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.circle {\n  text-align: center;\n  background-color: black;\n  border-radius: 50%;\n  width: 80px;\n  height: 80px;\n  overflow: hidden;\n  position: relative;\n  margin-left: 5px;\n  padding-left: 0px !important;\n}\n#left {\n  border: none;\n  width: 28%;\n  float: left;\n  height: 100px;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527F76));\n  background-image: linear-gradient(to bottom, white, #527F76);\n}\n#right {\n  border: none;\n  text-align: center;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527F76));\n  background-image: linear-gradient(to bottom, white, #527F76);\n  width: 72%;\n  height: 100px;\n  float: left;\n}\nsection#sec-01 {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 80px;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527F76));\n  background-image: linear-gradient(to bottom, white, #527F76);\n}\nsection#sec-02 {\n  padding-top: 20px;\n  height: 100%;\n  border-top-right-radius: 30px;\n  border-top-left-radius: 30px;\n  background-color: white;\n}\nion-content {\n  --ion-background-color: #527F76;\n}\nion-card {\n  background-color: white;\n}\n.titulo-principal {\n  max-width: 480px;\n  text-align: center;\n  margin: 60px auto;\n  font-family: \"Courier New\", Courier, monospace;\n  color: black;\n}\n.titulo-principal:after {\n  content: \"|\";\n  margin-left: 5px;\n  opacity: 1;\n  -webkit-animation: pisca 0.7s infinite;\n          animation: pisca 0.7s infinite;\n}\n/* Animação aplicada ao content referente a classe *.titulo-principal* resultando num efeito de cursor piscando. */\n@-webkit-keyframes pisca {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n}\n@keyframes pisca {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50ZXMvY2xpZW50ZS9kZXRhbGhlLWNsaWVudGUvZGV0YWxoZS1jbGllbnRlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2xpZW50ZXMvY2xpZW50ZS9kZXRhbGhlLWNsaWVudGUvQzpcXFVzZXJzXFxsc3JhZWxcXERlc2t0b3BcXFByb2pldG9zXFxjbUFwcElvbmljNS9zcmNcXGFwcFxcY2xpZW50ZXNcXGNsaWVudGVcXGRldGFsaGUtY2xpZW50ZVxcZGV0YWxoZS1jbGllbnRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FERUo7QUNDRTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSwyRkFBQTtFQUFBLDREQUFBO0FERUo7QUNFSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJGQUFBO0VBQUEsNERBQUE7RUFFQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QURBUjtBQ1VJO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFFQSwyRkFBQTtFQUFBLDREQUFBO0FEUlI7QUNZSTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtBRFRSO0FDY0k7RUFDSSwrQkFBQTtBRFhSO0FDY007RUFDRSx1QkFBQTtBRFhSO0FDYUk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4Q0FBQTtFQUNBLFlBQUE7QURWUjtBQ1lJO0VBQ0MsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLHNDQUFBO1VBQUEsOEJBQUE7QURUTDtBQ1dJLGtIQUFBO0FBRUE7RUFDSTtJQUNJLFVBQUE7RURUVjtFQ1dNO0lBQ0ksVUFBQTtFRFRWO0FBQ0Y7QUNHSTtFQUNJO0lBQ0ksVUFBQTtFRFRWO0VDV007SUFDSSxVQUFBO0VEVFY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudGVzL2NsaWVudGUvZGV0YWxoZS1jbGllbnRlL2RldGFsaGUtY2xpZW50ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY2lyY2xlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbiNsZWZ0IHtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMjglO1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsICM1MjdGNzYpO1xufVxuXG4jcmlnaHQge1xuICBib3JkZXI6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsICM1MjdGNzYpO1xuICB3aWR0aDogNzIlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuc2VjdGlvbiNzZWMtMDEge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogODBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsICM1MjdGNzYpO1xufVxuXG5zZWN0aW9uI3NlYy0wMiB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjNTI3Rjc2O1xufVxuXG5pb24tY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4udGl0dWxvLXByaW5jaXBhbCB7XG4gIG1heC13aWR0aDogNDgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiA2MHB4IGF1dG87XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udGl0dWxvLXByaW5jaXBhbDphZnRlciB7XG4gIGNvbnRlbnQ6IFwifFwiO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBvcGFjaXR5OiAxO1xuICBhbmltYXRpb246IHBpc2NhIDAuN3MgaW5maW5pdGU7XG59XG5cbi8qIEFuaW1hw6fDo28gYXBsaWNhZGEgYW8gY29udGVudCByZWZlcmVudGUgYSBjbGFzc2UgKi50aXR1bG8tcHJpbmNpcGFsKiByZXN1bHRhbmRvIG51bSBlZmVpdG8gZGUgY3Vyc29yIHBpc2NhbmRvLiAqL1xuQGtleWZyYW1lcyBwaXNjYSB7XG4gIDAlLCAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufSIsIi5jaXJjbGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tbGVmdDogMDVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAjbGVmdCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogMjglO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsICM1MjdGNzYpOyBcclxuICAgIC8vYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgI3JpZ2h0IHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCAjNTI3Rjc2KTsgXHJcbiAgICAgICAvLyBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICB3aWR0aDogNzIlO1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgLy9ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gI3NlYy1sb2dve1xyXG4gICAgLy8gICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCAjNTI3Rjc2KTsgXHJcbiAgIFxyXG4gICAgLy8gfVxyXG5cclxuICAgIHNlY3Rpb24jc2VjLTAxe1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgIzUyN0Y3Nik7IFxyXG4gICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNlY3Rpb24jc2VjLTAye1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNvbnRlbnR7XHJcbiAgICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzUyN0Y3NjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW9uLWNhcmR7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAudGl0dWxvLXByaW5jaXBhbHtcclxuICAgICAgICBtYXgtd2lkdGg6IDQ4MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDYwcHggYXV0bztcclxuICAgICAgICBmb250LWZhbWlseTonQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG4gICAgLnRpdHVsby1wcmluY2lwYWw6YWZ0ZXJ7XHJcbiAgICAgY29udGVudDogJ3wnO1xyXG4gICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgb3BhY2l0eTogMTtcclxuICAgICBhbmltYXRpb246IHBpc2NhIC43cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIC8qIEFuaW1hw6fDo28gYXBsaWNhZGEgYW8gY29udGVudCByZWZlcmVudGUgYSBjbGFzc2UgKi50aXR1bG8tcHJpbmNpcGFsKiByZXN1bHRhbmRvIG51bSBlZmVpdG8gZGUgY3Vyc29yIHBpc2NhbmRvLiAqL1xyXG4gICAgXHJcbiAgICBAa2V5ZnJhbWVzIHBpc2Nhe1xyXG4gICAgICAgIDAlLCAxMDAle1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICA1MCV7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG5cclxuICJdfQ== */";
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
        this.colors = util.populaColor();
        this.changeColorOptions = util.populaColorOption();
      }

      _createClass(DetalheClientePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

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
          });
        }
      }, {
        key: "salvar",
        value: function salvar() {
          var _this3 = this;

          this.clienteSrvc.alterClient(this.clientForm.value, this.clientForm.get('_id').value).subscribe(function (data) {
            _this3.router.navigate(['/tabs/clientes']);

            _this3.refreshSrvc.refreshClient.emit();

            _this3.spinnerSrvc.hide();
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
  },

  /***/
  "./src/app/services/utils/utils.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/utils/utils.service.ts ***!
    \*************************************************/

  /*! exports provided: UtilsService */

  /***/
  function srcAppServicesUtilsUtilsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilsService", function () {
      return UtilsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UtilsService =
    /*#__PURE__*/
    function () {
      function UtilsService() {
        _classCallCheck(this, UtilsService);
      }

      _createClass(UtilsService, [{
        key: "textTomachineWrite",
        value: function textTomachineWrite(param, componente) {
          var textoArray = [];
          textoArray = param.split('');
          textoArray.forEach(function (letra, i) {
            if (letra == '*') {
              letra = '<br>';
            }

            setTimeout(function () {
              componente.innerHTML += letra;
            }, 75 * i);
          });
        }
      }, {
        key: "iniciais",
        value: function iniciais(param) {
          var split = [];
          split = param.toString().split(' ');

          if (split.length > 1) {
            return this.iniciais = split[0].split('')[0].toUpperCase() + split[1].split('')[0].toUpperCase();
          }

          return this.iniciais = split[0].split('')[0];
        }
      }, {
        key: "populaColor",
        value: function populaColor() {
          return ["black", "black", "black", "black", "blue", "black", "black", "black", "blue", "black", "blue"];
        }
      }, {
        key: "populaColorOption",
        value: function populaColorOption() {
          return ["blue", "orange", "white", "purple", "pink", "green"];
        }
      }]);

      return UtilsService;
    }();

    UtilsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], UtilsService);
    /***/
  }
}]);
//# sourceMappingURL=clientes-cliente-detalhe-cliente-detalhe-cliente-module-es5.js.map