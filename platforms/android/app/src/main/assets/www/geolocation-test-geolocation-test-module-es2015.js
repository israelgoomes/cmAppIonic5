(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["geolocation-test-geolocation-test-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/geolocation-test/geolocation-test.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/geolocation-test/geolocation-test.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar>\r\n  <ion-icon (click)=\"voltar()\" name=\"arrow-back-outline\"></ion-icon>\r\n</ion-toolbar>\r\n\r\n<ion-content>\r\n  <div class=\"ion-padding\">\r\n\r\n    <ion-button (click)=\"getCurrentCoordinates()\" expand=\"block\">\r\n      Buscar localização\r\n    </ion-button>\r\n\r\n  <ion-list>\r\n    <ion-list-header>\r\n      <ion-label>Location Coordinates</ion-label>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-label>\r\n        Latitue\r\n      </ion-label>\r\n      {{latitude}}\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>\r\n        Longitude\r\n      </ion-label>\r\n      {{longitude}}\r\n    </ion-item>\r\n    </ion-list>    \r\n  </div>\r\n\r\n\r\n<ion-card *ngIf=\"address\">\r\n  <ion-card-header>\r\n    Endereço\r\n  </ion-card-header>\r\n  <ion-card-content>\r\n    País: {{address?.countryName}}<br>\r\n    Cidade: {{address?.subAdministrativeArea}} <br>\r\n    Estado: {{address?.administrativeArea}}<br>\r\n    Rua: {{address?.thoroughfare}}<br>\r\n    Bairro: {{address?.subLocality}}<br>\r\n    Cep: {{address?.postalCode}}<br>\r\n  </ion-card-content>\r\n</ion-card>\r\n\r\n</ion-content>\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./src/app/geolocation-test/geolocation-test-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/geolocation-test/geolocation-test-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: GeolocationTestPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationTestPageRoutingModule", function() { return GeolocationTestPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _geolocation_test_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./geolocation-test.page */ "./src/app/geolocation-test/geolocation-test.page.ts");




const routes = [
    {
        path: '',
        component: _geolocation_test_page__WEBPACK_IMPORTED_MODULE_3__["GeolocationTestPage"]
    }
];
let GeolocationTestPageRoutingModule = class GeolocationTestPageRoutingModule {
};
GeolocationTestPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GeolocationTestPageRoutingModule);



/***/ }),

/***/ "./src/app/geolocation-test/geolocation-test.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/geolocation-test/geolocation-test.module.ts ***!
  \*************************************************************/
/*! exports provided: GeolocationTestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationTestPageModule", function() { return GeolocationTestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _geolocation_test_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./geolocation-test-routing.module */ "./src/app/geolocation-test/geolocation-test-routing.module.ts");
/* harmony import */ var _geolocation_test_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./geolocation-test.page */ "./src/app/geolocation-test/geolocation-test.page.ts");







let GeolocationTestPageModule = class GeolocationTestPageModule {
};
GeolocationTestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _geolocation_test_routing_module__WEBPACK_IMPORTED_MODULE_5__["GeolocationTestPageRoutingModule"]
        ],
        declarations: [_geolocation_test_page__WEBPACK_IMPORTED_MODULE_6__["GeolocationTestPage"]]
    })
], GeolocationTestPageModule);



/***/ }),

/***/ "./src/app/geolocation-test/geolocation-test.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/geolocation-test/geolocation-test.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VvbG9jYXRpb24tdGVzdC9DOlxcVXNlcnNcXGlnb21lc2xhXFxEb2N1bWVudHNcXGlvbmljXFxjbUFwcElvbmljNS9zcmNcXGFwcFxcZ2VvbG9jYXRpb24tdGVzdFxcZ2VvbG9jYXRpb24tdGVzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL2dlb2xvY2F0aW9uLXRlc3QvZ2VvbG9jYXRpb24tdGVzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9nZW9sb2NhdGlvbi10ZXN0L2dlb2xvY2F0aW9uLXRlc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb257XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn0iLCJpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/geolocation-test/geolocation-test.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/geolocation-test/geolocation-test.page.ts ***!
  \***********************************************************/
/*! exports provided: GeolocationTestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationTestPage", function() { return GeolocationTestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let GeolocationTestPage = class GeolocationTestPage {
    constructor(geolocation, nativeGeocoder, router) {
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.router = router;
        this.latitude = 0; // latitude
        this.longitude = 0; // longitude
        this.options = {
            timeout: 10000,
            enableHighAccuracy: true,
            maximumAge: 3600
        };
        // geocoder options
        this.nativeGeocoderOptions = {
            useLocale: true,
            maxResults: 5
        };
    }
    ngOnInit() { }
    // use geolocation to get user's device coordinates
    getCurrentCoordinates() {
        this.geolocation.getCurrentPosition().then((resp) => {
            this.latitude = resp.coords.latitude;
            this.longitude = resp.coords.longitude;
            this.getAddress(this.latitude, this.longitude);
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }
    // get address using coordinates
    getAddress(lat, long) {
        this.nativeGeocoder.reverseGeocode(lat, long, this.nativeGeocoderOptions)
            .then((res) => {
            console.log('Resposta direta', res);
            this.address = res[0];
            this.teste = 'https://maps.googleapis.com/maps/api/staticmap?size=400x400&zoom=12&markers=color:red|'
                + this.getEndereco()
                + '&key=AIzaSyDIG5sfeA8GbckBb_ZHWUQdJhGR1w4iULc';
            console.log('Valor passado na img', this.teste);
            //this.pretifyAddress(res[0]);
        })
            .catch((error) => {
            alert('Error getting location' + JSON.stringify(error));
            console.error(error);
        });
    }
    // address
    pretifyAddress(address) {
        const obj = [];
        let data = '';
        for (const key in address) {
            obj.push(address[key]);
        }
        obj.reverse();
        for (const val in obj) {
            if (obj[val].length) {
                data += obj[val] + ', ';
            }
        }
        return data.slice(0, -2);
    }
    getEndereco() {
        return this.address.thoroughfare + ', ' + this.address.subLocality + ', ' + this.address.subAdministrativeArea + ', ' + this.address.administrativeArea;
    }
    getMap() {
        this.teste = 'https://maps.googleapis.com/maps/api/staticmap?size=400x400&zoom=12&markers=color:red|'
            + this.getEndereco()
            + '&key=AIzaSyDIG5sfeA8GbckBb_ZHWUQdJhGR1w4iULc';
    }
    voltar() {
        this.router.navigate(['/tabs/tabs/clientes']);
    }
};
GeolocationTestPage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeGeocoder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
GeolocationTestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-geolocation-test',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./geolocation-test.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/geolocation-test/geolocation-test.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./geolocation-test.page.scss */ "./src/app/geolocation-test/geolocation-test.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeGeocoder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], GeolocationTestPage);



/***/ })

}]);
//# sourceMappingURL=geolocation-test-geolocation-test-module-es2015.js.map