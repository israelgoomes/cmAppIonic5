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


    __webpack_exports__["default"] = "<ion-buttons >\r\n  <ion-menu-button autoHide=\"false\"></ion-menu-button>\r\n</ion-buttons>\r\n\r\n\r\n<ion-content padding>\r\n  <div id=\"header\">\r\n    \r\n  <!-- <ion-label id=\"title\">Configurações</ion-label> -->\r\n  \r\n  \r\n  <div id=\"left\">\r\n    \r\n    <ion-item class=\"circle\">\r\n      <img [src]=\"usuario?.foto\" width=\"70\" height=\"70\"/>\r\n    </ion-item>\r\n  </div>\r\n  <div id=\"right\">\r\n    <!-- <ion-item  class=\"dataUser\">   -->\r\n      {{usuario?.nome}}<br/>\r\n      {{usuario?.email}}\r\n    <!-- </ion-item> -->\r\n  </div>\r\n  </div>\r\n  \r\n  <ion-card>\r\n    <ion-card-header center>\r\n  Tema\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n  \r\n      <div class=\"div1\"> \r\n        <div class=\"theme1\" (click)=\"theme('purple')\">\r\n        </div>\r\n          <ion-input style=\"padding-left: 14px;\" type=\"text\" value=\"Purple\" readonly ></ion-input>\r\n      </div>\r\n      \r\n      <div class=\"div2\"> \r\n          <div class=\"theme2\" (click)=\"theme('#527F76')\">\r\n          </div>\r\n          <ion-input style=\"padding-left: 11px;\" type=\"text\" value=\"Original\" readonly ></ion-input>\r\n        </div>\r\n      \r\n        <div class=\"div3\"> \r\n            <div class=\"theme3\" (click)=\"theme('blue')\">\r\n            </div>\r\n            <ion-input style=\"padding-left: 20px;\" type=\"text\" value=\"Blue\" readonly ></ion-input>\r\n          </div>\r\n      \r\n          <div class=\"div4\"> \r\n              <div class=\"theme4\" (click)=\"theme('black')\">\r\n              </div>\r\n              <ion-input style=\"padding-left: 19px;\" type=\"text\" value=\"Dark\" readonly ></ion-input>\r\n            </div>\r\n            \r\n  \r\n    </ion-card-content>\r\n  </ion-card>\r\n  \r\n  <ion-card>\r\n    <ion-card-content>\r\n   Membro desde: {{usuario?.dataCriacao}}    \r\n    </ion-card-content>\r\n  </ion-card>\r\n  \r\n  <ion-card (click)=\"delete()\">\r\n      <ion-card-content style=\"padding-top: 0px; padding-bottom: 0px; padding-left: 0px;\">\r\n        <ion-item lines=\"none\">\r\n  <label>Excluir conta</label>        <ion-note slot=\"end\">\r\n      <ion-icon  id=\"trash\" name=\"trash\"></ion-icon> </ion-note>\r\n          <br/>\r\n        </ion-item>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  \r\n    <ion-card>\r\n        <ion-card-content style=\"padding-top: 0px; padding-bottom: 0px; padding-left: 0px;\" >\r\n          <ion-item lines=\"none\" (click)=\"logout()\">\r\n    <label>Sair da conta</label>        <ion-note slot=\"end\">\r\n        <ion-icon id=\"off\" name=\"power\"></ion-icon> </ion-note>\r\n            <br/>\r\n          </ion-item>\r\n        </ion-card-content>\r\n      </ion-card>\r\n  \r\n  </ion-content>\r\n  ";
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


    __webpack_exports__["default"] = "div#header {\n  height: 170px;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527F76));\n  background-image: linear-gradient(to bottom, white, #527F76);\n  text-align: center;\n}\n\n.scroll-content {\n  padding: 0px !important;\n}\n\nion-content {\n  padding: 5px !important;\n}\n\nion-icon#trash {\n  font-size: 25px;\n}\n\nion-icon#off {\n  font-size: 20px;\n  color: red;\n}\n\nion-label#title {\n  padding-top: 5px;\n  color: white;\n  margin-top: 0px;\n  font-size: 20px;\n  text-align: center;\n}\n\nion-card-header {\n  text-align: center;\n  padding-bottom: 0px !important;\n}\n\ndiv#header span {\n  text-align: center;\n  color: white;\n  font-size: 15px;\n}\n\n.circle {\n  margin-top: 20px;\n  background-color: #aaa;\n  border-radius: 50%;\n  width: 70px;\n  height: 70px;\n  overflow: hidden;\n  position: relative;\n  margin-left: 20px;\n  padding-left: 0px !important;\n}\n\n.theme1 {\n  margin-top: 50px;\n  background-color: purple;\n  border-radius: 50%;\n  width: 70px;\n  height: 70px;\n  overflow: hidden;\n  position: relative;\n  margin-left: 5px;\n  padding-left: 0px !important;\n}\n\n.theme2 {\n  margin-top: 50px;\n  background-color: #527F76;\n  border-radius: 50%;\n  width: 70px;\n  height: 70px;\n  overflow: hidden;\n  position: relative;\n  margin-left: 5px;\n  padding-left: 0px !important;\n}\n\n.theme3 {\n  margin-top: 50px;\n  background-color: Navy;\n  border-radius: 50%;\n  width: 70px;\n  height: 70px;\n  overflow: hidden;\n  position: relative;\n  margin-left: 5px;\n  padding-left: 0px !important;\n}\n\n.theme4 {\n  margin-top: 50px;\n  background-color: black;\n  border-radius: 50%;\n  width: 70px;\n  height: 70px;\n  overflow: hidden;\n  position: relative;\n  margin-left: 5px;\n  padding-left: 0px !important;\n}\n\n.circle img {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n\n#left {\n  width: 30%;\n  float: left;\n}\n\n#right {\n  text-align: left;\n  margin-top: 30px;\n  width: 70%;\n  float: left;\n}\n\n.dataUser {\n  margin-top: 30px;\n  background: transparent;\n  color: black;\n  background-color: black;\n}\n\n.div1 {\n  text-align: center;\n  width: 25%;\n  float: left;\n}\n\n.div2 {\n  text-align: center;\n  width: 25%;\n  float: left;\n}\n\n.div3 {\n  text-align: center;\n  width: 25%;\n  float: left;\n}\n\n.div4 {\n  text-align: center;\n  width: 25%;\n  float: left;\n}\n\n.item-native {\n  background-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZmlndXJhY2FvL0M6XFxVc2Vyc1xcbHNyYWVsXFxEZXNrdG9wXFxQcm9qZXRvc1xcY21BcHBJb25pYzUvc3JjXFxhcHBcXGNvbmZpZ3VyYWNhb1xcY29uZmlndXJhY2FvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29uZmlndXJhY2FvL2NvbmZpZ3VyYWNhby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsMkZBQUE7RUFBQSw0REFBQTtFQUVBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSx1QkFBQTtBQ0FKOztBREdBO0VBQ0ksdUJBQUE7QUNBSjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FEQ0E7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUE7RUFDRSxrQkFBQTtFQUNFLDhCQUFBO0FDR0o7O0FEREE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDSUo7O0FERkE7RUFDSSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0FDS0o7O0FERkU7RUFDRSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FDS0o7O0FESEU7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FDTUo7O0FESkU7RUFDRSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FDT0o7O0FETEU7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FDUUo7O0FETkU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDU0o7O0FEUEU7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQ1VKOztBRFBJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDVVI7O0FEUEk7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDVVI7O0FETkk7RUFDSSxrQkFBQTtFQUVDLFVBQUE7RUFDQSxXQUFBO0FDUVQ7O0FETEk7RUFDSSxrQkFBQTtFQUVDLFVBQUE7RUFDQSxXQUFBO0FDT1Q7O0FESkk7RUFDSSxrQkFBQTtFQUVDLFVBQUE7RUFDQSxXQUFBO0FDTVQ7O0FESEk7RUFDSSxrQkFBQTtFQUVDLFVBQUE7RUFDQSxXQUFBO0FDS1Q7O0FEREk7RUFDRSx1QkFBQTtBQ0lOIiwiZmlsZSI6InNyYy9hcHAvY29uZmlndXJhY2FvL2NvbmZpZ3VyYWNhby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYjaGVhZGVye1xyXG4gICAgaGVpZ2h0OiAxNzBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCAjNTI3Rjc2KTsgXHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI3Rjc2O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2Nyb2xsLWNvbnRlbnR7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcclxufVxyXG5pb24taWNvbiN0cmFzaHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbmlvbi1pY29uI29mZntcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5pb24tbGFiZWwjdGl0bGV7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmlvbi1jYXJkLWhlYWRlcntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuZGl2I2hlYWRlciBzcGFue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5jaXJjbGUge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAudGhlbWUxe1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50OyBcclxuICB9XHJcbiAgLnRoZW1lMntcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI3Rjc2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7IFxyXG4gIH1cclxuICAudGhlbWUze1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IE5hdnk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDsgXHJcbiAgfVxyXG4gIC50aGVtZTR7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDsgXHJcbiAgfVxyXG4gIC5jaXJjbGUgaW1nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAjbGVmdCB7XHJcbiAgICB3aWR0aDozMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgI3JpZ2h0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI3Rjc2ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuZGF0YVVzZXJ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2tcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmRpdjF7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIC8vIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgICBmbG9hdDogbGVmdDtcclxuXHJcbiAgICB9XHJcbiAgICAuZGl2MntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgLy8gcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG5cclxuICAgIH1cclxuICAgIC5kaXYze1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAvLyBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcblxyXG4gICAgfVxyXG4gICAgLmRpdjR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIC8vIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgICBmbG9hdDogbGVmdDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW0tbmF0aXZle1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIH0iLCJkaXYjaGVhZGVyIHtcbiAgaGVpZ2h0OiAxNzBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsICM1MjdGNzYpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zY3JvbGwtY29udGVudCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCB7XG4gIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xufVxuXG5pb24taWNvbiN0cmFzaCB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuaW9uLWljb24jb2ZmIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogcmVkO1xufVxuXG5pb24tbGFiZWwjdGl0bGUge1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG5kaXYjaGVhZGVyIHNwYW4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uY2lyY2xlIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4udGhlbWUxIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbn1cblxuLnRoZW1lMiB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MjdGNzY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4udGhlbWUzIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogTmF2eTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi50aGVtZTQge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jaXJjbGUgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jbGVmdCB7XG4gIHdpZHRoOiAzMCU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4jcmlnaHQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICB3aWR0aDogNzAlO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmRhdGFVc2VyIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5kaXYxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMjUlO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmRpdjIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAyNSU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uZGl2MyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDI1JTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5kaXY0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMjUlO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLml0ZW0tbmF0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59Il19 */";
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

    var ConfiguracaoPage =
    /*#__PURE__*/
    function () {
      function ConfiguracaoPage(userSrvc, spinnerSrvc) {
        _classCallCheck(this, ConfiguracaoPage);

        this.userSrvc = userSrvc;
        this.spinnerSrvc = spinnerSrvc;
      }

      _createClass(ConfiguracaoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var idUser = JSON.parse(localStorage.getItem(_configHelper__WEBPACK_IMPORTED_MODULE_3__["configHelper"].storageKeys.user));
          this.userSrvc.getByIdUser(idUser._id).subscribe(function (data) {
            _this.usuario = data;

            _this.spinnerSrvc.hide();
          });
        }
      }]);

      return ConfiguracaoPage;
    }();

    ConfiguracaoPage.ctorParameters = function () {
      return [{
        type: _services_usuario_service_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]
      }, {
        type: _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"]
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
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_usuario_service_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"], _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"]])], ConfiguracaoPage);
    /***/
  }
}]);
//# sourceMappingURL=configuracao-configuracao-module-es5.js.map