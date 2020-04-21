function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projetos-projetos-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/projetos/modal-cadastro-projeto/modal-cadastro-projeto.page.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projetos/modal-cadastro-projeto/modal-cadastro-projeto.page.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjetosModalCadastroProjetoModalCadastroProjetoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-toolbar>\r\n  <ion-icon (click)=\"voltar()\" name=\"arrow-back-outline\"></ion-icon>\r\n</ion-toolbar>\r\n\r\n<ion-content [ngClass]=\"class\">\r\n\r\n  <section [ngClass]=\"class\">\r\n    <img class=\"logo\" src=\"./../../assets/imgs/projeto.png\">  \r\n  </section>\r\n\r\n  <section id=\"sec-02\">\r\n    <app-cadastro-projeto></app-cadastro-projeto>\r\n  </section>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/projetos/projetos.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projetos/projetos.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjetosProjetosPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<ion-buttons >\r\n  <ion-menu-button autoHide=\"false\"></ion-menu-button>\r\n</ion-buttons>\r\n<ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\r\n  <ion-fab-button [color]=\"color\" >\r\n    <ion-icon name=\"chevron-back-circle-outline\"></ion-icon>\r\n  </ion-fab-button>\r\n  <ion-fab-list side=\"start\">\r\n    <ion-fab-button><ion-icon (click)=\"cadastroProjeto()\" name=\"add\"></ion-icon></ion-fab-button>\r\n    <ion-fab-button><ion-icon (click)=\"logout()\" name=\"power\"></ion-icon></ion-fab-button>\r\n  </ion-fab-list>\r\n</ion-fab>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n  <app-header></app-header>\r\n\r\n\r\n  <div *ngFor=\"let projeto of listaServicos\">\r\n  <app-projeto [projeto]=\"projeto\"></app-projeto>\r\n</div>\r\n  <!-- <app-explore-container name=\"Servicos Page\"></app-explore-container> -->\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/projetos/modal-cadastro-projeto/modal-cadastro-projeto.page.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/projetos/modal-cadastro-projeto/modal-cadastro-projeto.page.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjetosModalCadastroProjetoModalCadastroProjetoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-icon {\n  font-size: 30px;\n}\n\nsection#sec-01 {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 30%;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527F76));\n  background-image: linear-gradient(to bottom, white, #527F76);\n}\n\n.origin {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 30%;\n  --ion-background-color: #527F76;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527F76));\n  background-image: linear-gradient(to bottom, white, #527F76);\n}\n\n.purple {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 30%;\n  --ion-background-color: purple;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(purple));\n  background-image: linear-gradient(to bottom, white, purple);\n}\n\n.blue {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 30%;\n  --ion-background-color: blue;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(blue));\n  background-image: linear-gradient(to bottom, white, blue);\n}\n\n.black {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 30%;\n  --ion-background-color: black;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(black));\n  background-image: linear-gradient(to bottom, white, black);\n}\n\nsection#sec-02 {\n  padding-top: 20px;\n  height: 100%;\n  border-top-right-radius: 30px;\n  border-top-left-radius: 30px;\n  background-color: white;\n}\n\nion-content {\n  --ion-background-color: #527F76;\n}\n\nion-card {\n  margin-top: 30px;\n  background-color: white;\n}\n\n.logo {\n  width: 200px;\n  height: 200px;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamV0b3MvbW9kYWwtY2FkYXN0cm8tcHJvamV0by9DOlxcVXNlcnNcXGlnb21lc2xhXFxEb2N1bWVudHNcXGlvbmljXFxjbUFwcElvbmljNS9zcmNcXGFwcFxccHJvamV0b3NcXG1vZGFsLWNhZGFzdHJvLXByb2pldG9cXG1vZGFsLWNhZGFzdHJvLXByb2pldG8ucGFnZS5zY3NzIiwic3JjL2FwcC9wcm9qZXRvcy9tb2RhbC1jYWRhc3Ryby1wcm9qZXRvL21vZGFsLWNhZGFzdHJvLXByb2pldG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFFQSwyRkFBQTtFQUFBLDREQUFBO0FDQUo7O0FES0E7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtFQUVBLCtCQUFBO0VBQ0EsMkZBQUE7RUFBQSw0REFBQTtBQ0pKOztBRFNDO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFFQSw4QkFBQTtFQUNBLDBGQUFBO0VBQUEsMkRBQUE7QUNQSDs7QURXQztFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBRUEsNEJBQUE7RUFDQSx3RkFBQTtFQUFBLHlEQUFBO0FDVkg7O0FEY0M7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtFQUVBLDZCQUFBO0VBQ0EseUZBQUE7RUFBQSwwREFBQTtBQ2JIOztBRGtCQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtBQ2ZKOztBRG9CQTtFQUNJLCtCQUFBO0FDakJKOztBRG1CQTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7QUNoQko7O0FEbUJBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDaEJKIiwiZmlsZSI6InNyYy9hcHAvcHJvamV0b3MvbW9kYWwtY2FkYXN0cm8tcHJvamV0by9tb2RhbC1jYWRhc3Ryby1wcm9qZXRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29ue1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG5zZWN0aW9uI3NlYy0wMXtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsICM1MjdGNzYpOyBcclxuXHJcbn1cclxuXHJcblxyXG4ub3JpZ2lue1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8vIGhlaWdodDogMzUlO1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICM1MjdGNzY7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgIzUyN0Y3Nik7IFxyXG4gXHJcbiB9XHJcbiBcclxuIFxyXG4gLnB1cnBsZXtcclxuICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBoZWlnaHQ6IDMwJTtcclxuICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcclxuICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsIHB1cnBsZSk7IFxyXG4gXHJcbiB9XHJcbiBcclxuIC5ibHVle1xyXG4gICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIC8vIGhlaWdodDogMzUlO1xyXG4gICBoZWlnaHQ6IDMwJTtcclxuICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCBibHVlKTsgXHJcbiBcclxuIH1cclxuIFxyXG4gLmJsYWNre1xyXG4gICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIC8vIGhlaWdodDogMzUlO1xyXG4gICBoZWlnaHQ6IDMwJTtcclxuICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgYmxhY2spOyBcclxuIFxyXG4gfVxyXG4gXHJcblxyXG5zZWN0aW9uI3NlYy0wMntcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG4gICAgXHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzUyN0Y3NjtcclxufVxyXG5pb24tY2FyZHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmxvZ297XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn0iLCJpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuc2VjdGlvbiNzZWMtMDEge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMzAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgIzUyN0Y3Nik7XG59XG5cbi5vcmlnaW4ge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMzAlO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjNTI3Rjc2O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgIzUyN0Y3Nik7XG59XG5cbi5wdXJwbGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMzAlO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCBwdXJwbGUpO1xufVxuXG4uYmx1ZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAzMCU7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCBibHVlKTtcbn1cblxuLmJsYWNrIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDMwJTtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCBibGFjayk7XG59XG5cbnNlY3Rpb24jc2VjLTAyIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICM1MjdGNzY7XG59XG5cbmlvbi1jYXJkIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/projetos/modal-cadastro-projeto/modal-cadastro-projeto.page.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/projetos/modal-cadastro-projeto/modal-cadastro-projeto.page.ts ***!
    \********************************************************************************/

  /*! exports provided: ModalCadastroProjetoPage */

  /***/
  function srcAppProjetosModalCadastroProjetoModalCadastroProjetoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalCadastroProjetoPage", function () {
      return ModalCadastroProjetoPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_configHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/configHelper */
    "./src/app/configHelper.ts");

    var ModalCadastroProjetoPage =
    /*#__PURE__*/
    function () {
      function ModalCadastroProjetoPage(modalCtrl) {
        _classCallCheck(this, ModalCadastroProjetoPage);

        this.modalCtrl = modalCtrl;
        this.class = "origin";
        this.class = localStorage.getItem(src_app_configHelper__WEBPACK_IMPORTED_MODULE_3__["configHelper"].storageKeys.color) != null ? localStorage.getItem(src_app_configHelper__WEBPACK_IMPORTED_MODULE_3__["configHelper"].storageKeys.color) : 'origin';
      }

      _createClass(ModalCadastroProjetoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "voltar",
        value: function voltar() {
          this.modalCtrl.dismiss({
            'dismissed': true
          });
        }
      }]);

      return ModalCadastroProjetoPage;
    }();

    ModalCadastroProjetoPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    ModalCadastroProjetoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modal-cadastro-projeto',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./modal-cadastro-projeto.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/projetos/modal-cadastro-projeto/modal-cadastro-projeto.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./modal-cadastro-projeto.page.scss */
      "./src/app/projetos/modal-cadastro-projeto/modal-cadastro-projeto.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], ModalCadastroProjetoPage);
    /***/
  },

  /***/
  "./src/app/projetos/projetos-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/projetos/projetos-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: ProjetosPageRoutingModule */

  /***/
  function srcAppProjetosProjetosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjetosPageRoutingModule", function () {
      return ProjetosPageRoutingModule;
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


    var _projetos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./projetos.page */
    "./src/app/projetos/projetos.page.ts");

    var routes = [{
      path: '',
      component: _projetos_page__WEBPACK_IMPORTED_MODULE_3__["ProjetosPage"]
    }, {
      path: 'detalhe-projeto',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | projeto-detalhe-projeto-detalhe-projeto-module */
        "default~projeto-detalhe-projeto-detalhe-projeto-module~projetos-projeto-detalhe-projeto-detalhe-proj~41c0e70e").then(__webpack_require__.bind(null,
        /*! ./projeto/detalhe-projeto/detalhe-projeto.module */
        "./src/app/projetos/projeto/detalhe-projeto/detalhe-projeto.module.ts")).then(function (m) {
          return m.DetalheProjetoPageModule;
        });
      }
    }];

    var ProjetosPageRoutingModule = function ProjetosPageRoutingModule() {
      _classCallCheck(this, ProjetosPageRoutingModule);
    };

    ProjetosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProjetosPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/projetos/projetos.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/projetos/projetos.module.ts ***!
    \*********************************************/

  /*! exports provided: ProjetosPageModule */

  /***/
  function srcAppProjetosProjetosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjetosPageModule", function () {
      return ProjetosPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _projetos_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./projetos-routing.module */
    "./src/app/projetos/projetos-routing.module.ts");
    /* harmony import */


    var _projetos_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./projetos.page */
    "./src/app/projetos/projetos.page.ts");
    /* harmony import */


    var _modal_cadastro_projeto_modal_cadastro_projeto_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./modal-cadastro-projeto/modal-cadastro-projeto.page */
    "./src/app/projetos/modal-cadastro-projeto/modal-cadastro-projeto.page.ts");

    var ProjetosPageModule = function ProjetosPageModule() {
      _classCallCheck(this, ProjetosPageModule);
    };

    ProjetosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], // ModalCadastroProjetoPageModule,
      _projetos_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProjetosPageRoutingModule"]],
      entryComponents: [_modal_cadastro_projeto_modal_cadastro_projeto_page__WEBPACK_IMPORTED_MODULE_8__["ModalCadastroProjetoPage"]],
      declarations: [_projetos_page__WEBPACK_IMPORTED_MODULE_7__["ProjetosPage"], _modal_cadastro_projeto_modal_cadastro_projeto_page__WEBPACK_IMPORTED_MODULE_8__["ModalCadastroProjetoPage"]]
    })], ProjetosPageModule);
    /***/
  },

  /***/
  "./src/app/projetos/projetos.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/projetos/projetos.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjetosProjetosPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2pldG9zL3Byb2pldG9zLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/projetos/projetos.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/projetos/projetos.page.ts ***!
    \*******************************************/

  /*! exports provided: ProjetosPage */

  /***/
  function srcAppProjetosProjetosPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjetosPage", function () {
      return ProjetosPage;
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


    var _services_projeto_service_projeto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/projeto-service/projeto.service */
    "./src/app/services/projeto-service/projeto.service.ts");
    /* harmony import */


    var _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/spinner-service/spinner.service */
    "./src/app/services/spinner-service/spinner.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/refresh-page.service */
    "./src/app/services/refresh-page.service.ts");
    /* harmony import */


    var _configHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../configHelper */
    "./src/app/configHelper.ts");
    /* harmony import */


    var _modal_cadastro_projeto_modal_cadastro_projeto_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./modal-cadastro-projeto/modal-cadastro-projeto.page */
    "./src/app/projetos/modal-cadastro-projeto/modal-cadastro-projeto.page.ts");
    /* harmony import */


    var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/utils/utils.service */
    "./src/app/services/utils/utils.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ProjetosPage =
    /*#__PURE__*/
    function () {
      function ProjetosPage(servicoSrvc, spinnerSrvc, modalCtrl, refreshSrvc, utilSrvc, router) {
        _classCallCheck(this, ProjetosPage);

        this.servicoSrvc = servicoSrvc;
        this.spinnerSrvc = spinnerSrvc;
        this.modalCtrl = modalCtrl;
        this.refreshSrvc = refreshSrvc;
        this.utilSrvc = utilSrvc;
        this.router = router;
        this.color = "primary";
        this.listaServicos = [];
        this.color = localStorage.getItem(_configHelper__WEBPACK_IMPORTED_MODULE_6__["configHelper"].storageKeys.color) != null ? localStorage.getItem(_configHelper__WEBPACK_IMPORTED_MODULE_6__["configHelper"].storageKeys.color) : 'primary';
        this.color = this.utilSrvc.colorConvert(this.color);
      }

      _createClass(ProjetosPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var userData = JSON.parse(localStorage.getItem(_configHelper__WEBPACK_IMPORTED_MODULE_6__["configHelper"].storageKeys.user));
          this.servicoSrvc.getServicesByUser(userData._id).subscribe(function (servicos) {
            _this.listaServicos = servicos;
            console.log('Projetos', _this.listaServicos);

            _this.spinnerSrvc.hide();
          });
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this2 = this;

          this.refreshSrvc.refreshProject.subscribe(function () {
            _this2.ngOnInit();
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem(_configHelper__WEBPACK_IMPORTED_MODULE_6__["configHelper"].storageKeys.token);
          this.router.navigate(['']);
        }
      }, {
        key: "cadastroProjeto",
        value: function cadastroProjeto() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log("TESTE");
                    _context.next = 3;
                    return this.modalCtrl.create({
                      component: _modal_cadastro_projeto_modal_cadastro_projeto_page__WEBPACK_IMPORTED_MODULE_7__["ModalCadastroProjetoPage"]
                    });

                  case 3:
                    modal = _context.sent;
                    _context.next = 6;
                    return modal.present();

                  case 6:
                    return _context.abrupt("return", _context.sent);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return ProjetosPage;
    }();

    ProjetosPage.ctorParameters = function () {
      return [{
        type: _services_projeto_service_projeto_service__WEBPACK_IMPORTED_MODULE_2__["ProjetoService"]
      }, {
        type: _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_5__["RefreshPageService"]
      }, {
        type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_8__["UtilsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
      }];
    };

    ProjetosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projetos',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projetos.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/projetos/projetos.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projetos.page.scss */
      "./src/app/projetos/projetos.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_projeto_service_projeto_service__WEBPACK_IMPORTED_MODULE_2__["ProjetoService"], _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_5__["RefreshPageService"], _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_8__["UtilsService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])], ProjetosPage);
    /***/
  }
}]);
//# sourceMappingURL=projetos-projetos-module-es5.js.map