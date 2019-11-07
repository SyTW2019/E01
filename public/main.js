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

module.exports = "<app-navbar></app-navbar>\n<flash-messages></flash-messages>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Components







// Services


// Libraries




// Array for the routing
var appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    // Protect the following routes if youre logged in 
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes),
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_15__["FlashMessagesModule"].forRoot(),
                // JWT set the JWT module with the local storage token
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_16__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: function () {
                            return localStorage.getItem('id_token');
                        }
                    }
                })
            ],
            providers: [
                _services_validate_service__WEBPACK_IMPORTED_MODULE_13__["ValidateService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "svg {\n  width: 15px;\n  height: 15px;\n  margin-right: 10px;\n}\n\n.nav-item {\n  height: 2.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3ZnIHtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ubmF2LWl0ZW0ge1xuICBoZWlnaHQ6IDIuNWVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <nav class=\"col-md-2 d-none d-md-block bg-light sidebar\">\n      <div class=\"sidebar-sticky\">\n        <ul class=\"navbar-nav mt-auto\">\n\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-home\">\n                <path d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"></path>\n                <polyline points=\"9 22 9 12 15 12 15 22\"></polyline>\n              </svg>\n              Dashboard\n            </a>\n          </li>\n\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-file\">\n                <path d=\"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z\"></path>\n                <polyline points=\"13 2 13 9 20 9\"></polyline>\n              </svg>\n              Orders\n            </a>\n          </li>\n\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\" #\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-shopping-cart\">\n                <circle cx=\"9\" cy=\"21\" r=\"1\"></circle>\n                <circle cx=\"20\" cy=\"21\" r=\"1\"></circle>\n                <path d=\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\"></path>\n              </svg>\n              Products\n            </a>\n          </li>\n\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\" #\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-users\">\n                <path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path>\n                <circle cx=\"9\" cy=\"7\" r=\"4\"></circle>\n                <path d=\"M23 21v-2a4 4 0 0 0-3-3.87\"></path>\n                <path d=\"M16 3.13a4 4 0 0 1 0 7.75\"></path>\n              </svg>\n              Customers\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\" #\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-bar-chart-2\">\n                <line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"></line>\n                <line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"></line>\n                <line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"></line>\n              </svg>\n              Reports\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\" #\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-layers\">\n                <polygon points=\"12 2 2 7 12 12 22 7 12 2\"></polygon>\n                <polyline points=\"2 17 12 22 22 17\"></polyline>\n                <polyline points=\"2 12 12 17 22 12\"></polyline>\n              </svg>\n              Integrate\n            </a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n\n    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">\n      <div class=\"chartjs-size-monitor\" style=\"position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;\">\n        <div class=\"chartjs-size-monitor-expand\" style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\">\n          <div style=\"position:absolute;width:1000000px;height:1000000px;left:0;top:0\"></div>\n        </div>\n        <div class=\"chartjs-size-monitor-shrink\" style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\">\n          <div style=\"position:absolute;width:200%;height:200%;left:0; top:0\"></div>\n        </div>\n      </div>\n\n      <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">\n        <h1 class=\"h2\">Dashboard</h1>\n        <div class=\"btn-toolbar mb-2 mb-md-0\">\n          <div class=\"btn-group mr-2\">\n            <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" style=\"margin: 0px 4px;\">Share</button>\n            <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" style=\"margin: 0px 4px;\">Export</button>\n          </div>\n          <button type=\"button\" class=\"btn btn-sm btn-outline-secondary dropdown-toggle\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-calendar\">\n              <rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect>\n              <line x1=\"16\" y1=\"2\" x2=\"16\" y2=\"6\"></line>\n              <line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"6\"></line>\n              <line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"></line>\n            </svg>\n            This week\n          </button>\n        </div>\n      </div>\n\n      <!-- ADD A CHART -->\n\n      <h2>Section title</h2>\n      <div class=\"table-responsive\">\n        <table class=\"table table-striped table-sm\">\n          <thead>\n            <tr>\n              <th>#</th>\n              <th>Header</th>\n              <th>Header</th>\n              <th>Header</th>\n              <th>Header</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>1,001</td>\n              <td>Lorem</td>\n              <td>ipsum</td>\n              <td>dolor</td>\n              <td>sit</td>\n            </tr>\n            <tr>\n              <td>1,002</td>\n              <td>amet</td>\n              <td>consectetur</td>\n              <td>adipiscing</td>\n              <td>elit</td>\n            </tr>\n            <tr>\n              <td>1,003</td>\n              <td>Integer</td>\n              <td>nec</td>\n              <td>odio</td>\n              <td>Praesent</td>\n            </tr>\n            <tr>\n              <td>1,003</td>\n              <td>libero</td>\n              <td>Sed</td>\n              <td>cursus</td>\n              <td>ante</td>\n            </tr>\n            <tr>\n              <td>1,004</td>\n              <td>dapibus</td>\n              <td>diam</td>\n              <td>Sed</td>\n              <td>nisi</td>\n            </tr>\n            <tr>\n              <td>1,005</td>\n              <td>Nulla</td>\n              <td>quis</td>\n              <td>sem</td>\n              <td>at</td>\n            </tr>\n            <tr>\n              <td>1,006</td>\n              <td>nibh</td>\n              <td>elementum</td>\n              <td>imperdiet</td>\n              <td>Duis</td>\n            </tr>\n            <tr>\n              <td>1,007</td>\n              <td>sagittis</td>\n              <td>ipsum</td>\n              <td>Praesent</td>\n              <td>mauris</td>\n            </tr>\n            <tr>\n              <td>1,008</td>\n              <td>Fusce</td>\n              <td>nec</td>\n              <td>tellus</td>\n              <td>sed</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </main>\n\n  </div>\n</div>"

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

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* BEGIN SEARCHER */\ninput.form-control.form-control-sm.ml-3.w-75 {\n    border: 1px solid #3e44603b;\n}\n.btn-filter {\n    background: #7a6883;\n    border-radius: 30px;\n    padding: 4px 0px;\n    color: #ffffffd1;\n    text-align: center;\n    width: 64px;\n    font-size: 9px;\n    margin-left: 32px;\n}\n.col-helper\n{\n  text-align: right;\n}\ninput.form-control.form-control-sm.ml-3.w-75\n{\n  width: 85%!important;\n}\n/* END SEARCHER */\n.buttonsMargins {\n  margin: 0px 10px;\n}\n.categoria-card {\n    display: inline-block;\n    width: 200px;\n    background: #fff;\n    border-radius: 5px;\n    box-shadow: 0px 0px 10px #00000029;\n    margin: 5px;\n    overflow: hidden;\n}\n.categoria-card img\n{\n  height: 150%;\n  margin-top: 0px;\n  cursor: pointer!important;\n}\n.categoria-card p\n{\n  display: block;\n  margin-bottom: 0px;\n  padding-bottom: 4px;\n  font-weight: 900;\n  color: #000000d1;\n  letter-spacing: 0px;\n  font-size: 1em;\n}\n.envolvent-card\n{\n  height: 130px;\n  overflow: hidden;\n}\n.img-gradient{\n  position:relative;\n  display:inline-block;\n}\n.img-gradient:after {\n  content:'';\n  position:absolute;\n  left:0; top:0;\n  width:100%; height:100%; /* FF3.6+ */ /* Chrome,Safari4+ */ /* Chrome10+,Safari5.1+ */ /* Opera 11.10+ */ /* IE10+ */\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(37, 93, 220, 0.25)),to(rgba(54, 0, 75, 0.5)));\n  background: linear-gradient(to bottom, rgba(37, 93, 220, 0.25) 0%,rgba(54, 0, 75, 0.5) 100%); /* W3C */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#002f4b', endColorstr='#00000000',GradientType=0 ); /* IE6-9 */\n}\n.img-gradient img{\n  display:block;\n}\n/* CONTENIDO */\n.contenido-card\n{\n  box-shadow: 0px 0px 10px #00000029;\n  width: 100%;\n  height: 200px;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.content-info\n{\n  overflow-y: scroll;\n  height: 200px;\n  padding: 20px;\n  width: 108.5%;\n}\n.contenido-card img\n{\n  height: 200px;\n  margin-left: -50%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBbUI7QUFDbkI7SUFDSSwyQkFBMkI7QUFDL0I7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkI7QUFDQTs7RUFFRSxvQkFBb0I7QUFDdEI7QUFHQSxpQkFBaUI7QUFDakI7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQ0FBa0M7SUFDbEMsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjtBQUVBOztFQUVFLFlBQVk7RUFDWixlQUFlO0VBQ2YseUJBQXlCO0FBQzNCO0FBRUE7O0VBRUUsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjtBQUVBOztFQUVFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsTUFBTSxFQUFFLEtBQUs7RUFDYixVQUFVLEVBQUUsV0FBVyxFQUNzRSxXQUFXLEVBQ29DLG9CQUFvQixFQUNoRSx5QkFBeUIsRUFDOUIsaUJBQWlCLEVBQ2hCLFVBQVU7RUFDdEcsbUhBQTRGO0VBQTVGLDRGQUE0RixFQUFFLFFBQVE7RUFDdEcscUhBQXFILEVBQUUsVUFBVTtBQUNuSTtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBRUEsY0FBYztBQUNkOztFQUVFLGtDQUFrQztFQUNsQyxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixhQUFhO0VBQ2IsYUFBYTtBQUNmO0FBRUE7O0VBRUUsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBCRUdJTiBTRUFSQ0hFUiAqL1xuaW5wdXQuZm9ybS1jb250cm9sLmZvcm0tY29udHJvbC1zbS5tbC0zLnctNzUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzZTQ0NjAzYjtcbn1cblxuLmJ0bi1maWx0ZXIge1xuICAgIGJhY2tncm91bmQ6ICM3YTY4ODM7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBwYWRkaW5nOiA0cHggMHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmZDE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA2NHB4O1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xufVxuXG4uY29sLWhlbHBlclxue1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbmlucHV0LmZvcm0tY29udHJvbC5mb3JtLWNvbnRyb2wtc20ubWwtMy53LTc1XG57XG4gIHdpZHRoOiA4NSUhaW1wb3J0YW50O1xufVxuXG5cbi8qIEVORCBTRUFSQ0hFUiAqL1xuLmJ1dHRvbnNNYXJnaW5zIHtcbiAgbWFyZ2luOiAwcHggMTBweDtcbn1cblxuLmNhdGVnb3JpYS1jYXJkIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMDAwMDAwMjk7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNhdGVnb3JpYS1jYXJkIGltZ1xue1xuICBoZWlnaHQ6IDE1MCU7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyIWltcG9ydGFudDtcbn1cblxuLmNhdGVnb3JpYS1jYXJkIHBcbntcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgY29sb3I6ICMwMDAwMDBkMTtcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbi5lbnZvbHZlbnQtY2FyZFxue1xuICBoZWlnaHQ6IDEzMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaW1nLWdyYWRpZW50e1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG59XG4uaW1nLWdyYWRpZW50OmFmdGVyIHtcbiAgY29udGVudDonJztcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIGxlZnQ6MDsgdG9wOjA7XG4gIHdpZHRoOjEwMCU7IGhlaWdodDoxMDAlO1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AscmdiYSgzNywgOTMsIDIyMCwgMC4yNSkgMCUsIHJnYmEoNTQsIDAsIDc1LCAwLjUpIDEwMCUpOyAvKiBGRjMuNisgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSxyZ2JhKDU0LCAwLCA3NSwgMC41KSksIGNvbG9yLXN0b3AoMTAwJSxyZ2JhKDM3LCA5MywgMjIwLCAwLjI1KSkpOyAvKiBDaHJvbWUsU2FmYXJpNCsgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDM3LCA5MywgMjIwLCAwLjI1KSAwJSxyZ2JhKDU0LCAwLCA3NSwgMC41KSAxMDAlKTsgLyogQ2hyb21lMTArLFNhZmFyaTUuMSsgKi9cbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgzNywgOTMsIDIyMCwgMC4yNSkgMCUscmdiYSg1NCwgMCwgNzUsIDAuNSkgMTAwJSk7IC8qIE9wZXJhIDExLjEwKyAqL1xuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgzNywgOTMsIDIyMCwgMC4yNSkgMCUscmdiYSg1NCwgMCwgNzUsIDAuNSkgMTAwJSk7IC8qIElFMTArICovXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMzcsIDkzLCAyMjAsIDAuMjUpIDAlLHJnYmEoNTQsIDAsIDc1LCAwLjUpIDEwMCUpOyAvKiBXM0MgKi9cbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyMwMDJmNGInLCBlbmRDb2xvcnN0cj0nIzAwMDAwMDAwJyxHcmFkaWVudFR5cGU9MCApOyAvKiBJRTYtOSAqL1xufVxuLmltZy1ncmFkaWVudCBpbWd7XG4gIGRpc3BsYXk6YmxvY2s7XG59XG5cbi8qIENPTlRFTklETyAqL1xuLmNvbnRlbmlkby1jYXJkXG57XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMDAwMDAwMjk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY29udGVudC1pbmZvXG57XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDEwOC41JTtcbn1cblxuLmNvbnRlbmlkby1jYXJkIGltZ1xue1xuICBoZWlnaHQ6IDIwMHB4O1xuICBtYXJnaW4tbGVmdDogLTUwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"row custom-row-search\">\n  <div class=\"offset-3 col-6\">\n    <!-- Search form -->\n    <form class=\"form-inline\">\n      <i class=\"fas fa-search\" aria-hidden=\"true\"></i>\n      <input class=\"form-control form-control-sm ml-3 w-75\" type=\"text\" placeholder=\"Search\"\n        aria-label=\"Search\">\n    </form>\n    <div class=\"row\" style=\"padding-top: 5px\">\n      <div class=\"col-5\"><div class=\"btn-filter\">\n        <i class=\"fas fa-filter\"></i> Filter</div>\n        <!-- FUNCIONALIDAD DE TAGS FILTROS -->\n      </div>\n      <div class=\"col-6 col-helper\"><i class=\"far fa-question-circle help-button\"></i></div>\n    </div>\n  </div>\n</div>\n<br>\n\n<div class=\"position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light\">\n  <div class=\"col-md-12 p-lg-5 mx-auto my-6\">\n    <h2 class=\"display-4 font-weight-normal\">Categorías</h2>\n    <div class=\"fluid-container\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <div class=\"categoria-card\">\n            <div class=\"envolvent-card img-gradient\"><img class=\"img-responsive\" src=\"assets/img/p-examples/1.jpg\"></div>\n            <p>Categoría 1</p>\n          </div>\n          <div class=\"categoria-card\">\n            <div class=\"envolvent-card img-gradient\"><img class=\"img-responsive\" src=\"assets/img/p-examples/2.jpg\"></div>\n            <p>Categoría 2</p>\n          </div>\n          <div class=\"categoria-card\">\n            <div class=\"envolvent-card img-gradient\"><img class=\"img-responsive\" src=\"assets/img/p-examples/3.jpg\"></div>\n            <p>Categoría 3</p>\n          </div>\n          <div class=\"categoria-card\">\n            <div class=\"envolvent-card img-gradient\"><img class=\"img-responsive\" src=\"assets/img/p-examples/4.jpg\"></div>\n            <p>Categoría 4</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <br>\n    <div class=\"fluid-container\">\n      <div class=\"row\">\n        <div class=\"offset-1 col-10\">\n\n\n          <div class=\"contenido-card\">\n            <div class=\"row\">\n              <div class=\"col-7\">\n                <div class=\"content-info\">\n                  <h4>Contenido</h4>\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n                </div>\n                </div>\n              <div class=\"col-5 cover-image-content\" style=\"background-image: url('/assets/img/content-example/1.jpg'); background-size: cover; background-position: center\">\n              </div>\n            </div>\n          </div>\n\n          <div class=\"contenido-card\">\n            <div class=\"row\">\n              <div class=\"col-7\">\n                <div class=\"content-info\">\n                  <h4>Contenido</h4>\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n                </div>\n                </div>\n              <div class=\"col-5 cover-image-content\" style=\"background-image: url('/assets/img/content-example/2.jpg'); background-size: cover; background-position: center\">\n              </div>\n            </div>\n          </div>\n\n\n        </div>\n      </div>\n    </div>\n\n\n    <!-- OLD\n    <h1 class=\"display-4 font-weight-normal\">Authorization web application</h1>\n    <p class=\"lead font-weight-normal\">Template in MEAN (MongoDb, Express, Angular and Node) for a login web app using validations, services, angular libraries and much more.</p>\n    <div>\n      <a class=\"btn btn-outline-secondary buttonsMargins\" [routerLink]=\"['/login']\">Login</a>\n      <a class=\"btn btn-outline-secondary buttonsMargins\" [routerLink]=\"['/register']\">Register</a>\n    </div>\n    -->\n\n\n\n\n  </div>\n</div>\n<div class=\"position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <h3>First column</h3>\n      <p>Hey there we are making a try</p>\n    </div>\n    <div class=\"col-md-4\">\n      <h3>Second column</h3>\n      <p>Hey there we are making a try</p>\n    </div>\n    <div class=\"col-md-4\">\n      <h3>Third column</h3>\n      <p>Hey there we are making a try</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
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

module.exports = "<div class=\"position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light\">\n  <div class=\"col-md-5 p-lg-5 mx-auto my-6\">\n    <div class=\"form-group\">\n      <h2>Log in</h2>\n    </div>\n    <div class=\"dropdown-divider\"></div>\n    <form class=\"px-4 py-3\" (submit)=\"onLoginSubmit()\">\n      <div class=\"form-group\">\n        <label>Username</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"John12345\">\n      </div>\n      <div class=\"form-group\">\n        <label>Password</label>\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\">Sign in</button>\n    </form>\n    <div class=\"dropdown-divider\"></div>\n    <a class=\"dropdown-item\" [routerLink]=\"['/register']\">New around here? Sign up</a>\n  </div>\n</div>"

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
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
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
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        // Create the user person
        var user = {
            username: this.username,
            password: this.password
        };
        // Create the petition to authenticate the user and get all the data from the database
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                // If the login is success we are going to store the data into the local storage
                _this.authService.storeUserData(data.token, data.user);
                // Show message as logged in
                _this.flashMessage.show("You are now logged in", {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                _this.router.navigate(['/dashboard']);
            }
            else {
                // Show message as cant log in
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
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
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
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

module.exports = ".navbar {\n  background: #3e4460!important;\n}\n\n.navbar-brand\n{\n  color: #919aa1!important;\n}\n\n.navbar a {\n  color: #ffffffc4!important;\n  -webkit-transition: ease-in-out 0.2s;\n  transition: ease-in-out 0.2s;\n}\n\n.navbar a:hover {\n  color: #919aa1;\n  -webkit-transition: ease-in-out 0.2s;\n  transition: ease-in-out 0.2s;\n}\n\n.navbar-light .navbar-nav .active>.nav-link,\n.navbar-light .navbar-nav .nav-link.active\n{\n  color: #919aa1!important;\n}\n\n.navbar-light .navbar-toggler {\n  color: rgba(243, 243, 243, 0.3)!important;\n  border-color: rgba(255, 255, 255, 0.1);\n  padding: 5px 6px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7O0VBRUUsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLG9DQUE0QjtFQUE1Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsb0NBQTRCO0VBQTVCLDRCQUE0QjtBQUM5Qjs7QUFFQTs7O0VBR0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLHNDQUFzQztFQUN0QyxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xuICBiYWNrZ3JvdW5kOiAjM2U0NDYwIWltcG9ydGFudDtcbn1cblxuLm5hdmJhci1icmFuZFxue1xuICBjb2xvcjogIzkxOWFhMSFpbXBvcnRhbnQ7XG59XG5cbi5uYXZiYXIgYSB7XG4gIGNvbG9yOiAjZmZmZmZmYzQhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjJzO1xufVxuXG4ubmF2YmFyIGE6aG92ZXIge1xuICBjb2xvcjogIzkxOWFhMTtcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC4ycztcbn1cblxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAuYWN0aXZlPi5uYXYtbGluayxcbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rLmFjdGl2ZVxue1xuICBjb2xvcjogIzkxOWFhMSFpbXBvcnRhbnQ7XG59XG5cbi5uYXZiYXItbGlnaHQgLm5hdmJhci10b2dnbGVyIHtcbiAgY29sb3I6IHJnYmEoMjQzLCAyNDMsIDI0MywgMC4zKSFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBwYWRkaW5nOiA1cHggNnB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-light bg-light\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo03\" aria-controls=\"navbarTogglerDemo03\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <i class=\"fas fa-stream\"></i>\n  </button>\n  <a class=\"navbar-brand\">PlanEDU</a>\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo03\">\n    <ul class=\"navbar-nav mr-auto \">\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/']\">Inicio</a></li>\n    </ul>\n    <ul class=\" navbar-nav mt-auto\">\n      <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n      <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/profile']\">Perfil</a></li>\n\n      <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/login']\">Iniciar sesión</a></li>\n      <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/register']\">Registrarse</a></li>\n      <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\"><a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Cerrar sesión</a></li>\n    </ul>\n  </div>\n</nav>\n"

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
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        // Send the instruction to clear the local storage and the memory of the user logged in
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-warning',
            timeout: 3000
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
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"position-relative overflow-hidden p-3 p-md-3 m-md-3 text-center bg-light\">\n  <div class=\"col-md-8 p-lg-5 mx-auto my-6\" *ngIf=\"user\">\n    <h2 class=\"page-header\">{{user.name}}</h2>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">Username: {{user.username}}</li>\n      <li class=\"list-group-item\">Email: {{user.email}}</li>\n    </ul>\n  </div>\n</div>"

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

module.exports = "<div class=\"position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light\">\n  <div class=\"col-md-7 p-lg-5 mx-auto my-8\">\n    <div class=\"form-group\">\n      <h2>Registro</h2>\n    </div>\n    <div class=\"dropdown-divider\"></div>\n    <form class=\"px-4 py-3\" (submit)=\"onRegisterSubmit()\">\n      <div class=\"form-group\">\n        <label>Nombre</label>\n        <input type=\"name\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"John Doe\">\n      </div>\n      <div class=\"form-group\"> \n        <label>Nombre de Usuario</label>\n        <input type=\"username\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"John12345\">\n      </div>\n      <div class=\"form-group\">\n        <label>Email</label>\n        <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"email@example.com\">\n      </div>\n      <div class=\"form-group\">\n        <label>Contraseña</label>\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password\">\n      </div>\n      <div class=\"form-group\">\n        <label>Universidad</label>\n        <input type=\"universidad\" class=\"form-control\" [(ngModel)]=\"universidad\" name=\"universidad\" placeholder=\"ULL\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">Registrarme</button>\n    </form>\n  </div>\n</div>"

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
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
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
    validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        // Create the user object
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password,
            universidad: this.universidad
        };
        // Required fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all the fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register user
        // Use the service with the function and the user object as is an observable
        // we need to subscribe to it and inside we have the data back
        this.authService.registerUser(user).subscribe(function (data) {
            // Lets validate the response and show the user the response with an alert
            if (data.success) {
                _this.flashMessage.show('You are now registered', { cssClass: 'alert-success', timeout: 3000 });
                // If the registration is success move to the login component
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                // If the registration is success move to the login component
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
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*********footer*******************/\n\n.kilimanjaro_area {\n    position: relative;\n    z-index: 1;\n\t}\n\n.foo_top_header_one {\n      background-color: #15171f;\n      color: #fff;\n  }\n\n.section_padding_100_70 {\n    padding-top: 100px;\n    padding-bottom: 70px;\n}\n\n.foo_top_header_one {\n    color: #fff;\n}\n\n.kilimanjaro_part {\n    margin-bottom: 30px;\n}\n\n.foo_top_header_one .kilimanjaro_part > h5 {\n    color: #fff;\n}\n\n.kilimanjaro_part h4, .kilimanjaro_part h5 {\n    margin-bottom: 30px;\n}\n\n.kilimanjaro_single_contact_info > p, .kilimanjaro_single_contact_info > h5, .kilimanjaro_blog_area > a, .foo_top_header_one .kilimanjaro_part > p {\n    color: rgba(255,255,255,.5);\n}\n\np, ul li, ol li {\n    font-weight: 300;\n}\n\nul {\n    margin: 0;\n    padding: 0;\n}\n\n.kilimanjaro_bottom_header_one {\n    background-color: #222635;\n}\n\n.section_padding_50 {\n    padding: 25px 0;\n}\n\n.kilimanjaro_bottom_header_one p {\n    color: #fff;\n    margin: 0;\n}\n\np, ul li, ol li {\n    font-weight: 300;\n}\n\n.kilimanjaro_bottom_header_one a {\n    color: inherit;\n    font-size: 14px;\n}\n\na, h1, h2, h3, h4, h5, h6 {\n    font-weight: 400;\n}\n\n.m-top-15 {\n    margin-top: 15px;\n}\n\nul {\n    margin: 0;\n    padding: 0;\n}\n\n.kilimanjaro_widget > li {\n    display: inline-block;\n}\n\np, ul li, ol li {\n    font-weight: 300;\n}\n\nol li, ul li {\n    list-style: outside none none;\n}\n\n.kilimanjaro_widget a {\n  border: 1px solid #ffffff14;\n  border-radius: 6px;\n  background: #ffffff05;\n  color: #888;\n  display: inline-block;\n  margin: 2px;\n  font-size: 13px;\n  margin-bottom: 3px;\n  padding: 7px 12px;\n}\n\nul {\n    margin: 0;\n    padding: 0;\n}\n\n.kilimanjaro_links a {\n    border-bottom: 1px solid #ffffff1f;\n    color: rgba(255,255,255,.5);\n    display: block;\n    font-size: 13px;\n    margin-bottom: 5px;\n    padding-bottom: 10px;\n}\n\n.kilimanjaro_links a {\n    color: rgba(255,255,255,.5);\n    font-size: 13px;\n}\n\ntop-15 {\n    margin-top: 15px;\n}\n\n.foo_top_header_one .kilimanjaro_part > h5 {\n    color: #fff;\n}\n\n.kilimanjaro_part h4, .kilimanjaro_part h5 {\n    margin-bottom: 30px;\n}\n\n.kilimanjaro_social_links > li {\n    display: inline-block;\n}\n\np, ul li, ol li {\n    font-weight: 300;\n}\n\n.kilimanjaro_social_links a {\n    border: 1px solid #ffffff14;\n    border-radius: 6px;\n    background: #ffffff05;\n    color: #888;\n    display: inline-block;\n    margin: 2px;\n    font-size: 13px;\n    margin-bottom: 3px;\n    padding: 7px 12px;\n}\n\n.kilimanjaro_blog_area .kilimanjaro_date {\n    color: #27ae60;\n    font-size: 13px;\n    margin-bottom: 5px;\n}\n\n.kilimanjaro_blog_area > p {\n    color: rgba(255,255,255,.5);\n    line-height: 1.3;\n    margin-bottom: 0;\n}\n\n.kilimanjaro_works > a {\n    display: inline-block;\n    float: left;\n    position: relative;\n    width: 33.33333333%;\n    z-index: 1;\n}\n\n.kilimanjaro_thumb {\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 75px;\n}\n\n.kilimanjaro_links a i {\n    padding-right: 10px;\n}\n\n/* :: 18.0 Footer Area CSS */\n\n.footer_area {\n        position: relative;\n        z-index: 1;\n    }\n\n.footer_bottom p > i,\n    .footer_bottom p > a:hover {\n        color: #27ae60;\n    }\n\n.social_links_area {\n        border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n        padding: 50px 0 30px 0;\n        text-align: center;\n        position: relative;\n        z-index: 1;\n    }\n\n.social_links_area > a:hover {\n        color: #27ae60;\n    }\n\n.inline-style .social_links_area > a:hover {\n        background-color: transparent;\n        color: #27ae60;\n        border: 0px solid transparent;\n    }\n\n.single_feature:hover .feature_text h4 {\n        color: #27ae60;\n    }\n\n.kilimanjaro_blog_area {\n    border-bottom: 1px solid #333;\n    margin-bottom: 15px;\n    padding: 0 0 15px 90px;\n    position: relative;\n    z-index: 1;\n}\n\n.kilimanjaro_links a {\n    border-bottom: 1px solid #ffffff21;\n    color: rgba(255,255,255,.5);\n    display: block;\n    font-size: 13px;\n    margin-bottom: 5px;\n    padding-bottom: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1DQUFtQzs7QUFFbkM7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtDQUNiOztBQUNDO01BQ0kseUJBQXlCO01BQ3pCLFdBQVc7RUFDZjs7QUFDRjtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7O0FBQUM7SUFDRyxtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxTQUFTO0FBQ2I7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7O0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFDQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxrQ0FBa0M7SUFDbEMsMkJBQTJCO0lBQzNCLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQixlQUFlO0FBQ25COztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksV0FBVztBQUNmOztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFDQTtJQUNJLE9BQU87SUFDUCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFdBQVc7QUFDZjs7QUFDQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFDRSw0QkFBNEI7O0FBRTFCO1FBQ0ksa0JBQWtCO1FBQ2xCLFVBQVU7SUFDZDs7QUFDSDs7UUFFTyxjQUFjO0lBQ2xCOztBQUVBO1FBQ0ksaURBQWlEO1FBQ2pELHNCQUFzQjtRQUN0QixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLFVBQVU7SUFDZDs7QUFDSDtRQUNPLGNBQWM7SUFDbEI7O0FBRUE7UUFDSSw2QkFBNkI7UUFDN0IsY0FBYztRQUNkLDZCQUE2QjtJQUNqQzs7QUFDSDtRQUNPLGNBQWM7SUFDbEI7O0FBQ0o7SUFDSSw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUNBO0lBQ0ksa0NBQWtDO0lBQ2xDLDJCQUEyQjtJQUMzQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqZm9vdGVyKioqKioqKioqKioqKioqKioqKi9cblxuLmtpbGltYW5qYXJvX2FyZWEge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuXHR9XG4gIC5mb29fdG9wX2hlYWRlcl9vbmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MTcxZjtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICB9XG4uc2VjdGlvbl9wYWRkaW5nXzEwMF83MCB7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA3MHB4O1xufVxuLmZvb190b3BfaGVhZGVyX29uZSB7XG4gICAgY29sb3I6ICNmZmY7XG59LmtpbGltYW5qYXJvX3BhcnQge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uZm9vX3RvcF9oZWFkZXJfb25lIC5raWxpbWFuamFyb19wYXJ0ID4gaDUge1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLmtpbGltYW5qYXJvX3BhcnQgaDQsIC5raWxpbWFuamFyb19wYXJ0IGg1IHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmtpbGltYW5qYXJvX3NpbmdsZV9jb250YWN0X2luZm8gPiBwLCAua2lsaW1hbmphcm9fc2luZ2xlX2NvbnRhY3RfaW5mbyA+IGg1LCAua2lsaW1hbmphcm9fYmxvZ19hcmVhID4gYSwgLmZvb190b3BfaGVhZGVyX29uZSAua2lsaW1hbmphcm9fcGFydCA+IHAge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC41KTtcbn1cbnAsIHVsIGxpLCBvbCBsaSB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbnVsIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cbi5raWxpbWFuamFyb19ib3R0b21faGVhZGVyX29uZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjYzNTtcbn1cbi5zZWN0aW9uX3BhZGRpbmdfNTAge1xuICAgIHBhZGRpbmc6IDI1cHggMDtcbn1cbi5raWxpbWFuamFyb19ib3R0b21faGVhZGVyX29uZSBwIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW46IDA7XG59XG5wLCB1bCBsaSwgb2wgbGkge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4ua2lsaW1hbmphcm9fYm90dG9tX2hlYWRlcl9vbmUgYSB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuYSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5tLXRvcC0xNSB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbn1cbnVsIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLmtpbGltYW5qYXJvX3dpZGdldCA+IGxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5wLCB1bCBsaSwgb2wgbGkge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5vbCBsaSwgdWwgbGkge1xuICAgIGxpc3Qtc3R5bGU6IG91dHNpZGUgbm9uZSBub25lO1xufVxuLmtpbGltYW5qYXJvX3dpZGdldCBhIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjE0O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYwNTtcbiAgY29sb3I6ICM4ODg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAycHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICBwYWRkaW5nOiA3cHggMTJweDtcbn1cbnVsIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cbi5raWxpbWFuamFyb19saW5rcyBhIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZmZmZjFmO1xuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC41KTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLmtpbGltYW5qYXJvX2xpbmtzIGEge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC41KTtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG50b3AtMTUge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uZm9vX3RvcF9oZWFkZXJfb25lIC5raWxpbWFuamFyb19wYXJ0ID4gaDUge1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLmtpbGltYW5qYXJvX3BhcnQgaDQsIC5raWxpbWFuamFyb19wYXJ0IGg1IHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmtpbGltYW5qYXJvX3NvY2lhbF9saW5rcyA+IGxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5wLCB1bCBsaSwgb2wgbGkge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4ua2lsaW1hbmphcm9fc29jaWFsX2xpbmtzIGEge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmYxNDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjA1O1xuICAgIGNvbG9yOiAjODg4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDJweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgIHBhZGRpbmc6IDdweCAxMnB4O1xufVxuLmtpbGltYW5qYXJvX2Jsb2dfYXJlYSAua2lsaW1hbmphcm9fZGF0ZSB7XG4gICAgY29sb3I6ICMyN2FlNjA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5raWxpbWFuamFyb19ibG9nX2FyZWEgPiBwIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNSk7XG4gICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmtpbGltYW5qYXJvX3dvcmtzID4gYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMzMuMzMzMzMzMzMlO1xuICAgIHotaW5kZXg6IDE7XG59XG4ua2lsaW1hbmphcm9fdGh1bWIge1xuICAgIGxlZnQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogNzVweDtcbn1cbi5raWxpbWFuamFyb19saW5rcyBhIGkge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG4gIC8qIDo6IDE4LjAgRm9vdGVyIEFyZWEgQ1NTICovXG5cbiAgICAuZm9vdGVyX2FyZWEge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuIC5mb290ZXJfYm90dG9tIHAgPiBpLFxuICAgIC5mb290ZXJfYm90dG9tIHAgPiBhOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICMyN2FlNjA7XG4gICAgfVxuXG4gICAgLnNvY2lhbF9saW5rc19hcmVhIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICAgICAgcGFkZGluZzogNTBweCAwIDMwcHggMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuIC5zb2NpYWxfbGlua3NfYXJlYSA+IGE6aG92ZXIge1xuICAgICAgICBjb2xvcjogIzI3YWU2MDtcbiAgICB9XG5cbiAgICAuaW5saW5lLXN0eWxlIC5zb2NpYWxfbGlua3NfYXJlYSA+IGE6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgY29sb3I6ICMyN2FlNjA7XG4gICAgICAgIGJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIH1cbiAuc2luZ2xlX2ZlYXR1cmU6aG92ZXIgLmZlYXR1cmVfdGV4dCBoNCB7XG4gICAgICAgIGNvbG9yOiAjMjdhZTYwO1xuICAgIH1cbi5raWxpbWFuamFyb19ibG9nX2FyZWEge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgcGFkZGluZzogMCAwIDE1cHggOTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbn1cbi5raWxpbWFuamFyb19saW5rcyBhIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZmZmZjIxO1xuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC41KTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN FOOTER COMPONENT -->\n<footer class=\"kilimanjaro_area\">\n        <!-- Top Footer Area Start -->\n        <div class=\"foo_top_header_one section_padding_100_70\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-12 col-md-8 col-lg-4\">\n                        <div class=\"kilimanjaro_part\">\n                            <h5>Sobre nosotros</h5>\n                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>\n                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>\n                        </div>\n                        <div class=\"kilimanjaro_part m-top-15\">\n                            <h5>Redes Sociales</h5>\n                            <ul class=\"kilimanjaro_social_links\">\n                                <li><a href=\"#\"><i class=\"fab fa-facebook\"></i> Facebook</a></li>\n                                <li><a href=\"#\"><i class=\"fab fa-twitter\"></i> Twitter</a></li>\n                                <li><a href=\"#\"><i class=\"fab fa-pinterest\"></i> Pinterest</a></li>\n                                <li><a href=\"#\"><i class=\"fab fa-youtube\"></i> YouTube</a></li>\n                                <li><a href=\"#\"><i class=\"fab fa-linkedin\"></i> Linkedin</a></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"col-12 col-md-8 col-lg-4\">\n                        <div class=\"kilimanjaro_part\">\n                            <h5>Tags Relacionados</h5>\n                            <ul class=\" kilimanjaro_widget\">\n                                <li><a href=\"#\">tag</a></li>\n                                <li><a href=\"#\">tag</a></li>\n                                <li><a href=\"#\">tag</a></li>\n                                <li><a href=\"#\">tag</a></li>\n                                <li><a href=\"#\">tag</a></li>\n                                <li><a href=\"#\">tag</a></li>\n                                <li><a href=\"#\">tag</a></li>\n                                <li><a href=\"#\">tag</a></li>\n                            </ul>\n                        </div>\n\n                        <div class=\"kilimanjaro_part m-top-15\">\n                            <h5>Important Links</h5>\n                            <ul class=\"kilimanjaro_links\">\n                                <li><a href=\"#\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>Términos y condiciones</a></li>\n                                <li><a href=\"#\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>Licencia</a></li>\n                                <li><a href=\"#\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>Ayuda y soporte</a></li>\n                                <li><a href=\"#\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>Formación</a></li>\n                                <li><a href=\"#\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>Política de privacidad</a></li>\n                                <li><a href=\"#\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>Comunidad y foros</a></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"col-12 col-md-8 col-lg-4\">\n                        <div class=\"kilimanjaro_part\">\n                            <h5>Contacto</h5>\n                            <div class=\"kilimanjaro_single_contact_info\">\n                                <h5>Tfno:</h5>\n                                <p>+255 789 54 50 40<br>+2255 766 90 94 00\n                                </p>\n                            </div>\n                            <div class=\"kilimanjaro_single_contact_info\">\n                                <h5>Correo:</h5>\n                                <p>alu01010143266 <br> -  <br> -</p>\n                            </div>\n                        </div>\n                        <div class=\"kilimanjaro_part\">\n                            <h5>Últimos trabajos</h5>\n                            <div class=\"kilimanjaro_works\">\n                                <a class=\"kilimanjaro_works_img\" href=\"img/gallery/1.jpg\"><img src=\"img/gallery/1.jpg\" alt=\"\"></a>\n                                <a class=\"kilimanjaro_works_img\" href=\"img/gallery/4.jpg\"><img src=\"img/gallery/4.jpg\" alt=\"\"></a>\n                                <a class=\"kilimanjaro_works_img\" href=\"img/gallery/5.jpg\"><img src=\"img/gallery/5.jpg\" alt=\"\"></a>\n                                <a class=\"kilimanjaro_works_img\" href=\"img/gallery/7.jpg\"><img src=\"img/gallery/7.jpg\" alt=\"\"></a>\n                                <a class=\"kilimanjaro_works_img\" href=\"img/gallery/10.jpg\"><img src=\"img/gallery/10.jpg\" alt=\"\"></a>\n                                <a class=\"kilimanjaro_works_img\" href=\"img/gallery/11.jpg\"><img src=\"img/gallery/11.jpg\" alt=\"\"></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- Footer Bottom Area Start -->\n        <div class=\" kilimanjaro_bottom_header_one section_padding_50 text-center\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-12\">\n                        <p>© All Rights Reserved by <a href=\"#\">Webublogoverflow.blogspot<i class=\"fa fa-love\"></i></a></p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </footer>\n<!-- END FOOTER COMPONENT -->\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
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
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
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
    // Function to store the data in the local storage
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        // Save our token and user in the component
        this.authToken = token;
        this.user = user;
    };
    // Function to get the token stored in the local storage
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    // Function to return if the token is not expired
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
        return re.test(email);
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

module.exports = __webpack_require__(/*! /home/uno/Escritorio/SyTW/Proyecto SyTW/E01/angular-src/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map