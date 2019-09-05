webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/admin/admin.module": [
		"./src/app/admin/admin.module.ts",
		"admin.module"
	],
	"app/layout/layout.module": [
		"./src/app/layout/layout.module.ts",
		"common",
		"layout.module"
	],
	"app/layout/user_home/user_home.module": [
		"./src/app/layout/user_home/user_home.module.ts",
		"common"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "body{\n    background-color: rgb(255, 255, 255) !important;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_principal_service__ = __webpack_require__("./src/app/shared/services/principal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(principal, router) {
        this.principal = principal;
        this.router = router;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log("alert");
        // window.reload()
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__shared_services_principal_service__["a" /* PrincipalService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_font_awesome__ = __webpack_require__("./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ckeditor_ckeditor5_angular__ = __webpack_require__("./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("./src/app/app.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_principal_service__ = __webpack_require__("./src/app/shared/services/principal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__loggedIn_guard__ = __webpack_require__("./src/app/loggedIn.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_services_pager_service__ = __webpack_require__("./src/app/shared/services/pager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_reset_password_reset_password_component__ = __webpack_require__("./src/app/shared/reset-password/reset-password.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__shared_reset_password_reset_password_component__["a" /* ResetPasswordComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_5__ckeditor_ckeditor5_angular__["a" /* CKEditorModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__shared_services_principal_service__["a" /* PrincipalService */],
                __WEBPACK_IMPORTED_MODULE_9__loggedIn_guard__["a" /* LoggedInGuard */],
                __WEBPACK_IMPORTED_MODULE_10__shared_services_pager_service__["a" /* PagerService */]
                /*  { provide: LocationStrategy, useClass: HashLocationStrategy } */
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_reset_password_reset_password_component__ = __webpack_require__("./src/app/shared/reset-password/reset-password.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'reset-password/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__shared_reset_password_reset_password_component__["a" /* ResetPasswordComponent */],
    },
    {
        path: 'layout',
        loadChildren: 'app/layout/layout.module#LayoutModule',
    },
    {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule',
    },
    {
        path: '',
        redirectTo: 'layout',
        pathMatch: 'full'
    },
    { path: '**', redirectTo: 'not-found' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: false })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/loggedIn.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggedInGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_principal_service__ = __webpack_require__("./src/app/shared/services/principal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoggedInGuard = (function () {
    function LoggedInGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoggedInGuard.prototype.canActivate = function () {
        console.log(this.authService.isLoggedIn);
        if (localStorage.getItem('authenticationtoken') || localStorage.getItem('refreshtoken')) {
            // logged in so return true
            console.log(this.authService.isLoggedIn);
            return true;
        }
        else {
            this.router.navigate(['/layout/home']);
            // this.toastr.error('Echec de la connexion!', 'Erreur');
            return false;
        }
    };
    LoggedInGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_principal_service__["a" /* PrincipalService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoggedInGuard);
    return LoggedInGuard;
}());



/***/ }),

/***/ "./src/app/request-util.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HOST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return IMAGE_HOST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createRequestOption; });
/* unused harmony export getUniqueId */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");

var HOST = 'https://santassis-afrique.com/api/';
var IMAGE_HOST = 'https://santassis-afrique.com/storage/prodcts/';
//'http://127.0.0.1:8000/api/'
// 'http://127.0.0.1:8000/storage/prodcts/';
var createRequestOption = function (req, accept) {
    if (accept === void 0) { accept = false; }
    var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* BaseRequestOptions */]();
    if (req) {
        var params = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* URLSearchParams */]();
        params.set('page', req.page);
        params.set('size', req.size);
        if (req.sort) {
            params.paramsMap.set('sort', req.sort);
        }
        params.set('query', req.query);
        options.params = params;
        // options.params.append('page', req.page);
    }
    var token = window.localStorage.getItem('authenticationtoken');
    options.headers.append('Accept', '*/*');
    options.headers.append('Access-Control-Allow-Headers', '*');
    // options.params.append('search',req);
    options.headers.append('Access-Control-Allow-Origin', '*');
    //  options.headers.append('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT');
    //  options.headers.append('Content-Type', 'application/json');
    if (token) {
        // token = token.replace(/^["']/, '');
        token = token.replace(/["']$/, '');
        options.headers.append('Authorization', 'Bearer ' + token);
    }
    return options;
};
var getUniqueId = function (prefix, suffix) {
    if (prefix === void 0) { prefix = '0'; }
    if (suffix === void 0) { suffix = '0'; }
    return '' + Date.now();
};


/***/ }),

/***/ "./src/app/shared/reset-password/reset-password.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n\n<!-- Modal reset password-->\n<div class=\"modal fade\" id=\"resetPassword\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Mot de Passe</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" [disabled]=\"isSaving\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <p class=\"text-center\">\n                    <em style=\"color:red\">{{error}}</em>\n                </p>\n                <form name=\"editForm\" role=\"form\" novalidate (ngSubmit)=\"resetPassword()\" #editForm=\"ngForm\">\n                     <div class=\"form-group\">\n                        <label for=\"username\">Adresse Mail:</label>\n                        <input type=\"email\" class=\"form-control\" id=\"email\" name=\"username\" [(ngModel)]=\"model.email\" #username=\"ngModel\" required>\n                        <small *ngIf=\"username.touched && username.invalid\" class=\"help-block text-danger\">Email requis</small>\n                    </div>\n\n                     <div class=\"form-group\" [ngClass]=\"{ 'has-error': !password.valid }\">\n                        <label for=\"password\">Mot de passe</label>\n                        <input type=\"password\" minlength=\"6\" class=\"form-control\" validateEqual=\"password_confirmation\" reverse=\"true\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n                        <small *ngIf=\"password.touched && password.invalid\" class=\"help-block text-danger\">Password requis</small>\n                    </div>\n\n                    <div class=\"form-group\" [ngClass]=\"{ 'has-error': !password_confirmation.valid }\">\n                        <label for=\"password_confirmation\">Confirmez Mot de passe</label>\n                        <input type=\"password\" minlength=\"6\" class=\"form-control\" name=\"password_confirmation\" validateEqual=\"password\" [(ngModel)]=\"model.password_confirmation\" #password_confirmation=\"ngModel\" required />\n                        <small *ngIf=\"password_confirmation.touched && password_confirmation.invalid\" class=\"help-block text-danger\">Les mots de passes ne correspondent pas</small>\n                    </div>\n                    \n                    <div class=\"form-group\">\n                        <i *ngIf=\"isSaving\" class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i>\n                        <button type=\"submit\" class=\"btn btn-primary snackbar-toggler\" style=\"float: right\" [disabled]=\"editForm.form.invalid || isSaving\">{{isSaving?'....':''}}\n                                    Valiider\n                                </button>\n                    </div>\n\n                    \n\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"info-token\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h6 class=\"modal-title\" id=\"exampleModalLabel\"> ALERT INFOS !!</h6>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <form name=\"infoToken\">\n                    <div class=\"container\">\n                        <div class=\"row justify-content-md-center\">\n                            <div class=\"text-danger font-weight-bold m-4\">\n                            {{message}}\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <button type=\"button\" class=\"btn btn-danger float-right\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"closeModal()\">\n                            <span aria-hidden=\"true\"> Fermer </span>\n                        </button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/reset-password/reset-password.component.scss":
/***/ (function(module, exports) {

module.exports = ".topnav {\n  border-radius: 0;\n  background-color: #eeeeee;\n  padding: 6px;\n  z-index: 2; }\n  .topnav .text-center {\n    text-align: center;\n    padding-left: 0;\n    cursor: pointer; }\n  .topnav .top-right-nav .buy-now a {\n    color: #999; }\n  .topnav .top-right-nav .dropdown-menu {\n    top: 40px;\n    right: -5px;\n    left: auto; }\n  .topnav .top-right-nav .dropdown-menu .message-preview .media .media-body .media-heading {\n      font-size: 14px;\n      font-weight: bold;\n      margin-bottom: 0; }\n  .topnav .top-right-nav .dropdown-menu .message-preview .media .media-body p {\n      margin: 0; }\n  .topnav .top-right-nav .dropdown-menu .message-preview .media .media-body p.last {\n      font-size: 13px;\n      margin-bottom: 0; }\n  .topnav .top-right-nav .dropdown-menu hr {\n      margin-top: 1px;\n      margin-bottom: 4px; }\n  .messages {\n  width: 300px; }\n  .messages .media {\n    border-bottom: 1px solid #DDD;\n    padding: 5px 10px; }\n  .messages .media:last-child {\n      border-bottom: none; }\n  .messages .media-body h5 {\n    font-size: 13px;\n    font-weight: 600; }\n  .messages .media-body .small {\n    margin: 0; }\n  .messages .media-body .last {\n    font-size: 12px;\n    margin: 0; }\n  .header .navbar {\n  background: #eeeeee !important; }\n  .header .logo {\n  font-family: 'Kaushan Script', 'Helvetica Neue', Helvetica, Arial, cursive; }\n  .curseur {\n  cursor: pointer; }\n  .text-danger {\n  color: red; }\n"

/***/ }),

/***/ "./src/app/shared/reset-password/reset-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_principal_service__ = __webpack_require__("./src/app/shared/services/principal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetPasswordComponent = (function () {
    function ResetPasswordComponent(router, principal, route) {
        this.router = router;
        this.principal = principal;
        this.route = route;
        this.error = '';
        this.errorSignUp = '';
        this.model = {};
        this.isAuthenticated = false;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log(params);
            if (params['id']) {
                _this.current = params['id'];
                _this.verifyToken();
            }
        });
    };
    ResetPasswordComponent.prototype.verifyToken = function () {
        var _this = this;
        this.principal.checkToken(this.current)
            .subscribe(function (resp) {
            console.log(resp);
            _this.model = {};
            jQuery('#resetPassword').modal('show');
        }, function (error) {
            console.log(error);
            jQuery('#info-token').modal('show');
            _this.message = error.message || 'Ce Token est invalide';
        });
    };
    ResetPasswordComponent.prototype.resetPassword = function () {
        var _this = this;
        this.model.token = this.current;
        this.principal.resetPassword(this.model)
            .subscribe(function (resp) {
            console.log(resp);
            _this.model = {};
            _this.message = resp.message || 'Succès de la réinitialisation de mot de passe;';
            jQuery('#resetPassword').modal('show');
        }, function (error) {
            console.log(error);
            _this.message = error.message || 'Une erreur est survenue, merci de réessayer ultérieurement';
            jQuery('#info-token').modal('show');
        });
    };
    ResetPasswordComponent.prototype.closeModal = function () {
        var connexionModal = jQuery('#resetPassword,#info-token');
        connexionModal.modal('hide');
        this.router.navigate(['/layout/home']);
    };
    ResetPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'reset-component',
            template: __webpack_require__("./src/app/shared/reset-password/reset-password.component.html"),
            styles: [__webpack_require__("./src/app/shared/reset-password/reset-password.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__services_principal_service__["a" /* PrincipalService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/pager.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PagerService = (function () {
    function PagerService() {
    }
    PagerService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        // ensure current page isn't out of range
        if (currentPage < 1) {
            currentPage = 1;
        }
        else if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = Array.from(Array((endPage + 1) - startPage).keys()).map(function (i) { return startPage + i; });
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    PagerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], PagerService);
    return PagerService;
}());



/***/ }),

/***/ "./src/app/shared/services/principal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalService; });
/* unused harmony export CONNEXION */
/* unused harmony export AUTH_PROVIDERS */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__request_util__ = __webpack_require__("./src/app/request-util.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PrincipalService = (function () {
    function PrincipalService(router, http) {
        this.router = router;
        this.http = http;
        this.token = '';
        this.loginUrl = __WEBPACK_IMPORTED_MODULE_4__request_util__["a" /* HOST */] + 'login';
        this.registerUrl = __WEBPACK_IMPORTED_MODULE_4__request_util__["a" /* HOST */] + 'register';
        this.resetingPassTokenUrl = __WEBPACK_IMPORTED_MODULE_4__request_util__["a" /* HOST */] + 'create-pass-token';
        this.checkTokenUrl = __WEBPACK_IMPORTED_MODULE_4__request_util__["a" /* HOST */] + 'find';
        this.resetPasswordUrl = __WEBPACK_IMPORTED_MODULE_4__request_util__["a" /* HOST */] + 'reset';
        this.disconnectUrl = __WEBPACK_IMPORTED_MODULE_4__request_util__["a" /* HOST */] + 'logout';
        this.userUrl = __WEBPACK_IMPORTED_MODULE_4__request_util__["a" /* HOST */] + 'user';
        this.req = {};
        // this.carmesUrl = this.loginUrl + '/carte_puce/appCarte.php';
        this.isLoggedIn = false;
    }
    PrincipalService.prototype.login = function (data) {
        var _this = this;
        console.log(data);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* BaseRequestOptions */]();
        options.headers.append('Content-Type', 'application/json');
        return this.http
            .post(this.loginUrl, data, options).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* map */])(function (res) {
            _this.isLoggedIn = true;
            // console.log('tout de travers');
            return res.json();
        }));
    };
    PrincipalService.prototype.register = function (data) {
        console.log(data);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* BaseRequestOptions */]();
        options.headers.append('Content-Type', 'application/json');
        return this.http
            .post(this.registerUrl, data, options).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* map */])(function (res) {
            return res.json();
        }));
    };
    PrincipalService.prototype.resetingPasswordToken = function (data) {
        console.log(data);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* BaseRequestOptions */]();
        options.headers.append('Content-Type', 'application/json');
        return this.http
            .post(this.resetingPassTokenUrl, data, options).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* map */])(function (res) {
            return res.json();
        }));
    };
    PrincipalService.prototype.checkToken = function (id) {
        console.log(id);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* BaseRequestOptions */]();
        options.headers.append('Content-Type', 'application/json');
        return this.http
            .get(this.checkTokenUrl + "/" + id, options).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* map */])(function (res) {
            return res.json();
        }));
    };
    PrincipalService.prototype.resetPassword = function (data) {
        console.log(data);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* BaseRequestOptions */]();
        options.headers.append('Content-Type', 'application/json');
        return this.http
            .post(this.resetPasswordUrl, data, options).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* map */])(function (res) {
            return res.json();
        }));
    };
    PrincipalService.prototype.getDisconnect = function () {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* BaseRequestOptions */]();
        options.headers.append('Content-Type', 'application/json');
        options.headers.append('Authorization', 'Bearer ' + localStorage.authenticationtoken);
        return this.http
            .get(this.disconnectUrl, options).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* map */])(function (res) {
            return res.json();
        }));
    };
    PrincipalService.prototype.connectedUser = function () {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* BaseRequestOptions */]();
        options.headers.append('Content-Type', 'application/json');
        options.headers.append('Authorization', 'Bearer ' + localStorage.authenticationtoken);
        return this.http
            .get(this.userUrl, options).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* map */])(function (res) {
            return res.json();
        }));
    };
    PrincipalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], PrincipalService);
    return PrincipalService;
}());

var CONNEXION;
(function (CONNEXION) {
    CONNEXION[CONNEXION["AUTHFAIL"] = 0] = "AUTHFAIL";
    CONNEXION[CONNEXION["CONNECTING"] = 1] = "CONNECTING";
    CONNEXION[CONNEXION["CONNECTED"] = 2] = "CONNECTED";
})(CONNEXION || (CONNEXION = {}));
var AUTH_PROVIDERS = [
    { provide: PrincipalService, useClass: PrincipalService },
];


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map