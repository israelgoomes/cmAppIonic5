(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~projeto-detalhe-projeto-detalhe-projeto-module~projetos-projeto-detalhe-projeto-detalhe-proj~41c0e70e"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projetos/projeto/detalhe-projeto/detalhe-projeto.page.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projetos/projeto/detalhe-projeto/detalhe-projeto.page.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar>\n  <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"/detalhe-cliente\"></ion-back-button>\n  </ion-buttons>\n</ion-toolbar>\n\n<ion-content [ngClass]=\"class\">\n  <section [ngClass]=\"class\">\n    <div [ngStyle]=\"leftStyle\">\n      <div class=\"circle\" (click)=\"changeColor()\" [ngStyle]=\"{color: changeColorOptions[colorOption] }\" style=\"text-align: center;\">\n        <p\n          style=\"margin-left: auto; margin-right: auto; font-size: 25px;\" [ngStyle]=\"{'color':colors[color]}\">\n          {{iniciais}}\n        </p>\n      </div>\n    </div>\n\n    <div [ngStyle]=\"rightStyle\">\n      <div class=\"titulo-principal\" style=\"margin-top: 07px; text-align: left;\">\n      </div>\n    </div>\n  </section>\n\n  <section id=\"sec-02\">\n    <div>\n      &nbsp;\n      <app-edita-projeto [projeto]=\"project\"></app-edita-projeto>\n    </div>\n  </section>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projetos/projeto/edita-projeto/edita-projeto.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projetos/projeto/edita-projeto/edita-projeto.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card>\n  <form [formGroup]=\"projectForm\">\n    <mat-form-field>\n      <input matInput placeholder=\"Projeto\" formControlName=\"tituloProjeto\" />\n    </mat-form-field>\n\n    <mat-form-field>\n      <input\n        matInput\n        placeholder=\"Descrição\"\n        formControlName=\"descricaoProjeto\"\n      />\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput placeholder=\"Valor\" formControlName=\"preco\" />\n    </mat-form-field>\n\n    <ion-card>\n      <ion-card-header>\n        Cliente\n      </ion-card-header>\n\n      <ion-row>\n        <ion-col size=\"6\">\n          <mat-form-field>\n            <input\n              matInput\n              placeholder=\"Cliente\"\n              readonly\n              formControlName=\"nmCliente\"\n            />\n          </mat-form-field>\n        </ion-col>\n\n        <ion-col size=\"6\">\n          <mat-form-field>\n            <input\n              matInput\n              placeholder=\"E-mail\"\n              readonly\n              formControlName=\"emailCliente\"\n            />\n          </mat-form-field>\n        </ion-col>\n      </ion-row>\n\n      <hr />\n\n      <ion-button *ngIf=\"!hasClient && editable\" (click)=\"alterarCliente()\" fill=\"outline\"\n        >Alterar Cliente</ion-button\n      >\n      <ion-button *ngIf=\"hasClient\" (click)=\"alterarCliente()\" fill=\"outline\"\n        >Cancelar</ion-button\n      >\n    </ion-card>\n\n    <app-cm-select\n      isDisabled=\"false\"\n      *ngIf=\"hasClient\"\n      label=\"Cliente\"\n      width=\"95%\"\n      formControlName=\"cliente\"\n      [selected]=\"projectForm.get('cliente').value\"\n      [lista]=\"listaClientes\"\n      view=\"nome\"\n      valueAtr=\"_id\"\n    >\n    </app-cm-select>\n\n    <ion-card>\n      <ion-icon\n        *ngIf=\"!editable\"\n        style=\"float: left\"\n        (click)=\"edit()\"\n        name=\"settings-outline\"\n      ></ion-icon>\n      <ion-icon\n        *ngIf=\"editable\"\n        style=\"float: left\"\n        (click)=\"cancel()\"\n        name=\"close-circle-outline\"\n      ></ion-icon>\n      <ion-icon\n        *ngIf=\"!editable\"\n        style=\"float: right\"\n        (click)=\"delete()\"\n        name=\"trash\"\n      ></ion-icon>\n    </ion-card>\n\n    <ion-button\n      *ngIf=\"editable\"\n      [disabled]=\"projectForm.valid\"\n      (click)=\"salvar()\"\n      fill=\"outline\"\n      >Salvar</ion-button\n    >\n  </form>\n</ion-card>\n");

/***/ }),

/***/ "./src/app/projetos/projeto/detalhe-projeto/detalhe-projeto-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/projetos/projeto/detalhe-projeto/detalhe-projeto-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: DetalheProjetoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalheProjetoPageRoutingModule", function() { return DetalheProjetoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _detalhe_projeto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detalhe-projeto.page */ "./src/app/projetos/projeto/detalhe-projeto/detalhe-projeto.page.ts");




const routes = [
    {
        path: '',
        component: _detalhe_projeto_page__WEBPACK_IMPORTED_MODULE_3__["DetalheProjetoPage"]
    }
];
let DetalheProjetoPageRoutingModule = class DetalheProjetoPageRoutingModule {
};
DetalheProjetoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetalheProjetoPageRoutingModule);



/***/ }),

/***/ "./src/app/projetos/projeto/detalhe-projeto/detalhe-projeto.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/projetos/projeto/detalhe-projeto/detalhe-projeto.module.ts ***!
  \****************************************************************************/
/*! exports provided: DetalheProjetoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalheProjetoPageModule", function() { return DetalheProjetoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _detalhe_projeto_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detalhe-projeto-routing.module */ "./src/app/projetos/projeto/detalhe-projeto/detalhe-projeto-routing.module.ts");
/* harmony import */ var _detalhe_projeto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detalhe-projeto.page */ "./src/app/projetos/projeto/detalhe-projeto/detalhe-projeto.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _edita_projeto_edita_projeto_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../edita-projeto/edita-projeto.component */ "./src/app/projetos/projeto/edita-projeto/edita-projeto.component.ts");









let DetalheProjetoPageModule = class DetalheProjetoPageModule {
};
DetalheProjetoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _detalhe_projeto_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetalheProjetoPageRoutingModule"]
        ],
        declarations: [_detalhe_projeto_page__WEBPACK_IMPORTED_MODULE_6__["DetalheProjetoPage"], _edita_projeto_edita_projeto_component__WEBPACK_IMPORTED_MODULE_8__["EditaProjetoComponent"]]
    })
], DetalheProjetoPageModule);



/***/ }),

/***/ "./src/app/projetos/projeto/detalhe-projeto/detalhe-projeto.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/projetos/projeto/detalhe-projeto/detalhe-projeto.page.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.circle {\n  text-align: center;\n  background-color: black;\n  border-radius: 50%;\n  width: 80px;\n  height: 80px;\n  overflow: hidden;\n  position: relative;\n  margin-left: 5px;\n  padding-left: 0px !important;\n}\n#left {\n  border: none;\n  width: 28%;\n  float: left;\n  height: 100px;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527F76));\n  background-image: linear-gradient(to bottom, white, #527F76);\n}\n#right {\n  border: none;\n  text-align: center;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527F76));\n  background-image: linear-gradient(to bottom, white, #527F76);\n  width: 72%;\n  height: 100px;\n  float: left;\n}\nsection#sec-01 {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 80px;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527F76));\n  background-image: linear-gradient(to bottom, white, #527F76);\n}\n.origin {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 80px;\n  --ion-background-color: #527F76;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527F76));\n  background-image: linear-gradient(to bottom, white, #527F76);\n}\n.purple {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 80px;\n  --ion-background-color: purple;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(purple));\n  background-image: linear-gradient(to bottom, white, purple);\n}\n.blue {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 80px;\n  --ion-background-color: blue;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(blue));\n  background-image: linear-gradient(to bottom, white, blue);\n}\n.black {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 80px;\n  --ion-background-color: black;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(black));\n  background-image: linear-gradient(to bottom, white, black);\n}\nsection#sec-02 {\n  padding-top: 20px;\n  height: 100%;\n  border-top-right-radius: 30px;\n  border-top-left-radius: 30px;\n  background-color: white;\n}\nion-content {\n  --ion-background-color: #527F76;\n}\nion-card {\n  background-color: white;\n}\n.titulo-principal {\n  max-width: 480px;\n  text-align: center;\n  margin: 60px auto;\n  font-family: \"Courier New\", Courier, monospace;\n  color: black;\n}\n.titulo-principal:after {\n  content: \"|\";\n  margin-left: 5px;\n  opacity: 1;\n  -webkit-animation: pisca 0.7s infinite;\n          animation: pisca 0.7s infinite;\n}\n/* Animação aplicada ao content referente a classe *.titulo-principal* resultando num efeito de cursor piscando. */\n@-webkit-keyframes pisca {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n}\n@keyframes pisca {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamV0b3MvcHJvamV0by9kZXRhbGhlLXByb2pldG8vZGV0YWxoZS1wcm9qZXRvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvamV0b3MvcHJvamV0by9kZXRhbGhlLXByb2pldG8vQzpcXFVzZXJzXFxsc3JhZWxcXERlc2t0b3BcXFByb2pldG9zXFxjbUFwcElvbmljNS9zcmNcXGFwcFxccHJvamV0b3NcXHByb2pldG9cXGRldGFsaGUtcHJvamV0b1xcZGV0YWxoZS1wcm9qZXRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FERUo7QUNDRTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSwyRkFBQTtFQUFBLDREQUFBO0FERUo7QUNFSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJGQUFBO0VBQUEsNERBQUE7RUFFQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QURBUjtBQ1VJO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFFQSwyRkFBQTtFQUFBLDREQUFBO0FEUlI7QUNZSTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSxZQUFBO0VBRUEsK0JBQUE7RUFDQSwyRkFBQTtFQUFBLDREQUFBO0FEWFI7QUNnQks7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUVBLDhCQUFBO0VBQ0EsMEZBQUE7RUFBQSwyREFBQTtBRGRQO0FDa0JLO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLFlBQUE7RUFFQSw0QkFBQTtFQUNBLHdGQUFBO0VBQUEseURBQUE7QURqQlA7QUNxQks7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBRUEsWUFBQTtFQUVBLDZCQUFBO0VBQ0EseUZBQUE7RUFBQSwwREFBQTtBRHBCUDtBQ3dCSTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtBRHJCUjtBQzBCSTtFQUNJLCtCQUFBO0FEdkJSO0FDMEJNO0VBQ0UsdUJBQUE7QUR2QlI7QUMwQkk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4Q0FBQTtFQUNBLFlBQUE7QUR2QlI7QUN5Qkk7RUFDQyxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtBRHRCTDtBQ3dCSSxrSEFBQTtBQUVBO0VBQ0k7SUFDSSxVQUFBO0VEdEJWO0VDd0JNO0lBQ0ksVUFBQTtFRHRCVjtBQUNGO0FDZ0JJO0VBQ0k7SUFDSSxVQUFBO0VEdEJWO0VDd0JNO0lBQ0ksVUFBQTtFRHRCVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcHJvamV0b3MvcHJvamV0by9kZXRhbGhlLXByb2pldG8vZGV0YWxoZS1wcm9qZXRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jaXJjbGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbn1cblxuI2xlZnQge1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAyOCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgIzUyN0Y3Nik7XG59XG5cbiNyaWdodCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgIzUyN0Y3Nik7XG4gIHdpZHRoOiA3MiU7XG4gIGhlaWdodDogMTAwcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5zZWN0aW9uI3NlYy0wMSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA4MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgIzUyN0Y3Nik7XG59XG5cbi5vcmlnaW4ge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogODBweDtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzUyN0Y3NjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsICM1MjdGNzYpO1xufVxuXG4ucHVycGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDgwcHg7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsIHB1cnBsZSk7XG59XG5cbi5ibHVlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDgwcHg7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCBibHVlKTtcbn1cblxuLmJsYWNrIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDgwcHg7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgYmxhY2spO1xufVxuXG5zZWN0aW9uI3NlYy0wMiB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjNTI3Rjc2O1xufVxuXG5pb24tY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4udGl0dWxvLXByaW5jaXBhbCB7XG4gIG1heC13aWR0aDogNDgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiA2MHB4IGF1dG87XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udGl0dWxvLXByaW5jaXBhbDphZnRlciB7XG4gIGNvbnRlbnQ6IFwifFwiO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBvcGFjaXR5OiAxO1xuICBhbmltYXRpb246IHBpc2NhIDAuN3MgaW5maW5pdGU7XG59XG5cbi8qIEFuaW1hw6fDo28gYXBsaWNhZGEgYW8gY29udGVudCByZWZlcmVudGUgYSBjbGFzc2UgKi50aXR1bG8tcHJpbmNpcGFsKiByZXN1bHRhbmRvIG51bSBlZmVpdG8gZGUgY3Vyc29yIHBpc2NhbmRvLiAqL1xuQGtleWZyYW1lcyBwaXNjYSB7XG4gIDAlLCAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufSIsIi5jaXJjbGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tbGVmdDogMDVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAjbGVmdCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogMjglO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsICM1MjdGNzYpOyBcclxuICAgIC8vYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgI3JpZ2h0IHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCAjNTI3Rjc2KTsgXHJcbiAgICAgICAvLyBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICB3aWR0aDogNzIlO1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgLy9ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gI3NlYy1sb2dve1xyXG4gICAgLy8gICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCAjNTI3Rjc2KTsgXHJcbiAgIFxyXG4gICAgLy8gfVxyXG5cclxuICAgIHNlY3Rpb24jc2VjLTAxe1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgIzUyN0Y3Nik7IFxyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgLm9yaWdpbntcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAvLyBoZWlnaHQ6IDM1JTtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzUyN0Y3NjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgIzUyN0Y3Nik7IFxyXG4gICAgIFxyXG4gICAgIH1cclxuICAgICBcclxuICAgICBcclxuICAgICAucHVycGxle1xyXG4gICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xyXG4gICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsIHB1cnBsZSk7IFxyXG4gICAgIFxyXG4gICAgIH1cclxuICAgICBcclxuICAgICAuYmx1ZXtcclxuICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAvLyBoZWlnaHQ6IDM1JTtcclxuICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCBibHVlKTsgXHJcbiAgICAgXHJcbiAgICAgfVxyXG4gICAgIFxyXG4gICAgIC5ibGFja3tcclxuICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAvLyBoZWlnaHQ6IDM1JTtcclxuICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgYmxhY2spOyBcclxuICAgICBcclxuICAgICB9XHJcbiAgICBcclxuICAgIHNlY3Rpb24jc2VjLTAye1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNvbnRlbnR7XHJcbiAgICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzUyN0Y3NjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW9uLWNhcmR7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpdHVsby1wcmluY2lwYWx7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA0ODBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiA2MHB4IGF1dG87XHJcbiAgICAgICAgZm9udC1mYW1pbHk6J0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICAgIC50aXR1bG8tcHJpbmNpcGFsOmFmdGVye1xyXG4gICAgIGNvbnRlbnQ6ICd8JztcclxuICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgYW5pbWF0aW9uOiBwaXNjYSAuN3MgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICAvKiBBbmltYcOnw6NvIGFwbGljYWRhIGFvIGNvbnRlbnQgcmVmZXJlbnRlIGEgY2xhc3NlICoudGl0dWxvLXByaW5jaXBhbCogcmVzdWx0YW5kbyBudW0gZWZlaXRvIGRlIGN1cnNvciBwaXNjYW5kby4gKi9cclxuICAgIFxyXG4gICAgQGtleWZyYW1lcyBwaXNjYXtcclxuICAgICAgICAwJSwgMTAwJXtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgNTAle1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgXHJcblxyXG4gIl19 */");

/***/ }),

/***/ "./src/app/projetos/projeto/detalhe-projeto/detalhe-projeto.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/projetos/projeto/detalhe-projeto/detalhe-projeto.page.ts ***!
  \**************************************************************************/
/*! exports provided: DetalheProjetoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalheProjetoPage", function() { return DetalheProjetoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/utils/utils.service */ "./src/app/services/utils/utils.service.ts");
/* harmony import */ var src_app_configHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/configHelper */ "./src/app/configHelper.ts");





let DetalheProjetoPage = class DetalheProjetoPage {
    constructor(route, router, util) {
        this.route = route;
        this.router = router;
        this.util = util;
        this.colors = [];
        this.changeColorOptions = [];
        this.color = 0;
        this.class = localStorage.getItem(src_app_configHelper__WEBPACK_IMPORTED_MODULE_4__["configHelper"].storageKeys.color) != null ?
            localStorage.getItem(src_app_configHelper__WEBPACK_IMPORTED_MODULE_4__["configHelper"].storageKeys.color) : 'origin';
        this.colorOption = 0;
        this.leftStyle = {
            'border': 'none',
            'width': '28%',
            'float': 'left',
            'height': '100px',
            'background-image': `linear-gradient(to bottom, white, ${this.class})`,
        };
        this.rightStyle = {
            'border': 'none',
            'background-image': `linear-gradient(to bottom, white, ${this.class})`,
            'width': '72%',
            'height': '100px',
            'float': 'left',
        };
        this.colors = util.populaColor();
        this.changeColorOptions = util.populaColorOption();
    }
    ngOnInit() {
        setInterval(() => {
            this.color = this.color + 1;
        }, 200);
        this.route.queryParams.subscribe((params) => {
            const getNav = this.router.getCurrentNavigation();
            if (getNav.extras.state) {
                this.project = getNav.extras.state.valorParaEnviar;
                console.log("Dados", this.project);
                let concatText = "";
                concatText += `${this.project.tituloProjeto} * ${this.project.cliente.nome} * ${this.project.cliente.email}`;
                let utilsSrvc = new _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"]();
                const componente = document.querySelector(".titulo-principal");
                utilsSrvc.textTomachineWrite(concatText, componente);
                this.iniciais = utilsSrvc.iniciais(this.project.cliente.nome);
            }
        });
    }
    changeColor() {
        this.colorOption = (this.colorOption + 1) % this.changeColorOptions.length;
    }
};
DetalheProjetoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"] }
];
DetalheProjetoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-detalhe-projeto",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detalhe-projeto.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projetos/projeto/detalhe-projeto/detalhe-projeto.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detalhe-projeto.page.scss */ "./src/app/projetos/projeto/detalhe-projeto/detalhe-projeto.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"]])
], DetalheProjetoPage);



/***/ }),

/***/ "./src/app/projetos/projeto/edita-projeto/edita-projeto.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/projetos/projeto/edita-projeto/edita-projeto.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  background-color: white;\n}\n\nmat-form-field, mat-select {\n  width: 95%;\n  padding-left: 10px;\n}\n\nion-button {\n  width: 98%;\n}\n\nion-icon {\n  font-size: 40px;\n  color: #4f413b;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\nion-card-header {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamV0b3MvcHJvamV0by9lZGl0YS1wcm9qZXRvL0M6XFxVc2Vyc1xcbHNyYWVsXFxEZXNrdG9wXFxQcm9qZXRvc1xcY21BcHBJb25pYzUvc3JjXFxhcHBcXHByb2pldG9zXFxwcm9qZXRvXFxlZGl0YS1wcm9qZXRvXFxlZGl0YS1wcm9qZXRvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9qZXRvcy9wcm9qZXRvL2VkaXRhLXByb2pldG8vZWRpdGEtcHJvamV0by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDTTtFQUNFLHVCQUFBO0FDQVI7O0FERUk7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUNDUjs7QURNSTtFQUNJLFVBQUE7QUNIUjs7QURPRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0pKOztBRE9BO0VBQ0ksa0JBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL3Byb2pldG9zL3Byb2pldG8vZWRpdGEtcHJvamV0by9lZGl0YS1wcm9qZXRvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICAgIGlvbi1jYXJke1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgbWF0LWZvcm0tZmllbGQsIG1hdC1zZWxlY3R7XHJcbiAgICAgICAgd2lkdGg6IDk1JTsgXHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGRpdntcclxuICAgIC8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgaW9uLWJ1dHRvbntcclxuICAgICAgICB3aWR0aDogOTglO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICBpb24taWNvbntcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGNvbG9yOiAjNGY0MTNiO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkLWhlYWRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSIsImlvbi1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbm1hdC1mb3JtLWZpZWxkLCBtYXQtc2VsZWN0IHtcbiAgd2lkdGg6IDk1JTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgd2lkdGg6IDk4JTtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiAjNGY0MTNiO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/projetos/projeto/edita-projeto/edita-projeto.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/projetos/projeto/edita-projeto/edita-projeto.component.ts ***!
  \***************************************************************************/
/*! exports provided: EditaProjetoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditaProjetoComponent", function() { return EditaProjetoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_servicos_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/servicos-model */ "./src/app/models/servicos-model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_cliente_service_cliente_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/cliente-service/cliente.service */ "./src/app/services/cliente-service/cliente.service.ts");
/* harmony import */ var _configHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../configHelper */ "./src/app/configHelper.ts");
/* harmony import */ var _services_alert_service_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/alert-service/alert.service */ "./src/app/services/alert-service/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/refresh-page.service */ "./src/app/services/refresh-page.service.ts");
/* harmony import */ var _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/spinner-service/spinner.service */ "./src/app/services/spinner-service/spinner.service.ts");
/* harmony import */ var _services_projeto_service_projeto_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/projeto-service/projeto.service */ "./src/app/services/projeto-service/projeto.service.ts");











let EditaProjetoComponent = class EditaProjetoComponent {
    constructor(fb, clienteSrvc, alertSrvc, router, refreshSrvc, spinnerSrvc, projetoSrvc) {
        this.fb = fb;
        this.clienteSrvc = clienteSrvc;
        this.alertSrvc = alertSrvc;
        this.router = router;
        this.refreshSrvc = refreshSrvc;
        this.spinnerSrvc = spinnerSrvc;
        this.projetoSrvc = projetoSrvc;
        this.hasClient = false;
    }
    ngOnInit() {
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
        const userData = JSON.parse(localStorage.getItem(_configHelper__WEBPACK_IMPORTED_MODULE_5__["configHelper"].storageKeys.user));
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
    edit() {
        this.projectForm.enable();
        this.editable = true;
    }
    cancel() {
        this.projectForm.disable();
        this.editable = false;
    }
    delete() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.alertSrvc.confirm(`Deseja excluir o cliente ${this.projectForm.get("tituloProjeto").value} ?`, () => {
                this.projetoSrvc
                    .deleteProject(this.projectForm.get("_id").value)
                    .subscribe(() => {
                    this.alertSrvc.toast(`O Projeto ${this.projectForm.get("tituloProjeto").value} foi excluido com sucesso. `, 2000, "top");
                    this.router.navigate(["/tabs/projetos"]);
                    this.refreshSrvc.refreshProject.emit();
                    this.spinnerSrvc.hide();
                });
            });
        });
    }
    salvar() {
        const _a = this.projectForm.value, { nmCliente, emailCliente } = _a, teste = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_a, ["nmCliente", "emailCliente"]);
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
};
EditaProjetoComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_cliente_service_cliente_service__WEBPACK_IMPORTED_MODULE_4__["ClienteService"] },
    { type: _services_alert_service_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_8__["RefreshPageService"] },
    { type: _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_9__["SpinnerService"] },
    { type: _services_projeto_service_projeto_service__WEBPACK_IMPORTED_MODULE_10__["ProjetoService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_servicos_model__WEBPACK_IMPORTED_MODULE_2__["ProjetoModel"])
], EditaProjetoComponent.prototype, "projeto", void 0);
EditaProjetoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-edita-projeto",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edita-projeto.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projetos/projeto/edita-projeto/edita-projeto.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edita-projeto.component.scss */ "./src/app/projetos/projeto/edita-projeto/edita-projeto.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _services_cliente_service_cliente_service__WEBPACK_IMPORTED_MODULE_4__["ClienteService"],
        _services_alert_service_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_8__["RefreshPageService"],
        _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_9__["SpinnerService"],
        _services_projeto_service_projeto_service__WEBPACK_IMPORTED_MODULE_10__["ProjetoService"]])
], EditaProjetoComponent);



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
//# sourceMappingURL=default~projeto-detalhe-projeto-detalhe-projeto-module~projetos-projeto-detalhe-projeto-detalhe-proj~41c0e70e-es2015.js.map