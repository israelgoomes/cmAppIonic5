function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n</ion-header>\n\n<ion-content  padding>\n   <ion-row>\n   <img class=\"logo\" src=\"./../../assets/imgs/logo_app.png\">  \n   </ion-row>\n <section class=\"login\">\n\n<ion-item>\n   <ion-label class=\"item\" position=\"floating\">Nome</ion-label>\n <ion-input [(ngModel)]=\"form.email\" type=\"text\" tappable></ion-input>\n</ion-item>\n<ion-item>\n <ion-label position=\"floating\" >Senha</ion-label>\n <ion-input [(ngModel)]=\"form.senha\" type=\"password\" tappable></ion-input>\n</ion-item>\n\n\n\n<ion-button ion-button block outline color=\"dark\" (click)=\"login()\">\n  Entrar\n</ion-button>\n\n<ion-button ion-button block outline color=\"dark\" (click)=\"cadastroUser()\">\n  Cadastrar\n</ion-button>\n\n\n<!-- <button   > Entrar</button> -->\n<!-- <button ion-button block outline color=\"dark\"  (click)=\"cadastroUser()\">Cadastro</button> -->\n\n\n\n\n</section>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/login/login-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/login/login-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/login/login.module.ts":
  /*!***************************************!*\
    !*** ./src/app/login/login.module.ts ***!
    \***************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/login/login.page.scss":
  /*!***************************************!*\
    !*** ./src/app/login/login.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-title {\n  text-align: left !important;\n}\n\n.toolbar-title {\n  text-align: left !important;\n}\n\nbody {\n  background-color: red;\n}\n\n.scroll-content {\n  padding: 5px !important;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527f76));\n  background-image: linear-gradient(to bottom, white, #527f76);\n}\n\nion-content {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527F76)) !important;\n  background-image: linear-gradient(to bottom, white, #527F76) !important;\n  background-size: cover;\n}\n\nmain.inner-scroll.scroll-y {\n  padding: 10px !important;\n}\n\n.logo {\n  width: 140px;\n  height: 200px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nimg {\n  padding-top: 50px;\n}\n\n.item {\n  background: transparent;\n}\n\n.scroll-content {\n  background-color: rgba(79, 65, 59, 0.6);\n}\n\n.login {\n  padding-top: 100px;\n}\n\n.button {\n  margin-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxsc3JhZWxcXERlc2t0b3BcXE5vdmEgcGFzdGFcXGNtQXBwL3NyY1xcYXBwXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSwyQkFBQTtBQ0NBOztBRENBO0VBQ0ksMkJBQUE7QUNFSjs7QURDQTtFQUNJLHFCQUFBO0FDRUo7O0FEQ0E7RUFDSSx1QkFBQTtFQUNBLDJGQUFBO0VBQUEsNERBQUE7QUNFSjs7QURBQTtFQUVHLHNHQUFBO0VBQUEsdUVBQUE7RUFFQyxzQkFBQTtBQ0NKOztBREdBO0VBQ0ksd0JBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREVBO0VBQ0ksaUJBQUE7QUNDSjs7QURDQTtFQUNJLHVCQUFBO0FDRUo7O0FEQUE7RUFDSSx1Q0FBQTtBQ0dKOztBRENBO0VBQ0ksa0JBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZXtcclxudGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcbi50b29sYmFyLXRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5ib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4uc2Nyb2xsLWNvbnRlbnR7XHJcbiAgICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCByZ2IoODIsIDEyNywgMTE4KSk7IFxyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi8uLi8uLi9hc3NldHMvaW1ncy9sb2dpbi5qcGcpO1xyXG4gICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgIzUyN0Y3NikgIWltcG9ydGFudDsgXHJcblxyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHJcbn1cclxuXHJcbm1haW4uaW5uZXItc2Nyb2xsLnNjcm9sbC15e1xyXG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9nb3tcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5pbWcge1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn1cclxuLml0ZW17XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4uc2Nyb2xsLWNvbnRlbnR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc5LDY1LDU5LCAwLjYpO1xyXG4gXHJcbn1cclxuXHJcbi5sb2dpbntcclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxufVxyXG4uYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG5pb24tbGFiZWwge1xyXG4gICAgLy9jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufSIsImlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbn1cblxuLnRvb2xiYXItdGl0bGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5zY3JvbGwtY29udGVudCB7XG4gIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgIzUyN2Y3Nik7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsICM1MjdGNzYpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbm1haW4uaW5uZXItc2Nyb2xsLnNjcm9sbC15IHtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xufVxuXG4ubG9nbyB7XG4gIHdpZHRoOiAxNDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuaW1nIHtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG59XG5cbi5pdGVtIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5zY3JvbGwtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzksIDY1LCA1OSwgMC42KTtcbn1cblxuLmxvZ2luIHtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xufVxuXG4uYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.page.ts":
  /*!*************************************!*\
    !*** ./src/app/login/login.page.ts ***!
    \*************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/login-service/login.service */
    "./src/app/services/login-service/login.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _configHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../configHelper */
    "./src/app/configHelper.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var LoginPage =
    /*#__PURE__*/
    function () {
      function LoginPage(loginSrvc, route, navCtrl) {
        _classCallCheck(this, LoginPage);

        this.loginSrvc = loginSrvc;
        this.route = route;
        this.navCtrl = navCtrl;
        this.form = {};
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('usuario', localStorage.getItem(_configHelper__WEBPACK_IMPORTED_MODULE_4__["configHelper"].storageKeys.user));

          if (localStorage.getItem(_configHelper__WEBPACK_IMPORTED_MODULE_4__["configHelper"].storageKeys.user)) {
            this.route.navigate(['/tabs/tabs/clientes']);
          }
        }
      }, {
        key: "login",
        value: function login() {
          var _this = this;

          console.log('Formulário', this.form);
          this.loginSrvc.authenticate(this.form.email, this.form.senha).subscribe(function (data) {
            console.log('token enviado', data.token);

            _this.loginSrvc.registerLogin(data);

            _this.route.navigate(['/tabs/tabs/clientes']);
          });
        }
      }, {
        key: "cadastroUser",
        value: function cadastroUser() {//this.navCtrl.setRoot('CadastroUserPage')
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }];
    };

    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/login/login.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])], LoginPage);
    /***/
  },

  /***/
  "./src/app/services/login-service/login.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/login-service/login.service.ts ***!
    \*********************************************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppServicesLoginServiceLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
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


    var _http_service_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../http-service/http.service */
    "./src/app/services/http-service/http.service.ts");
    /* harmony import */


    var src_app_configHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/configHelper */
    "./src/app/configHelper.ts");

    var LoginService =
    /*#__PURE__*/
    function () {
      function LoginService(http) {
        _classCallCheck(this, LoginService);

        this.http = http;
        this.url = "".concat(src_app_configHelper__WEBPACK_IMPORTED_MODULE_3__["configHelper"].URL);
      }

      _createClass(LoginService, [{
        key: "authenticate",
        value: function authenticate(email, senha) {
          return this.http.post("".concat(this.url, "/usuario/autenticar"), {
            email: email,
            senha: senha
          });
        }
      }, {
        key: "registerLogin",
        value: function registerLogin(result) {
          localStorage.setItem(src_app_configHelper__WEBPACK_IMPORTED_MODULE_3__["configHelper"].storageKeys.token, result.token);
          localStorage.setItem(src_app_configHelper__WEBPACK_IMPORTED_MODULE_3__["configHelper"].storageKeys.user, JSON.stringify(result.usuario));
        }
      }]);

      return LoginService;
    }();

    LoginService.ctorParameters = function () {
      return [{
        type: _http_service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
      }];
    };

    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])], LoginService);
    /***/
  }
}]);
//# sourceMappingURL=login-login-module-es5.js.map