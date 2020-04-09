function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~projeto-detalhe-projeto-detalhe-projeto-module~projetos-projeto-detalhe-projeto-detalhe-proj~41c0e70e"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/projetos/projeto/detalhe-projeto/detalhe-projeto.page.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projetos/projeto/detalhe-projeto/detalhe-projeto.page.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjetosProjetoDetalheProjetoDetalheProjetoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-toolbar>\n  <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"/detalhe-cliente\"></ion-back-button>\n  </ion-buttons>\n</ion-toolbar>\n\n<ion-content>\n  <section id=\"sec-01\">\n    <div id=\"left\">\n      <div class=\"circle\" (click)=\"changeColor()\" [ngStyle]=\"{color: changeColorOptions[colorOption] }\" style=\"text-align: center;\">\n        <p\n          style=\"margin-left: auto; margin-right: auto; font-size: 25px;\" [ngStyle]=\"{'color':colors[color]}\">\n          {{iniciais}}\n        </p>\n      </div>\n    </div>\n\n    <div id=\"right\">\n      <div class=\"titulo-principal\" style=\"margin-top: 07px; text-align: left;\">\n        <!-- {{project.tituloProjeto}}<br />\n        {{project.cliente.nome}}<br />\n        {{project.cliente.email}}<br /> -->\n      </div>\n    </div>\n  </section>\n\n  <section id=\"sec-02\">\n    <div>\n      &nbsp;\n      <app-edita-projeto [projeto]=\"project\"></app-edita-projeto>\n    </div>\n  </section>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/projetos/projeto/edita-projeto/edita-projeto.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projetos/projeto/edita-projeto/edita-projeto.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjetosProjetoEditaProjetoEditaProjetoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-card>\n  <form [formGroup]=\"projectForm\">\n    <mat-form-field>\n      <input matInput placeholder=\"Projeto\" formControlName=\"tituloProjeto\" />\n    </mat-form-field>\n\n    <mat-form-field>\n      <input\n        matInput\n        placeholder=\"Descrição\"\n        formControlName=\"descricaoProjeto\"\n      />\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput placeholder=\"Valor\" formControlName=\"preco\" />\n    </mat-form-field>\n\n    <ion-card>\n      <ion-card-header>\n        Cliente\n      </ion-card-header>\n\n      <ion-row>\n        <ion-col size=\"6\">\n          <mat-form-field>\n            <input\n              matInput\n              placeholder=\"Cliente\"\n              readonly\n              formControlName=\"nmCliente\"\n            />\n          </mat-form-field>\n        </ion-col>\n\n        <ion-col size=\"6\">\n          <mat-form-field>\n            <input\n              matInput\n              placeholder=\"E-mail\"\n              readonly\n              formControlName=\"emailCliente\"\n            />\n          </mat-form-field>\n        </ion-col>\n      </ion-row>\n\n      <hr />\n\n      <ion-button *ngIf=\"!hasClient && editable\" (click)=\"alterarCliente()\" fill=\"outline\"\n        >Alterar Cliente</ion-button\n      >\n      <ion-button *ngIf=\"hasClient\" (click)=\"alterarCliente()\" fill=\"outline\"\n        >Cancelar</ion-button\n      >\n    </ion-card>\n\n    <app-cm-select\n      isDisabled=\"false\"\n      *ngIf=\"hasClient\"\n      label=\"Cliente\"\n      width=\"95%\"\n      formControlName=\"cliente\"\n      [selected]=\"projectForm.get('cliente').value\"\n      [lista]=\"listaClientes\"\n      view=\"nome\"\n      valueAtr=\"_id\"\n    >\n    </app-cm-select>\n\n    <ion-card>\n      <ion-icon\n        *ngIf=\"!editable\"\n        style=\"float: left\"\n        (click)=\"edit()\"\n        name=\"settings-outline\"\n      ></ion-icon>\n      <ion-icon\n        *ngIf=\"editable\"\n        style=\"float: left\"\n        (click)=\"cancel()\"\n        name=\"close-circle-outline\"\n      ></ion-icon>\n      <ion-icon\n        *ngIf=\"!editable\"\n        style=\"float: right\"\n        (click)=\"delete()\"\n        name=\"trash\"\n      ></ion-icon>\n    </ion-card>\n\n    <ion-button\n      *ngIf=\"editable\"\n      [disabled]=\"projectForm.valid\"\n      (click)=\"salvar()\"\n      fill=\"outline\"\n      >Salvar</ion-button\n    >\n  </form>\n</ion-card>\n";
    /***/
  },

  /***/
  "./src/app/projetos/projeto/detalhe-projeto/detalhe-projeto-routing.module.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/projetos/projeto/detalhe-projeto/detalhe-projeto-routing.module.ts ***!
    \************************************************************************************/

  /*! exports provided: DetalheProjetoPageRoutingModule */

  /***/
  function srcAppProjetosProjetoDetalheProjetoDetalheProjetoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetalheProjetoPageRoutingModule", function () {
      return DetalheProjetoPageRoutingModule;
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


    var _detalhe_projeto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./detalhe-projeto.page */
    "./src/app/projetos/projeto/detalhe-projeto/detalhe-projeto.page.ts");

    var routes = [{
      path: '',
      component: _detalhe_projeto_page__WEBPACK_IMPORTED_MODULE_3__["DetalheProjetoPage"]
    }];

    var DetalheProjetoPageRoutingModule = function DetalheProjetoPageRoutingModule() {
      _classCallCheck(this, DetalheProjetoPageRoutingModule);
    };

    DetalheProjetoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DetalheProjetoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/projetos/projeto/detalhe-projeto/detalhe-projeto.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/projetos/projeto/detalhe-projeto/detalhe-projeto.module.ts ***!
    \****************************************************************************/

  /*! exports provided: DetalheProjetoPageModule */

  /***/
  function srcAppProjetosProjetoDetalheProjetoDetalheProjetoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetalheProjetoPageModule", function () {
      return DetalheProjetoPageModule;
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


    var _detalhe_projeto_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./detalhe-projeto-routing.module */
    "./src/app/projetos/projeto/detalhe-projeto/detalhe-projeto-routing.module.ts");
    /* harmony import */


    var _detalhe_projeto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./detalhe-projeto.page */
    "./src/app/projetos/projeto/detalhe-projeto/detalhe-projeto.page.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _edita_projeto_edita_projeto_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../edita-projeto/edita-projeto.component */
    "./src/app/projetos/projeto/edita-projeto/edita-projeto.component.ts");

    var DetalheProjetoPageModule = function DetalheProjetoPageModule() {
      _classCallCheck(this, DetalheProjetoPageModule);
    };

    DetalheProjetoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _detalhe_projeto_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetalheProjetoPageRoutingModule"]],
      declarations: [_detalhe_projeto_page__WEBPACK_IMPORTED_MODULE_6__["DetalheProjetoPage"], _edita_projeto_edita_projeto_component__WEBPACK_IMPORTED_MODULE_8__["EditaProjetoComponent"]]
    })], DetalheProjetoPageModule);
    /***/
  },

  /***/
  "./src/app/projetos/projeto/detalhe-projeto/detalhe-projeto.page.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/projetos/projeto/detalhe-projeto/detalhe-projeto.page.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjetosProjetoDetalheProjetoDetalheProjetoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.circle {\n  text-align: center;\n  background-color: black;\n  border-radius: 50%;\n  width: 80px;\n  height: 80px;\n  overflow: hidden;\n  position: relative;\n  margin-left: 5px;\n  padding-left: 0px !important;\n}\n#left {\n  border: none;\n  width: 28%;\n  float: left;\n  height: 100px;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527F76));\n  background-image: linear-gradient(to bottom, white, #527F76);\n}\n#right {\n  border: none;\n  text-align: center;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527F76));\n  background-image: linear-gradient(to bottom, white, #527F76);\n  width: 72%;\n  height: 100px;\n  float: left;\n}\nsection#sec-01 {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 80px;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527F76));\n  background-image: linear-gradient(to bottom, white, #527F76);\n}\nsection#sec-02 {\n  padding-top: 20px;\n  height: 100%;\n  border-top-right-radius: 30px;\n  border-top-left-radius: 30px;\n  background-color: white;\n}\nion-content {\n  --ion-background-color: #527F76;\n}\nion-card {\n  background-color: white;\n}\n.titulo-principal {\n  max-width: 480px;\n  text-align: center;\n  margin: 60px auto;\n  font-family: \"Courier New\", Courier, monospace;\n  color: black;\n}\n.titulo-principal:after {\n  content: \"|\";\n  margin-left: 5px;\n  opacity: 1;\n  -webkit-animation: pisca 0.7s infinite;\n          animation: pisca 0.7s infinite;\n}\n/* Animação aplicada ao content referente a classe *.titulo-principal* resultando num efeito de cursor piscando. */\n@-webkit-keyframes pisca {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n}\n@keyframes pisca {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamV0b3MvcHJvamV0by9kZXRhbGhlLXByb2pldG8vZGV0YWxoZS1wcm9qZXRvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvamV0b3MvcHJvamV0by9kZXRhbGhlLXByb2pldG8vQzpcXFVzZXJzXFxsc3JhZWxcXERlc2t0b3BcXFByb2pldG9zXFxjbUFwcElvbmljNS9zcmNcXGFwcFxccHJvamV0b3NcXHByb2pldG9cXGRldGFsaGUtcHJvamV0b1xcZGV0YWxoZS1wcm9qZXRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FERUo7QUNDRTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSwyRkFBQTtFQUFBLDREQUFBO0FERUo7QUNFSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJGQUFBO0VBQUEsNERBQUE7RUFFQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QURBUjtBQ1VJO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFFQSwyRkFBQTtFQUFBLDREQUFBO0FEUlI7QUNZSTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtBRFRSO0FDY0k7RUFDSSwrQkFBQTtBRFhSO0FDY007RUFDRSx1QkFBQTtBRFhSO0FDY0k7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4Q0FBQTtFQUNBLFlBQUE7QURYUjtBQ2FJO0VBQ0MsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLHNDQUFBO1VBQUEsOEJBQUE7QURWTDtBQ1lJLGtIQUFBO0FBRUE7RUFDSTtJQUNJLFVBQUE7RURWVjtFQ1lNO0lBQ0ksVUFBQTtFRFZWO0FBQ0Y7QUNJSTtFQUNJO0lBQ0ksVUFBQTtFRFZWO0VDWU07SUFDSSxVQUFBO0VEVlY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Byb2pldG9zL3Byb2pldG8vZGV0YWxoZS1wcm9qZXRvL2RldGFsaGUtcHJvamV0by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY2lyY2xlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbiNsZWZ0IHtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMjglO1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsICM1MjdGNzYpO1xufVxuXG4jcmlnaHQge1xuICBib3JkZXI6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsICM1MjdGNzYpO1xuICB3aWR0aDogNzIlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuc2VjdGlvbiNzZWMtMDEge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogODBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsICM1MjdGNzYpO1xufVxuXG5zZWN0aW9uI3NlYy0wMiB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjNTI3Rjc2O1xufVxuXG5pb24tY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4udGl0dWxvLXByaW5jaXBhbCB7XG4gIG1heC13aWR0aDogNDgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiA2MHB4IGF1dG87XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udGl0dWxvLXByaW5jaXBhbDphZnRlciB7XG4gIGNvbnRlbnQ6IFwifFwiO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBvcGFjaXR5OiAxO1xuICBhbmltYXRpb246IHBpc2NhIDAuN3MgaW5maW5pdGU7XG59XG5cbi8qIEFuaW1hw6fDo28gYXBsaWNhZGEgYW8gY29udGVudCByZWZlcmVudGUgYSBjbGFzc2UgKi50aXR1bG8tcHJpbmNpcGFsKiByZXN1bHRhbmRvIG51bSBlZmVpdG8gZGUgY3Vyc29yIHBpc2NhbmRvLiAqL1xuQGtleWZyYW1lcyBwaXNjYSB7XG4gIDAlLCAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufSIsIi5jaXJjbGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tbGVmdDogMDVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAjbGVmdCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogMjglO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsICM1MjdGNzYpOyBcclxuICAgIC8vYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgI3JpZ2h0IHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCAjNTI3Rjc2KTsgXHJcbiAgICAgICAvLyBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICB3aWR0aDogNzIlO1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgLy9ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gI3NlYy1sb2dve1xyXG4gICAgLy8gICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCAjNTI3Rjc2KTsgXHJcbiAgIFxyXG4gICAgLy8gfVxyXG5cclxuICAgIHNlY3Rpb24jc2VjLTAxe1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgIzUyN0Y3Nik7IFxyXG4gICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNlY3Rpb24jc2VjLTAye1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNvbnRlbnR7XHJcbiAgICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzUyN0Y3NjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW9uLWNhcmR7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpdHVsby1wcmluY2lwYWx7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA0ODBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiA2MHB4IGF1dG87XHJcbiAgICAgICAgZm9udC1mYW1pbHk6J0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICAgIC50aXR1bG8tcHJpbmNpcGFsOmFmdGVye1xyXG4gICAgIGNvbnRlbnQ6ICd8JztcclxuICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgYW5pbWF0aW9uOiBwaXNjYSAuN3MgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICAvKiBBbmltYcOnw6NvIGFwbGljYWRhIGFvIGNvbnRlbnQgcmVmZXJlbnRlIGEgY2xhc3NlICoudGl0dWxvLXByaW5jaXBhbCogcmVzdWx0YW5kbyBudW0gZWZlaXRvIGRlIGN1cnNvciBwaXNjYW5kby4gKi9cclxuICAgIFxyXG4gICAgQGtleWZyYW1lcyBwaXNjYXtcclxuICAgICAgICAwJSwgMTAwJXtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgNTAle1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgXHJcblxyXG4gIl19 */";
    /***/
  },

  /***/
  "./src/app/projetos/projeto/detalhe-projeto/detalhe-projeto.page.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/projetos/projeto/detalhe-projeto/detalhe-projeto.page.ts ***!
    \**************************************************************************/

  /*! exports provided: DetalheProjetoPage */

  /***/
  function srcAppProjetosProjetoDetalheProjetoDetalheProjetoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetalheProjetoPage", function () {
      return DetalheProjetoPage;
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


    var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/utils/utils.service */
    "./src/app/services/utils/utils.service.ts");

    var DetalheProjetoPage =
    /*#__PURE__*/
    function () {
      function DetalheProjetoPage(route, router, util) {
        _classCallCheck(this, DetalheProjetoPage);

        this.route = route;
        this.router = router;
        this.util = util;
        this.colors = [];
        this.changeColorOptions = [];
        this.color = 0;
        this.colorOption = 0;
        this.colors = util.populaColor();
        this.changeColorOptions = util.populaColorOption();
      }

      _createClass(DetalheProjetoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          setInterval(function () {
            _this.color = _this.color + 1;
          }, 200);
          this.route.queryParams.subscribe(function (params) {
            var getNav = _this.router.getCurrentNavigation();

            if (getNav.extras.state) {
              _this.project = getNav.extras.state.valorParaEnviar;
              console.log("Dados", _this.project);
              var concatText = "";
              concatText += "".concat(_this.project.tituloProjeto, " * ").concat(_this.project.cliente.nome, " * ").concat(_this.project.cliente.email);
              var utilsSrvc = new _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"]();
              var componente = document.querySelector(".titulo-principal");
              utilsSrvc.textTomachineWrite(concatText, componente);
              _this.iniciais = utilsSrvc.iniciais(_this.project.cliente.nome);
            }
          });
        }
      }, {
        key: "changeColor",
        value: function changeColor() {
          this.colorOption = (this.colorOption + 1) % this.changeColorOptions.length;
        }
      }]);

      return DetalheProjetoPage;
    }();

    DetalheProjetoPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"]
      }];
    };

    DetalheProjetoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-detalhe-projeto",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./detalhe-projeto.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/projetos/projeto/detalhe-projeto/detalhe-projeto.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./detalhe-projeto.page.scss */
      "./src/app/projetos/projeto/detalhe-projeto/detalhe-projeto.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"]])], DetalheProjetoPage);
    /***/
  },

  /***/
  "./src/app/projetos/projeto/edita-projeto/edita-projeto.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/projetos/projeto/edita-projeto/edita-projeto.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjetosProjetoEditaProjetoEditaProjetoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  background-color: white;\n}\n\nmat-form-field, mat-select {\n  width: 95%;\n  padding-left: 10px;\n}\n\nion-button {\n  width: 98%;\n}\n\nion-icon {\n  font-size: 40px;\n  color: #4f413b;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\nion-card-header {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamV0b3MvcHJvamV0by9lZGl0YS1wcm9qZXRvL0M6XFxVc2Vyc1xcbHNyYWVsXFxEZXNrdG9wXFxQcm9qZXRvc1xcY21BcHBJb25pYzUvc3JjXFxhcHBcXHByb2pldG9zXFxwcm9qZXRvXFxlZGl0YS1wcm9qZXRvXFxlZGl0YS1wcm9qZXRvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9qZXRvcy9wcm9qZXRvL2VkaXRhLXByb2pldG8vZWRpdGEtcHJvamV0by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDTTtFQUNFLHVCQUFBO0FDQVI7O0FERUk7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUNDUjs7QURNSTtFQUNJLFVBQUE7QUNIUjs7QURPRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0pKOztBRE9BO0VBQ0ksa0JBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL3Byb2pldG9zL3Byb2pldG8vZWRpdGEtcHJvamV0by9lZGl0YS1wcm9qZXRvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICAgIGlvbi1jYXJke1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgbWF0LWZvcm0tZmllbGQsIG1hdC1zZWxlY3R7XHJcbiAgICAgICAgd2lkdGg6IDk1JTsgXHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGRpdntcclxuICAgIC8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgaW9uLWJ1dHRvbntcclxuICAgICAgICB3aWR0aDogOTglO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICBpb24taWNvbntcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGNvbG9yOiAjNGY0MTNiO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkLWhlYWRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSIsImlvbi1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbm1hdC1mb3JtLWZpZWxkLCBtYXQtc2VsZWN0IHtcbiAgd2lkdGg6IDk1JTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgd2lkdGg6IDk4JTtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiAjNGY0MTNiO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/projetos/projeto/edita-projeto/edita-projeto.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/projetos/projeto/edita-projeto/edita-projeto.component.ts ***!
    \***************************************************************************/

  /*! exports provided: EditaProjetoComponent */

  /***/
  function srcAppProjetosProjetoEditaProjetoEditaProjetoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditaProjetoComponent", function () {
      return EditaProjetoComponent;
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


    var _models_servicos_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../models/servicos-model */
    "./src/app/models/servicos-model.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_cliente_service_cliente_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/cliente-service/cliente.service */
    "./src/app/services/cliente-service/cliente.service.ts");
    /* harmony import */


    var _configHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../configHelper */
    "./src/app/configHelper.ts");
    /* harmony import */


    var _services_alert_service_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../services/alert-service/alert.service */
    "./src/app/services/alert-service/alert.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../services/refresh-page.service */
    "./src/app/services/refresh-page.service.ts");
    /* harmony import */


    var _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../services/spinner-service/spinner.service */
    "./src/app/services/spinner-service/spinner.service.ts");
    /* harmony import */


    var _services_projeto_service_projeto_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../services/projeto-service/projeto.service */
    "./src/app/services/projeto-service/projeto.service.ts");

    var EditaProjetoComponent =
    /*#__PURE__*/
    function () {
      function EditaProjetoComponent(fb, clienteSrvc, alertSrvc, router, refreshSrvc, spinnerSrvc, projetoSrvc) {
        _classCallCheck(this, EditaProjetoComponent);

        this.fb = fb;
        this.clienteSrvc = clienteSrvc;
        this.alertSrvc = alertSrvc;
        this.router = router;
        this.refreshSrvc = refreshSrvc;
        this.spinnerSrvc = spinnerSrvc;
        this.projetoSrvc = projetoSrvc;
        this.hasClient = false;
      }

      _createClass(EditaProjetoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.projectForm = this.fb.group({
            _id: this.projeto._id,
            tituloProjeto: [this.projeto.tituloProjeto, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            descricaoProjeto: [this.projeto.descricaoProjeto, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            preco: [this.projeto.preco, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            cliente: [this.projeto.cliente._id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            nmCliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({
              value: this.projeto.cliente.nome,
              disabled: true
            }),
            emailCliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({
              value: this.projeto.cliente.email,
              disabled: true
            }),
            telCliente: [this.projeto.cliente.tel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
          var userData = JSON.parse(localStorage.getItem(_configHelper__WEBPACK_IMPORTED_MODULE_5__["configHelper"].storageKeys.user));
          this.clienteSrvc.getClientsByIdUser(userData._id).subscribe(function (clientes) {
            _this2.listaClientes = clientes;
          });
          this.projectForm.disable();
        }
      }, {
        key: "alterarCliente",
        value: function alterarCliente() {
          this.hasClient = !this.hasClient;

          if (this.hasClient == false) {
            this.projectForm = this.fb.group({
              _id: this.projeto._id,
              tituloProjeto: [this.projeto.tituloProjeto, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              descricaoProjeto: [this.projeto.descricaoProjeto, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              preco: [this.projeto.preco, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              cliente: [this.projeto.cliente._id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              nmCliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({
                value: this.projeto.cliente.nome,
                disabled: true
              }),
              emailCliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({
                value: this.projeto.cliente.email,
                disabled: true
              }),
              telCliente: [this.projeto.cliente.tel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            });
          }
        }
      }, {
        key: "edit",
        value: function edit() {
          this.projectForm.enable();
          this.editable = true;
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.projectForm.disable();
          this.editable = false;
        }
      }, {
        key: "delete",
        value: function _delete() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.alertSrvc.confirm("Deseja excluir o cliente ".concat(this.projectForm.get("tituloProjeto").value, " ?"), function () {
                      _this3.projetoSrvc.deleteProject(_this3.projectForm.get("_id").value).subscribe(function () {
                        _this3.alertSrvc.toast("O Projeto ".concat(_this3.projectForm.get("tituloProjeto").value, " foi excluido com sucesso. "), 2000, "top");

                        _this3.router.navigate(["/tabs/projetos"]);

                        _this3.refreshSrvc.refreshProject.emit();

                        _this3.spinnerSrvc.hide();
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
      }, {
        key: "salvar",
        value: function salvar() {
          var _this4 = this;

          var _a = this.projectForm.value,
              nmCliente = _a.nmCliente,
              emailCliente = _a.emailCliente,
              teste = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_a, ["nmCliente", "emailCliente"]);
          console.log("Nova lista", teste);
          this.projetoSrvc.updateProject(this.projectForm.get("_id").value, this.projectForm.value).subscribe(function () {
            _this4.alertSrvc.toast("Projeto atualizado com sucesso.", 2000, "top");

            _this4.router.navigate(["/tabs/projetos"]);

            _this4.refreshSrvc.refreshProject.emit();

            _this4.spinnerSrvc.hide();
          });
        }
      }]);

      return EditaProjetoComponent;
    }();

    EditaProjetoComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _services_cliente_service_cliente_service__WEBPACK_IMPORTED_MODULE_4__["ClienteService"]
      }, {
        type: _services_alert_service_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_8__["RefreshPageService"]
      }, {
        type: _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_9__["SpinnerService"]
      }, {
        type: _services_projeto_service_projeto_service__WEBPACK_IMPORTED_MODULE_10__["ProjetoService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_servicos_model__WEBPACK_IMPORTED_MODULE_2__["ProjetoModel"])], EditaProjetoComponent.prototype, "projeto", void 0);
    EditaProjetoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-edita-projeto",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edita-projeto.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/projetos/projeto/edita-projeto/edita-projeto.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edita-projeto.component.scss */
      "./src/app/projetos/projeto/edita-projeto/edita-projeto.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _services_cliente_service_cliente_service__WEBPACK_IMPORTED_MODULE_4__["ClienteService"], _services_alert_service_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_8__["RefreshPageService"], _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_9__["SpinnerService"], _services_projeto_service_projeto_service__WEBPACK_IMPORTED_MODULE_10__["ProjetoService"]])], EditaProjetoComponent);
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
//# sourceMappingURL=default~projeto-detalhe-projeto-detalhe-projeto-module~projetos-projeto-detalhe-projeto-detalhe-proj~41c0e70e-es5.js.map