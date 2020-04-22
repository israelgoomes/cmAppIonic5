(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projetos-projetos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projetos/modal-cadastro-projeto/modal-cadastro-projeto.page.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projetos/modal-cadastro-projeto/modal-cadastro-projeto.page.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar>\r\n  <ion-icon (click)=\"voltar()\" name=\"arrow-back-outline\"></ion-icon>\r\n</ion-toolbar>\r\n\r\n<ion-content [ngClass]=\"class\">\r\n\r\n  <section [ngClass]=\"class\">\r\n    <img class=\"logo\" src=\"./../../assets/imgs/projeto.png\">  \r\n  </section>\r\n\r\n  <section id=\"sec-02\">\r\n    <app-cadastro-projeto></app-cadastro-projeto>\r\n  </section>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projetos/projetos.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projetos/projetos.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-buttons >\r\n  <ion-menu-button autoHide=\"false\"></ion-menu-button>\r\n</ion-buttons>\r\n<ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\r\n  <ion-fab-button [color]=\"color\" >\r\n    <ion-icon name=\"chevron-back-circle-outline\"></ion-icon>\r\n  </ion-fab-button>\r\n  <ion-fab-list side=\"start\">\r\n    <ion-fab-button><ion-icon (click)=\"cadastroProjeto()\" name=\"add\"></ion-icon></ion-fab-button>\r\n    <ion-fab-button><ion-icon (click)=\"logout()\" name=\"power\"></ion-icon></ion-fab-button>\r\n  </ion-fab-list>\r\n</ion-fab>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n  <app-header></app-header>\r\n\r\n\r\n  <div *ngFor=\"let projeto of listaServicos\">\r\n  <app-projeto [projeto]=\"projeto\"></app-projeto>\r\n</div>\r\n  <!-- <app-explore-container name=\"Servicos Page\"></app-explore-container> -->\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/projetos/modal-cadastro-projeto/modal-cadastro-projeto.page.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/projetos/modal-cadastro-projeto/modal-cadastro-projeto.page.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  font-size: 30px;\n}\n\nsection#sec-01 {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 30%;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527F76));\n  background-image: linear-gradient(to bottom, white, #527F76);\n}\n\n.origin {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 30%;\n  --ion-background-color: #527F76;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527F76));\n  background-image: linear-gradient(to bottom, white, #527F76);\n}\n\n.purple {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 30%;\n  --ion-background-color: purple;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(purple));\n  background-image: linear-gradient(to bottom, white, purple);\n}\n\n.blue {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 30%;\n  --ion-background-color: blue;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(blue));\n  background-image: linear-gradient(to bottom, white, blue);\n}\n\n.black {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 30%;\n  --ion-background-color: black;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(black));\n  background-image: linear-gradient(to bottom, white, black);\n}\n\nsection#sec-02 {\n  padding-top: 20px;\n  height: 100%;\n  border-top-right-radius: 30px;\n  border-top-left-radius: 30px;\n  background-color: white;\n}\n\nion-content {\n  --ion-background-color: #527F76;\n}\n\nion-card {\n  margin-top: 30px;\n  background-color: white;\n}\n\n.logo {\n  width: 200px;\n  height: 200px;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamV0b3MvbW9kYWwtY2FkYXN0cm8tcHJvamV0by9DOlxcVXNlcnNcXGxzcmFlbFxcRGVza3RvcFxcUHJvamV0b3NcXGNtQXBwSW9uaWM1L3NyY1xcYXBwXFxwcm9qZXRvc1xcbW9kYWwtY2FkYXN0cm8tcHJvamV0b1xcbW9kYWwtY2FkYXN0cm8tcHJvamV0by5wYWdlLnNjc3MiLCJzcmMvYXBwL3Byb2pldG9zL21vZGFsLWNhZGFzdHJvLXByb2pldG8vbW9kYWwtY2FkYXN0cm8tcHJvamV0by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUVBLDJGQUFBO0VBQUEsNERBQUE7QUNBSjs7QURLQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBRUEsK0JBQUE7RUFDQSwyRkFBQTtFQUFBLDREQUFBO0FDSko7O0FEU0M7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUVBLDhCQUFBO0VBQ0EsMEZBQUE7RUFBQSwyREFBQTtBQ1BIOztBRFdDO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLFdBQUE7RUFFQSw0QkFBQTtFQUNBLHdGQUFBO0VBQUEseURBQUE7QUNWSDs7QURjQztFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBRUEsNkJBQUE7RUFDQSx5RkFBQTtFQUFBLDBEQUFBO0FDYkg7O0FEa0JBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLHVCQUFBO0FDZko7O0FEb0JBO0VBQ0ksK0JBQUE7QUNqQko7O0FEbUJBO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtBQ2hCSjs7QURtQkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNoQkoiLCJmaWxlIjoic3JjL2FwcC9wcm9qZXRvcy9tb2RhbC1jYWRhc3Ryby1wcm9qZXRvL21vZGFsLWNhZGFzdHJvLXByb2pldG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb257XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbnNlY3Rpb24jc2VjLTAxe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgIzUyN0Y3Nik7IFxyXG5cclxufVxyXG5cclxuXHJcbi5vcmlnaW57XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy8gaGVpZ2h0OiAzNSU7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzUyN0Y3NjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCAjNTI3Rjc2KTsgXHJcbiBcclxuIH1cclxuIFxyXG4gXHJcbiAucHVycGxle1xyXG4gICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIGhlaWdodDogMzAlO1xyXG4gICAvL2JhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xyXG4gICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgcHVycGxlKTsgXHJcbiBcclxuIH1cclxuIFxyXG4gLmJsdWV7XHJcbiAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgLy8gaGVpZ2h0OiAzNSU7XHJcbiAgIGhlaWdodDogMzAlO1xyXG4gICAvL2JhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsIGJsdWUpOyBcclxuIFxyXG4gfVxyXG4gXHJcbiAuYmxhY2t7XHJcbiAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgLy8gaGVpZ2h0OiAzNSU7XHJcbiAgIGhlaWdodDogMzAlO1xyXG4gICAvL2JhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCBibGFjayk7IFxyXG4gXHJcbiB9XHJcbiBcclxuXHJcbnNlY3Rpb24jc2VjLTAye1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICBcclxufVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjNTI3Rjc2O1xyXG59XHJcbmlvbi1jYXJke1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubG9nb3tcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufSIsImlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG5zZWN0aW9uI3NlYy0wMSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAzMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCAjNTI3Rjc2KTtcbn1cblxuLm9yaWdpbiB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAzMCU7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICM1MjdGNzY7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCAjNTI3Rjc2KTtcbn1cblxuLnB1cnBsZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAzMCU7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsIHB1cnBsZSk7XG59XG5cbi5ibHVlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDMwJTtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsIGJsdWUpO1xufVxuXG4uYmxhY2sge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMzAlO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsIGJsYWNrKTtcbn1cblxuc2VjdGlvbiNzZWMtMDIge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzUyN0Y3Njtcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmxvZ28ge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/projetos/modal-cadastro-projeto/modal-cadastro-projeto.page.ts":
/*!********************************************************************************!*\
  !*** ./src/app/projetos/modal-cadastro-projeto/modal-cadastro-projeto.page.ts ***!
  \********************************************************************************/
/*! exports provided: ModalCadastroProjetoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCadastroProjetoPage", function() { return ModalCadastroProjetoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_configHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/configHelper */ "./src/app/configHelper.ts");




let ModalCadastroProjetoPage = class ModalCadastroProjetoPage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.class = "origin";
        this.class = localStorage.getItem(src_app_configHelper__WEBPACK_IMPORTED_MODULE_3__["configHelper"].storageKeys.color) != null ?
            localStorage.getItem(src_app_configHelper__WEBPACK_IMPORTED_MODULE_3__["configHelper"].storageKeys.color) : 'origin';
    }
    ngOnInit() {
    }
    voltar() {
        this.modalCtrl.dismiss({
            'dismissed': true
        });
    }
};
ModalCadastroProjetoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
ModalCadastroProjetoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-cadastro-projeto',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal-cadastro-projeto.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projetos/modal-cadastro-projeto/modal-cadastro-projeto.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal-cadastro-projeto.page.scss */ "./src/app/projetos/modal-cadastro-projeto/modal-cadastro-projeto.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], ModalCadastroProjetoPage);



/***/ }),

/***/ "./src/app/projetos/projetos-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/projetos/projetos-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ProjetosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetosPageRoutingModule", function() { return ProjetosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _projetos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projetos.page */ "./src/app/projetos/projetos.page.ts");




const routes = [
    {
        path: '',
        component: _projetos_page__WEBPACK_IMPORTED_MODULE_3__["ProjetosPage"]
    },
    {
        path: 'detalhe-projeto',
        loadChildren: () => __webpack_require__.e(/*! import() | projeto-detalhe-projeto-detalhe-projeto-module */ "default~projeto-detalhe-projeto-detalhe-projeto-module~projetos-projeto-detalhe-projeto-detalhe-proj~41c0e70e").then(__webpack_require__.bind(null, /*! ./projeto/detalhe-projeto/detalhe-projeto.module */ "./src/app/projetos/projeto/detalhe-projeto/detalhe-projeto.module.ts")).then(m => m.DetalheProjetoPageModule)
    }
];
let ProjetosPageRoutingModule = class ProjetosPageRoutingModule {
};
ProjetosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProjetosPageRoutingModule);



/***/ }),

/***/ "./src/app/projetos/projetos.module.ts":
/*!*********************************************!*\
  !*** ./src/app/projetos/projetos.module.ts ***!
  \*********************************************/
/*! exports provided: ProjetosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetosPageModule", function() { return ProjetosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _projetos_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projetos-routing.module */ "./src/app/projetos/projetos-routing.module.ts");
/* harmony import */ var _projetos_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projetos.page */ "./src/app/projetos/projetos.page.ts");
/* harmony import */ var _modal_cadastro_projeto_modal_cadastro_projeto_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal-cadastro-projeto/modal-cadastro-projeto.page */ "./src/app/projetos/modal-cadastro-projeto/modal-cadastro-projeto.page.ts");









let ProjetosPageModule = class ProjetosPageModule {
};
ProjetosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            // ModalCadastroProjetoPageModule,
            _projetos_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProjetosPageRoutingModule"]
        ],
        entryComponents: [_modal_cadastro_projeto_modal_cadastro_projeto_page__WEBPACK_IMPORTED_MODULE_8__["ModalCadastroProjetoPage"]],
        declarations: [_projetos_page__WEBPACK_IMPORTED_MODULE_7__["ProjetosPage"], _modal_cadastro_projeto_modal_cadastro_projeto_page__WEBPACK_IMPORTED_MODULE_8__["ModalCadastroProjetoPage"]],
    })
], ProjetosPageModule);



/***/ }),

/***/ "./src/app/projetos/projetos.page.scss":
/*!*********************************************!*\
  !*** ./src/app/projetos/projetos.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2pldG9zL3Byb2pldG9zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/projetos/projetos.page.ts":
/*!*******************************************!*\
  !*** ./src/app/projetos/projetos.page.ts ***!
  \*******************************************/
/*! exports provided: ProjetosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetosPage", function() { return ProjetosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_projeto_service_projeto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/projeto-service/projeto.service */ "./src/app/services/projeto-service/projeto.service.ts");
/* harmony import */ var _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/spinner-service/spinner.service */ "./src/app/services/spinner-service/spinner.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/refresh-page.service */ "./src/app/services/refresh-page.service.ts");
/* harmony import */ var _configHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../configHelper */ "./src/app/configHelper.ts");
/* harmony import */ var _modal_cadastro_projeto_modal_cadastro_projeto_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modal-cadastro-projeto/modal-cadastro-projeto.page */ "./src/app/projetos/modal-cadastro-projeto/modal-cadastro-projeto.page.ts");
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/utils/utils.service */ "./src/app/services/utils/utils.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");










let ProjetosPage = class ProjetosPage {
    constructor(servicoSrvc, spinnerSrvc, modalCtrl, refreshSrvc, utilSrvc, router) {
        this.servicoSrvc = servicoSrvc;
        this.spinnerSrvc = spinnerSrvc;
        this.modalCtrl = modalCtrl;
        this.refreshSrvc = refreshSrvc;
        this.utilSrvc = utilSrvc;
        this.router = router;
        this.color = "primary";
        this.listaServicos = [];
        this.color = localStorage.getItem(_configHelper__WEBPACK_IMPORTED_MODULE_6__["configHelper"].storageKeys.color) != null ?
            localStorage.getItem(_configHelper__WEBPACK_IMPORTED_MODULE_6__["configHelper"].storageKeys.color) : 'primary';
        this.color = this.utilSrvc.colorConvert(this.color);
    }
    ngOnInit() {
        const userData = JSON.parse(localStorage.getItem(_configHelper__WEBPACK_IMPORTED_MODULE_6__["configHelper"].storageKeys.user));
        this.servicoSrvc.getServicesByUser(userData._id).subscribe(servicos => {
            this.listaServicos = servicos;
            console.log('Projetos', this.listaServicos);
            this.spinnerSrvc.hide();
        });
    }
    ionViewWillEnter() {
        this.refreshSrvc.refreshProject.subscribe(() => {
            this.ngOnInit();
        });
    }
    logout() {
        localStorage.removeItem(_configHelper__WEBPACK_IMPORTED_MODULE_6__["configHelper"].storageKeys.token);
        this.router.navigate(['']);
    }
    cadastroProjeto() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(`TESTE`);
            const modal = yield this.modalCtrl.create({ component: _modal_cadastro_projeto_modal_cadastro_projeto_page__WEBPACK_IMPORTED_MODULE_7__["ModalCadastroProjetoPage"] });
            return yield modal.present();
        });
    }
};
ProjetosPage.ctorParameters = () => [
    { type: _services_projeto_service_projeto_service__WEBPACK_IMPORTED_MODULE_2__["ProjetoService"] },
    { type: _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_5__["RefreshPageService"] },
    { type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_8__["UtilsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
];
ProjetosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projetos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projetos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projetos/projetos.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projetos.page.scss */ "./src/app/projetos/projetos.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_projeto_service_projeto_service__WEBPACK_IMPORTED_MODULE_2__["ProjetoService"],
        _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_5__["RefreshPageService"],
        _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_8__["UtilsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
], ProjetosPage);



/***/ })

}]);
//# sourceMappingURL=projetos-projetos-module-es2015.js.map