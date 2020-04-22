(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["clientes-cliente-detalhe-cliente-detalhe-cliente-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/cliente/detalhe-cliente/detalhe-cliente.page.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/cliente/detalhe-cliente/detalhe-cliente.page.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/detalhe-cliente\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n<ion-content [ngClass]=\"class\">\r\n\r\n  <section [ngClass]=\"class\" >\r\n\r\n  <div [ngStyle]=\"leftStyle\">\r\n    <div class=\"circle\" (click)=\"changeColor()\" [ngStyle]=\"{color: changeColorOptions[colorOption] }\" style=\"text-align: center;\">\r\n      <p style=\"margin-left: auto; margin-right: auto; font-size: 25px;\" [ngStyle]=\"{'color':colors[color]}\">\r\n      {{iniciais}}\r\n    </p>   \r\n    </div>\r\n  </div>  \r\n\r\n  <div [ngStyle]=\"rightStyle\">\r\n    <div class=\"titulo-principal\" [ngStyle]=\"{ color: fontColor}\" style=\"margin-top: 07px; text-align: left;\">\r\n</div>\r\n  </div>\r\n\r\n  </section>\r\n\r\n  <section id=\"sec-02\">\r\n<div>\r\n&nbsp;\r\n<app-edita-cliente [cliente]=\"cliente\"></app-edita-cliente>\r\n</div>\r\n</section>\r\n</ion-content>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/cliente/edita-cliente/edita-cliente.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/cliente/edita-cliente/edita-cliente.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card>\r\n  <ion-card-header>\r\n    Dados do cliente    \r\n  </ion-card-header>\r\n  <ion-card-content>\r\n     <form [formGroup]=\"clientForm\">\r\n\r\n    \r\n    <mat-form-field style=\"width: 100%;\">\r\n      <input matInput placeholder=\"Nome\" formControlName=\"nome\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"Telefone\" formControlName=\"tel\">\r\n    </mat-form-field>\r\n\r\n      <mat-form-field>\r\n      <input matInput placeholder=\"E-mail\" formControlName=\"email\">\r\n    </mat-form-field>\r\n\r\n      <mat-form-field>\r\n      <input matInput placeholder=\"Cep\" formControlName=\"cep\">\r\n    </mat-form-field>\r\n  \r\n      <mat-form-field>\r\n      <input matInput placeholder=\"Rua\" formControlName=\"endereco\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"Bairro\" formControlName=\"bairro\">\r\n    </mat-form-field>\r\n          <mat-form-field>\r\n      <input matInput placeholder=\"Cidade\" formControlName=\"cidade\">\r\n    </mat-form-field>\r\n  \r\n    <mat-form-field>\r\n      <input matInput placeholder=\"Estado\" formControlName=\"estado\">\r\n    </mat-form-field>\r\n\r\n<h2>Projetos</h2>\r\n\r\n<mat-accordion>\r\n  <mat-expansion-panel *ngFor=\"let item of projectList\">\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        Projeto: {{item.tituloProjeto}}\r\n      </mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n    <p> Descricao: {{item.descricaoProjeto}}</p> <br/>\r\n    <p> Preco: {{item.preco}}</p> <br/>\r\n    <p> Data: {{item.data}}</p> <br/>\r\n  </mat-expansion-panel>\r\n</mat-accordion>\r\n    \r\n\r\n    <ion-icon *ngIf=\"!editable\" style=\"float: left\" (click)=\"edit()\" name=\"settings-outline\"></ion-icon>\r\n    <ion-icon *ngIf=\"editable\" style=\"float: left\" (click)=\"cancel()\" name=\"close-circle-outline\"></ion-icon>\r\n    <ion-icon *ngIf=\"!editable\" style=\"float: right\" (click)=\"delete()\" name=\"trash\"></ion-icon>\r\n\r\n    \r\n<!-- </ion-row> -->\r\n  </form>\r\n  </ion-card-content>\r\n</ion-card>\r\n\r\n<ion-card *ngIf=\"editable\" style=\"height: 50px; padding-top: 07px;\" (click)=\"salvar()\">\r\n  <ion-card-content style=\"padding-top: 5px; padding-bottom: 0px; \">\r\n    \r\n<label>Editar cliente</label><ion-note slot=\"end\">\r\n  <ion-icon style=\"font-size: 20px; float: right;\" name=\"build-outline\"></ion-icon> </ion-note>\r\n      <br/>\r\n  </ion-card-content>\r\n</ion-card>");

/***/ }),

/***/ "./src/app/clientes/cliente/detalhe-cliente/detalhe-cliente-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/clientes/cliente/detalhe-cliente/detalhe-cliente-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: DetalheClientePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalheClientePageRoutingModule", function() { return DetalheClientePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _detalhe_cliente_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detalhe-cliente.page */ "./src/app/clientes/cliente/detalhe-cliente/detalhe-cliente.page.ts");




const routes = [
    {
        path: '',
        component: _detalhe_cliente_page__WEBPACK_IMPORTED_MODULE_3__["DetalheClientePage"]
    }
];
let DetalheClientePageRoutingModule = class DetalheClientePageRoutingModule {
};
DetalheClientePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetalheClientePageRoutingModule);



/***/ }),

/***/ "./src/app/clientes/cliente/detalhe-cliente/detalhe-cliente.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/clientes/cliente/detalhe-cliente/detalhe-cliente.module.ts ***!
  \****************************************************************************/
/*! exports provided: DetalheClientePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalheClientePageModule", function() { return DetalheClientePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _detalhe_cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detalhe-cliente-routing.module */ "./src/app/clientes/cliente/detalhe-cliente/detalhe-cliente-routing.module.ts");
/* harmony import */ var _detalhe_cliente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detalhe-cliente.page */ "./src/app/clientes/cliente/detalhe-cliente/detalhe-cliente.page.ts");
/* harmony import */ var _edita_cliente_edita_cliente_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../edita-cliente/edita-cliente.component */ "./src/app/clientes/cliente/edita-cliente/edita-cliente.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");









let DetalheClientePageModule = class DetalheClientePageModule {
};
DetalheClientePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detalhe_cliente_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetalheClientePageRoutingModule"]
        ],
        declarations: [_detalhe_cliente_page__WEBPACK_IMPORTED_MODULE_6__["DetalheClientePage"], _edita_cliente_edita_cliente_component__WEBPACK_IMPORTED_MODULE_7__["EditaClienteComponent"]]
    })
], DetalheClientePageModule);



/***/ }),

/***/ "./src/app/clientes/cliente/detalhe-cliente/detalhe-cliente.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/clientes/cliente/detalhe-cliente/detalhe-cliente.page.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.circle {\n  text-align: center;\n  background-color: black;\n  border-radius: 50%;\n  width: 80px;\n  height: 80px;\n  overflow: hidden;\n  position: relative;\n  margin-left: 5px;\n  padding-left: 0px !important;\n}\n#left {\n  border: none;\n  width: 28%;\n  float: left;\n  height: 100px;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527F76));\n  background-image: linear-gradient(to bottom, white, #527F76);\n}\n#right {\n  border: none;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527F76));\n  background-image: linear-gradient(to bottom, white, #527F76);\n  width: 72%;\n  height: 100px;\n  float: left;\n}\nsection#sec-01 {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 80px;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527F76));\n  background-image: linear-gradient(to bottom, white, #527F76);\n}\n.origin {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 80px;\n  --ion-background-color: #527F76;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527F76));\n  background-image: linear-gradient(to bottom, white, #527F76);\n}\n.purple {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 80px;\n  --ion-background-color: purple;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(purple));\n  background-image: linear-gradient(to bottom, white, purple);\n}\n.blue {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 80px;\n  --ion-background-color: blue;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(blue));\n  background-image: linear-gradient(to bottom, white, blue);\n}\n.black {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 80px;\n  --ion-background-color: black;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(black));\n  background-image: linear-gradient(to bottom, white, black);\n}\nsection#sec-02 {\n  padding-top: 20px;\n  height: 100%;\n  border-top-right-radius: 30px;\n  border-top-left-radius: 30px;\n  background-color: white;\n}\nion-content {\n  --ion-background-color: #527F76;\n}\nion-card {\n  background-color: white;\n}\n.titulo-principal {\n  max-width: 480px;\n  text-align: center;\n  margin: 60px auto;\n  font-family: \"Courier New\", Courier, monospace;\n  color: black;\n}\n.titulo-principal:after {\n  content: \"|\";\n  margin-left: 5px;\n  opacity: 1;\n  -webkit-animation: pisca 0.7s infinite;\n          animation: pisca 0.7s infinite;\n}\n/* Animação aplicada ao content referente a classe *.titulo-principal* resultando num efeito de cursor piscando. */\n@-webkit-keyframes pisca {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n}\n@keyframes pisca {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50ZXMvY2xpZW50ZS9kZXRhbGhlLWNsaWVudGUvZGV0YWxoZS1jbGllbnRlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2xpZW50ZXMvY2xpZW50ZS9kZXRhbGhlLWNsaWVudGUvQzpcXFVzZXJzXFxpZ29tZXNsYVxcRG9jdW1lbnRzXFxpb25pY1xcY21BcHBJb25pYzUvc3JjXFxhcHBcXGNsaWVudGVzXFxjbGllbnRlXFxkZXRhbGhlLWNsaWVudGVcXGRldGFsaGUtY2xpZW50ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBREVKO0FDQ0U7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsMkZBQUE7RUFBQSw0REFBQTtBREVKO0FDRUk7RUFDSSxZQUFBO0VBRUEsMkZBQUE7RUFBQSw0REFBQTtFQUVBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBRERSO0FDV0k7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUVBLDJGQUFBO0VBQUEsNERBQUE7QURUUjtBQ2FJO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUVBLFlBQUE7RUFFQSwrQkFBQTtFQUNBLDJGQUFBO0VBQUEsNERBQUE7QURaUjtBQ2lCSztFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBRUEsOEJBQUE7RUFDQSwwRkFBQTtFQUFBLDJEQUFBO0FEZlA7QUNtQks7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBRUEsWUFBQTtFQUVBLDRCQUFBO0VBQ0Esd0ZBQUE7RUFBQSx5REFBQTtBRGxCUDtBQ3NCSztFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSxZQUFBO0VBRUEsNkJBQUE7RUFDQSx5RkFBQTtFQUFBLDBEQUFBO0FEckJQO0FDeUJJO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLHVCQUFBO0FEdEJSO0FDMkJJO0VBQ0ksK0JBQUE7QUR4QlI7QUMyQk07RUFDRSx1QkFBQTtBRHhCUjtBQzBCSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDhDQUFBO0VBQ0EsWUFBQTtBRHZCUjtBQ3lCSTtFQUNDLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxzQ0FBQTtVQUFBLDhCQUFBO0FEdEJMO0FDd0JJLGtIQUFBO0FBRUE7RUFDSTtJQUNJLFVBQUE7RUR0QlY7RUN3Qk07SUFDSSxVQUFBO0VEdEJWO0FBQ0Y7QUNnQkk7RUFDSTtJQUNJLFVBQUE7RUR0QlY7RUN3Qk07SUFDSSxVQUFBO0VEdEJWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jbGllbnRlcy9jbGllbnRlL2RldGFsaGUtY2xpZW50ZS9kZXRhbGhlLWNsaWVudGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmNpcmNsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4jbGVmdCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDI4JTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCAjNTI3Rjc2KTtcbn1cblxuI3JpZ2h0IHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgIzUyN0Y3Nik7XG4gIHdpZHRoOiA3MiU7XG4gIGhlaWdodDogMTAwcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5zZWN0aW9uI3NlYy0wMSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA4MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgIzUyN0Y3Nik7XG59XG5cbi5vcmlnaW4ge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogODBweDtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzUyN0Y3NjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsICM1MjdGNzYpO1xufVxuXG4ucHVycGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDgwcHg7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsIHB1cnBsZSk7XG59XG5cbi5ibHVlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDgwcHg7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCBibHVlKTtcbn1cblxuLmJsYWNrIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDgwcHg7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgYmxhY2spO1xufVxuXG5zZWN0aW9uI3NlYy0wMiB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjNTI3Rjc2O1xufVxuXG5pb24tY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4udGl0dWxvLXByaW5jaXBhbCB7XG4gIG1heC13aWR0aDogNDgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiA2MHB4IGF1dG87XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udGl0dWxvLXByaW5jaXBhbDphZnRlciB7XG4gIGNvbnRlbnQ6IFwifFwiO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBvcGFjaXR5OiAxO1xuICBhbmltYXRpb246IHBpc2NhIDAuN3MgaW5maW5pdGU7XG59XG5cbi8qIEFuaW1hw6fDo28gYXBsaWNhZGEgYW8gY29udGVudCByZWZlcmVudGUgYSBjbGFzc2UgKi50aXR1bG8tcHJpbmNpcGFsKiByZXN1bHRhbmRvIG51bSBlZmVpdG8gZGUgY3Vyc29yIHBpc2NhbmRvLiAqL1xuQGtleWZyYW1lcyBwaXNjYSB7XG4gIDAlLCAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufSIsIi5jaXJjbGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tbGVmdDogMDVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAjbGVmdCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogMjglO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsICM1MjdGNzYpOyBcclxuICAgIC8vYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgI3JpZ2h0IHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsICM1MjdGNzYpOyBcclxuICAgICAgIC8vIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgICAgIHdpZHRoOiA3MiU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAvL2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyAjc2VjLWxvZ297XHJcbiAgICAvLyAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsICM1MjdGNzYpOyBcclxuICAgXHJcbiAgICAvLyB9XHJcblxyXG4gICAgc2VjdGlvbiNzZWMtMDF7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCAjNTI3Rjc2KTsgXHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICAub3JpZ2lue1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIC8vIGhlaWdodDogMzUlO1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjNTI3Rjc2O1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCAjNTI3Rjc2KTsgXHJcbiAgICAgXHJcbiAgICAgfVxyXG4gICAgIFxyXG4gICAgIFxyXG4gICAgIC5wdXJwbGV7XHJcbiAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XHJcbiAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgcHVycGxlKTsgXHJcbiAgICAgXHJcbiAgICAgfVxyXG4gICAgIFxyXG4gICAgIC5ibHVle1xyXG4gICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgIC8vIGhlaWdodDogMzUlO1xyXG4gICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsIGJsdWUpOyBcclxuICAgICBcclxuICAgICB9XHJcbiAgICAgXHJcbiAgICAgLmJsYWNre1xyXG4gICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgIC8vIGhlaWdodDogMzUlO1xyXG4gICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCBibGFjayk7IFxyXG4gICAgIFxyXG4gICAgIH1cclxuICAgIFxyXG4gICAgc2VjdGlvbiNzZWMtMDJ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpb24tY29udGVudHtcclxuICAgICAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjNTI3Rjc2O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpb24tY2FyZHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIC50aXR1bG8tcHJpbmNpcGFse1xyXG4gICAgICAgIG1heC13aWR0aDogNDgwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogNjBweCBhdXRvO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OidDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbiAgICAudGl0dWxvLXByaW5jaXBhbDphZnRlcntcclxuICAgICBjb250ZW50OiAnfCc7XHJcbiAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICBvcGFjaXR5OiAxO1xyXG4gICAgIGFuaW1hdGlvbjogcGlzY2EgLjdzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgLyogQW5pbWHDp8OjbyBhcGxpY2FkYSBhbyBjb250ZW50IHJlZmVyZW50ZSBhIGNsYXNzZSAqLnRpdHVsby1wcmluY2lwYWwqIHJlc3VsdGFuZG8gbnVtIGVmZWl0byBkZSBjdXJzb3IgcGlzY2FuZG8uICovXHJcbiAgICBcclxuICAgIEBrZXlmcmFtZXMgcGlzY2F7XHJcbiAgICAgICAgMCUsIDEwMCV7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDUwJXtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgXHJcblxyXG4gIl19 */");

/***/ }),

/***/ "./src/app/clientes/cliente/detalhe-cliente/detalhe-cliente.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/clientes/cliente/detalhe-cliente/detalhe-cliente.page.ts ***!
  \**************************************************************************/
/*! exports provided: DetalheClientePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalheClientePage", function() { return DetalheClientePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_projeto_service_projeto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/projeto-service/projeto.service */ "./src/app/services/projeto-service/projeto.service.ts");
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/utils/utils.service */ "./src/app/services/utils/utils.service.ts");
/* harmony import */ var src_app_configHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/configHelper */ "./src/app/configHelper.ts");







let DetalheClientePage = class DetalheClientePage {
    constructor(route, router, navCtrl, projetoSrvc, util) {
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
        this.class = localStorage.getItem(src_app_configHelper__WEBPACK_IMPORTED_MODULE_6__["configHelper"].storageKeys.color) != null ?
            localStorage.getItem(src_app_configHelper__WEBPACK_IMPORTED_MODULE_6__["configHelper"].storageKeys.color) : 'origin';
        this.leftStyle = {
            'border': 'none',
            'width': '28%',
            'float': 'left',
            'height': '100px',
            'background-image': `linear-gradient(to bottom, white, ${this.class})`
        };
        this.rightStyle = {
            'border': 'none',
            'background-image': `linear-gradient(to bottom, white, ${this.class})`,
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
    ngOnInit() {
        console.log('Style', this.rightStyle);
        setInterval(() => {
            this.color = this.color + 1;
        }, 200);
        this.route.queryParams.subscribe((params) => {
            const getNav = this.router.getCurrentNavigation();
            if (getNav.extras.state) {
                this.cliente = getNav.extras.state.valorParaEnviar;
                console.log('Dados', this.cliente);
            }
            let concatText = '';
            concatText += `${this.cliente.nome} * ${this.cliente.email} * ${this.cliente.tel}`;
            const componente = document.querySelector('.titulo-principal');
            const utilsSrvc = new _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"]();
            utilsSrvc.textTomachineWrite(concatText, componente);
            this.iniciais = utilsSrvc.iniciais(this.cliente.nome);
            console.log('iniciais', this.iniciais);
        });
    }
    changeColor() {
        this.colorOption = (this.colorOption + 1) % this.changeColorOptions.length;
    }
    voltar() {
        this.navCtrl.pop();
    }
    salvar(event) {
        console.log('Evento', event);
    }
};
DetalheClientePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _services_projeto_service_projeto_service__WEBPACK_IMPORTED_MODULE_4__["ProjetoService"] },
    { type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"] }
];
DetalheClientePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detalhe-cliente',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detalhe-cliente.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/cliente/detalhe-cliente/detalhe-cliente.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detalhe-cliente.page.scss */ "./src/app/clientes/cliente/detalhe-cliente/detalhe-cliente.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _services_projeto_service_projeto_service__WEBPACK_IMPORTED_MODULE_4__["ProjetoService"],
        _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"]])
], DetalheClientePage);



/***/ }),

/***/ "./src/app/clientes/cliente/edita-cliente/edita-cliente.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/clientes/cliente/edita-cliente/edita-cliente.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-form-field {\n  width: 100%;\n}\n\nion-card {\n  background-color: white;\n}\n\nion-content {\n  --ion-background-color: white !important;\n}\n\nlabel {\n  color: black;\n  font-size: 16px;\n}\n\nion-icon {\n  font-size: 40px;\n  color: #4f413b;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\nh2 {\n  text-align: center;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50ZXMvY2xpZW50ZS9lZGl0YS1jbGllbnRlL0M6XFxVc2Vyc1xcaWdvbWVzbGFcXERvY3VtZW50c1xcaW9uaWNcXGNtQXBwSW9uaWM1L3NyY1xcYXBwXFxjbGllbnRlc1xcY2xpZW50ZVxcZWRpdGEtY2xpZW50ZVxcZWRpdGEtY2xpZW50ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2xpZW50ZXMvY2xpZW50ZS9lZGl0YS1jbGllbnRlL2VkaXRhLWNsaWVudGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksd0NBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUU7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDTjs7QURFRTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudGVzL2NsaWVudGUvZWRpdGEtY2xpZW50ZS9lZGl0YS1jbGllbnRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgbGFiZWx7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuICBpb24taWNvbntcclxuICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICBjb2xvcjogIzRmNDEzYjtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcblxyXG4gIGgye1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA1cHg7XHJcbiAgfSIsIm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxubGFiZWwge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiAjNGY0MTNiO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5oMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/clientes/cliente/edita-cliente/edita-cliente.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/clientes/cliente/edita-cliente/edita-cliente.component.ts ***!
  \***************************************************************************/
/*! exports provided: EditaClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditaClienteComponent", function() { return EditaClienteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_cliente_service_cliente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/cliente-service/cliente.service */ "./src/app/services/cliente-service/cliente.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/refresh-page.service */ "./src/app/services/refresh-page.service.ts");
/* harmony import */ var _services_alert_service_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/alert-service/alert.service */ "./src/app/services/alert-service/alert.service.ts");
/* harmony import */ var _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/spinner-service/spinner.service */ "./src/app/services/spinner-service/spinner.service.ts");
/* harmony import */ var _services_projeto_service_projeto_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/projeto-service/projeto.service */ "./src/app/services/projeto-service/projeto.service.ts");









let EditaClienteComponent = class EditaClienteComponent {
    constructor(fb, clienteSrvc, router, refreshSrvc, alertSrvc, spinnerSrvc, projetoSrvc) {
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
        this.projetoSrvc.projectByClient(this.cliente._id).subscribe(projects => {
            this.projectList = projects;
            console.log('projetos do cliente', this.projectList);
            this.spinnerSrvc.hide();
        });
    }
    salvar() {
        this.clienteSrvc
            .alterClient(this.clientForm.value, this.clientForm.get('_id').value)
            .subscribe(data => {
            this.refreshSrvc.refreshClient.emit();
            this.spinnerSrvc.hide();
            this.router.navigate(['/tabs/tabs/clientes']);
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
    delete() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.alertSrvc.confirm(`Deseja excluir o cliente ${this.clientForm.get('nome').value} ?`, () => {
                this.clienteSrvc
                    .deleteClient(this.clientForm.get('_id').value)
                    .subscribe(() => {
                    this.alertSrvc.toast(`O cliente ${this.clientForm.get('nome').value} foi excluido com sucesso. `, 2000, 'top');
                    this.router.navigate(['/tabs/clientes']);
                    this.refreshSrvc.refreshClient.emit();
                    this.spinnerSrvc.hide();
                });
            });
        });
    }
};
EditaClienteComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_cliente_service_cliente_service__WEBPACK_IMPORTED_MODULE_3__["ClienteService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_5__["RefreshPageService"] },
    { type: _services_alert_service_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_7__["SpinnerService"] },
    { type: _services_projeto_service_projeto_service__WEBPACK_IMPORTED_MODULE_8__["ProjetoService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], EditaClienteComponent.prototype, "cliente", void 0);
EditaClienteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edita-cliente',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edita-cliente.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/cliente/edita-cliente/edita-cliente.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edita-cliente.component.scss */ "./src/app/clientes/cliente/edita-cliente/edita-cliente.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_cliente_service_cliente_service__WEBPACK_IMPORTED_MODULE_3__["ClienteService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_5__["RefreshPageService"],
        _services_alert_service_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
        _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_7__["SpinnerService"],
        _services_projeto_service_projeto_service__WEBPACK_IMPORTED_MODULE_8__["ProjetoService"]])
], EditaClienteComponent);



/***/ }),

/***/ "./src/app/services/alert-service/alert.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/alert-service/alert.service.ts ***!
  \*********************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let AlertService = class AlertService {
    constructor(alertCtrl, toastCtrl) {
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
    }
    confirm(message, callback) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: "Excluir?",
                message,
                buttons: [
                    {
                        text: "Cancelar",
                        role: "cancel",
                        cssClass: "secondary",
                        handler: blah => {
                            console.log("Confirm Cancel: blah");
                        }
                    },
                    {
                        text: "Ok",
                        handler: () => {
                            callback();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    toast(message, duration, position) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: message,
                duration: duration,
                position: position
            });
            toast.present();
        });
    }
};
AlertService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
], AlertService);



/***/ })

}]);
//# sourceMappingURL=clientes-cliente-detalhe-cliente-detalhe-cliente-module-es2015.js.map