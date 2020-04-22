(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["configuracao-configuracao-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/configuracao/configuracao.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/configuracao/configuracao.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-buttons >\r\n  <ion-menu-button autoHide=\"false\"></ion-menu-button>\r\n\r\n</ion-buttons> -->\r\n<ion-toolbar>\r\n  <ion-icon (click)=\"voltar()\" name=\"arrow-back-outline\"></ion-icon>\r\n</ion-toolbar>\r\n\r\n<ion-content padding>\r\n  <div [ngClass]=\"class\">\r\n  <div id=\"left\">\r\n    \r\n    <div (click)=\"getPicture()\" class=\"circle\">\r\n      <img [src]=\"usuario?.foto\" width=\"70\" height=\"70\"/>\r\n    </div>\r\n  </div>\r\n  <div id=\"right\">\r\n      {{usuario?.nome}}<br/>\r\n      {{usuario?.email}}\r\n  </div>\r\n  </div>\r\n  \r\n  <ion-card>\r\n    <ion-card-header center>\r\n  Tema\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n  \r\n      <div class=\"div1\"> \r\n        <div class=\"theme1\" (click)=\"setTheme('purple')\">\r\n        </div>\r\n          <ion-input style=\"padding-left: 14px;\" type=\"text\" value=\"purple\" readonly ></ion-input>\r\n      </div>\r\n      \r\n      <div class=\"div2\"> \r\n          <div class=\"theme2\" (click)=\"setTheme('origin')\">\r\n          </div>\r\n          <ion-input style=\"padding-left: 11px;\" type=\"text\" value=\"Original\" readonly ></ion-input>\r\n        </div>\r\n      \r\n        <div class=\"div3\"> \r\n            <div class=\"theme3\" (click)=\"setTheme('blue')\">\r\n            </div>\r\n            <ion-input style=\"padding-left: 20px;\" type=\"text\" value=\"Blue\" readonly ></ion-input>\r\n          </div>\r\n      \r\n          <div class=\"div4\"> \r\n              <div class=\"theme4\" (click)=\"setTheme('black')\">\r\n              </div>\r\n              <ion-input style=\"padding-left: 19px;\" type=\"text\" value=\"Dark\" readonly ></ion-input>\r\n            </div>\r\n            \r\n  \r\n    </ion-card-content>\r\n  </ion-card>\r\n  \r\n  <ion-card>\r\n    <ion-card-content>\r\n   Membro desde: {{usuario?.dataCriacao}}    \r\n    </ion-card-content>\r\n  </ion-card>\r\n  \r\n  <ion-card (click)=\"delete()\">\r\n      <ion-card-content style=\"padding-top: 0px; padding-bottom: 0px; padding-left: 0px;\">\r\n        <ion-item lines=\"none\">\r\n  <label>Excluir conta</label>        <ion-note slot=\"end\">\r\n      <ion-icon  id=\"trash\" name=\"trash\"></ion-icon> </ion-note>\r\n          <br/>\r\n        </ion-item>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  \r\n    <ion-card>\r\n        <ion-card-content style=\"padding-top: 0px; padding-bottom: 0px; padding-left: 0px;\" >\r\n          <ion-item lines=\"none\" (click)=\"logout()\">\r\n    <label>Sair da conta</label>        <ion-note slot=\"end\">\r\n        <ion-icon id=\"off\" name=\"power\"></ion-icon> </ion-note>\r\n            <br/>\r\n          </ion-item>\r\n        </ion-card-content>\r\n      </ion-card>\r\n  \r\n  </ion-content>\r\n  ");

/***/ }),

/***/ "./src/app/configuracao/configuracao-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/configuracao/configuracao-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ConfiguracaoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracaoPageRoutingModule", function() { return ConfiguracaoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _configuracao_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configuracao.page */ "./src/app/configuracao/configuracao.page.ts");




const routes = [
    {
        path: '',
        component: _configuracao_page__WEBPACK_IMPORTED_MODULE_3__["ConfiguracaoPage"]
    }
];
let ConfiguracaoPageRoutingModule = class ConfiguracaoPageRoutingModule {
};
ConfiguracaoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConfiguracaoPageRoutingModule);



/***/ }),

/***/ "./src/app/configuracao/configuracao.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/configuracao/configuracao.module.ts ***!
  \*****************************************************/
/*! exports provided: ConfiguracaoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracaoPageModule", function() { return ConfiguracaoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _configuracao_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./configuracao-routing.module */ "./src/app/configuracao/configuracao-routing.module.ts");
/* harmony import */ var _configuracao_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./configuracao.page */ "./src/app/configuracao/configuracao.page.ts");







let ConfiguracaoPageModule = class ConfiguracaoPageModule {
};
ConfiguracaoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _configuracao_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfiguracaoPageRoutingModule"]
        ],
        declarations: [_configuracao_page__WEBPACK_IMPORTED_MODULE_6__["ConfiguracaoPage"]]
    })
], ConfiguracaoPageModule);



/***/ }),

/***/ "./src/app/configuracao/configuracao.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/configuracao/configuracao.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".origin {\n  height: 170px;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527F76));\n  background-image: linear-gradient(to bottom, white, #527F76);\n  text-align: center;\n}\n\n.purple {\n  height: 170px;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(purple));\n  background-image: linear-gradient(to bottom, white, purple);\n  text-align: center;\n}\n\n.blue {\n  height: 170px;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(Navy));\n  background-image: linear-gradient(to bottom, white, Navy);\n  text-align: center;\n}\n\n.black {\n  height: 170px;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(black));\n  background-image: linear-gradient(to bottom, white, black);\n  text-align: center;\n}\n\n.scroll-content {\n  padding: 0px !important;\n}\n\nion-content {\n  padding: 5px !important;\n}\n\nion-icon#trash {\n  font-size: 25px;\n}\n\nion-icon#off {\n  font-size: 20px;\n  color: red;\n}\n\nion-label#title {\n  padding-top: 5px;\n  color: white;\n  margin-top: 0px;\n  font-size: 20px;\n  text-align: center;\n}\n\nion-card-header {\n  text-align: center;\n  padding-bottom: 0px !important;\n}\n\ndiv#header span {\n  text-align: center;\n  color: white;\n  font-size: 15px;\n}\n\n.circle {\n  margin-top: 20px;\n  background-color: #aaa;\n  border-radius: 50%;\n  width: 70px;\n  height: 70px;\n  overflow: hidden;\n  position: relative;\n  margin-left: 20px;\n  padding-left: 0px !important;\n}\n\n.theme1 {\n  margin-top: 50px;\n  background-color: purple;\n  border-radius: 50%;\n  width: 70px;\n  height: 70px;\n  overflow: hidden;\n  position: relative;\n  margin-left: 5px;\n  padding-left: 0px !important;\n}\n\n.theme2 {\n  margin-top: 50px;\n  background-color: #527F76;\n  border-radius: 50%;\n  width: 70px;\n  height: 70px;\n  overflow: hidden;\n  position: relative;\n  margin-left: 5px;\n  padding-left: 0px !important;\n}\n\n.theme3 {\n  margin-top: 50px;\n  background-color: Navy;\n  border-radius: 50%;\n  width: 70px;\n  height: 70px;\n  overflow: hidden;\n  position: relative;\n  margin-left: 5px;\n  padding-left: 0px !important;\n}\n\n.theme4 {\n  margin-top: 50px;\n  background-color: black;\n  border-radius: 50%;\n  width: 70px;\n  height: 70px;\n  overflow: hidden;\n  position: relative;\n  margin-left: 5px;\n  padding-left: 0px !important;\n}\n\n#left {\n  width: 30%;\n  float: left;\n}\n\n#right {\n  text-align: left;\n  margin-top: 30px;\n  width: 70%;\n  float: left;\n}\n\n.dataUser {\n  margin-top: 30px;\n  background: transparent;\n  color: black;\n  background-color: black;\n}\n\n.div1 {\n  text-align: center;\n  width: 25%;\n  float: left;\n}\n\n.div2 {\n  text-align: center;\n  width: 25%;\n  float: left;\n}\n\n.div3 {\n  text-align: center;\n  width: 25%;\n  float: left;\n}\n\n.div4 {\n  text-align: center;\n  width: 25%;\n  float: left;\n}\n\n.item-native {\n  background-color: black;\n}\n\nion-icon {\n  font-size: 30px;\n}\n\nion-item.circle div.item-native {\n  padding: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZmlndXJhY2FvL0M6XFxVc2Vyc1xcaWdvbWVzbGFcXERvY3VtZW50c1xcaW9uaWNcXGNtQXBwSW9uaWM1L3NyY1xcYXBwXFxjb25maWd1cmFjYW9cXGNvbmZpZ3VyYWNhby5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvbmZpZ3VyYWNhby9jb25maWd1cmFjYW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLDJGQUFBO0VBQUEsNERBQUE7RUFFQSxrQkFBQTtBQ0FKOztBREdBO0VBQ0UsYUFBQTtFQUNBLDBGQUFBO0VBQUEsMkRBQUE7RUFFQSxrQkFBQTtBQ0RGOztBRElBO0VBQ0UsYUFBQTtFQUNBLHdGQUFBO0VBQUEseURBQUE7RUFFQSxrQkFBQTtBQ0ZGOztBREtBO0VBQ0UsYUFBQTtFQUNBLHlGQUFBO0VBQUEsMERBQUE7RUFFQSxrQkFBQTtBQ0hGOztBRE1BO0VBQ0ksdUJBQUE7QUNISjs7QURNQTtFQUNJLHVCQUFBO0FDSEo7O0FES0E7RUFDRSxlQUFBO0FDRkY7O0FES0E7RUFDRSxlQUFBO0VBQ0EsVUFBQTtBQ0ZGOztBRElBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0RKOztBREdBO0VBQ0Usa0JBQUE7RUFDRSw4QkFBQTtBQ0FKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtBQ0VKOztBRENFO0VBQ0UsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQ0VKOztBREFFO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQ0dKOztBRERFO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQ0lKOztBREZFO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQ0tKOztBRFNFO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUNOSjs7QURTSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ05SOztBRFNJO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQ05SOztBRFVJO0VBQ0ksa0JBQUE7RUFFQyxVQUFBO0VBQ0EsV0FBQTtBQ1JUOztBRFdJO0VBQ0ksa0JBQUE7RUFFQyxVQUFBO0VBQ0EsV0FBQTtBQ1RUOztBRFlJO0VBQ0ksa0JBQUE7RUFFQyxVQUFBO0VBQ0EsV0FBQTtBQ1ZUOztBRGFJO0VBQ0ksa0JBQUE7RUFFQyxVQUFBO0VBQ0EsV0FBQTtBQ1hUOztBRGVJO0VBQ0UsdUJBQUE7QUNaTjs7QURjSTtFQUNFLGVBQUE7QUNYTjs7QURhRTtFQUNFLHVCQUFBO0FDVkoiLCJmaWxlIjoic3JjL2FwcC9jb25maWd1cmFjYW8vY29uZmlndXJhY2FvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcmlnaW57XHJcbiAgICBoZWlnaHQ6IDE3MHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsICM1MjdGNzYpOyBcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICM1MjdGNzY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wdXJwbGV7XHJcbiAgaGVpZ2h0OiAxNzBweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgcHVycGxlKTsgXHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzUyN0Y3NjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ibHVle1xyXG4gIGhlaWdodDogMTcwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsIE5hdnkpOyBcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI3Rjc2O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJsYWNre1xyXG4gIGhlaWdodDogMTcwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsIGJsYWNrKTsgXHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzUyN0Y3NjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zY3JvbGwtY29udGVudHtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuICAgIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1pY29uI3RyYXNoe1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuaW9uLWljb24jb2Zme1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbmlvbi1sYWJlbCN0aXRsZXtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaW9uLWNhcmQtaGVhZGVye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5kaXYjaGVhZGVyIHNwYW57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLmNpcmNsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC50aGVtZTF7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7IFxyXG4gIH1cclxuICAudGhlbWUye1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MjdGNzY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDsgXHJcbiAgfVxyXG4gIC50aGVtZTN7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogTmF2eTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50OyBcclxuICB9XHJcbiAgLnRoZW1lNHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50OyBcclxuICB9XHJcblxyXG4ucHVycGxlVGhlbWV7XHJcbiAgXHJcbn1cclxuXHJcblxyXG5cclxuICAuY2lyY2xlIGltZyB7XHJcbiAgICAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vYm90dG9tOiAwO1xyXG4gICAgLy93aWR0aDogMTAwJTtcclxuICB9XHJcbiAgI2xlZnQge1xyXG4gICAgd2lkdGg6MzAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICNyaWdodCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzUyN0Y3NiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmRhdGFVc2Vye1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5kaXYxe1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAvLyBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcblxyXG4gICAgfVxyXG4gICAgLmRpdjJ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIC8vIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgICBmbG9hdDogbGVmdDtcclxuXHJcbiAgICB9XHJcbiAgICAuZGl2M3tcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgLy8gcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG5cclxuICAgIH1cclxuICAgIC5kaXY0e1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAvLyBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5pdGVtLW5hdGl2ZXtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbiAgICBpb24taWNvbntcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxuICBpb24taXRlbS5jaXJjbGUgZGl2Lml0ZW0tbmF0aXZlIHtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gIH0iLCIub3JpZ2luIHtcbiAgaGVpZ2h0OiAxNzBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsICM1MjdGNzYpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wdXJwbGUge1xuICBoZWlnaHQ6IDE3MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgcHVycGxlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmx1ZSB7XG4gIGhlaWdodDogMTcwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCBOYXZ5KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmxhY2sge1xuICBoZWlnaHQ6IDE3MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgYmxhY2spO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zY3JvbGwtY29udGVudCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCB7XG4gIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xufVxuXG5pb24taWNvbiN0cmFzaCB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuaW9uLWljb24jb2ZmIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogcmVkO1xufVxuXG5pb24tbGFiZWwjdGl0bGUge1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG5kaXYjaGVhZGVyIHNwYW4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uY2lyY2xlIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4udGhlbWUxIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbn1cblxuLnRoZW1lMiB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MjdGNzY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4udGhlbWUzIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogTmF2eTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi50aGVtZTQge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbiNsZWZ0IHtcbiAgd2lkdGg6IDMwJTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbiNyaWdodCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHdpZHRoOiA3MCU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uZGF0YVVzZXIge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLmRpdjEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAyNSU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uZGl2MiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDI1JTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5kaXYzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMjUlO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmRpdjQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAyNSU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uaXRlbS1uYXRpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbmlvbi1pdGVtLmNpcmNsZSBkaXYuaXRlbS1uYXRpdmUge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/configuracao/configuracao.page.ts":
/*!***************************************************!*\
  !*** ./src/app/configuracao/configuracao.page.ts ***!
  \***************************************************/
/*! exports provided: ConfiguracaoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracaoPage", function() { return ConfiguracaoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_usuario_service_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/usuario-service/usuario.service */ "./src/app/services/usuario-service/usuario.service.ts");
/* harmony import */ var _configHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configHelper */ "./src/app/configHelper.ts");
/* harmony import */ var _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/spinner-service/spinner.service */ "./src/app/services/spinner-service/spinner.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_camera_service_camera_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/camera-service/camera.service */ "./src/app/services/camera-service/camera.service.ts");
/* harmony import */ var _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/refresh-page.service */ "./src/app/services/refresh-page.service.ts");









let ConfiguracaoPage = class ConfiguracaoPage {
    constructor(userSrvc, spinnerSrvc, menuCtrl, router, actionSheetCtrl, cameraSrvc, refreshSrvc) {
        this.userSrvc = userSrvc;
        this.spinnerSrvc = spinnerSrvc;
        this.menuCtrl = menuCtrl;
        this.router = router;
        this.actionSheetCtrl = actionSheetCtrl;
        this.cameraSrvc = cameraSrvc;
        this.refreshSrvc = refreshSrvc;
        this.class = "origin";
        this.class = localStorage.getItem(_configHelper__WEBPACK_IMPORTED_MODULE_3__["configHelper"].storageKeys.color)
            != null ? localStorage.getItem(_configHelper__WEBPACK_IMPORTED_MODULE_3__["configHelper"].storageKeys.color) : 'origin';
    }
    ngOnInit() {
        console.log('COnfigurações');
        this.menuCtrl.isOpen('false');
        const idUser = JSON.parse(localStorage.getItem(_configHelper__WEBPACK_IMPORTED_MODULE_3__["configHelper"].storageKeys.user));
        this.userSrvc.getByIdUser(idUser._id).subscribe(data => {
            this.usuario = data;
            console.log('User', this.usuario);
            this.spinnerSrvc.hide();
        });
    }
    getPicture() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let actionSheet = this.actionSheetCtrl.create({
                header: "Alterar Foto",
                buttons: [
                    {
                        text: 'Tirar foro',
                        handler: () => {
                            this.cameraSrvc.takePicture(photo => {
                                //ação salvar
                                console.log(this.usuario);
                                this.usuario.foto = photo;
                                this.userSrvc.upadateUser(this.usuario._id, this.usuario).subscribe(() => {
                                    console.log('Foto alterada com sucesso', this.usuario.foto);
                                    this.spinnerSrvc.hide();
                                });
                            });
                        }, icon: "camera"
                    },
                    //pegar da galeria
                    {
                        text: "Pegar galeria",
                        handler: () => {
                            this.cameraSrvc.getPictureFromGalery(photo => {
                                //ação salvar
                                this.usuario.foto = photo;
                                this.userSrvc.upadateUser(this.usuario._id, this.usuario).subscribe(() => {
                                    console.log('Foto alterada com sucesso');
                                    this.spinnerSrvc.hide();
                                });
                            });
                        },
                        icon: "images"
                    },
                    {
                        text: "cancelar",
                        role: "destructive",
                        icon: "close",
                        handler: () => {
                            //cancela a ação
                        }
                    }
                ]
            });
            (yield actionSheet).present();
        });
    }
    setTheme(param) {
        this.class = param;
        localStorage.setItem(_configHelper__WEBPACK_IMPORTED_MODULE_3__["configHelper"].storageKeys.color, this.class);
        this.refreshSrvc.changeTheme.emit();
    }
    voltar() {
        this.router.navigate(['/tabs/tabs/clientes']);
    }
    delete() {
    }
    logout() {
        localStorage.removeItem(_configHelper__WEBPACK_IMPORTED_MODULE_3__["configHelper"].storageKeys.token);
        this.router.navigate(['login']);
    }
};
ConfiguracaoPage.ctorParameters = () => [
    { type: _services_usuario_service_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"] },
    { type: _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
    { type: _services_camera_service_camera_service__WEBPACK_IMPORTED_MODULE_7__["CameraService"] },
    { type: _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_8__["RefreshPageService"] }
];
ConfiguracaoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-configuracao',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./configuracao.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/configuracao/configuracao.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./configuracao.page.scss */ "./src/app/configuracao/configuracao.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_usuario_service_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
        _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"],
        _services_camera_service_camera_service__WEBPACK_IMPORTED_MODULE_7__["CameraService"],
        _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_8__["RefreshPageService"]])
], ConfiguracaoPage);



/***/ }),

/***/ "./src/app/services/camera-service/camera.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/camera-service/camera.service.ts ***!
  \***********************************************************/
/*! exports provided: CameraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraService", function() { return CameraService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");




let CameraService = class CameraService {
    constructor(camera, platform) {
        this.camera = camera;
        this.platform = platform;
    }
    _pictureConfiguration(source, callback) {
        if (this.platform.is('cordova')) {
            this.platform.ready().then(() => {
                const options = {
                    quality: 100,
                    destinationType: this.camera.DestinationType.DATA_URL,
                    encodingType: this.camera.EncodingType.JPEG,
                    mediaType: this.camera.MediaType.PICTURE,
                    sourceType: source
                };
                this.camera.getPicture(options).then((imageData) => {
                    let base64Image = 'data:image/jpeg;base64,' + imageData;
                    callback(base64Image);
                    console.log('Imagem já convertida base64', base64Image);
                }, (err) => {
                    console.error('Problema ao capturar a foto', err);
                });
            });
        }
        else {
            alert('Disponibilidade disponível somento no devide');
        }
    }
    getPictureFromGalery(callback) {
        this._pictureConfiguration(this.camera.PictureSourceType.PHOTOLIBRARY, photo => {
            callback(photo);
        });
    }
    takePicture(callback) {
        this._pictureConfiguration(this.camera.PictureSourceType.CAMERA, photo => {
            callback(photo);
        });
    }
};
CameraService.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
];
CameraService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
], CameraService);



/***/ })

}]);
//# sourceMappingURL=configuracao-configuracao-module-es2015.js.map