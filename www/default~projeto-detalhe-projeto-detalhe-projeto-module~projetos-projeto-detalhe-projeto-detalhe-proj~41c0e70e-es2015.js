(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~projeto-detalhe-projeto-detalhe-projeto-module~projetos-projeto-detalhe-projeto-detalhe-proj~41c0e70e"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projetos/projeto/detalhe-projeto/detalhe-projeto.page.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projetos/projeto/detalhe-projeto/detalhe-projeto.page.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar>\r\n  <ion-buttons slot=\"start\">\r\n    <ion-back-button defaultHref=\"/detalhe-cliente\"></ion-back-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n\r\n<ion-content [ngClass]=\"class\">\r\n  <section [ngClass]=\"class\">\r\n    <div [ngStyle]=\"leftStyle\">\r\n      <div class=\"circle\" (click)=\"changeColor()\" [ngStyle]=\"{color: changeColorOptions[colorOption] }\" style=\"text-align: center;\">\r\n        <p\r\n          style=\"margin-left: auto; margin-right: auto; font-size: 25px;\" [ngStyle]=\"{'color':colors[color]}\">\r\n          {{iniciais}}\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n    <div [ngStyle]=\"rightStyle\">\r\n      <div class=\"titulo-principal\" style=\"margin-top: 07px; text-align: left;\">\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section id=\"sec-02\">\r\n    <div>\r\n      &nbsp;\r\n      <app-edita-projeto [projeto]=\"project\"></app-edita-projeto>\r\n    </div>\r\n  </section>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projetos/projeto/edita-projeto/edita-projeto.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projetos/projeto/edita-projeto/edita-projeto.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card>\r\n  <form [formGroup]=\"projectForm\">\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"Projeto\" formControlName=\"tituloProjeto\" />\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input\r\n        matInput\r\n        placeholder=\"Descrição\"\r\n        formControlName=\"descricaoProjeto\"\r\n      />\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"Valor\" formControlName=\"preco\" />\r\n    </mat-form-field>\r\n\r\n    <ion-card>\r\n      <ion-card-header>\r\n        Cliente\r\n      </ion-card-header>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"6\">\r\n          <mat-form-field>\r\n            <input\r\n              matInput\r\n              placeholder=\"Cliente\"\r\n              readonly\r\n              formControlName=\"nmCliente\"\r\n            />\r\n          </mat-form-field>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"6\">\r\n          <mat-form-field>\r\n            <input\r\n              matInput\r\n              placeholder=\"E-mail\"\r\n              readonly\r\n              formControlName=\"emailCliente\"\r\n            />\r\n          </mat-form-field>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <hr />\r\n\r\n      <ion-button *ngIf=\"!hasClient && editable\" (click)=\"alterarCliente()\" fill=\"outline\"\r\n        >Alterar Cliente</ion-button\r\n      >\r\n      <ion-button *ngIf=\"hasClient\" (click)=\"alterarCliente()\" fill=\"outline\"\r\n        >Cancelar</ion-button\r\n      >\r\n    </ion-card>\r\n\r\n    <app-cm-select\r\n      isDisabled=\"false\"\r\n      *ngIf=\"hasClient\"\r\n      label=\"Cliente\"\r\n      width=\"95%\"\r\n      formControlName=\"cliente\"\r\n      [selected]=\"projectForm.get('cliente').value\"\r\n      [lista]=\"listaClientes\"\r\n      view=\"nome\"\r\n      valueAtr=\"_id\"\r\n    >\r\n    </app-cm-select>\r\n\r\n    <ion-card>\r\n      <ion-icon\r\n        *ngIf=\"!editable\"\r\n        style=\"float: left\"\r\n        (click)=\"edit()\"\r\n        name=\"settings-outline\"\r\n      ></ion-icon>\r\n      <ion-icon\r\n        *ngIf=\"editable\"\r\n        style=\"float: left\"\r\n        (click)=\"cancel()\"\r\n        name=\"close-circle-outline\"\r\n      ></ion-icon>\r\n      <ion-icon\r\n        *ngIf=\"!editable\"\r\n        style=\"float: right\"\r\n        (click)=\"delete()\"\r\n        name=\"trash\"\r\n      ></ion-icon>\r\n    </ion-card>\r\n\r\n    <ion-button\r\n      *ngIf=\"editable\"\r\n      [disabled]=\"projectForm.valid\"\r\n      (click)=\"salvar()\"\r\n      fill=\"outline\"\r\n      >Salvar</ion-button\r\n    >\r\n  </form>\r\n</ion-card>\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.circle {\n  text-align: center;\n  background-color: black;\n  border-radius: 50%;\n  width: 80px;\n  height: 80px;\n  overflow: hidden;\n  position: relative;\n  margin-left: 5px;\n  padding-left: 0px !important;\n}\n#left {\n  border: none;\n  width: 28%;\n  float: left;\n  height: 100px;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527F76));\n  background-image: linear-gradient(to bottom, white, #527F76);\n}\n#right {\n  border: none;\n  text-align: center;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527F76));\n  background-image: linear-gradient(to bottom, white, #527F76);\n  width: 72%;\n  height: 100px;\n  float: left;\n}\nsection#sec-01 {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 80px;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527F76));\n  background-image: linear-gradient(to bottom, white, #527F76);\n}\n.origin {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 80px;\n  --ion-background-color: #527F76;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527F76));\n  background-image: linear-gradient(to bottom, white, #527F76);\n}\n.purple {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 80px;\n  --ion-background-color: purple;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(purple));\n  background-image: linear-gradient(to bottom, white, purple);\n}\n.blue {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 80px;\n  --ion-background-color: blue;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(blue));\n  background-image: linear-gradient(to bottom, white, blue);\n}\n.black {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 80px;\n  --ion-background-color: black;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(black));\n  background-image: linear-gradient(to bottom, white, black);\n}\nsection#sec-02 {\n  padding-top: 20px;\n  height: 100%;\n  border-top-right-radius: 30px;\n  border-top-left-radius: 30px;\n  background-color: white;\n}\nion-content {\n  --ion-background-color: #527F76;\n}\nion-card {\n  background-color: white;\n}\n.titulo-principal {\n  max-width: 480px;\n  text-align: center;\n  margin: 60px auto;\n  font-family: \"Courier New\", Courier, monospace;\n  color: black;\n}\n.titulo-principal:after {\n  content: \"|\";\n  margin-left: 5px;\n  opacity: 1;\n  -webkit-animation: pisca 0.7s infinite;\n          animation: pisca 0.7s infinite;\n}\n/* Animação aplicada ao content referente a classe *.titulo-principal* resultando num efeito de cursor piscando. */\n@-webkit-keyframes pisca {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n}\n@keyframes pisca {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamV0b3MvcHJvamV0by9kZXRhbGhlLXByb2pldG8vZGV0YWxoZS1wcm9qZXRvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvamV0b3MvcHJvamV0by9kZXRhbGhlLXByb2pldG8vQzpcXFVzZXJzXFxpZ29tZXNsYVxcRG9jdW1lbnRzXFxpb25pY1xcY21BcHBJb25pYzUvc3JjXFxhcHBcXHByb2pldG9zXFxwcm9qZXRvXFxkZXRhbGhlLXByb2pldG9cXGRldGFsaGUtcHJvamV0by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBREVKO0FDQ0U7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsMkZBQUE7RUFBQSw0REFBQTtBREVKO0FDRUk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyRkFBQTtFQUFBLDREQUFBO0VBRUEsVUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FEQVI7QUNVSTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBRUEsMkZBQUE7RUFBQSw0REFBQTtBRFJSO0FDWUk7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBRUEsWUFBQTtFQUVBLCtCQUFBO0VBQ0EsMkZBQUE7RUFBQSw0REFBQTtBRFhSO0FDZ0JLO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFFQSw4QkFBQTtFQUNBLDBGQUFBO0VBQUEsMkRBQUE7QURkUDtBQ2tCSztFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSxZQUFBO0VBRUEsNEJBQUE7RUFDQSx3RkFBQTtFQUFBLHlEQUFBO0FEakJQO0FDcUJLO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLFlBQUE7RUFFQSw2QkFBQTtFQUNBLHlGQUFBO0VBQUEsMERBQUE7QURwQlA7QUN3Qkk7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsdUJBQUE7QURyQlI7QUMwQkk7RUFDSSwrQkFBQTtBRHZCUjtBQzBCTTtFQUNFLHVCQUFBO0FEdkJSO0FDMEJJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOENBQUE7RUFDQSxZQUFBO0FEdkJSO0FDeUJJO0VBQ0MsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLHNDQUFBO1VBQUEsOEJBQUE7QUR0Qkw7QUN3Qkksa0hBQUE7QUFFQTtFQUNJO0lBQ0ksVUFBQTtFRHRCVjtFQ3dCTTtJQUNJLFVBQUE7RUR0QlY7QUFDRjtBQ2dCSTtFQUNJO0lBQ0ksVUFBQTtFRHRCVjtFQ3dCTTtJQUNJLFVBQUE7RUR0QlY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Byb2pldG9zL3Byb2pldG8vZGV0YWxoZS1wcm9qZXRvL2RldGFsaGUtcHJvamV0by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY2lyY2xlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbiNsZWZ0IHtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMjglO1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsICM1MjdGNzYpO1xufVxuXG4jcmlnaHQge1xuICBib3JkZXI6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsICM1MjdGNzYpO1xuICB3aWR0aDogNzIlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuc2VjdGlvbiNzZWMtMDEge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogODBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsICM1MjdGNzYpO1xufVxuXG4ub3JpZ2luIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDgwcHg7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICM1MjdGNzY7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCAjNTI3Rjc2KTtcbn1cblxuLnB1cnBsZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA4MHB4O1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCBwdXJwbGUpO1xufVxuXG4uYmx1ZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA4MHB4O1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgYmx1ZSk7XG59XG5cbi5ibGFjayB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA4MHB4O1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsIGJsYWNrKTtcbn1cblxuc2VjdGlvbiNzZWMtMDIge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzUyN0Y3Njtcbn1cblxuaW9uLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnRpdHVsby1wcmluY2lwYWwge1xuICBtYXgtd2lkdGg6IDQ4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogNjBweCBhdXRvO1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnRpdHVsby1wcmluY2lwYWw6YWZ0ZXIge1xuICBjb250ZW50OiBcInxcIjtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgb3BhY2l0eTogMTtcbiAgYW5pbWF0aW9uOiBwaXNjYSAwLjdzIGluZmluaXRlO1xufVxuXG4vKiBBbmltYcOnw6NvIGFwbGljYWRhIGFvIGNvbnRlbnQgcmVmZXJlbnRlIGEgY2xhc3NlICoudGl0dWxvLXByaW5jaXBhbCogcmVzdWx0YW5kbyBudW0gZWZlaXRvIGRlIGN1cnNvciBwaXNjYW5kby4gKi9cbkBrZXlmcmFtZXMgcGlzY2Ege1xuICAwJSwgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn0iLCIuY2lyY2xlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgI2xlZnQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDI4JTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCAjNTI3Rjc2KTsgXHJcbiAgICAvL2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICNyaWdodCB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgIzUyN0Y3Nik7IFxyXG4gICAgICAgLy8gcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgICAgd2lkdGg6IDcyJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIC8vYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vICNzZWMtbG9nb3tcclxuICAgIC8vICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgIzUyN0Y3Nik7IFxyXG4gICBcclxuICAgIC8vIH1cclxuXHJcbiAgICBzZWN0aW9uI3NlYy0wMXtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsICM1MjdGNzYpOyBcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5vcmlnaW57XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgLy8gaGVpZ2h0OiAzNSU7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICM1MjdGNzY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsICM1MjdGNzYpOyBcclxuICAgICBcclxuICAgICB9XHJcbiAgICAgXHJcbiAgICAgXHJcbiAgICAgLnB1cnBsZXtcclxuICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcclxuICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCBwdXJwbGUpOyBcclxuICAgICBcclxuICAgICB9XHJcbiAgICAgXHJcbiAgICAgLmJsdWV7XHJcbiAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgLy8gaGVpZ2h0OiAzNSU7XHJcbiAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgYmx1ZSk7IFxyXG4gICAgIFxyXG4gICAgIH1cclxuICAgICBcclxuICAgICAuYmxhY2t7XHJcbiAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgLy8gaGVpZ2h0OiAzNSU7XHJcbiAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsIGJsYWNrKTsgXHJcbiAgICAgXHJcbiAgICAgfVxyXG4gICAgXHJcbiAgICBzZWN0aW9uI3NlYy0wMntcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jb250ZW50e1xyXG4gICAgICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICM1MjdGNzY7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlvbi1jYXJke1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC50aXR1bG8tcHJpbmNpcGFse1xyXG4gICAgICAgIG1heC13aWR0aDogNDgwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogNjBweCBhdXRvO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OidDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbiAgICAudGl0dWxvLXByaW5jaXBhbDphZnRlcntcclxuICAgICBjb250ZW50OiAnfCc7XHJcbiAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICBvcGFjaXR5OiAxO1xyXG4gICAgIGFuaW1hdGlvbjogcGlzY2EgLjdzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgLyogQW5pbWHDp8OjbyBhcGxpY2FkYSBhbyBjb250ZW50IHJlZmVyZW50ZSBhIGNsYXNzZSAqLnRpdHVsby1wcmluY2lwYWwqIHJlc3VsdGFuZG8gbnVtIGVmZWl0byBkZSBjdXJzb3IgcGlzY2FuZG8uICovXHJcbiAgICBcclxuICAgIEBrZXlmcmFtZXMgcGlzY2F7XHJcbiAgICAgICAgMCUsIDEwMCV7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDUwJXtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gIFxyXG5cclxuICJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  background-color: white;\n}\n\nmat-form-field, mat-select {\n  width: 95%;\n  padding-left: 10px;\n}\n\nion-button {\n  width: 98%;\n}\n\nion-icon {\n  font-size: 40px;\n  color: #4f413b;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\nion-card-header {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamV0b3MvcHJvamV0by9lZGl0YS1wcm9qZXRvL0M6XFxVc2Vyc1xcaWdvbWVzbGFcXERvY3VtZW50c1xcaW9uaWNcXGNtQXBwSW9uaWM1L3NyY1xcYXBwXFxwcm9qZXRvc1xccHJvamV0b1xcZWRpdGEtcHJvamV0b1xcZWRpdGEtcHJvamV0by5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvamV0b3MvcHJvamV0by9lZGl0YS1wcm9qZXRvL2VkaXRhLXByb2pldG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ007RUFDRSx1QkFBQTtBQ0FSOztBREVJO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FDQ1I7O0FETUk7RUFDSSxVQUFBO0FDSFI7O0FET0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNKSjs7QURPQTtFQUNJLGtCQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9wcm9qZXRvcy9wcm9qZXRvL2VkaXRhLXByb2pldG8vZWRpdGEtcHJvamV0by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgICBpb24tY2FyZHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIG1hdC1mb3JtLWZpZWxkLCBtYXQtc2VsZWN0e1xyXG4gICAgICAgIHdpZHRoOiA5NSU7IFxyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBkaXZ7XHJcbiAgICAvLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgd2lkdGg6IDk4JTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgaW9uLWljb257XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBjb2xvcjogIzRmNDEzYjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5pb24tY2FyZC1oZWFkZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iLCJpb24tY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5tYXQtZm9ybS1maWVsZCwgbWF0LXNlbGVjdCB7XG4gIHdpZHRoOiA5NSU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiA5OCU7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogIzRmNDEzYjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

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