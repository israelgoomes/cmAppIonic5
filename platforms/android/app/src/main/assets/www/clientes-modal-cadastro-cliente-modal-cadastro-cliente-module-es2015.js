(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["clientes-modal-cadastro-cliente-modal-cadastro-cliente-module"],{

/***/ "./src/app/services/cliente-service/cliente.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/cliente-service/cliente.service.ts ***!
  \*************************************************************/
/*! exports provided: ClienteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteService", function() { return ClienteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-service/http.service */ "./src/app/services/http-service/http.service.ts");
/* harmony import */ var src_app_configHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/configHelper */ "./src/app/configHelper.ts");




let ClienteService = class ClienteService {
    constructor(http) {
        this.http = http;
        this.url = `${src_app_configHelper__WEBPACK_IMPORTED_MODULE_3__["configHelper"].URL}/clientes`;
    }
    getClients() {
        return this.http.get(`${this.url}`);
    }
    getClientsByIdUser(id) {
        return this.http.get(`${this.url}/usuario/${id}`);
    }
    includesClient(data) {
        return this.http.post(`${this.url}`, data);
    }
    alterClient(data, id) {
        console.log('id chegou', id);
        return this.http.put(`${this.url}/${id}`, data);
    }
    deleteClient(id) {
        return this.http.delete(`${this.url}`, id);
    }
};
ClienteService.ctorParameters = () => [
    { type: _http_service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
];
ClienteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
], ClienteService);



/***/ })

}]);
//# sourceMappingURL=clientes-modal-cadastro-cliente-modal-cadastro-cliente-module-es2015.js.map