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


    __webpack_exports__["default"] = "<ion-header>\r\n</ion-header>\r\n\r\n<ion-content  padding>\r\n   <ion-row>\r\n   <img class=\"logo\" src=\"./../../assets/imgs/logo_app.png\">  \r\n   </ion-row>\r\n <section class=\"login\">\r\n\r\n\r\n<form [formGroup]=\"loginForm\">\r\n\r\n    \r\n  <mat-form-field style=\"width: 100%;\">\r\n    <input matInput placeholder=\"email\" formControlName=\"email\">\r\n  </mat-form-field>\r\n<ion-row>\r\n  <ion-col size=\"10\">\r\n  <mat-form-field>\r\n    <input [type]=\"!isVisiblePassword ? 'password' : 'text'\" matInput placeholder=\"senha\" formControlName=\"senha\">\r\n  </mat-form-field>\r\n</ion-col>\r\n\r\n<ion-col >\r\n  <ion-icon *ngIf=\"isVisiblePassword\" (click)=\"visiblePassword()\" name=\"eye-outline\"></ion-icon>\r\n  <ion-icon *ngIf=\"!isVisiblePassword\" (click)=\"visiblePassword()\" name=\"eye-off-outline\"></ion-icon>\r\n</ion-col>\r\n\r\n</ion-row>\r\n  </form>\r\n\r\n\r\n  <ion-button (click)=\"login()\" [disabled]=\"!loginForm.valid\" expand=\"block\" fill=\"outline\">Entrar</ion-button>\r\n  <ion-button (click)=\"login()\" expand=\"block\" fill=\"outline\">Cadastrar</ion-button>\r\n\r\n\r\n\r\n\r\n\r\n</section>\r\n\r\n</ion-content>\r\n";
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
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
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


    __webpack_exports__["default"] = "ion-title {\n  text-align: left !important;\n}\n\nmat-form-field {\n  width: 100%;\n  padding-right: 10px;\n  padding-left: 10px;\n}\n\n.toolbar-title {\n  text-align: left !important;\n}\n\nbody {\n  background-color: red;\n}\n\n.scroll-content {\n  padding: 5px !important;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527f76));\n  background-image: linear-gradient(to bottom, white, #527f76);\n}\n\nion-content {\n  --ion-background-color: linear-gradient(to bottom, white, #527F76) !important;\n}\n\nmain.inner-scroll.scroll-y {\n  padding: 10px !important;\n}\n\n.logo {\n  width: 140px;\n  height: 200px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nimg {\n  padding-top: 50px;\n}\n\n.item {\n  background: transparent;\n}\n\n.scroll-content {\n  background-color: rgba(79, 65, 59, 0.6);\n}\n\n.login {\n  padding-top: 100px;\n}\n\n.button {\n  margin-top: 8px;\n}\n\nion-icon {\n  margin-top: 20px;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxpZ29tZXNsYVxcRG9jdW1lbnRzXFxpb25pY1xcY21BcHBJb25pYzUvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNBLDJCQUFBO0FDQ0E7O0FERUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREdBO0VBQ0ksMkJBQUE7QUNBSjs7QURHQTtFQUNJLHFCQUFBO0FDQUo7O0FER0E7RUFDSSx1QkFBQTtFQUNBLDJGQUFBO0VBQUEsNERBQUE7QUNBSjs7QURFQTtFQUNHLDZFQUFBO0FDQ0g7O0FER0E7RUFDSSx3QkFBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBRENBO0VBQ0ksdUJBQUE7QUNFSjs7QURBQTtFQUNJLHVDQUFBO0FDR0o7O0FEQ0E7RUFDSSxrQkFBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtBQ0dKOztBREdBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGV7XHJcbnRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcblxyXG59XHJcblxyXG4udG9vbGJhci10aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuLnNjcm9sbC1jb250ZW50e1xyXG4gICAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgcmdiKDgyLCAxMjcsIDExOCkpOyBcclxufVxyXG5pb24tY29udGVudHtcclxuICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsICM1MjdGNzYpICFpbXBvcnRhbnQ7IDtcclxuXHJcbn1cclxuXHJcbm1haW4uaW5uZXItc2Nyb2xsLnNjcm9sbC15e1xyXG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9nb3tcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5pbWcge1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn1cclxuLml0ZW17XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4uc2Nyb2xsLWNvbnRlbnR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc5LDY1LDU5LCAwLjYpO1xyXG4gXHJcbn1cclxuXHJcbi5sb2dpbntcclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxufVxyXG4uYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG5pb24tbGFiZWwge1xyXG4gICAgLy9jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWljb257XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59IiwiaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi50b29sYmFyLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4uc2Nyb2xsLWNvbnRlbnQge1xuICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsICM1MjdmNzYpO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCAjNTI3Rjc2KSAhaW1wb3J0YW50O1xufVxuXG5tYWluLmlubmVyLXNjcm9sbC5zY3JvbGwteSB7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmxvZ28ge1xuICB3aWR0aDogMTQwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbmltZyB7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG4uaXRlbSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uc2Nyb2xsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc5LCA2NSwgNTksIDAuNik7XG59XG5cbi5sb2dpbiB7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbn1cblxuLmJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuaW9uLWljb24ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59Il19 */";
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
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/spinner-service/spinner.service */
    "./src/app/services/spinner-service/spinner.service.ts");
    /* harmony import */


    var _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/refresh-page.service */
    "./src/app/services/refresh-page.service.ts");
    /* harmony import */


    var _ionic_native_android_fingerprint_auth_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/android-fingerprint-auth/ngx */
    "./node_modules/@ionic-native/android-fingerprint-auth/ngx/index.js");
    /* harmony import */


    var _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/fingerprint-aio/ngx */
    "./node_modules/@ionic-native/fingerprint-aio/ngx/index.js");

    var LoginPage =
    /*#__PURE__*/
    function () {
      function LoginPage(loginSrvc, route, navCtrl, fb, menuCtrl, spinnerSrvc, refreshSrvc, androidFingerprintAuth, faio, alertCtrl) {
        _classCallCheck(this, LoginPage);

        this.loginSrvc = loginSrvc;
        this.route = route;
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.menuCtrl = menuCtrl;
        this.spinnerSrvc = spinnerSrvc;
        this.refreshSrvc = refreshSrvc;
        this.androidFingerprintAuth = androidFingerprintAuth;
        this.faio = faio;
        this.alertCtrl = alertCtrl;
        this.isVisiblePassword = false;
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          console.log('Teste 3333333333');
          this.loginForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            senha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
          });

          if (localStorage.getItem(_configHelper__WEBPACK_IMPORTED_MODULE_4__["configHelper"].storageKeys.token)) {
            if (localStorage.getItem(_configHelper__WEBPACK_IMPORTED_MODULE_4__["configHelper"].storageKeys.token)) {
              var user = JSON.parse(localStorage.getItem(_configHelper__WEBPACK_IMPORTED_MODULE_4__["configHelper"].storageKeys.user));
              console.log('Teste 3333333333');
              this.loginForm = this.fb.group({
                email: [user.email, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                senha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
              });
            }

            this.faio.show({
              title: 'Acessar Conta',
              subtitle: 'Toque no sensor de digital'
            }).then(function (result) {
              _this.menuCtrl.enable(true);

              if (!localStorage.getItem(_configHelper__WEBPACK_IMPORTED_MODULE_4__["configHelper"].storageKeys.concluded)) {
                _this.route.navigate(['/how-to-cm-app']);
              } else {
                _this.route.navigate(['/tabs/tabs/clientes']);
              }

              console.log('Result message', result);
            }).catch(function (err) {
              console.error('Erro na autenticação', err);
            }); // console.log('TESTE ********')
            // this.androidFingerprintAuth
            //   .isAvailable()
            //   .then((result) => {
            //     console.log('Result', result)
            //     if (result.isAvailable) {
            //       console.log('TEste 2222')
            //       // it is available
            //       this.androidFingerprintAuth
            //         .encrypt({
            //           clientId: 'myAppName',
            //           username: 'myUsername',
            //           password: 'myPassword',
            //           dialogTitle: 'Acessar conta',
            //           dialogMessage: 'Toque no sensor de digital e confirme a biometria.',
            //           dialogHint: '',
            //           disableBackup: true,
            //           maxAttempts: 3
            //         })
            //         .then((result) => {
            //           if (result.withFingerprint) {
            //             this.menuCtrl.enable(true);
            //             this.route.navigate(['/tabs/tabs/clientes']);
            //             console.log('Successfully encrypted credentials.', result);
            //             console.log('Encrypted credentials: ' + result.token);
            //           } else if (result.withBackup) {
            //             console.log(
            //               'Successfully authenticated with backup password!'
            //             );
            //           } else { console.log("Didn't authenticate!"); }
            //         } ,err=>{
            //             console.log('Erro', err)
            //         })
            //         .catch((error) => {
            //           if (
            //             error ===
            //             this.androidFingerprintAuth.ERRORS.FINGERPRINT_CANCELLED
            //           ) {
            //             console.log('Fingerprint authentication cancelled');
            //           } else { console.error(error); }
            //         });
            //     } else {
            // fingerprint auth isn't available
            //   }
            // })
            // .catch((error) => console.error(error));
          }
        }
      }, {
        key: "login",
        value: function login() {
          var _this2 = this;

          this.loginSrvc.authenticate(this.loginForm.get('email').value, this.loginForm.get('senha').value).subscribe(function (data) {
            console.log('token enviado', data.token);

            _this2.loginSrvc.registerLogin(data);

            if (!localStorage.getItem(_configHelper__WEBPACK_IMPORTED_MODULE_4__["configHelper"].storageKeys.concluded)) {
              _this2.route.navigate(['/how-to-cm-app']);
            } else {
              _this2.route.navigate(['/tabs/tabs/clientes']);
            }

            _this2.refreshSrvc.newUser.emit();

            _this2.loginForm.reset();

            _this2.spinnerSrvc.hide();
          }, function (error) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrl.create({
                        header: 'Erro na autenticação',
                        message: error.error.message,
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context.sent;
                      alert.present();
                      this.spinnerSrvc.hide();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          });
        }
      }, {
        key: "cadastroUser",
        value: function cadastroUser() {// this.navCtrl.setRoot('CadastroUserPage')
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.menuCtrl.enable(false);
          var user = JSON.parse(localStorage.getItem(_configHelper__WEBPACK_IMPORTED_MODULE_4__["configHelper"].storageKeys.user));
          this.loginForm = this.fb.group({
            email: [user.email, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            senha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
          });
        }
      }, {
        key: "visiblePassword",
        value: function visiblePassword() {
          this.isVisiblePassword = !this.isVisiblePassword;
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
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]
      }, {
        type: _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_7__["SpinnerService"]
      }, {
        type: _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_8__["RefreshPageService"]
      }, {
        type: _ionic_native_android_fingerprint_auth_ngx__WEBPACK_IMPORTED_MODULE_9__["AndroidFingerprintAuth"]
      }, {
        type: _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_10__["FingerprintAIO"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
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
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"], _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_7__["SpinnerService"], _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_8__["RefreshPageService"], _ionic_native_android_fingerprint_auth_ngx__WEBPACK_IMPORTED_MODULE_9__["AndroidFingerprintAuth"], _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_10__["FingerprintAIO"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])], LoginPage);
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