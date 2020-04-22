function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~clientes-cliente-detalhe-cliente-detalhe-cliente-module~clientes-clientes-module~email-email~0f1502de"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cm-select/cm-select.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cm-select/cm-select.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCmSelectCmSelectComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-form-field [ngStyle]=\"{'width': width}\">\r\n  <mat-label>{{label}}</mat-label>\r\n  <mat-select [(value)]=\"selected\" [disabled]=\"disabled.value\">\r\n    <mat-option *ngFor=\"let l of lista\" (click)=\"setValue(l[valueAtr])\" [value]=\"l[valueAtr]\">\r\n      {{l[view]}}\r\n    </mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-card [ngClass]=\"class\">\n  <ion-card-header>\n    \n  </ion-card-header>\n  <ion-card-content>\n    <img class=\"logo\" src=\"./../../assets/imgs/logo_app.png\">  \n    \n  </ion-card-content>\n</ion-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/projetos/projeto/cadastro-projeto/cadastro-projeto.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projetos/projeto/cadastro-projeto/cadastro-projeto.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjetosProjetoCadastroProjetoCadastroProjetoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-card style=\"background-color: white;\">\n  <ion-card-header>\n    Cadastro de Projeto\n  </ion-card-header>\n<form [formGroup]=\"projectForm\">\n\n  <mat-form-field >\n    <input matInput placeholder=\"Projeto\" formControlName=\"tituloProjeto\">\n  </mat-form-field>\n  \n  <mat-form-field >\n    <input matInput placeholder=\"Descrição\" formControlName=\"descricaoProjeto\">\n  </mat-form-field>\n\n  <mat-form-field >\n    <input matInput placeholder=\"Valor\" formControlName=\"preco\">\n  </mat-form-field>\n\n\n  <app-cm-select label=\"Cliente\" width=\"95%\" formControlName=\"cliente\" [lista]=\"listaClientes\" view=\"nome\" valueAtr=\"_id\"></app-cm-select>\n  \n</form>\n\n</ion-card>\n\n\n<ion-card>\n\n  <ion-card-content style=\"padding: 05px; background-color: white;\">\n    <ion-button (click)=\"salvar()\" [disabled]=\"!projectForm.valid\" expand=\"block\" fill=\"outline\">Salvar Projeto</ion-button>\n  </ion-card-content>\n</ion-card>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/projetos/projeto/projeto.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projetos/projeto/projeto.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjetosProjetoProjetoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-card (click)=\"detalheProjeto()\">\r\n  <ion-card-header>\r\n    \r\n  </ion-card-header>\r\n  <ion-card-content>\r\n    Projeto: {{projeto?.tituloProjeto}} <br>\r\n    Valor: {{projeto?.preco}} <br>\r\n    \r\n\r\n    <!-- Cliente: {{projeto?.cliente.nome}} -->\r\n\r\n  </ion-card-content>\r\n</ion-card>";
    /***/
  },

  /***/
  "./src/app/components/cm-select/cm-select.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/components/cm-select/cm-select.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCmSelectCmSelectComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-form-field {\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbS1zZWxlY3QvQzpcXFVzZXJzXFxsc3JhZWxcXERlc2t0b3BcXFByb2pldG9zXFxjbUFwcElvbmljNS9zcmNcXGFwcFxcY29tcG9uZW50c1xcY20tc2VsZWN0XFxjbS1zZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY20tc2VsZWN0L2NtLXNlbGVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NtLXNlbGVjdC9jbS1zZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxufSIsIm1hdC1mb3JtLWZpZWxkIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/cm-select/cm-select.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/cm-select/cm-select.component.ts ***!
    \*************************************************************/

  /*! exports provided: CmSelectComponent */

  /***/
  function srcAppComponentsCmSelectCmSelectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CmSelectComponent", function () {
      return CmSelectComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var CmSelectComponent_1;

    var CmSelectComponent = CmSelectComponent_1 =
    /*#__PURE__*/
    function () {
      function CmSelectComponent(fb) {
        _classCallCheck(this, CmSelectComponent);

        this.fb = fb;
        this.disabled = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false);
      }

      _createClass(CmSelectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.selected = this.selected;
          this.disabled.setValue(this.isDisabled);
          this.formGroup = this.fb.group({
            option: ['']
          });
        }
      }, {
        key: "setValue",
        value: function setValue(value) {
          this.value = value;
          this.onChange(this.value);
        }
      }, {
        key: "writeValue",
        value: function writeValue(obj) {
          this.value = obj;
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {}
      }]);

      return CmSelectComponent;
    }();

    CmSelectComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CmSelectComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CmSelectComponent.prototype, "width", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], CmSelectComponent.prototype, "lista", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CmSelectComponent.prototype, "view", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CmSelectComponent.prototype, "valueAtr", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], CmSelectComponent.prototype, "isDisabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CmSelectComponent.prototype, "selected", void 0);
    CmSelectComponent = CmSelectComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cm-select',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cm-select.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cm-select/cm-select.component.html")).default,
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return CmSelectComponent_1;
        }),
        multi: true
      }],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cm-select.component.scss */
      "./src/app/components/cm-select/cm-select.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])], CmSelectComponent);
    /***/
  },

  /***/
  "./src/app/header/header.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/header/header.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#sec-logo {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527F76));\n  background-image: linear-gradient(to bottom, white, #527F76);\n  border-radius: 30px;\n  margin-bottom: 50px;\n}\n\n.logo {\n  width: 140px;\n  height: 200px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.origin {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527F76));\n  background-image: linear-gradient(to bottom, white, #527F76);\n  height: 250px;\n  text-align: center;\n}\n\n.purple {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(purple));\n  background-image: linear-gradient(to bottom, white, purple);\n  height: 250px;\n  text-align: center;\n}\n\n.blue {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(Navy));\n  background-image: linear-gradient(to bottom, white, Navy);\n  height: 250px;\n  text-align: center;\n}\n\n.black {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(black));\n  background-image: linear-gradient(to bottom, white, black);\n  height: 250px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcbHNyYWVsXFxEZXNrdG9wXFxQcm9qZXRvc1xcY21BcHBJb25pYzUvc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkZBQUE7RUFBQSw0REFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREVBO0VBQ0ksMkZBQUE7RUFBQSw0REFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0UsMEZBQUE7RUFBQSwyREFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0Usd0ZBQUE7RUFBQSx5REFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UseUZBQUE7RUFBQSwwREFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzZWMtbG9nb3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCAjNTI3Rjc2KTsgXHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG4ubG9nb3tcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuXHJcbi5vcmlnaW57XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgIzUyN0Y3Nik7IFxyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnB1cnBsZXtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgcHVycGxlKTsgXHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ibHVle1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCBOYXZ5KTsgXHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ibGFja3tcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgYmxhY2spOyBcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuIiwiI3NlYy1sb2dvIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsICM1MjdGNzYpO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4ubG9nbyB7XG4gIHdpZHRoOiAxNDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLm9yaWdpbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCAjNTI3Rjc2KTtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucHVycGxlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsIHB1cnBsZSk7XG4gIGhlaWdodDogMjUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJsdWUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgTmF2eSk7XG4gIGhlaWdodDogMjUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJsYWNrIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsIGJsYWNrKTtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
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


    var _configHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../configHelper */
    "./src/app/configHelper.ts");
    /* harmony import */


    var _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/refresh-page.service */
    "./src/app/services/refresh-page.service.ts");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(refreshSrtvc) {
        var _this = this;

        _classCallCheck(this, HeaderComponent);

        this.refreshSrtvc = refreshSrtvc;
        this.class = 'origin';
        this.class = localStorage.getItem(_configHelper__WEBPACK_IMPORTED_MODULE_2__["configHelper"].storageKeys.color) != null ? localStorage.getItem(_configHelper__WEBPACK_IMPORTED_MODULE_2__["configHelper"].storageKeys.color) : 'origin';
        this.refreshSrtvc.changeTheme.subscribe(function () {
          _this.class = localStorage.getItem(_configHelper__WEBPACK_IMPORTED_MODULE_2__["configHelper"].storageKeys.color);
        });
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_3__["RefreshPageService"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/header/header.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_refresh_page_service__WEBPACK_IMPORTED_MODULE_3__["RefreshPageService"]])], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/models/servicos-model.ts":
  /*!******************************************!*\
    !*** ./src/app/models/servicos-model.ts ***!
    \******************************************/

  /*! exports provided: ProjetoModel */

  /***/
  function srcAppModelsServicosModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjetoModel", function () {
      return ProjetoModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ProjetoModel = function ProjetoModel() {
      _classCallCheck(this, ProjetoModel);
    };
    /***/

  },

  /***/
  "./src/app/projetos/projeto/cadastro-projeto/cadastro-projeto.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/projetos/projeto/cadastro-projeto/cadastro-projeto.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjetosProjetoCadastroProjetoCadastroProjetoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-form-field, mat-select {\n  width: 95%;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamV0b3MvcHJvamV0by9jYWRhc3Ryby1wcm9qZXRvL0M6XFxVc2Vyc1xcbHNyYWVsXFxEZXNrdG9wXFxQcm9qZXRvc1xcY21BcHBJb25pYzUvc3JjXFxhcHBcXHByb2pldG9zXFxwcm9qZXRvXFxjYWRhc3Ryby1wcm9qZXRvXFxjYWRhc3Ryby1wcm9qZXRvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9qZXRvcy9wcm9qZXRvL2NhZGFzdHJvLXByb2pldG8vY2FkYXN0cm8tcHJvamV0by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcHJvamV0b3MvcHJvamV0by9jYWRhc3Ryby1wcm9qZXRvL2NhZGFzdHJvLXByb2pldG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCwgbWF0LXNlbGVjdHtcclxuICAgIHdpZHRoOiA5NSU7IFxyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4iLCJtYXQtZm9ybS1maWVsZCwgbWF0LXNlbGVjdCB7XG4gIHdpZHRoOiA5NSU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/projetos/projeto/cadastro-projeto/cadastro-projeto.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/projetos/projeto/cadastro-projeto/cadastro-projeto.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: CadastroProjetoComponent */

  /***/
  function srcAppProjetosProjetoCadastroProjetoCadastroProjetoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CadastroProjetoComponent", function () {
      return CadastroProjetoComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_cliente_service_cliente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/cliente-service/cliente.service */
    "./src/app/services/cliente-service/cliente.service.ts");
    /* harmony import */


    var src_app_configHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/configHelper */
    "./src/app/configHelper.ts");
    /* harmony import */


    var _services_projeto_service_projeto_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/projeto-service/projeto.service */
    "./src/app/services/projeto-service/projeto.service.ts");
    /* harmony import */


    var _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../services/spinner-service/spinner.service */
    "./src/app/services/spinner-service/spinner.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../services/refresh-page.service */
    "./src/app/services/refresh-page.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var CadastroProjetoComponent =
    /*#__PURE__*/
    function () {
      function CadastroProjetoComponent(clienteSrvc, fb, projetoSrvc, spinnerSrvc, modalCtrl, refreshSrvc, router) {
        _classCallCheck(this, CadastroProjetoComponent);

        this.clienteSrvc = clienteSrvc;
        this.fb = fb;
        this.projetoSrvc = projetoSrvc;
        this.spinnerSrvc = spinnerSrvc;
        this.modalCtrl = modalCtrl;
        this.refreshSrvc = refreshSrvc;
        this.router = router;
        this.add = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.listaClientes = [];
      }

      _createClass(CadastroProjetoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          var userData = JSON.parse(localStorage.getItem(src_app_configHelper__WEBPACK_IMPORTED_MODULE_4__["configHelper"].storageKeys.user));
          this.projectForm = this.fb.group({
            descricaoProjeto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            tituloProjeto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            preco: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cliente: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            usuario: userData._id,
            status: true
          });
          this.clienteSrvc.getClientsByIdUser(userData._id).subscribe(function (clientes) {
            _this2.listaClientes = clientes;

            _this2.spinnerSrvc.hide();
          });
        }
      }, {
        key: "event",
        value: function event() {
          this.add.emit(this.projectForm.value);
        }
      }, {
        key: "salvar",
        value: function salvar() {
          var _this3 = this;

          console.log('Objeto a ser salvo', this.projectForm.value);
          this.projetoSrvc.includesProject(this.projectForm.value).subscribe(function (data) {
            console.log('Resposta', data);

            _this3.modalCtrl.dismiss();

            _this3.refreshSrvc.refreshProject.emit();

            _this3.spinnerSrvc.hide();

            _this3.router.navigate(["/tabs/tabs/projetos"]);
          });
        }
      }]);

      return CadastroProjetoComponent;
    }();

    CadastroProjetoComponent.ctorParameters = function () {
      return [{
        type: src_app_services_cliente_service_cliente_service__WEBPACK_IMPORTED_MODULE_3__["ClienteService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_projeto_service_projeto_service__WEBPACK_IMPORTED_MODULE_5__["ProjetoService"]
      }, {
        type: _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_6__["SpinnerService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
      }, {
        type: _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_8__["RefreshPageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CadastroProjetoComponent.prototype, "add", void 0);
    CadastroProjetoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cadastro-projeto',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cadastro-projeto.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/projetos/projeto/cadastro-projeto/cadastro-projeto.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cadastro-projeto.component.scss */
      "./src/app/projetos/projeto/cadastro-projeto/cadastro-projeto.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_cliente_service_cliente_service__WEBPACK_IMPORTED_MODULE_3__["ClienteService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_projeto_service_projeto_service__WEBPACK_IMPORTED_MODULE_5__["ProjetoService"], _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_6__["SpinnerService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"], _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_8__["RefreshPageService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])], CadastroProjetoComponent);
    /***/
  },

  /***/
  "./src/app/projetos/projeto/projeto.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/projetos/projeto/projeto.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjetosProjetoProjetoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2pldG9zL3Byb2pldG8vcHJvamV0by5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/projetos/projeto/projeto.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/projetos/projeto/projeto.component.ts ***!
    \*******************************************************/

  /*! exports provided: ServicoComponent */

  /***/
  function srcAppProjetosProjetoProjetoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicoComponent", function () {
      return ServicoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _models_servicos_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../models/servicos-model */
    "./src/app/models/servicos-model.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ServicoComponent =
    /*#__PURE__*/
    function () {
      function ServicoComponent(route) {
        _classCallCheck(this, ServicoComponent);

        this.route = route;
      }

      _createClass(ServicoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('Projeto', this.projeto);
        }
      }, {
        key: "detalheProjeto",
        value: function detalheProjeto() {
          var navigationExtras = {
            state: {
              valorParaEnviar: this.projeto
            }
          };
          console.log('projeto', this.projeto);
          this.route.navigate(['/detalhe-projeto'], navigationExtras);
        }
      }]);

      return ServicoComponent;
    }();

    ServicoComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_servicos_model__WEBPACK_IMPORTED_MODULE_1__["ProjetoModel"])], ServicoComponent.prototype, "projeto", void 0);
    ServicoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-projeto',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projeto.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/projetos/projeto/projeto.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projeto.component.scss */
      "./src/app/projetos/projeto/projeto.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], ServicoComponent);
    /***/
  },

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
  },

  /***/
  "./src/app/services/projeto-service/projeto.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/services/projeto-service/projeto.service.ts ***!
    \*************************************************************/

  /*! exports provided: ProjetoService */

  /***/
  function srcAppServicesProjetoServiceProjetoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjetoService", function () {
      return ProjetoService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_configHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/configHelper */
    "./src/app/configHelper.ts");
    /* harmony import */


    var _http_service_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../http-service/http.service */
    "./src/app/services/http-service/http.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProjetoService =
    /*#__PURE__*/
    function () {
      function ProjetoService(http) {
        _classCallCheck(this, ProjetoService);

        this.http = http;
        this.url = "".concat(src_app_configHelper__WEBPACK_IMPORTED_MODULE_1__["configHelper"].URL, "/projetos");
      }

      _createClass(ProjetoService, [{
        key: "getServicesByUser",
        value: function getServicesByUser(id) {
          return this.http.get("".concat(this.url, "/usuario/").concat(id));
        }
      }, {
        key: "includesProject",
        value: function includesProject(data) {
          return this.http.post("".concat(this.url), data);
        }
      }, {
        key: "projectByClient",
        value: function projectByClient(idClient) {
          return this.http.get("".concat(this.url, "/cliente/").concat(idClient));
        }
      }, {
        key: "deleteProject",
        value: function deleteProject(id) {
          return this.http.delete("".concat(this.url), id);
        }
      }, {
        key: "updateProject",
        value: function updateProject(id, data) {
          return this.http.put("".concat(this.url, "/").concat(id), data);
        }
      }]);

      return ProjetoService;
    }();

    ProjetoService.ctorParameters = function () {
      return [{
        type: _http_service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
      }];
    };

    ProjetoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])], ProjetoService);
    /***/
  },

  /***/
  "./src/app/services/utils/utils.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/utils/utils.service.ts ***!
    \*************************************************/

  /*! exports provided: UtilsService */

  /***/
  function srcAppServicesUtilsUtilsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilsService", function () {
      return UtilsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UtilsService =
    /*#__PURE__*/
    function () {
      function UtilsService() {
        _classCallCheck(this, UtilsService);
      }

      _createClass(UtilsService, [{
        key: "textTomachineWrite",
        value: function textTomachineWrite(param, componente) {
          var textoArray = [];
          textoArray = param.split('');
          textoArray.forEach(function (letra, i) {
            if (letra == '*') {
              letra = '<br>';
            }

            setTimeout(function () {
              componente.innerHTML += letra;
            }, 75 * i);
          });
        }
      }, {
        key: "iniciais",
        value: function iniciais(param) {
          var split = [];
          split = param.toString().split(' ');

          if (split.length > 1) {
            return this.iniciais = split[0].split('')[0].toUpperCase() + split[1].split('')[0].toUpperCase();
          }

          return this.iniciais = split[0].split('')[0];
        }
      }, {
        key: "populaColor",
        value: function populaColor() {
          return ["black", "black", "black", "black", "blue", "black", "black", "black", "blue", "black", "blue"];
        }
      }, {
        key: "populaColorOption",
        value: function populaColorOption() {
          return ["blue", "orange", "white", "purple", "pink", "green"];
        }
      }, {
        key: "colorConvert",
        value: function colorConvert(color) {
          if (color == 'black') {
            color = 'dark';
          } else if (color == 'origin') {
            color = 'primary';
          } else if (color == "blue") {
            color = 'tertiary';
          }

          return color;
        }
      }]);

      return UtilsService;
    }();

    UtilsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], UtilsService);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _projetos_projeto_projeto_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../projetos/projeto/projeto.component */
    "./src/app/projetos/projeto/projeto.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _components_cm_select_cm_select_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../components/cm-select/cm-select.component */
    "./src/app/components/cm-select/cm-select.component.ts");
    /* harmony import */


    var _projetos_projeto_cadastro_projeto_cadastro_projeto_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../projetos/projeto/cadastro-projeto/cadastro-projeto.component */
    "./src/app/projetos/projeto/cadastro-projeto/cadastro-projeto.component.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _projetos_projeto_projeto_component__WEBPACK_IMPORTED_MODULE_4__["ServicoComponent"], _components_cm_select_cm_select_component__WEBPACK_IMPORTED_MODULE_15__["CmSelectComponent"], _projetos_projeto_cadastro_projeto_cadastro_projeto_component__WEBPACK_IMPORTED_MODULE_16__["CadastroProjetoComponent"]],
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot(), _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"]],
      exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _projetos_projeto_projeto_component__WEBPACK_IMPORTED_MODULE_4__["ServicoComponent"], _components_cm_select_cm_select_component__WEBPACK_IMPORTED_MODULE_15__["CmSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _projetos_projeto_cadastro_projeto_cadastro_projeto_component__WEBPACK_IMPORTED_MODULE_16__["CadastroProjetoComponent"] //    CadastroPojetoPageModule
      ]
    })], SharedModule);
    /***/
  }
}]);
//# sourceMappingURL=default~clientes-cliente-detalhe-cliente-detalhe-cliente-module~clientes-clientes-module~email-email~0f1502de-es5.js.map