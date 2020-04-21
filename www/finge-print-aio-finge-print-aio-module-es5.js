function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["finge-print-aio-finge-print-aio-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/finge-print-aio/finge-print-aio.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/finge-print-aio/finge-print-aio.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFingePrintAioFingePrintAioPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>fingePrintAio</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/finge-print-aio/finge-print-aio-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/finge-print-aio/finge-print-aio-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: FingePrintAioPageRoutingModule */

  /***/
  function srcAppFingePrintAioFingePrintAioRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FingePrintAioPageRoutingModule", function () {
      return FingePrintAioPageRoutingModule;
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


    var _finge_print_aio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./finge-print-aio.page */
    "./src/app/finge-print-aio/finge-print-aio.page.ts");

    var routes = [{
      path: '',
      component: _finge_print_aio_page__WEBPACK_IMPORTED_MODULE_3__["FingePrintAioPage"]
    }];

    var FingePrintAioPageRoutingModule = function FingePrintAioPageRoutingModule() {
      _classCallCheck(this, FingePrintAioPageRoutingModule);
    };

    FingePrintAioPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FingePrintAioPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/finge-print-aio/finge-print-aio.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/finge-print-aio/finge-print-aio.module.ts ***!
    \***********************************************************/

  /*! exports provided: FingePrintAioPageModule */

  /***/
  function srcAppFingePrintAioFingePrintAioModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FingePrintAioPageModule", function () {
      return FingePrintAioPageModule;
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


    var _finge_print_aio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./finge-print-aio-routing.module */
    "./src/app/finge-print-aio/finge-print-aio-routing.module.ts");
    /* harmony import */


    var _finge_print_aio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./finge-print-aio.page */
    "./src/app/finge-print-aio/finge-print-aio.page.ts");

    var FingePrintAioPageModule = function FingePrintAioPageModule() {
      _classCallCheck(this, FingePrintAioPageModule);
    };

    FingePrintAioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _finge_print_aio_routing_module__WEBPACK_IMPORTED_MODULE_5__["FingePrintAioPageRoutingModule"]],
      declarations: [_finge_print_aio_page__WEBPACK_IMPORTED_MODULE_6__["FingePrintAioPage"]]
    })], FingePrintAioPageModule);
    /***/
  },

  /***/
  "./src/app/finge-print-aio/finge-print-aio.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/finge-print-aio/finge-print-aio.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFingePrintAioFingePrintAioPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbmdlLXByaW50LWFpby9maW5nZS1wcmludC1haW8ucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/finge-print-aio/finge-print-aio.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/finge-print-aio/finge-print-aio.page.ts ***!
    \*********************************************************/

  /*! exports provided: FingePrintAioPage */

  /***/
  function srcAppFingePrintAioFingePrintAioPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FingePrintAioPage", function () {
      return FingePrintAioPage;
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


    var _ionic_native_android_fingerprint_auth_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/android-fingerprint-auth/ngx */
    "./node_modules/@ionic-native/android-fingerprint-auth/ngx/index.js");

    var FingePrintAioPage =
    /*#__PURE__*/
    function () {
      function FingePrintAioPage(androidFingerprintAuth) {
        _classCallCheck(this, FingePrintAioPage);

        this.androidFingerprintAuth = androidFingerprintAuth;
      }

      _createClass(FingePrintAioPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.androidFingerprintAuth.isAvailable().then(function (result) {
            if (result.isAvailable) {
              // it is available
              _this.androidFingerprintAuth.encrypt({
                clientId: 'myAppName',
                username: 'myUsername',
                password: 'myPassword'
              }).then(function (result) {
                if (result.withFingerprint) {
                  console.log('Successfully encrypted credentials.', result);
                  console.log('Encrypted credentials: ' + result.token);
                } else if (result.withBackup) {
                  console.log('Successfully authenticated with backup password!');
                } else console.log('Didn\'t authenticate!');
              }).catch(function (error) {
                if (error === _this.androidFingerprintAuth.ERRORS.FINGERPRINT_CANCELLED) {
                  console.log('Fingerprint authentication cancelled');
                } else console.error(error);
              });
            } else {// fingerprint auth isn't available
            }
          }).catch(function (error) {
            return console.error(error);
          });
        }
      }]);

      return FingePrintAioPage;
    }();

    FingePrintAioPage.ctorParameters = function () {
      return [{
        type: _ionic_native_android_fingerprint_auth_ngx__WEBPACK_IMPORTED_MODULE_2__["AndroidFingerprintAuth"]
      }];
    };

    FingePrintAioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-finge-print-aio',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./finge-print-aio.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/finge-print-aio/finge-print-aio.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./finge-print-aio.page.scss */
      "./src/app/finge-print-aio/finge-print-aio.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_android_fingerprint_auth_ngx__WEBPACK_IMPORTED_MODULE_2__["AndroidFingerprintAuth"]])], FingePrintAioPage);
    /***/
  }
}]);
//# sourceMappingURL=finge-print-aio-finge-print-aio-module-es5.js.map