function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["clientes-modal-cadastro-cliente-modal-cadastro-cliente-module"], {
  /***/
  "./src/app/services/cliente-service/cliente.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/services/cliente-service/cliente.service.ts ***!
    \*************************************************************/

  /*! exports provided: ClienteService */

  /***/
  function srcAppServicesClienteServiceClienteServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClienteService", function () {
      return ClienteService;
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

    var ClienteService =
    /*#__PURE__*/
    function () {
      function ClienteService(http) {
        _classCallCheck(this, ClienteService);

        this.http = http;
        this.url = "".concat(src_app_configHelper__WEBPACK_IMPORTED_MODULE_3__["configHelper"].URL, "/clientes");
      }

      _createClass(ClienteService, [{
        key: "getClients",
        value: function getClients() {
          return this.http.get("".concat(this.url));
        }
      }, {
        key: "getClientsByIdUser",
        value: function getClientsByIdUser(id) {
          return this.http.get("".concat(this.url, "/usuario/").concat(id));
        }
      }, {
        key: "includesClient",
        value: function includesClient(data) {
          return this.http.post("".concat(this.url), data);
        }
      }, {
        key: "alterClient",
        value: function alterClient(data, id) {
          console.log('id chegou', id);
          return this.http.put("".concat(this.url, "/").concat(id), data);
        }
      }, {
        key: "deleteClient",
        value: function deleteClient(id) {
          return this.http.delete("".concat(this.url), id);
        }
      }]);

      return ClienteService;
    }();

    ClienteService.ctorParameters = function () {
      return [{
        type: _http_service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
      }];
    };

    ClienteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])], ClienteService);
    /***/
  }
}]);
//# sourceMappingURL=clientes-modal-cadastro-cliente-modal-cadastro-cliente-module-es5.js.map