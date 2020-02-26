(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["clientes-cliente-detalhe-cliente-detalhe-cliente-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/cliente/detalhe-cliente/detalhe-cliente.page.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/cliente/detalhe-cliente/detalhe-cliente.page.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\r\n  <ion-navbar >\r\n    <ion-title>title</ion-title>\r\n  </ion-navbar>\r\n  <ion-back-button defaultHref=\"/detalhe-cliente\"></ion-back-button>\r\n\r\n</ion-header> -->\r\n\r\n<!-- <ion-header [translucent]=\"true\"> -->\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/detalhe-cliente\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n<!-- </ion-header> -->\r\n\r\n\r\n<ion-content>\r\n\r\n  <section id=\"sec-01\" >\r\n\r\n  <div id=\"left\">\r\n    <div class=\"circle\" style=\"text-align: center; color: white;\">\r\n      <p style=\"margin-left: auto; margin-right: auto; font-size: 25px; color: blue;\">\r\n      {{iniciais}}\r\n    </p>   \r\n    </div>\r\n  </div>  \r\n\r\n  <div id=\"right\">\r\n    <div style=\"margin-top: 07px; text-align: left;\">\r\n{{cliente.nome}}<br/>\r\n{{cliente.email}}<br/>\r\n{{cliente.tel}}<br/>\r\n</div>\r\n  </div>\r\n\r\n  </section>\r\n\r\n  <section id=\"sec-02\">\r\n<div>\r\n&nbsp;\r\n<app-edita-cliente [cliente]=\"cliente\"></app-edita-cliente>\r\n</div>\r\n</section>\r\n</ion-content>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/cliente/edita-cliente/edita-cliente.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/cliente/edita-cliente/edita-cliente.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card>\r\n  <ion-card-header>\r\n    Dados do cliente    \r\n  </ion-card-header>\r\n  <ion-card-content>\r\n     <form [formGroup]=\"clientForm\">\r\n\r\n    \r\n    <mat-form-field style=\"width: 100%;\">\r\n      <input matInput placeholder=\"Nome\" formControlName=\"nome\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"Telefone\" formControlName=\"tel\">\r\n    </mat-form-field>\r\n\r\n      <mat-form-field>\r\n      <input matInput placeholder=\"E-mail\" formControlName=\"email\">\r\n    </mat-form-field>\r\n\r\n      <mat-form-field>\r\n      <input matInput placeholder=\"Cep\" formControlName=\"cep\">\r\n    </mat-form-field>\r\n  \r\n      <mat-form-field>\r\n      <input matInput placeholder=\"Rua\" formControlName=\"endereco\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"Bairro\" formControlName=\"bairro\">\r\n    </mat-form-field>\r\n          <mat-form-field>\r\n      <input matInput placeholder=\"Cidade\" formControlName=\"cidade\">\r\n    </mat-form-field>\r\n  \r\n    <mat-form-field>\r\n      <input matInput placeholder=\"Estado\" formControlName=\"estado\">\r\n    </mat-form-field>\r\n\r\n    <ion-icon *ngIf=\"!editable\" style=\"float: left\" (click)=\"edit()\" name=\"settings-outline\"></ion-icon>\r\n    <ion-icon *ngIf=\"editable\" style=\"float: left\" (click)=\"cancel()\" name=\"close-circle-outline\"></ion-icon>\r\n    <ion-icon *ngIf=\"!editable\" style=\"float: right\" (click)=\"delete()\" name=\"trash\"></ion-icon>\r\n\r\n    \r\n<!-- </ion-row> -->\r\n  </form>\r\n  </ion-card-content>\r\n</ion-card>\r\n\r\n<ion-card *ngIf=\"editable\" style=\"height: 50px; padding-top: 07px;\" (click)=\"salvar()\">\r\n  <ion-card-content style=\"padding-top: 5px; padding-bottom: 0px; \">\r\n    \r\n<label>Editar cliente</label><ion-note slot=\"end\">\r\n  <ion-icon style=\"font-size: 20px; float: right;\" name=\"build-outline\"></ion-icon> </ion-note>\r\n      <br/>\r\n  </ion-card-content>\r\n</ion-card>");

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
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");















let DetalheClientePageModule = class DetalheClientePageModule {
};
DetalheClientePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
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
/* harmony default export */ __webpack_exports__["default"] = (".circle {\n  text-align: center;\n  background-color: black;\n  border-radius: 50%;\n  width: 80px;\n  height: 80px;\n  overflow: hidden;\n  position: relative;\n  margin-left: 5px;\n  padding-left: 0px !important;\n}\n\n#left {\n  border: none;\n  width: 28%;\n  float: left;\n  height: 100px;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527F76));\n  background-image: linear-gradient(to bottom, white, #527F76);\n}\n\n#right {\n  border: none;\n  text-align: center;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527F76));\n  background-image: linear-gradient(to bottom, white, #527F76);\n  width: 72%;\n  height: 100px;\n  float: left;\n}\n\nsection#sec-01 {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 80px;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527F76));\n  background-image: linear-gradient(to bottom, white, #527F76);\n}\n\nsection#sec-02 {\n  padding-top: 20px;\n  height: 90%;\n  border-top-right-radius: 30px;\n  border-top-left-radius: 30px;\n  background-color: white;\n}\n\nion-content {\n  --ion-background-color: #527F76;\n}\n\nion-card {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50ZXMvY2xpZW50ZS9kZXRhbGhlLWNsaWVudGUvQzpcXFVzZXJzXFxsc3JhZWxcXERlc2t0b3BcXGNtQXBwSW9uaWM1L3NyY1xcYXBwXFxjbGllbnRlc1xcY2xpZW50ZVxcZGV0YWxoZS1jbGllbnRlXFxkZXRhbGhlLWNsaWVudGUucGFnZS5zY3NzIiwic3JjL2FwcC9jbGllbnRlcy9jbGllbnRlL2RldGFsaGUtY2xpZW50ZS9kZXRhbGhlLWNsaWVudGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQ0NKOztBREVFO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDJGQUFBO0VBQUEsNERBQUE7QUNDSjs7QURHSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJGQUFBO0VBQUEsNERBQUE7RUFFQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNEUjs7QURXSTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBRUEsMkZBQUE7RUFBQSw0REFBQTtBQ1RSOztBRGFJO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLHVCQUFBO0FDVlI7O0FEZUk7RUFDSSwrQkFBQTtBQ1pSOztBRGVNO0VBQ0UsdUJBQUE7QUNaUiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudGVzL2NsaWVudGUvZGV0YWxoZS1jbGllbnRlL2RldGFsaGUtY2xpZW50ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2lyY2xlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgI2xlZnQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDI4JTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCAjNTI3Rjc2KTsgXHJcbiAgICAvL2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICNyaWdodCB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgIzUyN0Y3Nik7IFxyXG4gICAgICAgLy8gcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgICAgd2lkdGg6IDcyJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIC8vYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vICNzZWMtbG9nb3tcclxuICAgIC8vICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgIzUyN0Y3Nik7IFxyXG4gICBcclxuICAgIC8vIH1cclxuXHJcbiAgICBzZWN0aW9uI3NlYy0wMXtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsICM1MjdGNzYpOyBcclxuICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZWN0aW9uI3NlYy0wMntcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDkwJTtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNvbnRlbnR7XHJcbiAgICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzUyN0Y3NjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW9uLWNhcmR7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gIFxyXG5cclxuICIsIi5jaXJjbGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbn1cblxuI2xlZnQge1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAyOCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgIzUyN0Y3Nik7XG59XG5cbiNyaWdodCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgIzUyN0Y3Nik7XG4gIHdpZHRoOiA3MiU7XG4gIGhlaWdodDogMTAwcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5zZWN0aW9uI3NlYy0wMSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA4MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgIzUyN0Y3Nik7XG59XG5cbnNlY3Rpb24jc2VjLTAyIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGhlaWdodDogOTAlO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzUyN0Y3Njtcbn1cblxuaW9uLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn0iXX0= */");

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




let DetalheClientePage = class DetalheClientePage {
    constructor(route, router, navCtrl) {
        this.route = route;
        this.router = router;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            const getNav = this.router.getCurrentNavigation();
            if (getNav.extras.state) {
                this.cliente = getNav.extras.state.valorParaEnviar;
                console.log('Dados', this.cliente);
            }
        });
        let split = this.cliente.nome.toString().split(' ');
        console.log('SPLIT', this.cliente.nome.toString().split(' '));
        if (split.length > 1) {
            this.iniciais = split[0].split('')[0].toUpperCase() + split[1].split('')[0].toUpperCase();
        }
        else {
            this.iniciais = split[0].split('')[0];
        }
        console.log('Split por letra', this.iniciais);
        // let teste =this.route.snapshot.params['param']
        // console.log('Teste de passagem de parametro', teste)
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
DetalheClientePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detalhe-cliente',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detalhe-cliente.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/cliente/detalhe-cliente/detalhe-cliente.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detalhe-cliente.page.scss */ "./src/app/clientes/cliente/detalhe-cliente/detalhe-cliente.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
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
/* harmony default export */ __webpack_exports__["default"] = ("mat-form-field {\n  width: 100%;\n}\n\nion-card {\n  background-color: white;\n}\n\nion-content {\n  --ion-background-color: white !important;\n}\n\nlabel {\n  color: black;\n  font-size: 16px;\n}\n\nion-icon {\n  font-size: 40px;\n  color: #4f413b;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50ZXMvY2xpZW50ZS9lZGl0YS1jbGllbnRlL0M6XFxVc2Vyc1xcbHNyYWVsXFxEZXNrdG9wXFxjbUFwcElvbmljNS9zcmNcXGFwcFxcY2xpZW50ZXNcXGNsaWVudGVcXGVkaXRhLWNsaWVudGVcXGVkaXRhLWNsaWVudGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NsaWVudGVzL2NsaWVudGUvZWRpdGEtY2xpZW50ZS9lZGl0YS1jbGllbnRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7QUNDSjs7QURFQTtFQUNJLHdDQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVFO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0NOIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50ZXMvY2xpZW50ZS9lZGl0YS1jbGllbnRlL2VkaXRhLWNsaWVudGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBsYWJlbHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcblxyXG4gIGlvbi1pY29ue1xyXG4gICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgIGNvbG9yOiAjNGY0MTNiO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH0iLCJtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbmxhYmVsIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogIzRmNDEzYjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn0iXX0= */");

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








let EditaClienteComponent = class EditaClienteComponent {
    constructor(fb, clienteSrvc, router, refreshSrvc, alertSrvc, spinnerSrvc) {
        this.fb = fb;
        this.clienteSrvc = clienteSrvc;
        this.router = router;
        this.refreshSrvc = refreshSrvc;
        this.alertSrvc = alertSrvc;
        this.spinnerSrvc = spinnerSrvc;
        this.editable = false;
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
    }
    salvar() {
        this.clienteSrvc
            .alterClient(this.clientForm.value, this.clientForm.get('_id').value)
            .subscribe(data => {
            this.router.navigate(['/tabs/clientes']);
            this.refreshSrvc.refresh.emit();
            this.spinnerSrvc.hide();
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
                    this.refreshSrvc.refresh.emit();
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
    { type: _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_7__["SpinnerService"] }
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
        _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_7__["SpinnerService"]])
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



/***/ }),

/***/ "./src/app/services/cliente-service/cliente.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/cliente-service/cliente.service.ts ***!
  \*************************************************************/
/*! exports provided: ClienteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteService", function() { return ClienteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-service/http.service */ "./src/app/services/http-service/http.service.ts");
/* harmony import */ var src_app_configHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/configHelper */ "./src/app/configHelper.ts");




let ClienteService = class ClienteService {
    constructor(http) {
        this.http = http;
        this.url = `${src_app_configHelper__WEBPACK_IMPORTED_MODULE_3__["configHelper"].URL}/clientes`;
    }
    getClients() {
        return this.http.get(`${this.url}`);
    }
    getClientsByIdUser(id) {
        return this.http.get(`${this.url}/usuario/${id}`);
    }
    includesClient(data) {
        return this.http.post(`${this.url}`, data);
    }
    alterClient(data, id) {
        console.log('id chegou', id);
        return this.http.put(`${this.url}/${id}`, data);
    }
    deleteClient(id) {
        return this.http.delete(`${this.url}`, id);
    }
};
ClienteService.ctorParameters = () => [
    { type: _http_service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
];
ClienteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
], ClienteService);



/***/ }),

/***/ "./src/app/services/refresh-page.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/refresh-page.service.ts ***!
  \**************************************************/
/*! exports provided: RefreshPageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshPageService", function() { return RefreshPageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RefreshPageService = class RefreshPageService {
    constructor() {
        this.refresh = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
};
RefreshPageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], RefreshPageService);



/***/ })

}]);
//# sourceMappingURL=clientes-cliente-detalhe-cliente-detalhe-cliente-module-es2015.js.map