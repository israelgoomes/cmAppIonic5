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


    __webpack_exports__["default"] = "<ion-header>\n</ion-header>\n\n<ion-content  padding>\n   <ion-row>\n   <img class=\"logo\" src=\"./../../assets/imgs/logo_app.png\">  \n   </ion-row>\n <section class=\"login\">\n\n\n<form [formGroup]=\"loginForm\">\n\n    \n  <mat-form-field style=\"width: 100%;\">\n    <input matInput placeholder=\"email\" formControlName=\"email\">\n  </mat-form-field>\n<ion-row>\n  <ion-col size=\"10\">\n  <mat-form-field>\n    <input [type]=\"!isVisiblePassword ? 'password' : 'text'\" matInput placeholder=\"senha\" formControlName=\"senha\">\n  </mat-form-field>\n</ion-col>\n\n<ion-col >\n  <ion-icon *ngIf=\"isVisiblePassword\" (click)=\"visiblePassword()\" name=\"eye-outline\"></ion-icon>\n  <ion-icon *ngIf=\"!isVisiblePassword\" (click)=\"visiblePassword()\" name=\"eye-off-outline\"></ion-icon>\n</ion-col>\n\n</ion-row>\n  </form>\n\n\n  <ion-button (click)=\"login()\" [disabled]=\"!loginForm.valid\" expand=\"block\" fill=\"outline\">Entrar</ion-button>\n  <ion-button (click)=\"login()\" expand=\"block\" fill=\"outline\">Cadastrar</ion-button>\n\n\n\n\n\n</section>\n\n</ion-content>\n";
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


    __webpack_exports__["default"] = "ion-title {\n  text-align: left !important;\n}\n\nmat-form-field {\n  width: 100%;\n  padding-right: 10px;\n  padding-left: 10px;\n}\n\n.toolbar-title {\n  text-align: left !important;\n}\n\nbody {\n  background-color: red;\n}\n\n.scroll-content {\n  padding: 5px !important;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527f76));\n  background-image: linear-gradient(to bottom, white, #527f76);\n}\n\nion-content {\n  --ion-background-color: linear-gradient(to bottom, white, #527F76) !important;\n}\n\nmain.inner-scroll.scroll-y {\n  padding: 10px !important;\n}\n\n.logo {\n  width: 140px;\n  height: 200px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nimg {\n  padding-top: 50px;\n}\n\n.item {\n  background: transparent;\n}\n\n.scroll-content {\n  background-color: rgba(79, 65, 59, 0.6);\n}\n\n.login {\n  padding-top: 100px;\n}\n\n.button {\n  margin-top: 8px;\n}\n\nion-icon {\n  margin-top: 20px;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxsc3JhZWxcXERlc2t0b3BcXFByb2pldG9zXFxjbUFwcElvbmljNS9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0EsMkJBQUE7QUNDQTs7QURFQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FER0E7RUFDSSwyQkFBQTtBQ0FKOztBREdBO0VBQ0kscUJBQUE7QUNBSjs7QURHQTtFQUNJLHVCQUFBO0VBQ0EsMkZBQUE7RUFBQSw0REFBQTtBQ0FKOztBREVBO0VBQ0csNkVBQUE7QUNDSDs7QURHQTtFQUNJLHdCQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSx1QkFBQTtBQ0VKOztBREFBO0VBQ0ksdUNBQUE7QUNHSjs7QURDQTtFQUNJLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0FDR0o7O0FER0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZXtcclxudGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuXHJcbn1cclxuXHJcbi50b29sYmFyLXRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5ib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4uc2Nyb2xsLWNvbnRlbnR7XHJcbiAgICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCByZ2IoODIsIDEyNywgMTE4KSk7IFxyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgIzUyN0Y3NikgIWltcG9ydGFudDsgO1xyXG5cclxufVxyXG5cclxubWFpbi5pbm5lci1zY3JvbGwuc2Nyb2xsLXl7XHJcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2dve1xyXG4gICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbmltZyB7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxufVxyXG4uaXRlbXtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5zY3JvbGwtY29udGVudHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzksNjUsNTksIDAuNik7XHJcbiBcclxufVxyXG5cclxuLmxvZ2lue1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG59XHJcbi5idXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcbmlvbi1sYWJlbCB7XHJcbiAgICAvL2NvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24taWNvbntcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn0iLCJpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLnRvb2xiYXItdGl0bGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5zY3JvbGwtY29udGVudCB7XG4gIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgIzUyN2Y3Nik7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsICM1MjdGNzYpICFpbXBvcnRhbnQ7XG59XG5cbm1haW4uaW5uZXItc2Nyb2xsLnNjcm9sbC15IHtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xufVxuXG4ubG9nbyB7XG4gIHdpZHRoOiAxNDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuaW1nIHtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG59XG5cbi5pdGVtIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5zY3JvbGwtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzksIDY1LCA1OSwgMC42KTtcbn1cblxuLmxvZ2luIHtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xufVxuXG4uYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG5pb24taWNvbiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn0iXX0= */";
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
      function LoginPage(loginSrvc, route, navCtrl, fb, menuCtrl, spinnerSrvc, refreshSrvc, androidFingerprintAuth, faio) {
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

              _this.route.navigate(['/tabs/tabs/clientes']);

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

            _this2.route.navigate(['/tabs/tabs/clientes']);

            _this2.refreshSrvc.newUser.emit();

            _this2.loginForm.reset();

            _this2.spinnerSrvc.hide();
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
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"], _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_7__["SpinnerService"], _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_8__["RefreshPageService"], _ionic_native_android_fingerprint_auth_ngx__WEBPACK_IMPORTED_MODULE_9__["AndroidFingerprintAuth"], _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_10__["FingerprintAIO"]])], LoginPage);
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