(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["servicos-servicos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/servicos/servicos.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/servicos/servicos.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Serviços</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">serviços</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <!-- <app-explore-container name=\"Servicos Page\"></app-explore-container> -->\n</ion-content>\n");

/***/ }),

/***/ "./src/app/servicos/servicos-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/servicos/servicos-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ServicosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicosPageRoutingModule", function() { return ServicosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _servicos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./servicos.page */ "./src/app/servicos/servicos.page.ts");




const routes = [
    {
        path: '',
        component: _servicos_page__WEBPACK_IMPORTED_MODULE_3__["ServicosPage"]
    }
];
let ServicosPageRoutingModule = class ServicosPageRoutingModule {
};
ServicosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ServicosPageRoutingModule);



/***/ }),

/***/ "./src/app/servicos/servicos.module.ts":
/*!*********************************************!*\
  !*** ./src/app/servicos/servicos.module.ts ***!
  \*********************************************/
/*! exports provided: ServicosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicosPageModule", function() { return ServicosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _servicos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./servicos-routing.module */ "./src/app/servicos/servicos-routing.module.ts");
/* harmony import */ var _servicos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./servicos.page */ "./src/app/servicos/servicos.page.ts");







let ServicosPageModule = class ServicosPageModule {
};
ServicosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _servicos_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServicosPageRoutingModule"]
        ],
        declarations: [_servicos_page__WEBPACK_IMPORTED_MODULE_6__["ServicosPage"]]
    })
], ServicosPageModule);



/***/ }),

/***/ "./src/app/servicos/servicos.page.scss":
/*!*********************************************!*\
  !*** ./src/app/servicos/servicos.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY29zL3NlcnZpY29zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/servicos/servicos.page.ts":
/*!*******************************************!*\
  !*** ./src/app/servicos/servicos.page.ts ***!
  \*******************************************/
/*! exports provided: ServicosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicosPage", function() { return ServicosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ServicosPage = class ServicosPage {
    constructor() { }
    ngOnInit() {
    }
};
ServicosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-servicos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./servicos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/servicos/servicos.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./servicos.page.scss */ "./src/app/servicos/servicos.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ServicosPage);



/***/ })

}]);
//# sourceMappingURL=servicos-servicos-module-es2015.js.map