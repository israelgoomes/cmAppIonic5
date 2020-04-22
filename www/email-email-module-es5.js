function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["email-email-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/email/email-form/email-form.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/email/email-form/email-form.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEmailEmailFormEmailFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"emailForm\">\r\n<ion-item lines=\"none\">\r\n<ion-label>Assunto</ion-label>\r\n</ion-item>\r\n\r\n<div class=\"balao\" [ngStyle]=\"{ 'background-color': color }\">\r\n  <input [ngStyle]=\"{ 'background-color': color }\" formControlName=\"assunto\" />\r\n</div>\r\n<ion-item lines=\"none\">\r\n  <ion-label>Texto</ion-label>\r\n  </ion-item>\r\n\r\n  <div [ngClass]=\"class\">\r\n  <textarea rows=\"8\" [ngStyle]=\"{ 'background-color': color }\" formControlName=\"text\"></textarea>\r\n</div>\r\n\r\n<ion-card (click)=\"event()\">\r\n  <ion-card-content>\r\n    <ion-item style=\"background-color: white !important;\"  \r\n    lines=\"none\" detail=\"false\">\r\n      <ion-icon [color]=\"color\" slot=\"end\" name=\"send-outline\"></ion-icon>\r\n      <ion-label [color]=\"color\">Enviar</ion-label>\r\n    </ion-item>\r\n  </ion-card-content>\r\n</ion-card>\r\n\r\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/email/email.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/email/email.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEmailEmailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-buttons >\r\n  <ion-menu-button autoHide=\"false\"></ion-menu-button>\r\n</ion-buttons>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <app-header></app-header>\r\n\r\n<app-email-form *ngIf=\"!emailSended\" (emailData)=\"sendEmail($event)\"></app-email-form>\r\n\r\n<ion-card *ngIf=\"emailSended\">\r\n  <ion-card-header>\r\n    E-mail Enviado com Sucesso!\r\n    <ion-icon [color]=\"color\" name=\"thumbs-up\"></ion-icon>\r\n  </ion-card-header>\r\n  <ion-card-content>\r\n   <p> Para: \r\n      {{emails}}</p><br>\r\n    <!-- <div *ngFor=\"let email of emailData.emails\"> -->\r\n      <!-- {{email.email}}  -->\r\n    <p>Assunto:{{emailData.assunto}}</p><br>\r\n    <!-- {{emailData.assunto}} -->\r\n   <p>Texto: {{emailData.text}}</p><br>\r\n    <!-- {{emailData.text}} -->\r\n\r\n\r\n  </ion-card-content>\r\n\r\n\r\n  <ion-button [color]=\"color\" fill=\"outline\" routerLink=\"/tabs/tabs/clientes\">Inicio</ion-button>\r\n  <ion-button [color]=\"color\" (click)=\"newEmail()\" >Novo E-mail</ion-button>\r\n\r\n</ion-card>\r\n\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/email/email-form/email-form.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/email/email-form/email-form.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEmailEmailFormEmailFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.balao {\n  margin: 0 auto;\n  background: #7e57c2;\n  font-family: \"open sans\";\n  font-size: 0.85em;\n  line-height: 1.6em;\n  border-radius: 15px;\n  width: 300px;\n  height: auto;\n  color: #fff;\n  padding: 20px;\n  position: relative;\n  margin-top: 30px;\n}\ninput, textarea {\n  background-color: #7e57c2;\n  border: none;\n  width: 100%;\n}\ninput:focus, textarea:focus {\n  box-shadow: 0 0 0 0;\n  border: 0 none;\n  outline: 0;\n}\n.primary {\n  margin: 0 auto;\n  background: #527F76;\n  font-family: \"open sans\";\n  font-size: 0.85em;\n  line-height: 1.6em;\n  border-radius: 15px;\n  width: 300px;\n  height: auto;\n  color: #fff;\n  padding: 20px;\n  position: relative;\n  margin-top: 30px;\n}\n.purple {\n  margin: 0 auto;\n  background: purple;\n  font-family: \"open sans\";\n  font-size: 0.85em;\n  line-height: 1.6em;\n  border-radius: 15px;\n  width: 300px;\n  height: auto;\n  color: #fff;\n  padding: 20px;\n  position: relative;\n  margin-top: 30px;\n}\n.blue {\n  margin: 0 auto;\n  background: blue;\n  font-family: \"open sans\";\n  font-size: 0.85em;\n  line-height: 1.6em;\n  border-radius: 15px;\n  width: 300px;\n  height: auto;\n  color: #fff;\n  padding: 20px;\n  position: relative;\n  margin-top: 30px;\n}\n.black {\n  margin: 0 auto;\n  background: black;\n  font-family: \"open sans\";\n  font-size: 0.85em;\n  line-height: 1.6em;\n  border-radius: 15px;\n  width: 300px;\n  height: auto;\n  color: #fff;\n  padding: 20px;\n  position: relative;\n  margin-top: 30px;\n}\n.primary:after {\n  /*Triangulo*/\n  content: \"\";\n  width: 0;\n  height: 0;\n  position: absolute;\n  border-left: 20px solid transparent;\n  border-right: 20px solid transparent;\n  /*Faz seta \"apontar para baixo. Definir o valor como 'top' fará ela \"apontar para cima\" */\n  /*Aqui entra a cor da \"aba\" do balão */\n  border-bottom: 20px solid #527F76;\n  top: -20px;\n  /*localização. Experimente alterar para 'bottom'*/\n  left: 20%;\n}\n.purple:after {\n  /*Triangulo*/\n  content: \"\";\n  width: 0;\n  height: 0;\n  position: absolute;\n  border-left: 20px solid transparent;\n  border-right: 20px solid transparent;\n  /*Faz seta \"apontar para baixo. Definir o valor como 'top' fará ela \"apontar para cima\" */\n  /*Aqui entra a cor da \"aba\" do balão */\n  border-bottom: 20px solid purple;\n  top: -20px;\n  /*localização. Experimente alterar para 'bottom'*/\n  left: 20%;\n}\n.blue:after {\n  /*Triangulo*/\n  content: \"\";\n  width: 0;\n  height: 0;\n  position: absolute;\n  border-left: 20px solid transparent;\n  border-right: 20px solid transparent;\n  /*Faz seta \"apontar para baixo. Definir o valor como 'top' fará ela \"apontar para cima\" */\n  /*Aqui entra a cor da \"aba\" do balão */\n  border-bottom: 20px solid blue;\n  top: -20px;\n  /*localização. Experimente alterar para 'bottom'*/\n  left: 20%;\n}\n.black:after {\n  /*Triangulo*/\n  content: \"\";\n  width: 0;\n  height: 0;\n  position: absolute;\n  border-left: 20px solid transparent;\n  border-right: 20px solid transparent;\n  /*Faz seta \"apontar para baixo. Definir o valor como 'top' fará ela \"apontar para cima\" */\n  /*Aqui entra a cor da \"aba\" do balão */\n  border-bottom: 20px solid black;\n  top: -20px;\n  /*localização. Experimente alterar para 'bottom'*/\n  left: 20%;\n}\nion-icon {\n  color: #7e57c2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1haWwvZW1haWwtZm9ybS9lbWFpbC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lbWFpbC9lbWFpbC1mb3JtL0M6XFxVc2Vyc1xcaWdvbWVzbGFcXERvY3VtZW50c1xcaW9uaWNcXGNtQXBwSW9uaWM1L3NyY1xcYXBwXFxlbWFpbFxcZW1haWwtZm9ybVxcZW1haWwtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FERUo7QUNDQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QURFSjtBQ0NBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBREVKO0FDQ0E7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FERUo7QUNDQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QURFSjtBQ0NBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBREVKO0FDQ0E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FERUo7QUNBQTtFQUFnQixZQUFBO0VBQ1osV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EseUZBQUE7RUFDQSxzQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsVUFBQTtFQUFZLGlEQUFBO0VBQ1osU0FBQTtBREtKO0FDSEE7RUFBZSxZQUFBO0VBQ1gsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EseUZBQUE7RUFDQSxzQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtFQUFZLGlEQUFBO0VBQ1osU0FBQTtBRFFKO0FDTkE7RUFBYSxZQUFBO0VBQ1QsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EseUZBQUE7RUFDQSxzQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUFZLGlEQUFBO0VBQ1osU0FBQTtBRFdKO0FDVEE7RUFBYyxZQUFBO0VBQ1YsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EseUZBQUE7RUFDQSxzQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsVUFBQTtFQUFZLGlEQUFBO0VBQ1osU0FBQTtBRGNKO0FDWEE7RUFDSSxjQUFBO0FEY0oiLCJmaWxlIjoic3JjL2FwcC9lbWFpbC9lbWFpbC1mb3JtL2VtYWlsLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uYmFsYW8ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZDogIzdlNTdjMjtcbiAgZm9udC1mYW1pbHk6IFwib3BlbiBzYW5zXCI7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xuICBsaW5lLWhlaWdodDogMS42ZW07XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG5pbnB1dCwgdGV4dGFyZWEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2U1N2MyO1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pbnB1dDpmb2N1cywgdGV4dGFyZWE6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAwO1xuICBib3JkZXI6IDAgbm9uZTtcbiAgb3V0bGluZTogMDtcbn1cblxuLnByaW1hcnkge1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZDogIzUyN0Y3NjtcbiAgZm9udC1mYW1pbHk6IFwib3BlbiBzYW5zXCI7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xuICBsaW5lLWhlaWdodDogMS42ZW07XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ucHVycGxlIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQ6IHB1cnBsZTtcbiAgZm9udC1mYW1pbHk6IFwib3BlbiBzYW5zXCI7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xuICBsaW5lLWhlaWdodDogMS42ZW07XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uYmx1ZSB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kOiBibHVlO1xuICBmb250LWZhbWlseTogXCJvcGVuIHNhbnNcIjtcbiAgZm9udC1zaXplOiAwLjg1ZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjZlbTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5ibGFjayB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IFwib3BlbiBzYW5zXCI7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xuICBsaW5lLWhlaWdodDogMS42ZW07XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ucHJpbWFyeTphZnRlciB7XG4gIC8qVHJpYW5ndWxvKi9cbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItbGVmdDogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAvKkZheiBzZXRhIFwiYXBvbnRhciBwYXJhIGJhaXhvLiBEZWZpbmlyIG8gdmFsb3IgY29tbyAndG9wJyBmYXLDoSBlbGEgXCJhcG9udGFyIHBhcmEgY2ltYVwiICovXG4gIC8qQXF1aSBlbnRyYSBhIGNvciBkYSBcImFiYVwiIGRvIGJhbMOjbyAqL1xuICBib3JkZXItYm90dG9tOiAyMHB4IHNvbGlkICM1MjdGNzY7XG4gIHRvcDogLTIwcHg7XG4gIC8qbG9jYWxpemHDp8Ojby4gRXhwZXJpbWVudGUgYWx0ZXJhciBwYXJhICdib3R0b20nKi9cbiAgbGVmdDogMjAlO1xufVxuXG4ucHVycGxlOmFmdGVyIHtcbiAgLypUcmlhbmd1bG8qL1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1sZWZ0OiAyMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIC8qRmF6IHNldGEgXCJhcG9udGFyIHBhcmEgYmFpeG8uIERlZmluaXIgbyB2YWxvciBjb21vICd0b3AnIGZhcsOhIGVsYSBcImFwb250YXIgcGFyYSBjaW1hXCIgKi9cbiAgLypBcXVpIGVudHJhIGEgY29yIGRhIFwiYWJhXCIgZG8gYmFsw6NvICovXG4gIGJvcmRlci1ib3R0b206IDIwcHggc29saWQgcHVycGxlO1xuICB0b3A6IC0yMHB4O1xuICAvKmxvY2FsaXphw6fDo28uIEV4cGVyaW1lbnRlIGFsdGVyYXIgcGFyYSAnYm90dG9tJyovXG4gIGxlZnQ6IDIwJTtcbn1cblxuLmJsdWU6YWZ0ZXIge1xuICAvKlRyaWFuZ3VsbyovXG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLWxlZnQ6IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgLypGYXogc2V0YSBcImFwb250YXIgcGFyYSBiYWl4by4gRGVmaW5pciBvIHZhbG9yIGNvbW8gJ3RvcCcgZmFyw6EgZWxhIFwiYXBvbnRhciBwYXJhIGNpbWFcIiAqL1xuICAvKkFxdWkgZW50cmEgYSBjb3IgZGEgXCJhYmFcIiBkbyBiYWzDo28gKi9cbiAgYm9yZGVyLWJvdHRvbTogMjBweCBzb2xpZCBibHVlO1xuICB0b3A6IC0yMHB4O1xuICAvKmxvY2FsaXphw6fDo28uIEV4cGVyaW1lbnRlIGFsdGVyYXIgcGFyYSAnYm90dG9tJyovXG4gIGxlZnQ6IDIwJTtcbn1cblxuLmJsYWNrOmFmdGVyIHtcbiAgLypUcmlhbmd1bG8qL1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1sZWZ0OiAyMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIC8qRmF6IHNldGEgXCJhcG9udGFyIHBhcmEgYmFpeG8uIERlZmluaXIgbyB2YWxvciBjb21vICd0b3AnIGZhcsOhIGVsYSBcImFwb250YXIgcGFyYSBjaW1hXCIgKi9cbiAgLypBcXVpIGVudHJhIGEgY29yIGRhIFwiYWJhXCIgZG8gYmFsw6NvICovXG4gIGJvcmRlci1ib3R0b206IDIwcHggc29saWQgYmxhY2s7XG4gIHRvcDogLTIwcHg7XG4gIC8qbG9jYWxpemHDp8Ojby4gRXhwZXJpbWVudGUgYWx0ZXJhciBwYXJhICdib3R0b20nKi9cbiAgbGVmdDogMjAlO1xufVxuXG5pb24taWNvbiB7XG4gIGNvbG9yOiAjN2U1N2MyO1xufSIsIi5iYWxhb3tcclxuICAgIG1hcmdpbjogMCBhdXRvOyBcclxuICAgIGJhY2tncm91bmQ6ICM3ZTU3YzI7XHJcbiAgICBmb250LWZhbWlseTogJ29wZW4gc2Fucyc7XHJcbiAgICBmb250LXNpemU6IDAuODVlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjZlbTsgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbmlucHV0LCB0ZXh0YXJlYXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZTU3YzI7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMsICB0ZXh0YXJlYTpmb2N1c3tcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDA7XHJcbiAgICBib3JkZXI6IDAgbm9uZTtcclxuICAgIG91dGxpbmU6IDA7XHJcbn1cclxuXHJcbi5wcmltYXJ5e1xyXG4gICAgbWFyZ2luOiAwIGF1dG87IFxyXG4gICAgYmFja2dyb3VuZDogIzUyN0Y3NjtcclxuICAgIGZvbnQtZmFtaWx5OiAnb3BlbiBzYW5zJztcclxuICAgIGZvbnQtc2l6ZTogMC44NWVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNmVtOyAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLnB1cnBsZXtcclxuICAgIG1hcmdpbjogMCBhdXRvOyBcclxuICAgIGJhY2tncm91bmQ6IHB1cnBsZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnb3BlbiBzYW5zJztcclxuICAgIGZvbnQtc2l6ZTogMC44NWVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNmVtOyAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLmJsdWV7XHJcbiAgICBtYXJnaW46IDAgYXV0bzsgXHJcbiAgICBiYWNrZ3JvdW5kOiBibHVlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdvcGVuIHNhbnMnO1xyXG4gICAgZm9udC1zaXplOiAwLjg1ZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS42ZW07ICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uYmxhY2t7XHJcbiAgICBtYXJnaW46IDAgYXV0bzsgXHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiAnb3BlbiBzYW5zJztcclxuICAgIGZvbnQtc2l6ZTogMC44NWVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNmVtOyAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4ucHJpbWFyeTphZnRlcnsgLypUcmlhbmd1bG8qL1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAvKkZheiBzZXRhIFwiYXBvbnRhciBwYXJhIGJhaXhvLiBEZWZpbmlyIG8gdmFsb3IgY29tbyAndG9wJyBmYXLDoSBlbGEgXCJhcG9udGFyIHBhcmEgY2ltYVwiICovXHJcbiAgICAvKkFxdWkgZW50cmEgYSBjb3IgZGEgXCJhYmFcIiBkbyBiYWzDo28gKi9cclxuICAgIGJvcmRlci1ib3R0b206IDIwcHggc29saWQgIzUyN0Y3NjtcclxuICAgIHRvcDogLTIwcHg7IC8qbG9jYWxpemHDp8Ojby4gRXhwZXJpbWVudGUgYWx0ZXJhciBwYXJhICdib3R0b20nKi9cclxuICAgIGxlZnQ6IDIwJTtcclxufVxyXG4ucHVycGxlOmFmdGVyeyAvKlRyaWFuZ3VsbyovXHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItbGVmdDogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yaWdodDogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIC8qRmF6IHNldGEgXCJhcG9udGFyIHBhcmEgYmFpeG8uIERlZmluaXIgbyB2YWxvciBjb21vICd0b3AnIGZhcsOhIGVsYSBcImFwb250YXIgcGFyYSBjaW1hXCIgKi9cclxuICAgIC8qQXF1aSBlbnRyYSBhIGNvciBkYSBcImFiYVwiIGRvIGJhbMOjbyAqL1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMjBweCBzb2xpZCBwdXJwbGU7XHJcbiAgICB0b3A6IC0yMHB4OyAvKmxvY2FsaXphw6fDo28uIEV4cGVyaW1lbnRlIGFsdGVyYXIgcGFyYSAnYm90dG9tJyovXHJcbiAgICBsZWZ0OiAyMCU7XHJcbn1cclxuLmJsdWU6YWZ0ZXJ7IC8qVHJpYW5ndWxvKi9cclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlci1sZWZ0OiAyMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgLypGYXogc2V0YSBcImFwb250YXIgcGFyYSBiYWl4by4gRGVmaW5pciBvIHZhbG9yIGNvbW8gJ3RvcCcgZmFyw6EgZWxhIFwiYXBvbnRhciBwYXJhIGNpbWFcIiAqL1xyXG4gICAgLypBcXVpIGVudHJhIGEgY29yIGRhIFwiYWJhXCIgZG8gYmFsw6NvICovXHJcbiAgICBib3JkZXItYm90dG9tOiAyMHB4IHNvbGlkIGJsdWU7XHJcbiAgICB0b3A6IC0yMHB4OyAvKmxvY2FsaXphw6fDo28uIEV4cGVyaW1lbnRlIGFsdGVyYXIgcGFyYSAnYm90dG9tJyovXHJcbiAgICBsZWZ0OiAyMCU7XHJcbn1cclxuLmJsYWNrOmFmdGVyeyAvKlRyaWFuZ3VsbyovXHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItbGVmdDogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yaWdodDogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIC8qRmF6IHNldGEgXCJhcG9udGFyIHBhcmEgYmFpeG8uIERlZmluaXIgbyB2YWxvciBjb21vICd0b3AnIGZhcsOhIGVsYSBcImFwb250YXIgcGFyYSBjaW1hXCIgKi9cclxuICAgIC8qQXF1aSBlbnRyYSBhIGNvciBkYSBcImFiYVwiIGRvIGJhbMOjbyAqL1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMjBweCBzb2xpZCBibGFjaztcclxuICAgIHRvcDogLTIwcHg7IC8qbG9jYWxpemHDp8Ojby4gRXhwZXJpbWVudGUgYWx0ZXJhciBwYXJhICdib3R0b20nKi9cclxuICAgIGxlZnQ6IDIwJTtcclxufVxyXG5cclxuaW9uLWljb257XHJcbiAgICBjb2xvcjogIzdlNTdjMjtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/email/email-form/email-form.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/email/email-form/email-form.component.ts ***!
    \**********************************************************/

  /*! exports provided: EmailFormComponent */

  /***/
  function srcAppEmailEmailFormEmailFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailFormComponent", function () {
      return EmailFormComponent;
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


    var _configHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../configHelper */
    "./src/app/configHelper.ts");
    /* harmony import */


    var _services_cliente_service_cliente_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/cliente-service/cliente.service */
    "./src/app/services/cliente-service/cliente.service.ts");
    /* harmony import */


    var _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/spinner-service/spinner.service */
    "./src/app/services/spinner-service/spinner.service.ts");
    /* harmony import */


    var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/utils/utils.service */
    "./src/app/services/utils/utils.service.ts");

    var EmailFormComponent =
    /*#__PURE__*/
    function () {
      function EmailFormComponent(fb, clientSrvc, spinnerSrvc, utilSrvc) {
        _classCallCheck(this, EmailFormComponent);

        this.fb = fb;
        this.clientSrvc = clientSrvc;
        this.spinnerSrvc = spinnerSrvc;
        this.utilSrvc = utilSrvc;
        this.class = 'primary';
        this.emailData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.class = localStorage.getItem(_configHelper__WEBPACK_IMPORTED_MODULE_3__["configHelper"].storageKeys.color) != null ? localStorage.getItem(_configHelper__WEBPACK_IMPORTED_MODULE_3__["configHelper"].storageKeys.color) : 'origin'; // this.class = this.utilSrvc.colorConvert(this.class);

        this.color = this.class;
        console.log('COLOR', this.color);

        if (this.color == 'origin') {
          this.class = 'primary';
          this.color = '#527F76';
        }
      }

      _createClass(EmailFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.emailForm = this.fb.group({
            assunto: [''],
            text: [''],
            emails: this.fb.array([this.fb.group({
              email: null
            })])
          });
          this.loadEmails();
        }
      }, {
        key: "loadEmails",
        value: function loadEmails() {
          var _this = this;

          var emails = this.emailForm.get('emails');
          var user = JSON.parse(localStorage.getItem(_configHelper__WEBPACK_IMPORTED_MODULE_3__["configHelper"].storageKeys.user));
          this.clientSrvc.getClientsByIdUser(user._id).subscribe(function (client) {
            console.log('clientes', client);
            client.forEach(function (i) {
              emails.push(_this.fb.group({
                email: i.email
              }));
            });

            _this.emailForm.value.emails.forEach(function (i) {
              if (i.email == null) {
                var index = _this.emailForm.value.emails.indexOf(i);

                _this.emailForm.value.emails.splice(index, 1);
              }
            });

            _this.spinnerSrvc.hide();
          });
        }
      }, {
        key: "event",
        value: function event() {
          this.emailData.emit(this.emailForm.value);
          this.emailForm.reset();
        }
      }]);

      return EmailFormComponent;
    }();

    EmailFormComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_cliente_service_cliente_service__WEBPACK_IMPORTED_MODULE_4__["ClienteService"]
      }, {
        type: _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"]
      }, {
        type: src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], EmailFormComponent.prototype, "emailData", void 0);
    EmailFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-email-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./email-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/email/email-form/email-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./email-form.component.scss */
      "./src/app/email/email-form/email-form.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_cliente_service_cliente_service__WEBPACK_IMPORTED_MODULE_4__["ClienteService"], _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"], src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"]])], EmailFormComponent);
    /***/
  },

  /***/
  "./src/app/email/email-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/email/email-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: EmailPageRoutingModule */

  /***/
  function srcAppEmailEmailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailPageRoutingModule", function () {
      return EmailPageRoutingModule;
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


    var _email_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./email.page */
    "./src/app/email/email.page.ts");

    var routes = [{
      path: '',
      component: _email_page__WEBPACK_IMPORTED_MODULE_3__["EmailPage"]
    }];

    var EmailPageRoutingModule = function EmailPageRoutingModule() {
      _classCallCheck(this, EmailPageRoutingModule);
    };

    EmailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EmailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/email/email.module.ts":
  /*!***************************************!*\
    !*** ./src/app/email/email.module.ts ***!
    \***************************************/

  /*! exports provided: EmailPageModule */

  /***/
  function srcAppEmailEmailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailPageModule", function () {
      return EmailPageModule;
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


    var _email_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./email-routing.module */
    "./src/app/email/email-routing.module.ts");
    /* harmony import */


    var _email_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./email.page */
    "./src/app/email/email.page.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _email_form_email_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./email-form/email-form.component */
    "./src/app/email/email-form/email-form.component.ts");

    var EmailPageModule = function EmailPageModule() {
      _classCallCheck(this, EmailPageModule);
    };

    EmailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _email_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmailPageRoutingModule"]],
      declarations: [_email_page__WEBPACK_IMPORTED_MODULE_6__["EmailPage"], _email_form_email_form_component__WEBPACK_IMPORTED_MODULE_8__["EmailFormComponent"]]
    })], EmailPageModule);
    /***/
  },

  /***/
  "./src/app/email/email.page.scss":
  /*!***************************************!*\
    !*** ./src/app/email/email.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppEmailEmailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card-header {\n  text-align: center;\n  font-size: 30px;\n}\n\nion-icon {\n  color: blue;\n  font-size: 30px;\n}\n\nion-button {\n  width: 48.5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1haWwvQzpcXFVzZXJzXFxpZ29tZXNsYVxcRG9jdW1lbnRzXFxpb25pY1xcY21BcHBJb25pYzUvc3JjXFxhcHBcXGVtYWlsXFxlbWFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL2VtYWlsL2VtYWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2VtYWlsL2VtYWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLWhlYWRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuaW9uLWljb257XHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5pb24tYnV0dG9ue1xyXG4gICAgd2lkdGg6IDQ4LjUlO1xyXG59IiwiaW9uLWNhcmQtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbmlvbi1pY29uIHtcbiAgY29sb3I6IGJsdWU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiA0OC41JTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/email/email.page.ts":
  /*!*************************************!*\
    !*** ./src/app/email/email.page.ts ***!
    \*************************************/

  /*! exports provided: EmailPage */

  /***/
  function srcAppEmailEmailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailPage", function () {
      return EmailPage;
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


    var _services_usuario_service_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/usuario-service/usuario.service */
    "./src/app/services/usuario-service/usuario.service.ts");
    /* harmony import */


    var _services_email_service_email_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/email-service/email.service */
    "./src/app/services/email-service/email.service.ts");
    /* harmony import */


    var _configHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../configHelper */
    "./src/app/configHelper.ts");
    /* harmony import */


    var _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/spinner-service/spinner.service */
    "./src/app/services/spinner-service/spinner.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/utils/utils.service */
    "./src/app/services/utils/utils.service.ts");

    var EmailPage =
    /*#__PURE__*/
    function () {
      function EmailPage(userSrvc, emailSrvc, spinnerSrvc, alertCtrl, utilSrvc) {
        _classCallCheck(this, EmailPage);

        this.userSrvc = userSrvc;
        this.emailSrvc = emailSrvc;
        this.spinnerSrvc = spinnerSrvc;
        this.alertCtrl = alertCtrl;
        this.utilSrvc = utilSrvc;
        this.emailSended = false;
        this.emails = '';
        this.color = "primary";
        this.color = localStorage.getItem(_configHelper__WEBPACK_IMPORTED_MODULE_4__["configHelper"].storageKeys.color) != null ? localStorage.getItem(_configHelper__WEBPACK_IMPORTED_MODULE_4__["configHelper"].storageKeys.color) : 'primary';
        this.color = this.utilSrvc.colorConvert(this.color);
      }

      _createClass(EmailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "sendEmail",
        value: function sendEmail(event) {
          var _this2 = this;

          this.emailData = event;
          this.emailData.emails.forEach(function (i) {
            _this2.emails += "".concat(i.email, "; ");
          });
          console.log('Dados do email', event);
          this.emailSrvc.sendEmail(event).subscribe(function (v) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log('PRONTO', v);
                      this.spinnerSrvc.hide();
                      this.emailSended = true;

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }, function (err) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee2() {
              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertCtrl.create({
                        header: 'Erro',
                        // subHeader: 'Email enviado com sucesso',
                        message: 'Erro ao enviar o email, tente novamente.',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          });
        }
      }, {
        key: "newEmail",
        value: function newEmail() {
          this.emailSended = !this.emailSended;
        }
      }]);

      return EmailPage;
    }();

    EmailPage.ctorParameters = function () {
      return [{
        type: _services_usuario_service_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]
      }, {
        type: _services_email_service_email_service__WEBPACK_IMPORTED_MODULE_3__["EmailService"]
      }, {
        type: _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }, {
        type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_7__["UtilsService"]
      }];
    };

    EmailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-email',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./email.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/email/email.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./email.page.scss */
      "./src/app/email/email.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_usuario_service_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"], _services_email_service_email_service__WEBPACK_IMPORTED_MODULE_3__["EmailService"], _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"], _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_7__["UtilsService"]])], EmailPage);
    /***/
  },

  /***/
  "./src/app/services/email-service/email.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/email-service/email.service.ts ***!
    \*********************************************************/

  /*! exports provided: EmailService */

  /***/
  function srcAppServicesEmailServiceEmailServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailService", function () {
      return EmailService;
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

    var EmailService =
    /*#__PURE__*/
    function () {
      function EmailService(http) {
        _classCallCheck(this, EmailService);

        this.http = http;
        this.url = "".concat(src_app_configHelper__WEBPACK_IMPORTED_MODULE_3__["configHelper"].URL, "/send-email");
      }

      _createClass(EmailService, [{
        key: "sendEmail",
        value: function sendEmail(data) {
          return this.http.post(this.url, data);
        }
      }]);

      return EmailService;
    }();

    EmailService.ctorParameters = function () {
      return [{
        type: _http_service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
      }];
    };

    EmailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])], EmailService);
    /***/
  }
}]);
//# sourceMappingURL=email-email-module-es5.js.map