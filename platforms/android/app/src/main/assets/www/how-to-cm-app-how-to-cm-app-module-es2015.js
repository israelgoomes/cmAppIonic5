(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["how-to-cm-app-how-to-cm-app-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/how-to-cm-app/how-to-cm-app.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/how-to-cm-app/how-to-cm-app.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n<ion-slides>\n  <ion-slide>\n    <div class=\"slide\">\n      <img src=\"../../assets/imgs/slide-1.png\"/>\n      <h2>Bem Vindo</h2>\n      <p>O <b>Cm app</b> é um aplicativo destinado a gestão de clientes e projetos, deslize para inicar o tutorial.</p>\n    </div>\n  </ion-slide>\n\n  <ion-slide>\n    <img src=\"../../assets/imgs/slide-2.png\"/>\n    <h2>O que posso fazer ?</h2>\n    <p><b>O Cm app</b> permite que você cadastre seus clientes e os vincule aos respectivos projetos. \n      Você consegue visualizar todos projetos já feitos para o cliente, assim como o cliente dono do projeto.\n    </p>\n  </ion-slide>\n\n  <ion-slide>\n    <img src=\"../../assets/imgs/slide-3.png\"/>\n    <h2>O que mais ?</h2>\n    <p><b>Com o Cm app</b> é possível mandar e-mails em massa para seus clientes cadastrados, assim como gerar \n    o contrato quando quiser, baseado nos dados do cliente cadastrado.</p>\n  </ion-slide>\n\n  <ion-slide>\n    <img src=\"../../assets/imgs/slide-4.png\"/>\n    <h2>Vamos personalizar seu contrato ?</h2>\n    <p>Você também pode fazer isso mais tarde indo em configurações.</p>\n    <ion-button fill=\"clear\" (click)=\"conclude()\">Concluir <ion-icon slot=\"end\" name=\"thumbs-up\"></ion-icon></ion-button>\n    <ion-button fill=\"clear\">Continuar <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon></ion-button>\n  </ion-slide>\n\n</ion-slides>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/how-to-cm-app/how-to-cm-app-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/how-to-cm-app/how-to-cm-app-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: HowToCmAppPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowToCmAppPageRoutingModule", function() { return HowToCmAppPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _how_to_cm_app_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./how-to-cm-app.page */ "./src/app/how-to-cm-app/how-to-cm-app.page.ts");




const routes = [
    {
        path: '',
        component: _how_to_cm_app_page__WEBPACK_IMPORTED_MODULE_3__["HowToCmAppPage"]
    }
];
let HowToCmAppPageRoutingModule = class HowToCmAppPageRoutingModule {
};
HowToCmAppPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HowToCmAppPageRoutingModule);



/***/ }),

/***/ "./src/app/how-to-cm-app/how-to-cm-app.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/how-to-cm-app/how-to-cm-app.module.ts ***!
  \*******************************************************/
/*! exports provided: HowToCmAppPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowToCmAppPageModule", function() { return HowToCmAppPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _how_to_cm_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./how-to-cm-app-routing.module */ "./src/app/how-to-cm-app/how-to-cm-app-routing.module.ts");
/* harmony import */ var _how_to_cm_app_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./how-to-cm-app.page */ "./src/app/how-to-cm-app/how-to-cm-app.page.ts");







let HowToCmAppPageModule = class HowToCmAppPageModule {
};
HowToCmAppPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _how_to_cm_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["HowToCmAppPageRoutingModule"]
        ],
        declarations: [_how_to_cm_app_page__WEBPACK_IMPORTED_MODULE_6__["HowToCmAppPage"]]
    })
], HowToCmAppPageModule);



/***/ }),

/***/ "./src/app/how-to-cm-app/how-to-cm-app.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/how-to-cm-app/how-to-cm-app.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\nion-slides {\n  height: 100%;\n}\n\n.swiper-slide {\n  display: block;\n}\n\n.swiper-slide h2 {\n  margin-top: 2.8rem;\n}\n\n.swiper-slide img {\n  max-height: 50%;\n  max-width: 80%;\n  margin: 60px 0 40px;\n  pointer-events: none;\n}\n\nb {\n  font-weight: 500;\n}\n\np {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--ion-color-step-600, #60646b);\n}\n\np b {\n  color: var(--ion-text-color, #000000);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG93LXRvLWNtLWFwcC9DOlxcVXNlcnNcXGlnb21lc2xhXFxEb2N1bWVudHNcXGlvbmljXFxjbUFwcElvbmljNS9zcmNcXGFwcFxcaG93LXRvLWNtLWFwcFxcaG93LXRvLWNtLWFwcC5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvdy10by1jbS1hcHAvaG93LXRvLWNtLWFwcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLDRCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUU7RUFDRSxjQUFBO0FDQ0o7O0FERUU7RUFDRSxrQkFBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUU7RUFDRSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0FDQ0o7O0FERUU7RUFDRSxxQ0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvaG93LXRvLWNtLWFwcC9ob3ctdG8tY20tYXBwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcclxuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XHJcbiAgICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiAyMnB4O1xyXG4gIH1cclxuXHJcbmlvbi1zbGlkZXMge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnN3aXBlci1zbGlkZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC5zd2lwZXItc2xpZGUgaDIge1xyXG4gICAgbWFyZ2luLXRvcDogMi44cmVtO1xyXG4gIH1cclxuXHJcbiAgLnN3aXBlci1zbGlkZSBpbWcge1xyXG4gICAgbWF4LWhlaWdodDogNTAlO1xyXG4gICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDYwcHggMCA0MHB4O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBiIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIHBhZGRpbmc6IDAgNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCAjNjA2NDZiKTtcclxuICB9XHJcblxyXG4gIHAgYiB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IsICMwMDAwMDApO1xyXG4gIH0iLCI6cm9vdCB7XG4gIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XG4gIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IDIycHg7XG59XG5cbmlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnN3aXBlci1zbGlkZSBoMiB7XG4gIG1hcmdpbi10b3A6IDIuOHJlbTtcbn1cblxuLnN3aXBlci1zbGlkZSBpbWcge1xuICBtYXgtaGVpZ2h0OiA1MCU7XG4gIG1heC13aWR0aDogODAlO1xuICBtYXJnaW46IDYwcHggMCA0MHB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuYiB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbnAge1xuICBwYWRkaW5nOiAwIDQwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwgIzYwNjQ2Yik7XG59XG5cbnAgYiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMDAwMCk7XG59Il19 */");

/***/ }),

/***/ "./src/app/how-to-cm-app/how-to-cm-app.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/how-to-cm-app/how-to-cm-app.page.ts ***!
  \*****************************************************/
/*! exports provided: HowToCmAppPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowToCmAppPage", function() { return HowToCmAppPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _configHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configHelper */ "./src/app/configHelper.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let HowToCmAppPage = class HowToCmAppPage {
    constructor(router) {
        this.router = router;
        this.slideOpts = {
            initialSlide: 1,
            speed: 400
        };
    }
    ngOnInit() {
    }
    conclude() {
        localStorage.setItem(_configHelper__WEBPACK_IMPORTED_MODULE_2__["configHelper"].storageKeys.concluded, 'concluded');
        this.router.navigate(['/tabs/tabs/clientes']);
    }
};
HowToCmAppPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HowToCmAppPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-how-to-cm-app',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./how-to-cm-app.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/how-to-cm-app/how-to-cm-app.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./how-to-cm-app.page.scss */ "./src/app/how-to-cm-app/how-to-cm-app.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], HowToCmAppPage);



/***/ })

}]);
//# sourceMappingURL=how-to-cm-app-how-to-cm-app-module-es2015.js.map