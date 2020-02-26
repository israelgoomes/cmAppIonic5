(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n</ion-header>\n\n<ion-content  padding>\n   <ion-row>\n   <img class=\"logo\" src=\"./../../assets/imgs/logo_app.png\">  \n   </ion-row>\n <section class=\"login\">\n\n\n<form [formGroup]=\"loginForm\">\n\n    \n  <mat-form-field style=\"width: 100%;\">\n    <input matInput placeholder=\"email\" formControlName=\"email\">\n  </mat-form-field>\n<ion-row>\n  <ion-col size=\"10\">\n  <mat-form-field>\n    <input [type]=\"!isVisiblePassword ? 'password' : 'text'\" matInput placeholder=\"senha\" formControlName=\"senha\">\n  </mat-form-field>\n</ion-col>\n\n<ion-col >\n  <ion-icon *ngIf=\"isVisiblePassword\" (click)=\"visiblePassword()\" name=\"eye-outline\"></ion-icon>\n  <ion-icon *ngIf=\"!isVisiblePassword\" (click)=\"visiblePassword()\" name=\"eye-off-outline\"></ion-icon>\n</ion-col>\n\n</ion-row>\n  </form>\n\n\n  <ion-button (click)=\"login()\" [disabled]=\"!loginForm.valid\" expand=\"block\" fill=\"outline\">Entrar</ion-button>\n  <ion-button (click)=\"login()\" expand=\"block\" fill=\"outline\">Cadastrar</ion-button>\n\n\n\n\n\n</section>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");









let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  text-align: left !important;\n}\n\nmat-form-field {\n  width: 100%;\n  padding-right: 10px;\n  padding-left: 10px;\n}\n\n.toolbar-title {\n  text-align: left !important;\n}\n\nbody {\n  background-color: red;\n}\n\n.scroll-content {\n  padding: 5px !important;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527f76));\n  background-image: linear-gradient(to bottom, white, #527f76);\n}\n\nion-content {\n  --ion-background-color: linear-gradient(to bottom, white, #527F76) !important;\n}\n\nmain.inner-scroll.scroll-y {\n  padding: 10px !important;\n}\n\n.logo {\n  width: 140px;\n  height: 200px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nimg {\n  padding-top: 50px;\n}\n\n.item {\n  background: transparent;\n}\n\n.scroll-content {\n  background-color: rgba(79, 65, 59, 0.6);\n}\n\n.login {\n  padding-top: 100px;\n}\n\n.button {\n  margin-top: 8px;\n}\n\nion-icon {\n  margin-top: 20px;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxsc3JhZWxcXERlc2t0b3BcXGNtQXBwSW9uaWM1L3NyY1xcYXBwXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSwyQkFBQTtBQ0NBOztBREVBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURHQTtFQUNJLDJCQUFBO0FDQUo7O0FER0E7RUFDSSxxQkFBQTtBQ0FKOztBREdBO0VBQ0ksdUJBQUE7RUFDQSwyRkFBQTtFQUFBLDREQUFBO0FDQUo7O0FERUE7RUFDRyw2RUFBQTtBQ0NIOztBREdBO0VBQ0ksd0JBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREVBO0VBQ0ksaUJBQUE7QUNDSjs7QURDQTtFQUNJLHVCQUFBO0FDRUo7O0FEQUE7RUFDSSx1Q0FBQTtBQ0dKOztBRENBO0VBQ0ksa0JBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7QUNHSjs7QURHQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxle1xyXG50ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG5cclxufVxyXG5cclxuLnRvb2xiYXItdGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5zY3JvbGwtY29udGVudHtcclxuICAgIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsIHJnYig4MiwgMTI3LCAxMTgpKTsgXHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCAjNTI3Rjc2KSAhaW1wb3J0YW50OyA7XHJcblxyXG59XHJcblxyXG5tYWluLmlubmVyLXNjcm9sbC5zY3JvbGwteXtcclxuICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvZ297XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuaW1nIHtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG59XHJcbi5pdGVte1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLnNjcm9sbC1jb250ZW50e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3OSw2NSw1OSwgMC42KTtcclxuIFxyXG59XHJcblxyXG4ubG9naW57XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbn1cclxuLmJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuaW9uLWxhYmVsIHtcclxuICAgIC8vY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1pY29ue1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufSIsImlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4udG9vbGJhci10aXRsZSB7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLnNjcm9sbC1jb250ZW50IHtcbiAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCAjNTI3Zjc2KTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgIzUyN0Y3NikgIWltcG9ydGFudDtcbn1cblxubWFpbi5pbm5lci1zY3JvbGwuc2Nyb2xsLXkge1xuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDE0MHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG5pbWcge1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuLml0ZW0ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLnNjcm9sbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3OSwgNjUsIDU5LCAwLjYpO1xufVxuXG4ubG9naW4ge1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG59XG5cbi5idXR0b24ge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbmlvbi1pY29uIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login-service/login.service */ "./src/app/services/login-service/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let LoginPage = class LoginPage {
    constructor(loginSrvc, route, navCtrl, fb) {
        this.loginSrvc = loginSrvc;
        this.route = route;
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.isVisiblePassword = false;
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            senha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    }
    login() {
        this.loginSrvc
            .authenticate(this.loginForm.get('email').value, this.loginForm.get('senha').value)
            .subscribe(data => {
            console.log('token enviado', data.token);
            this.loginSrvc.registerLogin(data);
            this.route.navigate(['/tabs/clientes']);
        });
    }
    cadastroUser() {
        // this.navCtrl.setRoot('CadastroUserPage')
    }
    visiblePassword() {
        this.isVisiblePassword = !this.isVisiblePassword;
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
], LoginPage);



/***/ }),

/***/ "./src/app/services/login-service/login.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/login-service/login.service.ts ***!
  \*********************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-service/http.service */ "./src/app/services/http-service/http.service.ts");
/* harmony import */ var src_app_configHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/configHelper */ "./src/app/configHelper.ts");




let LoginService = class LoginService {
    constructor(http) {
        this.http = http;
        this.url = `${src_app_configHelper__WEBPACK_IMPORTED_MODULE_3__["configHelper"].URL}`;
    }
    authenticate(email, senha) {
        return this.http.post(`${this.url}/usuario/autenticar`, { email, senha });
    }
    registerLogin(result) {
        localStorage.setItem(src_app_configHelper__WEBPACK_IMPORTED_MODULE_3__["configHelper"].storageKeys.token, result.token);
        localStorage.setItem(src_app_configHelper__WEBPACK_IMPORTED_MODULE_3__["configHelper"].storageKeys.user, JSON.stringify(result.usuario));
    }
};
LoginService.ctorParameters = () => [
    { type: _http_service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
];
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
], LoginService);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map