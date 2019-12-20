(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<flash-messages></flash-messages>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-src';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.effects.ts":
/*!********************************!*\
  !*** ./src/app/app.effects.ts ***!
  \********************************/
/*! exports provided: AppEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppEffects", function() { return AppEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppEffects = /** @class */ (function () {
    function AppEffects(actions$) {
        this.actions$ = actions$;
    }
    AppEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]])
    ], AppEffects);
    return AppEffects;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-svg-icon */ "./node_modules/angular-svg-icon/fesm5/angular-svg-icon.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/notfound/notfound.component */ "./src/app/components/notfound/notfound.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_content_content_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/content/content.component */ "./src/app/components/content/content.component.ts");
/* harmony import */ var _components_contentlist_contentlist_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/contentlist/contentlist.component */ "./src/app/components/contentlist/contentlist.component.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _app_effects__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./app.effects */ "./src/app/app.effects.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// Components










// Services


// Libraries








// Array de Enrutamiento
var appRoutes = [
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { path: '', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    // Rutas protegidas, solo tienen acceso ususarios autenticados
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]] },
    { path: 'content', component: _components_content_content_component__WEBPACK_IMPORTED_MODULE_15__["ContentComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]] },
    // Ruta Comodín: URLs desconocidas
    { path: '**', component: _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_13__["NotfoundComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_13__["NotfoundComponent"],
                _components_content_content_component__WEBPACK_IMPORTED_MODULE_15__["ContentComponent"],
                _components_contentlist_contentlist_component__WEBPACK_IMPORTED_MODULE_16__["ContentlistComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes),
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_19__["FlashMessagesModule"].forRoot(),
                ng_flash_messages__WEBPACK_IMPORTED_MODULE_22__["NgFlashMessagesModule"].forRoot(),
                angular_svg_icon__WEBPACK_IMPORTED_MODULE_6__["AngularSvgIconModule"],
                // JWT set the JWT module with the local storage token
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_20__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: function () {
                            return localStorage.getItem('id_token');
                        }
                    }
                }),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_23__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_24__["reducers"], {
                    metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_24__["metaReducers"],
                    runtimeChecks: {
                        strictStateImmutability: true,
                        strictActionImmutability: true
                    }
                }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_25__["EffectsModule"].forRoot([_app_effects__WEBPACK_IMPORTED_MODULE_26__["AppEffects"]])
            ],
            providers: [
                _services_validate_service__WEBPACK_IMPORTED_MODULE_17__["ValidateService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_18__["AuthService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/content/content.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/content/content.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fav-nd-share i\n{\n  padding: 5px;\n  font-size: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxZQUFZO0VBQ1osZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmF2LW5kLXNoYXJlIGlcbntcbiAgcGFkZGluZzogNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/content/content.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/content/content.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-10 pt-3 pb-0\">\n      <h1>Información del contenido</h1>\n    </div>\n  </div>\n</div>\n\n<div class=\"jumbotron pb-0 pt-2\" >\n    <div\n    class=\"card imagecard\"\n    style=\"border: 1px solid rgb(210, 210, 210); height: 250px;\n      background-image: url('/assets/img/content-example/1.jpg');\n      background-size: cover;\n      background-position: center\"\n    >\n    <div class=\"container-fluid h-100\">\n      <div class=\"row h-100\">\n        <div class=\"col-6 pt-2 py-3\">\n          <!-- This is the overlay blurr card info -->\n            <div class=\"card border-secondary mb-3\" style=\"max-width: 30rem;\">\n          <div class=\"card-header\">\n            <div class=\"fav-nd-share float-right\">\n              <i class=\"fab fa-gratipay fa-lg\"></i>\n              <i class=\"fas fa-share-alt fa-lg\"></i>\n            </div>\n\n          </div>\n          <div class=\"card-body\" style=\"max-height: 10rem; overflow-y: scroll\">\n            <h4 class=\"card-title\">Título contenido</h4>\n            <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n          </div>\n        </div>\n        <!-- Aquí acaba la tarjea de info -->\n\n        </div>\n        <div class=\"col-6 align-bottom h-100\">\n            <!-- This is the icon of the author -->\n            <img class=\"float-right img-responsive rounded-circle\"\n            style=\"border: 7px solid #ffffff3b; height: 100px; width: 100px; margin: 10px\"\n            src=\"assets/img/profile/default_profile_200.png\" alt=\"Card image\">\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- BEGIN PESTAÑAS -->\n  <div class=\"position-relative overflow-hidden p-3 p-md-3 m-md-5 my-md-0 text-center bg-light\">\n    <ul class=\"nav nav-tabs\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#info\">Información</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#multimed\">Multimedia</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#valorates\">Valoraciones</a>\n      </li>\n    </ul>\n    <div id=\"myTabContent\" class=\"tab-content\">\n      <div class=\"tab-pane fade active show \" id=\"info\">\n        <br>\n        <h2>Información</h2>\n        <p class=\"text-justify\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n      </div>\n      <div class=\"tab-pane fade\" id=\"multimed\">\n        <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit.</p>\n      </div>\n      <div class=\"tab-pane fade\" id=\"valorates\">\n        <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork.</p>\n      </div>\n    </div>\n  </div>\n<!-- END PESTAÑAS -->\n\n<br>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/content/content.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/content/content.component.ts ***!
  \*********************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contents',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/components/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.css */ "./src/app/components/content/content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/components/contentlist/contentlist.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/contentlist/contentlist.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGVudGxpc3QvY29udGVudGxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/contentlist/contentlist.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/contentlist/contentlist.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"position-relative overflow-hidden p-3 p-md-3 m-md-3 text-center bg-light\">\n  <h2>Búsqueda</h2>\n  <br>\n\n<!-- BEGIN CONTENIDOS SEGÚN BÚSQUEDA -->\n<div class=\"container\">\n\n  <!-- ITEM 1 -->\n  <div class=\"row\">\n    <div class=\"offset-md-1 col-md-6\" style=\"margin-right: -30px\">\n      <div class=\"card text-white bg-dark overflow-auto\" style=\"height: 250px;\">\n        <div class=\"card-header\">Título del contenido <span class=\"badge badge-light\"><small>3 days ago</small></span></div>\n        <div class=\"card-body text-justify\">\n          <h3 class=\"card-title\">Título documento</h3>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 col-md-4\">\n      <div class=\"card\" style=\"border: 1px solid rgb(210, 210, 210); height: 250px;\n      background-image: url('/assets/img/content-example/1.jpg');\n      background-size: cover;\n      background-position: center\">\n      </div>\n    </div>\n  </div>\n  <!-- END ITEM 1 -->\n  <br>\n  <!-- ITEM 2 -->\n  <div class=\"row\">\n    <div class=\"offset-md-1 col-md-6\" style=\"margin-right: -30px\">\n      <div class=\"card text-white bg-dark overflow-auto\" style=\"height: 250px;\">\n        <div class=\"card-header\">Título del contenido <span class=\"badge badge-light\"><small>3 days ago</small></span></div>\n        <div class=\"card-body text-justify\">\n          <h3 class=\"card-title\">Título documento</h3>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n          <br><br>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 col-md-4\">\n      <div class=\"card\" style=\"border: 1px solid rgb(210, 210, 210); height: 250px;\n      background-image: url('/assets/img/content-example/2.jpg');\n      background-size: cover;\n      background-position: center\">\n      </div>\n    </div>\n  </div>\n  <!-- END ITEM 2 -->\n\n</div>\n<br>\n<div class=\"container\">\n  <div class=\"row text-center\">\n    <div>\n      <ul class=\"pagination\">\n        <li class=\"page-item disabled\">\n          <a class=\"page-link\" href=\"#\">&laquo;</a>\n        </li>\n        <li class=\"page-item active\">\n          <a class=\"page-link\" href=\"dashboard?p=1\">1</a>\n        </li>\n        <li class=\"page-item\">\n          <a class=\"page-link\" href=\"dashboard?p=2\">2</a>\n        </li>\n        <li class=\"page-item\">\n          <a class=\"page-link\" href=\"dashboard?p=3\">3</a>\n        </li>\n        <li class=\"page-item\">\n          <a class=\"page-link\" href=\"dashboard?p=4\">4</a>\n        </li>\n        <li class=\"page-item\">\n          <a class=\"page-link\" href=\"dashboard?p=5\">5</a>\n        </li>\n        <li class=\"page-item\">\n          <a class=\"page-link\" href=\"dashboard?p=6\">&raquo;</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n<!-- END CONTENIDOS SEGÚN BúSQUEDA -->\n</div>\n"

/***/ }),

/***/ "./src/app/components/contentlist/contentlist.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/contentlist/contentlist.component.ts ***!
  \*****************************************************************/
/*! exports provided: ContentlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentlistComponent", function() { return ContentlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentlistComponent = /** @class */ (function () {
    function ContentlistComponent() {
    }
    ContentlistComponent.prototype.ngOnInit = function () {
    };
    ContentlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contentlist',
            template: __webpack_require__(/*! ./contentlist.component.html */ "./src/app/components/contentlist/contentlist.component.html"),
            styles: [__webpack_require__(/*! ./contentlist.component.css */ "./src/app/components/contentlist/contentlist.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentlistComponent);
    return ContentlistComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "svg {\n  width: 15px;\n  height: 15px;\n  margin-right: 10px;\n}\n\n.nav-item {\n  height: 2.5em;\n}\n\n.offset-md-1.col-md-6::after {\n    display: block;\n    content: \".\";\n    background: -webkit-gradient(linear, left bottom, left top, from(rgba(52,58,64,1)), color-stop(0%, rgba(52,58,64,1)), color-stop(40%, rgba(255,255,255,0)));\n    background: linear-gradient(0deg, rgba(52,58,64,1) 0%, rgba(52,58,64,1) 0%, rgba(255,255,255,0) 40%);\n    height: 50px;\n    color: transparent;\n    width: 96%;\n    margin-top: -50px;\n    z-index: 3;\n    position: relative;\n}\n\n.bg svg-icon\n{\n  fill: #fff!important;\n}\n\na .bg-primary:hover\n{\n  opacity: .6;\n  -webkit-transition: ease-out 0.45s;\n  transition: ease-out 0.45s;\n}\n\na .bg-primary\n{\n  -webkit-transition: ease-in 0.4s;\n  transition: ease-in 0.4s;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osMkpBQW9HO0lBQXBHLG9HQUFvRztJQUNwRyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTs7RUFFRSxvQkFBb0I7QUFDdEI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLGtDQUEwQjtFQUExQiwwQkFBMEI7QUFDNUI7O0FBRUE7O0VBRUUsZ0NBQXdCO0VBQXhCLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3ZnIHtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ubmF2LWl0ZW0ge1xuICBoZWlnaHQ6IDIuNWVtO1xufVxuXG4ub2Zmc2V0LW1kLTEuY29sLW1kLTY6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb250ZW50OiBcIi5cIjtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSg1Miw1OCw2NCwxKSAwJSwgcmdiYSg1Miw1OCw2NCwxKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwwKSA0MCUpO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgd2lkdGg6IDk2JTtcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgICB6LWluZGV4OiAzO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJnIHN2Zy1pY29uXG57XG4gIGZpbGw6ICNmZmYhaW1wb3J0YW50O1xufVxuXG5hIC5iZy1wcmltYXJ5OmhvdmVyXG57XG4gIG9wYWNpdHk6IC42O1xuICB0cmFuc2l0aW9uOiBlYXNlLW91dCAwLjQ1cztcbn1cblxuYSAuYmctcHJpbWFyeVxue1xuICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuNHM7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <nav class=\"col-md-2 d-none d-md-block bg-light sidebar\">\n      <div class=\"sidebar-sticky text-center\">\n        <br>\n        <a href=\"/dashboard?word\" value=\"apuntes\" >\n          <div class=\"bg  light-green lighten-1 bg-primary w-45 p-4 m-1 text-center\" style=\"display: inline-block;\">\n              <svg-icon src=\"assets/svg/document.svg\" [svgStyle]=\"{ 'width.px':25, 'height.px':25 }\"></svg-icon>\n          </div>\n        </a>\n\n      <a href=\"/dashboard?word\" value=\"examenes\" >\n        <div class=\"bg orange lighten-2 bg-primary w-45 p-4 m-1 text-center\" style=\"display: inline-block;\">\n            <svg-icon src=\"assets/svg/examen.svg\" [svgStyle]=\"{ 'width.px':25, 'height.px':25 }\"></svg-icon>\n        </div>\n      </a>\n\n      <a href=\"/dashboard?word\" value=\"informes\" >\n        <div class=\"bg red red lighten-1 bg-primary w-45 p-4 m-1 text-center\" style=\"display: inline-block;\">\n            <svg-icon src=\"assets/svg/file.svg\" [svgStyle]=\"{ 'width.px':25, 'height.px':25 }\"></svg-icon>\n        </div>\n      </a>\n\n    <a href=\"/dashboard?word\" value=\"ejercicios\" >\n      <div class=\"bg blue lighten-1 bg-primary w-45 p-4 m-1 text-center\" style=\"display: inline-block;\">\n          <svg-icon src=\"assets/svg/write.svg\" [svgStyle]=\"{ 'width.px':25, 'height.px':25 }\"></svg-icon>\n      </div>\n    </a>\n\n    <a href=\"/dashboard?word\" value=\"prácticas\" >\n      <div class=\"bg teal lighten-2 bg-primary w-45 p-4 m-1 text-center\" style=\"display: inline-block\">\n          <svg-icon src=\"assets/svg/practice.svg\" [svgStyle]=\"{ 'width.px':25, 'height.px':25 }\"></svg-icon>\n      </div>\n    </a>\n\n  <a href=\"/dashboard?word\" value=\"tutoriales\" >\n    <div class=\"bg deep-purple lighten-1 bg-primary w-45 p-4 m-1 text-center\" style=\"display: inline-block;\">\n        <svg-icon src=\"assets/svg/e-learning.svg\" [svgStyle]=\"{ 'width.px':25, 'height.px':25 }\"></svg-icon>\n    </div>\n  </a>\n\n      </div>\n    </nav>\n\n\n    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">\n      <ng-flash-message></ng-flash-message>\n      <br><h1>Tablón</h1>\n      <div class=\"position-relative overflow-hidden p-3 p-md-3 m-md-3 text-center bg-primary\">\n\n        <!-- BEGIN SEARCHER -->\n        <form class=\"mx-2 my-auto d-inline w-100 my-2 my-lg-0\">\n          <div class=\"input-group\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Buscar...\">\n               <span class=\"input-group-append\">\n                 <button class=\"btn btn-secondary my-0 px-4 p-2\" type=\"submit\">Buscar</button>\n               </span>\n          </div>\n          <span class=\"btn badge badge-pill badge-dark m-1 px-3 float-left\" style=\"padding: 5px 10px; text-transform: capitalize\">\n            <i class=\"fas fa-filter\"></i> Filtrar\n          </span>\n        </form>\n        <!-- END SEARCHER -->\n\n      </div>\n\n      <app-contentlist></app-contentlist>\n\n      <!-- BEGIN CONTENIDOS RELEVANTES -->\n      <div class=\"position-relative overflow-hidden p-3 p-md-3 m-md-3 text-center bg-light\">\n        <h2>Contenidos relevantes</h2>\n        <br>\n\n        <!-- Volcado de contenidos relevantes-->\n        <div class=\"container\">\n          <!-- ITEM 1 -->\n          <div class=\"row\">\n            <div class=\"offset-md-1 col-md-6\" style=\"margin-right: -30px\">\n              <div class=\"card text-white bg-dark overflow-auto\" style=\"height: 250px;\">\n                <div class=\"card-header\">Título del contenido <span class=\"badge badge-light\"><small>3 days ago</small></span></div>\n                <div class=\"card-body text-justify\">\n                  <h3 class=\"card-title\">Título documento</h3>\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                </div>\n              </div>\n            </div>\n            <div class=\"col-12 col-md-4\">\n              <div class=\"card\" style=\"border: 1px solid rgb(210, 210, 210); height: 250px;\n              background-image: url('/assets/img/content-example/1.jpg');\n              background-size: cover;\n              background-position: center\">\n              </div>\n            </div>\n          </div>\n          <!-- END ITEM 1 -->\n          <br>\n          <!-- ITEM 2 -->\n          <div class=\"row\">\n            <div class=\"offset-md-1 col-md-6\" style=\"margin-right: -30px\">\n              <div class=\"card text-white bg-dark overflow-auto\" style=\"height: 250px;\">\n                <div class=\"card-header\">Título del contenido <span class=\"badge badge-light\"><small>3 days ago</small></span></div>\n                <div class=\"card-body text-justify\">\n                  <h3 class=\"card-title\">Título documento</h3>\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                  <br><br>\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n                </div>\n              </div>\n            </div>\n            <div class=\"col-12 col-md-4\">\n              <div class=\"card\" style=\"border: 1px solid rgb(210, 210, 210); height: 250px;\n              background-image: url('/assets/img/content-example/2.jpg');\n              background-size: cover;\n              background-position: center\">\n              </div>\n            </div>\n          </div>\n          <!-- END ITEM 2 -->\n          <!-- end volcado de contenido -->\n        </div>\n        <!-- END CONTENIDOS RELEVANTES -->\n\n      </div>\n\n    </main>\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*********footer*******************/\n\n.kilimanjaro_area {\n    position: relative;\n    z-index: 1;\n\t}\n\n.foo_top_header_one {\n      background-color: #15171f;\n      color: #fff;\n  }\n\n.section_padding_100_70 {\n    padding-top: 100px;\n    padding-bottom: 70px;\n}\n\n.foo_top_header_one {\n    color: #fff;\n}\n\n.kilimanjaro_part {\n    margin-bottom: 30px;\n}\n\n.foo_top_header_one .kilimanjaro_part > h5 {\n    color: #fff;\n}\n\n.kilimanjaro_part h4, .kilimanjaro_part h5 {\n    margin-bottom: 30px;\n}\n\n.kilimanjaro_single_contact_info > p, .kilimanjaro_single_contact_info > h5, .kilimanjaro_blog_area > a, .foo_top_header_one .kilimanjaro_part > p {\n    color: rgba(255,255,255,.5);\n}\n\np, ul li, ol li {\n    font-weight: 300;\n}\n\nul {\n    margin: 0;\n    padding: 0;\n}\n\n.kilimanjaro_bottom_header_one {\n    background-color: #222635;\n}\n\n.section_padding_50 {\n    padding: 25px 0;\n}\n\n.kilimanjaro_bottom_header_one p {\n    color: #fff;\n    margin: 0;\n}\n\np, ul li, ol li {\n    font-weight: 300;\n}\n\n.kilimanjaro_bottom_header_one a {\n    color: inherit;\n    font-size: 14px;\n}\n\na, h1, h2, h3, h4, h5, h6 {\n    font-weight: 400;\n}\n\n.m-top-15 {\n    margin-top: 15px;\n}\n\nul {\n    margin: 0;\n    padding: 0;\n}\n\n.kilimanjaro_widget > li {\n    display: inline-block;\n}\n\np, ul li, ol li {\n    font-weight: 300;\n}\n\nol li, ul li {\n    list-style: outside none none;\n}\n\n.kilimanjaro_widget a {\n  border: 1px solid #ffffff14;\n  border-radius: 6px;\n  background: #ffffff05;\n  color: #888;\n  display: inline-block;\n  margin: 2px;\n  font-size: 13px;\n  margin-bottom: 3px;\n  padding: 7px 12px;\n}\n\nul {\n    margin: 0;\n    padding: 0;\n}\n\n.kilimanjaro_links a {\n    border-bottom: 1px solid #ffffff1f;\n    color: rgba(255,255,255,.5);\n    display: block;\n    font-size: 13px;\n    margin-bottom: 5px;\n    padding-bottom: 10px;\n}\n\n.kilimanjaro_links a {\n    color: rgba(255,255,255,.5);\n    font-size: 13px;\n}\n\ntop-15 {\n    margin-top: 15px;\n}\n\n.foo_top_header_one .kilimanjaro_part > h5 {\n    color: #fff;\n}\n\n.kilimanjaro_part h4, .kilimanjaro_part h5 {\n    margin-bottom: 30px;\n}\n\n.kilimanjaro_social_links > li {\n    display: inline-block;\n}\n\np, ul li, ol li {\n    font-weight: 300;\n}\n\n.kilimanjaro_social_links a {\n    border: 1px solid #ffffff14;\n    border-radius: 6px;\n    background: #ffffff05;\n    color: #888;\n    display: inline-block;\n    margin: 2px;\n    font-size: 13px;\n    margin-bottom: 3px;\n    padding: 7px 12px;\n}\n\n.kilimanjaro_blog_area .kilimanjaro_date {\n    color: #27ae60;\n    font-size: 13px;\n    margin-bottom: 5px;\n}\n\n.kilimanjaro_blog_area > p {\n    color: rgba(255,255,255,.5);\n    line-height: 1.3;\n    margin-bottom: 0;\n}\n\n.kilimanjaro_works > a {\n    display: inline-block;\n    float: left;\n    position: relative;\n    width: 33.33333333%;\n    z-index: 1;\n}\n\n.kilimanjaro_thumb {\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 75px;\n}\n\n.kilimanjaro_links a i {\n    padding-right: 10px;\n}\n\n/* :: 18.0 Footer Area CSS */\n\n.footer_area {\n        position: relative;\n        z-index: 1;\n    }\n\n.footer_bottom p > i,\n    .footer_bottom p > a:hover {\n        color: #27ae60;\n    }\n\n.social_links_area {\n        border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n        padding: 50px 0 30px 0;\n        text-align: center;\n        position: relative;\n        z-index: 1;\n    }\n\n.social_links_area > a:hover {\n        color: #27ae60;\n    }\n\n.inline-style .social_links_area > a:hover {\n        background-color: transparent;\n        color: #27ae60;\n        border: 0px solid transparent;\n    }\n\n.single_feature:hover .feature_text h4 {\n        color: #27ae60;\n    }\n\n.kilimanjaro_blog_area {\n    border-bottom: 1px solid #333;\n    margin-bottom: 15px;\n    padding: 0 0 15px 90px;\n    position: relative;\n    z-index: 1;\n}\n\n.kilimanjaro_links a {\n    border-bottom: 1px solid #ffffff21;\n    color: rgba(255,255,255,.5);\n    display: block;\n    font-size: 13px;\n    margin-bottom: 5px;\n    padding-bottom: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUNBQW1DOztBQUVuQztJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0NBQ2I7O0FBQ0M7TUFDSSx5QkFBeUI7TUFDekIsV0FBVztFQUNmOztBQUNGO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFDQTtJQUNJLFdBQVc7QUFDZjs7QUFBQztJQUNHLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLFdBQVc7QUFDZjs7QUFDQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUNBO0lBQ0ksV0FBVztJQUNYLFNBQVM7QUFDYjs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUNBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFDQTtJQUNJLGtDQUFrQztJQUNsQywyQkFBMkI7SUFDM0IsY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOztBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUNBO0lBQ0ksT0FBTztJQUNQLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sV0FBVztBQUNmOztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUNFLDRCQUE0Qjs7QUFFMUI7UUFDSSxrQkFBa0I7UUFDbEIsVUFBVTtJQUNkOztBQUNIOztRQUVPLGNBQWM7SUFDbEI7O0FBRUE7UUFDSSxpREFBaUQ7UUFDakQsc0JBQXNCO1FBQ3RCLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsVUFBVTtJQUNkOztBQUNIO1FBQ08sY0FBYztJQUNsQjs7QUFFQTtRQUNJLDZCQUE2QjtRQUM3QixjQUFjO1FBQ2QsNkJBQTZCO0lBQ2pDOztBQUNIO1FBQ08sY0FBYztJQUNsQjs7QUFDSjtJQUNJLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxrQ0FBa0M7SUFDbEMsMkJBQTJCO0lBQzNCLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKmZvb3RlcioqKioqKioqKioqKioqKioqKiovXG5cbi5raWxpbWFuamFyb19hcmVhIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcblx0fVxuICAuZm9vX3RvcF9oZWFkZXJfb25lIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTE3MWY7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgfVxuLnNlY3Rpb25fcGFkZGluZ18xMDBfNzAge1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNzBweDtcbn1cbi5mb29fdG9wX2hlYWRlcl9vbmUge1xuICAgIGNvbG9yOiAjZmZmO1xufS5raWxpbWFuamFyb19wYXJ0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmZvb190b3BfaGVhZGVyX29uZSAua2lsaW1hbmphcm9fcGFydCA+IGg1IHtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5raWxpbWFuamFyb19wYXJ0IGg0LCAua2lsaW1hbmphcm9fcGFydCBoNSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5raWxpbWFuamFyb19zaW5nbGVfY29udGFjdF9pbmZvID4gcCwgLmtpbGltYW5qYXJvX3NpbmdsZV9jb250YWN0X2luZm8gPiBoNSwgLmtpbGltYW5qYXJvX2Jsb2dfYXJlYSA+IGEsIC5mb29fdG9wX2hlYWRlcl9vbmUgLmtpbGltYW5qYXJvX3BhcnQgPiBwIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNSk7XG59XG5wLCB1bCBsaSwgb2wgbGkge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG51bCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG4ua2lsaW1hbmphcm9fYm90dG9tX2hlYWRlcl9vbmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI2MzU7XG59XG4uc2VjdGlvbl9wYWRkaW5nXzUwIHtcbiAgICBwYWRkaW5nOiAyNXB4IDA7XG59XG4ua2lsaW1hbmphcm9fYm90dG9tX2hlYWRlcl9vbmUgcCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luOiAwO1xufVxucCwgdWwgbGksIG9sIGxpIHtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuLmtpbGltYW5qYXJvX2JvdHRvbV9oZWFkZXJfb25lIGEge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbmEsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4ubS10b3AtMTUge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG51bCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5raWxpbWFuamFyb193aWRnZXQgPiBsaSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxucCwgdWwgbGksIG9sIGxpIHtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxub2wgbGksIHVsIGxpIHtcbiAgICBsaXN0LXN0eWxlOiBvdXRzaWRlIG5vbmUgbm9uZTtcbn1cbi5raWxpbWFuamFyb193aWRnZXQgYSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmYxNDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmMDU7XG4gIGNvbG9yOiAjODg4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMnB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbiAgcGFkZGluZzogN3B4IDEycHg7XG59XG51bCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG4ua2lsaW1hbmphcm9fbGlua3MgYSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmZmZmYxZjtcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNSk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5raWxpbWFuamFyb19saW5rcyBhIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNSk7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxudG9wLTE1IHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLmZvb190b3BfaGVhZGVyX29uZSAua2lsaW1hbmphcm9fcGFydCA+IGg1IHtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5raWxpbWFuamFyb19wYXJ0IGg0LCAua2lsaW1hbmphcm9fcGFydCBoNSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5raWxpbWFuamFyb19zb2NpYWxfbGlua3MgPiBsaSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxucCwgdWwgbGksIG9sIGxpIHtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuLmtpbGltYW5qYXJvX3NvY2lhbF9saW5rcyBhIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmMTQ7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYwNTtcbiAgICBjb2xvcjogIzg4ODtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAycHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICBwYWRkaW5nOiA3cHggMTJweDtcbn1cbi5raWxpbWFuamFyb19ibG9nX2FyZWEgLmtpbGltYW5qYXJvX2RhdGUge1xuICAgIGNvbG9yOiAjMjdhZTYwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ua2lsaW1hbmphcm9fYmxvZ19hcmVhID4gcCB7XG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5raWxpbWFuamFyb193b3JrcyA+IGEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDMzLjMzMzMzMzMzJTtcbiAgICB6LWluZGV4OiAxO1xufVxuLmtpbGltYW5qYXJvX3RodW1iIHtcbiAgICBsZWZ0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDc1cHg7XG59XG4ua2lsaW1hbmphcm9fbGlua3MgYSBpIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuICAvKiA6OiAxOC4wIEZvb3RlciBBcmVhIENTUyAqL1xuXG4gICAgLmZvb3Rlcl9hcmVhIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgIH1cbiAuZm9vdGVyX2JvdHRvbSBwID4gaSxcbiAgICAuZm9vdGVyX2JvdHRvbSBwID4gYTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjMjdhZTYwO1xuICAgIH1cblxuICAgIC5zb2NpYWxfbGlua3NfYXJlYSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgICAgIHBhZGRpbmc6IDUwcHggMCAzMHB4IDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgIH1cbiAuc29jaWFsX2xpbmtzX2FyZWEgPiBhOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICMyN2FlNjA7XG4gICAgfVxuXG4gICAgLmlubGluZS1zdHlsZSAuc29jaWFsX2xpbmtzX2FyZWEgPiBhOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGNvbG9yOiAjMjdhZTYwO1xuICAgICAgICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICB9XG4gLnNpbmdsZV9mZWF0dXJlOmhvdmVyIC5mZWF0dXJlX3RleHQgaDQge1xuICAgICAgICBjb2xvcjogIzI3YWU2MDtcbiAgICB9XG4ua2lsaW1hbmphcm9fYmxvZ19hcmVhIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMztcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIHBhZGRpbmc6IDAgMCAxNXB4IDkwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG59XG4ua2lsaW1hbmphcm9fbGlua3MgYSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmZmZmYyMTtcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNSk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN FOOTER COMPONENT -->\n<footer class=\"kilimanjaro_area\">\n        <!-- Top Footer Area Start -->\n        <div class=\"foo_top_header_one section_padding_100_70\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-12 col-md-8 col-lg-4\">\n                        <div class=\"kilimanjaro_part\">\n                            <h5>Sobre nosotros</h5>\n                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>\n                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>\n                        </div>\n                        <div class=\"kilimanjaro_part m-top-15\">\n                            <h5>Redes Sociales</h5>\n                            <ul class=\"kilimanjaro_social_links\">\n                                <li><a href=\"#\"><i class=\"fab fa-facebook\"></i> Facebook</a></li>\n                                <li><a href=\"#\"><i class=\"fab fa-twitter\"></i> Twitter</a></li>\n                                <li><a href=\"#\"><i class=\"fab fa-pinterest\"></i> Pinterest</a></li>\n                                <li><a href=\"#\"><i class=\"fab fa-youtube\"></i> YouTube</a></li>\n                                <li><a href=\"#\"><i class=\"fab fa-linkedin\"></i> Linkedin</a></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"col-12 col-md-8 col-lg-4\">\n                        <div class=\"kilimanjaro_part\">\n                            <h5>Tags Relacionados</h5>\n                            <ul class=\" kilimanjaro_widget\">\n                                <li><a href=\"#\">tag</a></li>\n                                <li><a href=\"#\">tag</a></li>\n                                <li><a href=\"#\">tag</a></li>\n                                <li><a href=\"#\">tag</a></li>\n                                <li><a href=\"#\">tag</a></li>\n                                <li><a href=\"#\">tag</a></li>\n                                <li><a href=\"#\">tag</a></li>\n                                <li><a href=\"#\">tag</a></li>\n                            </ul>\n                        </div>\n\n                        <div class=\"kilimanjaro_part m-top-15\">\n                            <h5>Important Links</h5>\n                            <ul class=\"kilimanjaro_links\">\n                                <li><a href=\"#\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>Términos y condiciones</a></li>\n                                <li><a href=\"#\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>Licencia</a></li>\n                                <li><a href=\"#\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>Ayuda y soporte</a></li>\n                                <li><a href=\"#\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>Formación</a></li>\n                                <li><a href=\"#\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>Política de privacidad</a></li>\n                                <li><a href=\"#\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>Comunidad y foros</a></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"col-12 col-md-8 col-lg-4\">\n                        <div class=\"kilimanjaro_part\">\n                            <h5>Contacto</h5>\n                            <div class=\"kilimanjaro_single_contact_info\">\n                                <h5>Tfno:</h5>\n                                <p>+255 789 54 50 40<br>+2255 766 90 94 00\n                                </p>\n                            </div>\n                            <div class=\"kilimanjaro_single_contact_info\">\n                                <h5>Correo:</h5>\n                                <p>alu01010143266 <br> -  <br> -</p>\n                            </div>\n                        </div>\n                        <div class=\"kilimanjaro_part\">\n                            <h5>Últimos trabajos</h5>\n                            <div class=\"kilimanjaro_works\">\n                                <a class=\"kilimanjaro_works_img\" href=\"\"><img src=\"\" alt=\"\"></a>\n                                <a class=\"kilimanjaro_works_img\" href=\"\"><img src=\"\" alt=\"\"></a>\n                                <a class=\"kilimanjaro_works_img\" href=\"\"><img src=\"\" alt=\"\"></a>\n                                <a class=\"kilimanjaro_works_img\" href=\"\"><img src=\"\" alt=\"\"></a>\n                                <a class=\"kilimanjaro_works_img\" href=\"\"><img src=\"\" alt=\"\"></a>\n                                <a class=\"kilimanjaro_works_img\" href=\"\"><img src=\"\" alt=\"\"></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- Footer Bottom Area Start -->\n        <div class=\" kilimanjaro_bottom_header_one section_padding_50 text-center\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-12\">\n                        <p>© All Rights Reserved by <a href=\"#\">Webublogoverflow.blogspot<i class=\"fa fa-love\"></i></a></p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </footer>\n<!-- END FOOTER COMPONENT -->\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light\">\n  <div class=\"col-md-5 p-lg-5 mx-auto my-6\">\n    <div class=\"form-group\">\n      <h2>Iniciar sesión</h2>\n    </div>\n    <div class=\"dropdown-divider\"></div>\n    <form class=\"px-4 py-3\" (submit)=\"onLoginSubmit()\" name=\"myForm\">\n      <div class=\"form-group\">\n        <label>Nombre de usuario</label>\n        <input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"John12345\"\n        [(ngModel)]=\"username\"\n        required>\n      </div>\n      <div class=\"form-group\">\n        <label>Contraseña</label>\n        <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\"\n        [(ngModel)]=\"password\"\n        required>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\">Iniciar sesión</button>\n    </form>\n    <div class=\"dropdown-divider\"></div>\n    <a class=\"dropdown-item\" [routerLink]=\"['/register']\">¿Nuevo por aquí? Regístrate</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, ngFlashMessageService) {
        this.authService = authService;
        this.router = router;
        this.ngFlashMessageService = ngFlashMessageService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authService.loggedIn)
            this.router.navigate(['/dashboard']);
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        // Create the user person
        var user = {
            username: this.username,
            password: this.password
        };
        // Crea la petición para autenticar al usuario
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                // Login correcto, se almacenan los datos del usuario en el almacenamiento local
                _this.authService.storeUserData(data.token, data.user);
                // Show message as logged in
                _this.ngFlashMessageService.showFlashMessage({
                    messages: ["¡Ya está conectado, bienvenido!"],
                    dismissible: true,
                    timeout: false,
                    type: 'success'
                });
                _this.router.navigate(['/dashboard']);
            }
            else {
                // Show message as cant log in
                _this.ngFlashMessageService.showFlashMessage({
                    messages: [data.msg],
                    dismissible: true,
                    timeout: false,
                    type: 'danger'
                });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <a class=\"navbar-brand\" href=\"#\">PLANEDU</a>\n  <button class=\"navbar-toggler collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"navbar-collapse collapse\" id=\"navbarColor01\" style=\"\">\n    <ul class=\"navbar-nav mr-auto\">\n      <!--<li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"!#\">Pestaña<span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"!#\">Pestaña</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"!#\">Pestaña</a>\n      </li>-->\n    </ul>\n    <ul class=\" navbar-nav mt-auto\">\n      <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Tablón</a></li>\n      <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/profile']\">Perfil</a></li>\n\n      <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/']\">Iniciar sesión</a></li>\n      <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/register']\">Registrarse</a></li>\n      <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\"><a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Cerrar sesión</a></li>\n    </ul>\n  </div>\n</nav>\n  <ng-flash-message></ng-flash-message>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { FlashMessagesService } from 'angular2-flash-messages';

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, 
    //private flashMessage: FlashMessagesService,
    ngFlashMessageService) {
        this.authService = authService;
        this.router = router;
        this.ngFlashMessageService = ngFlashMessageService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        //if (this.authService.loggedIn()) $('ul.navbar-nav.mr-auto').show();
        //else $('ul.navbar-nav.mr-auto li').hide();
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        // Send the instruction to clear the local storage and the memory of the user logged in
        this.authService.logout();
        this.ngFlashMessageService.showFlashMessage({
            messages: ["Tu sesión ha terminado"],
            dismissible: true,
            timeout: false,
            type: 'warning'
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/notfound/notfound.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/notfound/notfound.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90Zm91bmQvbm90Zm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/notfound/notfound.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/notfound/notfound.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"position-relative overflow-hidden p-3 p-md-3 m-md-3 text-center bg-light\">\n  <div class=\"col-md-8 p-lg-5 mx-auto my-6\">\n    <h2 class=\"page-header\">Página no encontrada</h2>\n    <p>\n      La página solicitada no existe\n    </p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/notfound/notfound.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/notfound/notfound.component.ts ***!
  \***********************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/components/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.css */ "./src/app/components/notfound/notfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n  <br><h1>Perfil</h1>\n  <div class=\"row\">\n    <!-- BEGIN COL 1 -->\n    <div class=\"col-12 col-md-4\">\n      <div class=\"position-relative overflow-hidden p-3 p-md-3 m-md-3 text-center bg-light\">\n        <!-- BEGIN COL PROFILE BASIC DATAS -->\n        <div class=\"card mb-3\">\n            <h3 class=\"card-header\">{{user.username}}</h3>\n              <div class=\"center-block\">\n                <img class=\"img-responsive\" style=\"height: 200px; width: 200px; margin: 10px\"\n                src=\"assets/img/profile/default_profile_200.png\" alt=\"Card image\">\n              </div>\n            <ul class=\"list-group list-group-flush \">\n                <li class=\"list-group-item\">Nombre: {{user.name}}</li>\n                <li class=\"list-group-item\">Universidad: {{user.universidad}}</li>\n            </ul>\n            <div class=\"card-footer text-muted\">\n                Última visita\n            </div>\n        </div>\n        <!-- END COL PROFILE BASIC DATAS -->\n      </div>\n    </div>\n    <!-- END COL 1 -->\n    <!-- BEGIN COL 2 -->\n    <div class=\"col-12 col-md-8\">\n      <div class=\"position-relative overflow-hidden p-3 p-md-3 m-md-3 text-center bg-light\">\n        <!-- BEGIN TAB NAVS PROFILE -->\n        <ul class=\"nav nav-tabs\">\n            <li class=\"nav-item\"><a class=\"nav-link active\" data-toggle=\"tab\" href=\"#home\">Tab1</a></li>\n            <li class=\"nav-item\"><a class=\"nav-link\" data-toggle=\"tab\" href=\"#profile\">Tab2</a></li>\n            <li class=\"nav-item\"><a class=\"nav-link disabled\" href=\"#\">Desactivado</a></li>\n            <li class=\"nav-item dropdown\">\n              <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Más</a>\n                <div class=\"dropdown-menu\">\n                  <a class=\"dropdown-item\" href=\"#\">Acción</a>\n                  <a class=\"dropdown-item\" href=\"#\">Otra acción</a>\n                  <a class=\"dropdown-item\" href=\"#\">Algo más aquí</a>\n                  <div class=\"dropdown-divider\"></div>\n                  <a class=\"dropdown-item\" href=\"#\">Enlaces separados</a>\n                </div>\n            </li>\n        </ul>\n        <div id=\"myTabContent\" class=\"tab-content\">\n          <div class=\"tab-pane fade show active\" id=\"home\">\n              <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit.</p>\n          </div>\n          <div class=\"tab-pane fade\" id=\"profile\">\n              <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit.</p>\n          </div>\n          <div class=\"tab-pane fade\" id=\"dropdown1\">\n              <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork.</p>\n          </div>\n          <div class=\"tab-pane fade\" id=\"dropdown2\">\n              <p>Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater.</p>\n          </div>\n        </div>\n        <!-- END TAB NAVS PROFILE -->\n      </div>\n    </div>\n    <!-- END COL 2 -->\n\n  </div>\n</div>\n<br>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light\">\n  <div class=\"col-md-7 p-lg-5 mx-auto my-8\">\n    <div class=\"form-group\">\n      <h2>Registro</h2>\n    </div>\n    <div class=\"dropdown-divider\"></div>\n    <form class=\"px-4 py-3\" (submit)=\"onRegisterSubmit()\" name=\"register\">\n      <div class=\"row\">\n        <div class=\"col-6\">\n\n          <div class=\"form-group\">\n            <label>Nombre</label>\n            <input type=\"name\" class=\"form-control\" name=\"name\" placeholder=\"John Doe\"\n            [(ngModel)]=\"name\"\n            required>\n          </div>\n\n        </div>\n        <div class=\"col-6\">\n          <div class=\"form-group\">\n            <label>Usuario</label>\n            <input type=\"username\" class=\"form-control\" name=\"username\" placeholder=\"John12345\"\n            [(ngModel)]=\"username\"\n            required>\n          </div>\n        </div>\n      </div>\n\n\n      <div class=\"form-group\">\n        <label>Email</label>\n        <input type=\"email\" class=\"form-control\"  name=\"email\" placeholder=\"email@example.com\"\n        [(ngModel)]=\"email\"\n        <!--(change)=\"onChangeEmail()\"-->\n        required>\n      </div>\n      <div class=\"form-group\">\n        <label>Contraseña</label>\n        <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\"\n        [(ngModel)]=\"password\"\n        required>\n      </div>\n      <div class=\"form-group\">\n        <label>Universidad</label>\n        <input type=\"universidad\" class=\"form-control\" name=\"universidad\" placeholder=\"Nombre completo de tu Universidad\"\n        [(ngModel)]=\"universidad\"\n        required>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">Registrarme</button>\n    </form>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Import of the services


// Import of the module for the flash messages

// Bring out the Router so we can redirect from the code

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(
    // Need to inject all the services in the constructor
    validateService, authService, router, ngFlashMessageService) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.ngFlashMessageService = ngFlashMessageService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    // Validar email en el momento
    /*onChangeEmail() {
      const user = { email: this.email,}
  
      if (!this.validateService.validateEmail(user.email)) {
        $("input[name='email']").removeClass('ng-valid');
        $("input[name='email']").addClass('ng-invalid');
  
        return false;
      } else {
        $("input[name='email']").removeClass('ng-invalid');
        $("input[name='email']").addClass('ng-valid');
        return true;
      }
    }*/
    // Al hacer submit del formulario
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        // Se crea el objeto usuario con los campos
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password,
            universidad: this.universidad
        };
        // Validación de campos
        if (!this.validateService.validateRegister(user)) {
            this.ngFlashMessageService.showFlashMessage({
                messages: ["Por favor rellene los campos"],
                dismissible: true,
                timeout: false,
                type: 'danger'
            });
            return false;
        }
        // Validación de email
        if (!this.validateService.validateEmail(user.email)) {
            this.ngFlashMessageService.showFlashMessage({
                messages: ["Por favor, use un campo de email válido"],
                dismissible: true,
                timeout: false,
                type: 'danger'
            });
            return false;
        }
        // Validación de la Universidad
        /*this.validateUni.getUniByName(user.universidad, (err) => { console.log("HEEY");
          if (err) {
            this.flashMessage.show('Introduce un nombre de Universidad válido', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
          }
        });*/
        // Registro de usuario
        // Use the service with the function and the user object as is an observable
        // we need to subscribe to it and inside we have the data back
        this.authService.registerUser(user).subscribe(function (data) {
            // Si se ha regitrado correctametne
            if (data.success) {
                _this.ngFlashMessageService.showFlashMessage({
                    messages: ["¡Ahora ya está registrado! Bienvenido."],
                    dismissible: true,
                    timeout: false,
                    type: 'success'
                });
                // Redirecciona al formulario de login
                _this.router.navigate(['/login']);
            }
            // Si no se ha registrado
            else {
                _this.ngFlashMessageService.showFlashMessage({
                    messages: [data.msg],
                    dismissible: true,
                    timeout: false,
                    type: 'danger'
                });
                // Redirecciona al mismo formulario
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Injectable to protect the routerlinks that you should not pass if youre not logged in



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/reducers/index.ts":
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");

var reducers = {};
var metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? [] : [];


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Bring http module and headers package

// Bring map operation cause we are working with observables

/* Import the JWT token from angular2-jwt
import { tokenNotExpired } from 'angular2-jwt';*/
// Import the JWT service from @auth0/angular-jwt *Angular v6+ and RxJS v6+*

var AuthService = /** @class */ (function () {
    function AuthService(
    // Inject the http module in the constructor
    http, 
    // Import the JWT service
    jwtHelper) {
        this.http = http;
        this.jwtHelper = jwtHelper;
    }
    // Function to register the user
    AuthService.prototype.registerUser = function (user) {
        // Set a header value
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        // Add the content type: json | Add the value to a header
        headers.append('Content-Type', 'application/json');
        // Return an observable with the response to our server
        //                               URL of the service          data  like options send the header
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
        // Map the response to json
    };
    // Function to authenticate an user
    AuthService.prototype.authenticateUser = function (user) {
        // Set a header value
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        // Add the content type: json | Add the value to a header
        headers.append('Content-Type', 'application/json');
        // Return an observable with the response to our server
        //                               URL of the service          data  like options send the header
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
        // Map the response to json
    };
    AuthService.prototype.getProfile = function () {
        // Set a header value
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        // Get the value storaged in local storage
        this.loadToken();
        headers.append('Authorization', this.authToken);
        // Add the content type: json | Add the value to a header
        headers.append('Content-Type', 'application/json');
        // Return an observable with the response to our server
        //                               URL of the service          data  like options send the header
        return this.http.get('http://localhost:3000/users/profile', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
        // Map the response to json
    };
    // Función que almacena la sesión en el almacenamiento local
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        // Almacena el token y el usuario en el componente
        this.authToken = token;
        this.user = user;
    };
    // Función para obtener el token del almacenamiento local
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    // Función que devuelve si el token ha expirado o no
    AuthService.prototype.loggedIn = function () {
        return !this.jwtHelper.isTokenExpired();
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    // Function of the sevice to validate that all the fields are filled
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.username == undefined || user.email == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    // Function of the service to validate the email
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        /*
         send "email" to backend. El backend debe comprobar si está en la bdd y devolver un true o false.
        */
        return re.test(email); // <-- (Devolver re.test(email) * flag del backend)
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/brian/E01/angular-src/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map