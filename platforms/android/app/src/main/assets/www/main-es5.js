function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\r\n    <ion-menu side=\"start\" contentId=\"main-content\" type=\"overlay\">\r\n      <ion-content>\r\n                  <section [ngClass]=\"class\">\r\n                    \r\n            <div id=\"picture-position\">\r\n              <div class=\"circle\">\r\n                  <img [src]=\"usuarioLogado?.foto\" width=\"200\" height=\"200\"/>\r\n              </div>\r\n          </div> \r\n  \r\n          <div style=\"font-size: 20px; padding-top: 20px; text-align: center; color: white;\">\r\n                 {{usuarioLogado?.nome}}<br/>\r\n                 {{usuarioLogado?.email}}\r\n              </div>\r\n\r\n        </section>\r\n\r\n        <section style=\"background-color: white !important;\" id=\"sec-02\">\r\n          <ion-menu-toggle style=\"background-color: white !important;\" auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\"> \r\n\r\n         <ion-item style=\"background-color: white !important;\" (click)=\"selectedIndex = i\" routerDirection=\"root\" [routerLink]=\"[p.url]\" \r\n            lines=\"none\" detail=\"false\" [class.selected]=\"selectedIndex == i\">\r\n              <ion-icon slot=\"end\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\r\n              <ion-label>{{ p.title }}</ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n          </section>\r\n      </ion-content>\r\n    </ion-menu>\r\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n    <ion-router-outlet></ion-router-outlet>\r\n\r\n</ion-app>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _services_auth_guard_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/auth-guard-service/auth-guard.service */
    "./src/app/services/auth-guard-service/auth-guard.service.ts");

    var routes = [{
      path: 'tabs',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | tabs-tabs-module */
        "tabs-tabs-module").then(__webpack_require__.bind(null,
        /*! ./tabs/tabs.module */
        "./src/app/tabs/tabs.module.ts")).then(function (m) {
          return m.TabsPageModule;
        });
      },
      canActivate: [_services_auth_guard_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    }, {
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | login-login-module */
        "login-login-module").then(__webpack_require__.bind(null,
        /*! ./login/login.module */
        "./src/app/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'detalhe-cliente',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | clientes-cliente-detalhe-cliente-detalhe-cliente-module */
        [__webpack_require__.e("default~clientes-cliente-detalhe-cliente-detalhe-cliente-module~clientes-clientes-module~email-email~0f1502de"), __webpack_require__.e("clientes-cliente-detalhe-cliente-detalhe-cliente-module")]).then(__webpack_require__.bind(null,
        /*! ./clientes/cliente/detalhe-cliente/detalhe-cliente.module */
        "./src/app/clientes/cliente/detalhe-cliente/detalhe-cliente.module.ts")).then(function (m) {
          return m.DetalheClientePageModule;
        });
      }
    }, {
      path: 'modal-cadastro-cliente',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | clientes-modal-cadastro-cliente-modal-cadastro-cliente-module */
        [__webpack_require__.e("default~clientes-clientes-module~clientes-modal-cadastro-cliente-modal-cadastro-cliente-module"), __webpack_require__.e("clientes-modal-cadastro-cliente-modal-cadastro-cliente-module")]).then(__webpack_require__.bind(null,
        /*! ./clientes/modal-cadastro-cliente/modal-cadastro-cliente.module */
        "./src/app/clientes/modal-cadastro-cliente/modal-cadastro-cliente.module.ts")).then(function (m) {
          return m.ModalCadastroClientePageModule;
        });
      }
    }, {
      path: 'configuracao',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | configuracao-configuracao-module */
        "configuracao-configuracao-module").then(__webpack_require__.bind(null,
        /*! ./configuracao/configuracao.module */
        "./src/app/configuracao/configuracao.module.ts")).then(function (m) {
          return m.ConfiguracaoPageModule;
        });
      }
    }, {
      path: 'projetos',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | projetos-projetos-module */
        [__webpack_require__.e("default~clientes-cliente-detalhe-cliente-detalhe-cliente-module~clientes-clientes-module~email-email~0f1502de"), __webpack_require__.e("projetos-projetos-module")]).then(__webpack_require__.bind(null,
        /*! ./projetos/projetos.module */
        "./src/app/projetos/projetos.module.ts")).then(function (m) {
          return m.ProjetosPageModule;
        });
      }
    }, {
      path: 'detalhe-projeto',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | projetos-projeto-detalhe-projeto-detalhe-projeto-module */
        [__webpack_require__.e("default~clientes-cliente-detalhe-cliente-detalhe-cliente-module~clientes-clientes-module~email-email~0f1502de"), __webpack_require__.e("default~projeto-detalhe-projeto-detalhe-projeto-module~projetos-projeto-detalhe-projeto-detalhe-proj~41c0e70e")]).then(__webpack_require__.bind(null,
        /*! ./projetos/projeto/detalhe-projeto/detalhe-projeto.module */
        "./src/app/projetos/projeto/detalhe-projeto/detalhe-projeto.module.ts")).then(function (m) {
          return m.DetalheProjetoPageModule;
        });
      }
    }, {
      path: 'geolocation-test',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | geolocation-test-geolocation-test-module */
        "geolocation-test-geolocation-test-module").then(__webpack_require__.bind(null,
        /*! ./geolocation-test/geolocation-test.module */
        "./src/app/geolocation-test/geolocation-test.module.ts")).then(function (m) {
          return m.GeolocationTestPageModule;
        });
      }
    }, {
      path: 'finge-print-aio',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | finge-print-aio-finge-print-aio-module */
        "finge-print-aio-finge-print-aio-module").then(__webpack_require__.bind(null,
        /*! ./finge-print-aio/finge-print-aio.module */
        "./src/app/finge-print-aio/finge-print-aio.module.ts")).then(function (m) {
          return m.FingePrintAioPageModule;
        });
      }
    }, {
      //path: '',
      path: 'how-to-cm-app',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | how-to-cm-app-how-to-cm-app-module */
        "how-to-cm-app-how-to-cm-app-module").then(__webpack_require__.bind(null,
        /*! ./how-to-cm-app/how-to-cm-app.module */
        "./src/app/how-to-cm-app/how-to-cm-app.module.ts")).then(function (m) {
          return m.HowToCmAppPageModule;
        });
      },
      canActivate: [_services_auth_guard_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".my-custom-menu {\n  --width: 500px;\n}\n\n.menu-color {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527F76));\n  background-image: linear-gradient(to bottom, white, #527F76);\n  width: 100%;\n  padding: 0px;\n  height: 50%;\n  border-bottom: 1px solide #fff;\n  border-radius: 30px;\n  margin-bottom: 20px;\n}\n\n.circle {\n  background-color: #aaa;\n  border-radius: 50%;\n  width: 200px;\n  height: 200px;\n  overflow: hidden;\n  position: relative;\n  margin-left: 48px;\n  padding-left: 0px !important;\n}\n\nion-button {\n  border: none !important;\n}\n\nbutton.button-native {\n  border: none !important;\n}\n\n.origin {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 45%;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#527F76));\n  background-image: linear-gradient(to bottom, white, #527F76);\n}\n\n.purple {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 45%;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(purple));\n  background-image: linear-gradient(to bottom, white, purple);\n}\n\n.blue {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 45%;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(blue));\n  background-image: linear-gradient(to bottom, white, blue);\n}\n\n.black {\n  margin-bottom: 30px;\n  text-align: center;\n  height: 45%;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(black));\n  background-image: linear-gradient(to bottom, white, black);\n}\n\nsection#sec-02 {\n  padding-top: 20px;\n  height: 65%;\n  border-top-right-radius: 30px;\n  border-top-left-radius: 30px;\n  background-color: white;\n}\n\n#picture-position {\n  padding-top: 10px;\n}\n\nion-content {\n  --ion-background-color: white;\n}\n\nion-item ion-ripple-effect.md .hydrated {\n  background-color: white !important;\n}\n\nbutton.button-native {\n  border-bottom: 1px solid;\n}\n\n.item-native::after {\n  background-color: white;\n}\n\nion-ripple-effect {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxpZ29tZXNsYVxcRG9jdW1lbnRzXFxpb25pY1xcY21BcHBJb25pYzUvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKOztBRENFO0VBRUksMkZBQUE7RUFBQSw0REFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0NOOztBRENFO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUNFSjs7QURDRTtFQUNFLHVCQUFBO0FDRUo7O0FEQUU7RUFDRSx1QkFBQTtBQ0dKOztBREFFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUVELFdBQUE7RUFFQywyRkFBQTtFQUFBLDREQUFBO0FDQ0o7O0FESUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUVBLDBGQUFBO0VBQUEsMkRBQUE7QUNGRjs7QURNQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBRUEsd0ZBQUE7RUFBQSx5REFBQTtBQ0xGOztBRFNBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLFdBQUE7RUFFQSx5RkFBQTtFQUFBLDBEQUFBO0FDUkY7O0FEYUE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsdUJBQUE7QUNWSjs7QURjQTtFQUNFLGlCQUFBO0FDWEY7O0FEYUE7RUFDRSw2QkFBQTtBQ1ZGOztBRGFBO0VBQ0Usa0NBQUE7QUNWRjs7QURhQTtFQUNFLHdCQUFBO0FDVkY7O0FEaUJBO0VBQ0UsdUJBQUE7QUNkRjs7QURrQkE7RUFDRSx1QkFBQTtBQ2ZGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWN1c3RvbS1tZW51IHtcclxuICAgIC0td2lkdGg6IDUwMHB4O1xyXG4gIH1cclxuICAubWVudS1jb2xvcntcclxuICAgIC8vYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvaW1ncy9tZW51LWltZy5qcGcnKTtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsICM1MjdGNzYpOyBcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZGUgI2ZmZjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgLmNpcmNsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tbGVmdDogNDhweDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBpb24tYnV0dG9ue1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGJ1dHRvbi5idXR0b24tbmF0aXZle1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAub3JpZ2lue1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgLy8gaGVpZ2h0OiAzNSU7XHJcbiAgIGhlaWdodDogNDUlO1xyXG4gICAvL2JhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCAjNTI3Rjc2KTsgXHJcblxyXG59XHJcblxyXG5cclxuLnB1cnBsZXtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDQ1JTtcclxuICAvL2JhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgcHVycGxlKTsgXHJcblxyXG59XHJcblxyXG4uYmx1ZXtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvLyBoZWlnaHQ6IDM1JTtcclxuICBoZWlnaHQ6IDQ1JTtcclxuICAvL2JhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSwgYmx1ZSk7IFxyXG5cclxufVxyXG5cclxuLmJsYWNre1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8vIGhlaWdodDogMzUlO1xyXG4gIGhlaWdodDogNDUlO1xyXG4gIC8vYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCBibGFjayk7IFxyXG5cclxufVxyXG5cclxuXHJcbnNlY3Rpb24jc2VjLTAye1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDY1JTtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIFxyXG59XHJcbiNwaWN0dXJlLXBvc2l0aW9ue1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24taXRlbSBpb24tcmlwcGxlLWVmZmVjdC5tZCAuaHlkcmF0ZWR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuYnV0dG9uLmJ1dHRvbi1uYXRpdmV7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG59XHJcblxyXG5pb24taWNvbntcclxuICBcclxufVxyXG5cclxuLml0ZW0tbmF0aXZlOjphZnRlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuXHJcbmlvbi1yaXBwbGUtZWZmZWN0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59IiwiLm15LWN1c3RvbS1tZW51IHtcbiAgLS13aWR0aDogNTAwcHg7XG59XG5cbi5tZW51LWNvbG9yIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsICM1MjdGNzYpO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMHB4O1xuICBoZWlnaHQ6IDUwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkZSAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY2lyY2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IDQ4cHg7XG4gIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1idXR0b24ge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuYnV0dG9uLmJ1dHRvbi1uYXRpdmUge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLm9yaWdpbiB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA0NSU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCAjNTI3Rjc2KTtcbn1cblxuLnB1cnBsZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA0NSU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCBwdXJwbGUpO1xufVxuXG4uYmx1ZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA0NSU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCBibHVlKTtcbn1cblxuLmJsYWNrIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDQ1JTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsIGJsYWNrKTtcbn1cblxuc2VjdGlvbiNzZWMtMDIge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgaGVpZ2h0OiA2NSU7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuI3BpY3R1cmUtcG9zaXRpb24ge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWl0ZW0gaW9uLXJpcHBsZS1lZmZlY3QubWQgLmh5ZHJhdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuYnV0dG9uLmJ1dHRvbi1uYXRpdmUge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG59XG5cbi5pdGVtLW5hdGl2ZTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXJpcHBsZS1lZmZlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _services_usuario_service_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/usuario-service/usuario.service */
    "./src/app/services/usuario-service/usuario.service.ts");
    /* harmony import */


    var _configHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./configHelper */
    "./src/app/configHelper.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/spinner-service/spinner.service */
    "./src/app/services/spinner-service/spinner.service.ts");
    /* harmony import */


    var _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/refresh-page.service */
    "./src/app/services/refresh-page.service.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(platform, splashScreen, statusBar, userSrvc, router, spinnerSrvc, refreshSrvc, menuCtrl) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.userSrvc = userSrvc;
        this.router = router;
        this.spinnerSrvc = spinnerSrvc;
        this.refreshSrvc = refreshSrvc;
        this.menuCtrl = menuCtrl;
        this.class = 'origin';
        this.selectedIndex = 0;
        this.appPages = [{
          title: 'Configurações',
          url: '/configuracao',
          icon: 'mail'
        }, {
          title: 'Localização',
          url: '/geolocation-test',
          icon: 'location'
        }, {
          title: 'Sair',
          url: '',
          icon: 'power'
        }];

        if (!localStorage.getItem(_configHelper__WEBPACK_IMPORTED_MODULE_6__["configHelper"].storageKeys.token)) {
          this.router.navigate(['']);
        }

        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.class = localStorage.getItem(_configHelper__WEBPACK_IMPORTED_MODULE_6__["configHelper"].storageKeys.color) != null ? localStorage.getItem(_configHelper__WEBPACK_IMPORTED_MODULE_6__["configHelper"].storageKeys.color) : 'origin';
          console.log('this.classs', this.class);
          this.platform.ready().then(function () {
            if (_this.platform.is('android')) {
              console.log('Teste android');

              _this.statusBar.backgroundColorByHexString("#33000000");
            } //this.statusBar.styleDefault();


            _this.splashScreen.hide();
          });
          this.refreshSrvc.newUser.subscribe(function () {
            _this.ngOnInit();
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.refreshSrvc.changeTheme.subscribe(function (v) {
            console.log('Evento emitido');

            _this2.initializeApp();
          });
          console.log('Teste componente *******************************');
          this.menuCtrl.enable(true);
          var path = window.location.pathname.split('folder/')[1];

          if (path !== undefined) {
            this.selectedIndex = this.appPages.findIndex(function (page) {
              return page.title.toLowerCase() === path.toLowerCase();
            });
          }

          this.atualizaUser();
        }
      }, {
        key: "sair",
        value: function sair() {
          localStorage.removeItem(_configHelper__WEBPACK_IMPORTED_MODULE_6__["configHelper"].storageKeys.token);
          this.router.navigate(['login']);
        }
      }, {
        key: "atualizaUser",
        value: function atualizaUser() {
          var _this3 = this;

          var user = JSON.parse(localStorage.getItem(_configHelper__WEBPACK_IMPORTED_MODULE_6__["configHelper"].storageKeys.user));
          this.userSrvc.getByIdUser(user._id).subscribe(function (data) {
            console.log('Dados do usuario logado', data);
            _this3.usuarioLogado = data;

            _this3.spinnerSrvc.hide();
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _services_usuario_service_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_8__["SpinnerService"]
      }, {
        type: _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_9__["RefreshPageService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _services_usuario_service_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_8__["SpinnerService"], _services_refresh_page_service__WEBPACK_IMPORTED_MODULE_9__["RefreshPageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _services_http_service_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/http-service/http.service */
    "./src/app/services/http-service/http.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-ui-loader */
    "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
    /* harmony import */


    var _ionic_native_android_fingerprint_auth_ngx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @ionic-native/android-fingerprint-auth/ngx */
    "./node_modules/@ionic-native/android-fingerprint-auth/ngx/index.js");
    /* harmony import */


    var _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @ionic-native/fingerprint-aio/ngx */
    "./node_modules/@ionic-native/fingerprint-aio/ngx/index.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js"); // geolocation and native-geocoder


    var configSpinner = {
      bgsColor: 'red',
      bgsPosition: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_12__["POSITION"].centerCenter,
      bgsSize: 40,
      bgsType: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_12__["SPINNER"].wanderingCubes,
      fgsType: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_12__["SPINNER"].threeStrings,
      pbDirection: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_12__["PB_DIRECTION"].leftToRight,
      pbThickness: 5,
      text: "Carregando dados...",
      fgsColor: '#527F76',
      logoUrl: "../assets/imgs/logo_app.png"
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_12__["NgxUiLoaderModule"].forRoot(configSpinner), _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]],
      providers: [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_23__["Geolocation"], _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_26__["FingerprintAIO"], _ionic_native_android_fingerprint_auth_ngx__WEBPACK_IMPORTED_MODULE_25__["AndroidFingerprintAuth"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_24__["NativeGeocoder"], _services_http_service_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_27__["Camera"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/configHelper.ts":
  /*!*********************************!*\
    !*** ./src/app/configHelper.ts ***!
    \*********************************/

  /*! exports provided: configHelper */

  /***/
  function srcAppConfigHelperTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "configHelper", function () {
      return configHelper;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var configHelper = function configHelper() {
      _classCallCheck(this, configHelper);
    };

    configHelper.URL = 'https://marcenarianovadesign.com.br/api';
    configHelper.URL2 = 'http://localhost:3000/api';
    configHelper.storageKeys = {
      token: 'novadesign.token',
      user: 'novadesign.user',
      selectClient: 'novadesign.select.client',
      color: 'cm.theme',
      concluded: 'tutorial.concluido'
    };
    /***/
  },

  /***/
  "./src/app/services/auth-guard-service/auth-guard.service.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/services/auth-guard-service/auth-guard.service.ts ***!
    \*******************************************************************/

  /*! exports provided: AuthGuardService */

  /***/
  function srcAppServicesAuthGuardServiceAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
      return AuthGuardService;
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


    var _configHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../configHelper */
    "./src/app/configHelper.ts");

    var AuthGuardService =
    /*#__PURE__*/
    function () {
      function AuthGuardService(router) {
        _classCallCheck(this, AuthGuardService);

        this.router = router;
      }

      _createClass(AuthGuardService, [{
        key: "canActivate",
        value: function canActivate(route) {
          console.log(route); // let authInfo = {
          //   authenticated: false
          // };

          if (!localStorage.getItem(_configHelper__WEBPACK_IMPORTED_MODULE_3__["configHelper"].storageKeys.token)) {
            this.router.navigate(['']);
            return false;
          }

          return true;
        }
      }]);

      return AuthGuardService;
    }();

    AuthGuardService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AuthGuardService);
    /***/
  },

  /***/
  "./src/app/services/http-service/http.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/http-service/http.service.ts ***!
    \*******************************************************/

  /*! exports provided: HttpService */

  /***/
  function srcAppServicesHttpServiceHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpService", function () {
      return HttpService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_app_configHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/configHelper */
    "./src/app/configHelper.ts");
    /* harmony import */


    var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-ui-loader */
    "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");
    /* harmony import */


    var _spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../spinner-service/spinner.service */
    "./src/app/services/spinner-service/spinner.service.ts");

    var HttpService_1;

    var HttpService = HttpService_1 =
    /*#__PURE__*/
    function () {
      function HttpService(httpClient, ngxService, spinnerSrvc) {
        _classCallCheck(this, HttpService);

        this.httpClient = httpClient;
        this.ngxService = ngxService;
        this.spinnerSrvc = spinnerSrvc;
      }

      _createClass(HttpService, [{
        key: "createHeader",
        value: function createHeader(header) {
          if (!header) {
            header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
          }

          header = header.append('Content-type', 'application/json');
          header = header.append('accept', 'application/json');
          var token = HttpService_1.getAcessToken;

          if (token) {
            console.log('entrou');
            header = header.append('user-token', token);
          }

          return header;
        }
      }, {
        key: "get",
        value: function get(url) {
          var header = this.createHeader();
          this.spinnerSrvc.show();
          return this.httpClient.get(url, {
            headers: header
          });
        }
      }, {
        key: "put",
        value: function put(url, data) {
          var header = this.createHeader();
          this.spinnerSrvc.show();
          return this.httpClient.put(url, data, {
            headers: header
          });
        }
      }, {
        key: "post",
        value: function post(url, data) {
          var header = this.createHeader();
          this.spinnerSrvc.show();
          return this.httpClient.post(url, data, {
            headers: header
          });
        }
      }, {
        key: "delete",
        value: function _delete(url, id) {
          var header = this.createHeader();
          this.spinnerSrvc.show();
          return this.httpClient.delete("".concat(url, "/").concat(id), {
            headers: header
          });
        }
      }], [{
        key: "getAcessToken",
        get: function get() {
          return localStorage.getItem(src_app_configHelper__WEBPACK_IMPORTED_MODULE_3__["configHelper"].storageKeys.token);
        }
      }]);

      return HttpService;
    }();

    HttpService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["NgxUiLoaderService"]
      }, {
        type: _spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"]
      }];
    };

    HttpService = HttpService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["NgxUiLoaderService"], _spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"]])], HttpService);
    /***/
  },

  /***/
  "./src/app/services/refresh-page.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/refresh-page.service.ts ***!
    \**************************************************/

  /*! exports provided: RefreshPageService */

  /***/
  function srcAppServicesRefreshPageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RefreshPageService", function () {
      return RefreshPageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RefreshPageService = function RefreshPageService() {
      _classCallCheck(this, RefreshPageService);

      this.refreshClient = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.refreshProject = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.newUser = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.changeTheme = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    };

    RefreshPageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], RefreshPageService);
    /***/
  },

  /***/
  "./src/app/services/spinner-service/spinner.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/services/spinner-service/spinner.service.ts ***!
    \*************************************************************/

  /*! exports provided: SpinnerService */

  /***/
  function srcAppServicesSpinnerServiceSpinnerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpinnerService", function () {
      return SpinnerService;
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

    var SpinnerService =
    /*#__PURE__*/
    function () {
      function SpinnerService(loading) {
        _classCallCheck(this, SpinnerService);

        this.loading = loading;
        this.isLoading = false;
      } // async show() {
      //    this.spinner = await this.loading.create({
      //     message: 'Carregando...',
      //   });
      //   await this.spinner.present();
      // }
      //  async hide() {
      //    await this.loading.dismiss()
      // }


      _createClass(SpinnerService, [{
        key: "show",
        value: function show() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.isLoading = true;
                    _context.next = 3;
                    return this.loading.create({
                      message: 'Carregando ...',
                      spinner: 'circles'
                    }).then(function (a) {
                      a.present().then(function () {
                        if (!_this4.isLoading) {
                          a.dismiss().then(function () {
                            return console.log('abort laoding');
                          });
                        }
                      });
                    });

                  case 3:
                    return _context.abrupt("return", _context.sent);

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "hide",
        value: function hide() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.isLoading = false;
                    _context2.next = 3;
                    return this.loading.dismiss().then(function () {
                      return console.log('loading dismissed');
                    });

                  case 3:
                    return _context2.abrupt("return", _context2.sent);

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return SpinnerService;
    }();

    SpinnerService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }];
    };

    SpinnerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])], SpinnerService);
    /***/
  },

  /***/
  "./src/app/services/usuario-service/usuario.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/services/usuario-service/usuario.service.ts ***!
    \*************************************************************/

  /*! exports provided: UsuarioService */

  /***/
  function srcAppServicesUsuarioServiceUsuarioServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuarioService", function () {
      return UsuarioService;
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


    var _configHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../configHelper */
    "./src/app/configHelper.ts");

    var UsuarioService =
    /*#__PURE__*/
    function () {
      function UsuarioService(http) {
        _classCallCheck(this, UsuarioService);

        this.http = http;
        this.url = _configHelper__WEBPACK_IMPORTED_MODULE_3__["configHelper"].URL;
      }

      _createClass(UsuarioService, [{
        key: "getByIdUser",
        value: function getByIdUser(id) {
          return this.http.get("".concat(this.url, "/usuario/").concat(id));
        }
      }, {
        key: "upadateUser",
        value: function upadateUser(id, body) {
          return this.http.put("".concat(this.url, "/usuario/").concat(id), body);
        }
      }]);

      return UsuarioService;
    }();

    UsuarioService.ctorParameters = function () {
      return [{
        type: _http_service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
      }];
    };

    UsuarioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])], UsuarioService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\igomesla\Documents\ionic\cmAppIonic5\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map