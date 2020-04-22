function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["configuracao-configuracao-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/configuracao/configuracao.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/configuracao/configuracao.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppConfiguracaoConfiguracaoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-buttons >\r\n  <ion-menu-button autoHide=\"false\"></ion-menu-button>\r\n\r\n</ion-buttons> -->\r\n<ion-toolbar>\r\n  <ion-icon (click)=\"voltar()\" name=\"arrow-back-outline\"></ion-icon>\r\n</ion-toolbar>\r\n\r\n<ion-content padding>\r\n  <div [ngClass]=\"class\">\r\n  <div id=\"left\">\r\n    \r\n    <div (click)=\"getPicture()\" class=\"circle\">\r\n      <img [src]=\"usuario?.foto\" width=\"70\" height=\"70\"/>\r\n    </div>\r\n  </div>\r\n  <div id=\"right\">\r\n      {{usuario?.nome}}<br/>\r\n      {{usuario?.email}}\r\n  </div>\r\n  </div>\r\n  \r\n  <ion-card>\r\n    <ion-card-header center>\r\n  Tema\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n  \r\n      <div class=\"div1\"> \r\n        <div class=\"theme1\" (click)=\"setTheme('purple')\">\r\n        </div>\r\n          <ion-input style=\"padding-left: 14px;\" type=\"text\" value=\"purple\" readonly ></ion-input>\r\n      </div>\r\n      \r\n      <div class=\"div2\"> \r\n          <div class=\"theme2\" (click)=\"setTheme('origin')\">\r\n          </div>\r\n          <ion-input style=\"padding-left: 11px;\" type=\"text\" value=\"Original\" readonly ></ion-input>\r\n        </div>\r\n      \r\n        <div class=\"div3\"> \r\n            <div class=\"theme3\" (click)=\"setTheme('blue')\">\r\n            </div>\r\n            <ion-input style=\"padding-left: 20px;\" type=\"text\" value=\"Blue\" readonly ></ion-input>\r\n          </div>\r\n      \r\n          <div class=\"div4\"> \r\n              <div class=\"theme4\" (click)=\"setTheme('black')\">\r\n              </div>\r\n              <ion-input style=\"padding-left: 19px;\" type=\"text\" value=\"Dark\" readonly ></ion-input>\r\n            </div>\r\n            \r\n  \r\n    </ion-card-content>\r\n  </ion-card>\r\n  \r\n  <ion-card>\r\n    <ion-card-content>\r\n   Membro desde: {{usuario?.dataCriacao}}    \r\n    </ion-card-content>\r\n  </ion-card>\r\n  \r\n  <ion-card (click)=\"delete()\">\r\n      <ion-card-content style=\"padding-top: 0px; padding-bottom: 0px; padding-left: 0px;\">\r\n        <ion-item lines=\"none\">\r\n  <label>Excluir conta</label>        <ion-note slot=\"end\">\r\n      <ion-icon  id=\"trash\" name=\"trash\"></ion-icon> </ion-note>\r\n          <br/>\r\n        </ion-item>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  \r\n    <ion-card>\r\n        <ion-card-content style=\"padding-top: 0px; padding-bottom: 0px; padding-left: 0px;\" >\r\n          <ion-item lines=\"none\" (click)=\"logout()\">\r\n    <label>Sair da conta</label>        <ion-note slot=\"end\">\r\n        <ion-icon id=\"off\" name=\"power\"></ion-icon> </ion-note>\r\n            <br/>\r\n          </ion-item>\r\n        </ion-card-content>\r\n      </ion-card>\r\n  \r\n  </ion-content>\r\n  ";
    /***/
  },

  /***/
  "./src/app/configuracao/configuracao-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/configuracao/configuracao-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: ConfiguracaoPageRoutingModule */

  /***/
  function srcAppConfiguracaoConfiguracaoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfiguracaoPageRoutingModule", function () {
      return ConfiguracaoPageRoutingModule;
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


    var _configuracao_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./configuracao.page */
    "./src/app/configuracao/configuracao.page.ts");

    var routes = [{
      path: '',
      component: _configuracao_page__WEBPACK_IMPORTED_MODULE_3__["ConfiguracaoPage"]
    }];

    var ConfiguracaoPageRoutingModule = function ConfiguracaoPageRoutingModule() {
      _classCallCheck(this, ConfiguracaoPageRoutingModule);
    };

    ConfiguracaoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ConfiguracaoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/configuracao/configuracao.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/configuracao/configuracao.module.ts ***!
    \*****************************************************/

  /*! exports provided: ConfiguracaoPageModule */

  /***/
  function srcAppConfiguracaoConfiguracaoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfiguracaoPageModule", function () {
      return ConfiguracaoPageModule;
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


    var _configuracao_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./configuracao-routing.module */
    "./src/app/configuracao/configuracao-routing.module.ts");
    /* harmony import */


    var _configuracao_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./configuracao.page */
    "./src/app/configuracao/configuracao.page.ts");

    var ConfiguracaoPageModule = function ConfiguracaoPageModule() {
      _classCallCheck(this, ConfiguracaoPageModule);
    };

    ConfiguracaoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _configuracao_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfiguracaoPageRoutingModule"]],
      declarations: [_configuracao_page__WEBPACK_IMPORTED_MODULE_6__["ConfiguracaoPage"]]
    })], ConfiguracaoPageModule);
    /***/
  },

  /***/
  "./src/app/configuracao/configuracao.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/configuracao/configuracao.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppConfiguracaoConfiguracaoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".origin {\n  height: 170px;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527F76));\n  background-image: linear-gradient(to bottom, white, #527F76);\n  text-align: center;\n}\n\n.purple {\n  height: 170px;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(purple));\n  background-image: linear-gradient(to bottom, white, purple);\n  text-align: center;\n}\n\n.blue {\n  height: 170px;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(Navy));\n  background-image: linear-gradient(to bottom, white, Navy);\n  text-align: center;\n}\n\n.black {\n  height: 170px;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(black));\n  background-image: linear-gradient(to bottom, white, black);\n  text-align: center;\n}\n\n.scroll-content {\n  padding: 0px !important;\n}\n\nion-content {\n  padding: 5px !important;\n}\n\nion-icon#trash {\n  font-size: 25px;\n}\n\nion-icon#off {\n  font-size: 20px;\n  color: red;\n}\n\nion-label#title {\n  padding-top: 5px;\n  color: white;\n  margin-top: 0px;\n  font-size: 20px;\n  text-align: center;\n}\n\nion-card-header {\n  text-align: center;\n  padding-bottom: 0px !important;\n}\n\ndiv#header span {\n  text-align: center;\n  color: white;\n  font-size: 15px;\n}\n\n.circle {\n  margin-top: 20px;\n  background-color: #aaa;\n  border-radius: 50%;\n  width: 70px;\n  height: 70px;\n  overflow: hidden;\n  position: relative;\n  margin-left: 20px;\n  padding-left: 0px !important;\n}\n\n.theme1 {\n  margin-top: 50px;\n  background-color: purple;\n  border-radius: 50%;\n  width: 70px;\n  height: 70px;\n  overflow: hidden;\n  position: relative;\n  margin-left: 5px;\n  padding-left: 0px !important;\n}\n\n.theme2 {\n  margin-top: 50px;\n  background-color: #527F76;\n  border-radius: 50%;\n  width: 70px;\n  height: 70px;\n  overflow: hidden;\n  position: relative;\n  margin-left: 5px;\n  padding-left: 0px !important;\n}\n\n.theme3 {\n  margin-top: 50px;\n  background-color: Navy;\n  border-radius: 50%;\n  width: 70px;\n  height: 70px;\n  overflow: hidden;\n  position: relative;\n  margin-left: 5px;\n  padding-left: 0px !important;\n}\n\n.theme4 {\n  margin-top: 50px;\n  background-color: black;\n  border-radius: 50%;\n  width: 70px;\n  height: 70px;\n  overflow: hidden;\n  position: relative;\n  margin-left: 5px;\n  padding-left: 0px !important;\n}\n\n#left {\n  width: 30%;\n  float: left;\n}\n\n#right {\n  text-align: left;\n  margin-top: 30px;\n  width: 70%;\n  float: left;\n}\n\n.dataUser {\n  margin-top: 30px;\n  background: transparent;\n  color: black;\n  background-color: black;\n}\n\n.div1 {\n  text-align: center;\n  width: 25%;\n  float: left;\n}\n\n.div2 {\n  text-align: center;\n  width: 25%;\n  float: left;\n}\n\n.div3 {\n  text-align: center;\n  width: 25%;\n  float: left;\n}\n\n.div4 {\n  text-align: center;\n  width: 25%;\n  float: left;\n}\n\n.item-native {\n  background-color: black;\n}\n\nion-icon {\n  font-size: 30px;\n}\n\nion-item.circle div.item-native {\n  padding: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZmlndXJhY2FvL0M6XFxVc2Vyc1xcbHNyYWVsXFxEZXNrdG9wXFxQcm9qZXRvc1xcY21BcHBJb25pYzUvc3JjXFxhcHBcXGNvbmZpZ3VyYWNhb1xcY29uZmlndXJhY2FvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29uZmlndXJhY2FvL2NvbmZpZ3VyYWNhby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsMkZBQUE7RUFBQSw0REFBQTtFQUVBLGtCQUFBO0FDQUo7O0FER0E7RUFDRSxhQUFBO0VBQ0EsMEZBQUE7RUFBQSwyREFBQTtFQUVBLGtCQUFBO0FDREY7O0FESUE7RUFDRSxhQUFBO0VBQ0Esd0ZBQUE7RUFBQSx5REFBQTtFQUVBLGtCQUFBO0FDRkY7O0FES0E7RUFDRSxhQUFBO0VBQ0EseUZBQUE7RUFBQSwwREFBQTtFQUVBLGtCQUFBO0FDSEY7O0FETUE7RUFDSSx1QkFBQTtBQ0hKOztBRE1BO0VBQ0ksdUJBQUE7QUNISjs7QURLQTtFQUNFLGVBQUE7QUNGRjs7QURLQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0FDRkY7O0FESUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDREo7O0FER0E7RUFDRSxrQkFBQTtFQUNFLDhCQUFBO0FDQUo7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0FDRUo7O0FEQ0U7RUFDRSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FDRUo7O0FEQUU7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FDR0o7O0FEREU7RUFDRSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FDSUo7O0FERkU7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FDS0o7O0FEU0U7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQ05KOztBRFNJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDTlI7O0FEU0k7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDTlI7O0FEVUk7RUFDSSxrQkFBQTtFQUVDLFVBQUE7RUFDQSxXQUFBO0FDUlQ7O0FEV0k7RUFDSSxrQkFBQTtFQUVDLFVBQUE7RUFDQSxXQUFBO0FDVFQ7O0FEWUk7RUFDSSxrQkFBQTtFQUVDLFVBQUE7RUFDQSxXQUFBO0FDVlQ7O0FEYUk7RUFDSSxrQkFBQTtFQUVDLFVBQUE7RUFDQSxXQUFBO0FDWFQ7O0FEZUk7RUFDRSx1QkFBQTtBQ1pOOztBRGNJO0VBQ0UsZUFBQTtBQ1hOOztBRGFFO0VBQ0UsdUJBQUE7QUNWSiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZ3VyYWNhby9jb25maWd1cmFjYW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9yaWdpbntcclxuICAgIGhlaWdodDogMTcwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgIzUyN0Y3Nik7IFxyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzUyN0Y3NjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnB1cnBsZXtcclxuICBoZWlnaHQ6IDE3MHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCBwdXJwbGUpOyBcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI3Rjc2O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJsdWV7XHJcbiAgaGVpZ2h0OiAxNzBweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgTmF2eSk7IFxyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICM1MjdGNzY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYmxhY2t7XHJcbiAgaGVpZ2h0OiAxNzBweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgYmxhY2spOyBcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI3Rjc2O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNjcm9sbC1jb250ZW50e1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gICAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWljb24jdHJhc2h7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG5pb24taWNvbiNvZmZ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuaW9uLWxhYmVsI3RpdGxle1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5pb24tY2FyZC1oZWFkZXJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbmRpdiNoZWFkZXIgc3BhbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4uY2lyY2xlIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnRoZW1lMXtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDsgXHJcbiAgfVxyXG4gIC50aGVtZTJ7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUyN0Y3NjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50OyBcclxuICB9XHJcbiAgLnRoZW1lM3tcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBOYXZ5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7IFxyXG4gIH1cclxuICAudGhlbWU0e1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7IFxyXG4gIH1cclxuXHJcbi5wdXJwbGVUaGVtZXtcclxuICBcclxufVxyXG5cclxuXHJcblxyXG4gIC5jaXJjbGUgaW1nIHtcclxuICAgIC8vcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy9ib3R0b206IDA7XHJcbiAgICAvL3dpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAjbGVmdCB7XHJcbiAgICB3aWR0aDozMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgI3JpZ2h0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI3Rjc2ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuZGF0YVVzZXJ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2tcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmRpdjF7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIC8vIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgICBmbG9hdDogbGVmdDtcclxuXHJcbiAgICB9XHJcbiAgICAuZGl2MntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgLy8gcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG5cclxuICAgIH1cclxuICAgIC5kaXYze1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAvLyBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcblxyXG4gICAgfVxyXG4gICAgLmRpdjR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIC8vIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgICBmbG9hdDogbGVmdDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW0tbmF0aXZle1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICAgIGlvbi1pY29ue1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgfVxyXG4gIGlvbi1pdGVtLmNpcmNsZSBkaXYuaXRlbS1uYXRpdmUge1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfSIsIi5vcmlnaW4ge1xuICBoZWlnaHQ6IDE3MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgIzUyN0Y3Nik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnB1cnBsZSB7XG4gIGhlaWdodDogMTcwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCBwdXJwbGUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ibHVlIHtcbiAgaGVpZ2h0OiAxNzBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsIE5hdnkpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ibGFjayB7XG4gIGhlaWdodDogMTcwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCBibGFjayk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNjcm9sbC1jb250ZW50IHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pY29uI3RyYXNoIHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG5pb24taWNvbiNvZmYge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiByZWQ7XG59XG5cbmlvbi1sYWJlbCN0aXRsZSB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmRpdiNoZWFkZXIgc3BhbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5jaXJjbGUge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi50aGVtZTEge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4udGhlbWUyIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyN0Y3NjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi50aGVtZTMge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBOYXZ5O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbn1cblxuLnRoZW1lNCB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbn1cblxuI2xlZnQge1xuICB3aWR0aDogMzAlO1xuICBmbG9hdDogbGVmdDtcbn1cblxuI3JpZ2h0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgd2lkdGg6IDcwJTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5kYXRhVXNlciB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4uZGl2MSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDI1JTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5kaXYyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMjUlO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmRpdjMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAyNSU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uZGl2NCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDI1JTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5pdGVtLW5hdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuaW9uLWl0ZW0uY2lyY2xlIGRpdi5pdGVtLW5hdGl2ZSB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/configuracao/configuracao.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/configuracao/configuracao.page.ts ***!
    \***************************************************/

  /*! exports provided: ConfiguracaoPage */

  /***/
  function srcAppConfiguracaoConfiguracaoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfiguracaoPage", function () {
      return ConfiguracaoPage;
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


    var _services_usuario_service_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/usuario-service/usuario.service */
    "./src/app/services/usuario-service/usuario.service.ts");
    /* harmony import */


    var _configHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../configHelper */
    "./src/app/configHelper.ts");
    /* harmony import */


    var _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/spinner-service/spinner.service */
    "./src/app/services/spinner-service/spinner.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_camera_service_camera_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/camera-service/camera.service */
    "./src/app/services/camera-service/camera.service.ts");
    /* harmony import */


    var _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/refresh-page.service */
    "./src/app/services/refresh-page.service.ts");

    var ConfiguracaoPage =
    /*#__PURE__*/
    function () {
      function ConfiguracaoPage(userSrvc, spinnerSrvc, menuCtrl, router, actionSheetCtrl, cameraSrvc, refreshSrvc) {
        _classCallCheck(this, ConfiguracaoPage);

        this.userSrvc = userSrvc;
        this.spinnerSrvc = spinnerSrvc;
        this.menuCtrl = menuCtrl;
        this.router = router;
        this.actionSheetCtrl = actionSheetCtrl;
        this.cameraSrvc = cameraSrvc;
        this.refreshSrvc = refreshSrvc;
        this.class = "origin";
        this.class = localStorage.getItem(_configHelper__WEBPACK_IMPORTED_MODULE_3__["configHelper"].storageKeys.color) != null ? localStorage.getItem(_configHelper__WEBPACK_IMPORTED_MODULE_3__["configHelper"].storageKeys.color) : 'origin';
      }

      _createClass(ConfiguracaoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          console.log('COnfigurações');
          this.menuCtrl.isOpen('false');
          var idUser = JSON.parse(localStorage.getItem(_configHelper__WEBPACK_IMPORTED_MODULE_3__["configHelper"].storageKeys.user));
          this.userSrvc.getByIdUser(idUser._id).subscribe(function (data) {
            _this.usuario = data;
            console.log('User', _this.usuario);

            _this.spinnerSrvc.hide();
          });
        }
      }, {
        key: "getPicture",
        value: function getPicture() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    actionSheet = this.actionSheetCtrl.create({
                      header: "Alterar Foto",
                      buttons: [{
                        text: 'Tirar foro',
                        handler: function handler() {
                          _this2.cameraSrvc.takePicture(function (photo) {
                            //ação salvar
                            console.log(_this2.usuario);
                            _this2.usuario.foto = photo;

                            _this2.userSrvc.upadateUser(_this2.usuario._id, _this2.usuario).subscribe(function () {
                              console.log('Foto alterada com sucesso', _this2.usuario.foto);

                              _this2.spinnerSrvc.hide();
                            });
                          });
                        },
                        icon: "camera"
                      }, //pegar da galeria
                      {
                        text: "Pegar galeria",
                        handler: function handler() {
                          _this2.cameraSrvc.getPictureFromGalery(function (photo) {
                            //ação salvar
                            _this2.usuario.foto = photo;

                            _this2.userSrvc.upadateUser(_this2.usuario._id, _this2.usuario).subscribe(function () {
                              console.log('Foto alterada com sucesso');

                              _this2.spinnerSrvc.hide();
                            });
                          });
                        },
                        icon: "images"
                      }, {
                        text: "cancelar",
                        role: "destructive",
                        icon: "close",
                        handler: function handler() {//cancela a ação
                        }
                      }]
                    });
                    _context.next = 3;
                    return actionSheet;

                  case 3:
                    _context.sent.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "setTheme",
        value: function setTheme(param) {
          this.class = param;
          localStorage.setItem(_configHelper__WEBPACK_IMPORTED_MODULE_3__["configHelper"].storageKeys.color, this.class);
          this.refreshSrvc.changeTheme.emit();
        }
      }, {
        key: "voltar",
        value: function voltar() {
          this.router.navigate(['/tabs/tabs/clientes']);
        }
      }, {
        key: "delete",
        value: function _delete() {}
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem(_configHelper__WEBPACK_IMPORTED_MODULE_3__["configHelper"].storageKeys.token);
          this.router.navigate(['login']);
        }
      }]);

      return ConfiguracaoPage;
    }();

    ConfiguracaoPage.ctorParameters = function () {
      return [{
        type: _services_usuario_service_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]
      }, {
        type: _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"]
      }, {
        type: _services_camera_service_camera_service__WEBPACK_IMPORTED_MODULE_7__["CameraService"]
      }, {
        type: _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_8__["RefreshPageService"]
      }];
    };

    ConfiguracaoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-configuracao',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./configuracao.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/configuracao/configuracao.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./configuracao.page.scss */
      "./src/app/configuracao/configuracao.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_usuario_service_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"], _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"], _services_camera_service_camera_service__WEBPACK_IMPORTED_MODULE_7__["CameraService"], _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_8__["RefreshPageService"]])], ConfiguracaoPage);
    /***/
  },

  /***/
  "./src/app/services/camera-service/camera.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/services/camera-service/camera.service.ts ***!
    \***********************************************************/

  /*! exports provided: CameraService */

  /***/
  function srcAppServicesCameraServiceCameraServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CameraService", function () {
      return CameraService;
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


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var CameraService =
    /*#__PURE__*/
    function () {
      function CameraService(camera, platform) {
        _classCallCheck(this, CameraService);

        this.camera = camera;
        this.platform = platform;
      }

      _createClass(CameraService, [{
        key: "_pictureConfiguration",
        value: function _pictureConfiguration(source, callback) {
          var _this3 = this;

          if (this.platform.is('cordova')) {
            this.platform.ready().then(function () {
              var options = {
                quality: 100,
                destinationType: _this3.camera.DestinationType.DATA_URL,
                encodingType: _this3.camera.EncodingType.JPEG,
                mediaType: _this3.camera.MediaType.PICTURE,
                sourceType: source
              };

              _this3.camera.getPicture(options).then(function (imageData) {
                var base64Image = 'data:image/jpeg;base64,' + imageData;
                callback(base64Image);
                console.log('Imagem já convertida base64', base64Image);
              }, function (err) {
                console.error('Problema ao capturar a foto', err);
              });
            });
          } else {
            alert('Disponibilidade disponível somento no devide');
          }
        }
      }, {
        key: "getPictureFromGalery",
        value: function getPictureFromGalery(callback) {
          this._pictureConfiguration(this.camera.PictureSourceType.PHOTOLIBRARY, function (photo) {
            callback(photo);
          });
        }
      }, {
        key: "takePicture",
        value: function takePicture(callback) {
          this._pictureConfiguration(this.camera.PictureSourceType.CAMERA, function (photo) {
            callback(photo);
          });
        }
      }]);

      return CameraService;
    }();

    CameraService.ctorParameters = function () {
      return [{
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }];
    };

    CameraService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])], CameraService);
    /***/
  }
}]);
//# sourceMappingURL=configuracao-configuracao-module-es5.js.map