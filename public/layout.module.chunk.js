webpackJsonp(["layout.module"],{

/***/ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ng2SearchPipeModule; });
/* unused harmony export Ng2SearchPipe */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var Ng2SearchPipe = (function () {
    function Ng2SearchPipe() {
    }
    /**
     * @param {?} items object from array
     * @param {?} term term's search
     * @return {?}
     */
    Ng2SearchPipe.prototype.transform = function (items, term) {
        if (!term || !items)
            return items;
        return Ng2SearchPipe.filter(items, term);
    };
    /**
     *
     * @param {?} items List of items to filter
     * @param {?} term  a string term to compare with every property of the list
     *
     * @return {?}
     */
    Ng2SearchPipe.filter = function (items, term) {
        var /** @type {?} */ toCompare = term.toLowerCase();
        /**
         * @param {?} item
         * @param {?} term
         * @return {?}
         */
        function checkInside(item, term) {
            for (var /** @type {?} */ property in item) {
                if (item[property] === null || item[property] == undefined) {
                    continue;
                }
                if (typeof item[property] === 'object') {
                    if (checkInside(item[property], term)) {
                        return true;
                    }
                }
                if (item[property].toString().toLowerCase().includes(toCompare)) {
                    return true;
                }
            }
            return false;
        }
        return items.filter(function (item) {
            return checkInside(item, term);
        });
    };
    return Ng2SearchPipe;
}());
Ng2SearchPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */], args: [{
                name: 'filter',
                pure: false
            },] },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
];
/**
 * @nocollapse
 */
Ng2SearchPipe.ctorParameters = function () { return []; };
var Ng2SearchPipeModule = (function () {
    function Ng2SearchPipeModule() {
    }
    return Ng2SearchPipeModule;
}());
Ng2SearchPipeModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */], args: [{
                declarations: [Ng2SearchPipe],
                exports: [Ng2SearchPipe]
            },] },
];
/**
 * @nocollapse
 */
Ng2SearchPipeModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ng2-search-filter.es5.js.map


/***/ }),

/***/ "./src/app/layout/about-us/about-us.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/about-us/about-us.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n<header class=\"masthead\">\n    <div class=\"container\">\n        <div class=\"intro-text\">\n\n            <div class=\"first-box\">\n                <div class=\"intro-lead-in\"> Gagnez plus d'une manière inattendue ! </div>\n            </div>\n            <span></span>\n            <span></span>\n            <div class=\"second-box\">\n                <div class=\"intro-heading \">Réduisez Considérablement votre budget Santé\n                </div>\n            </div>\n            <!--<a class=\"btn btn-danger btn-xl text-uppercase js-scroll-trigger active\" href=\"#services\">plus</a> -->\n        </div>\n    </div>\n</header>\n\n<!-- Services -->\n<section id=\"about-us\">\n    <div class=\"container\">\n        <div class=\"row text-justify\">\n            <div class=\"row\">\n                <br>\n                <div class=\" text-center\">\n                    <br>\n                    <h3 class=\" font-weight-bold\"> Qui Sommes-nous ? </h3>\n                </div>\n                <div style=\"font-size: 18px\">\n\n                    <p>\n                        Une équipe de personnes hautement qualifiées (juristes, médicaux, paramédicaux et informaticiens) ayant été personnellement éprouvés par des problèmes de santé. Ces tribulations ont fait de nous des apporteurs de solution pour ceux qui sont confrontés\n                        aux mêmes difficultés, d’où la naissance de SANTASSIS Afrique, une entreprise créée pour offrir aux malades et à leurs familles une assistance sanitaire non médicale qui se décline en quatre services :\n                    </p>\n                    <br>\n                    <br>\n\n\n                    <ul style=\"font-size: 20px\">\n                        <li>\n                            <span class=\" font-weight-bold\"> SANTASSIS TROC :</span> service de recyclage d’articles sanitaires. Notre plateforme offre à nos clients l’opportunité d’aider et/ou de gagner de l’argent inattendu sur des articles y exposés\n                            qui, autrement seraient destinés à attendre leurs dates de péremption dans un tiroir ou un placard, pour ensuite rejoindre les poubelles. Grâce à notre site, ces articles peuvent être offerts, échangés ou vendus à des prix\n                            défiants toutes concurrences, c’est-à-dire la moitié de leur valeur réelle.\n                        </li>\n                        <br>\n                        <li>\n                            <span class=\" font-weight-bold\">SANTASSIS NEWS :</span> service d’informations sanitaires. Ce service publie des informations et diffuse les conseils des professionnels de la santé, fait connaître les prouesses réalisées dans\n                            les formations sanitaires.\n                        </li>\n                        <br>\n                        <li>\n                            <span class=\" font-weight-bold\">SANTASSIS KEEPER :</span> service de garde-malades. Ce service vient en soutien aux personnes non-autonomes ou ayant besoin d’une assistance constante dans les centres de santé. Il fournit des\n                            plats cuisinés conçus par des nutritionnistes et adaptés au régime du malade.\n                        </li>\n                        <br>\n                        <li>\n                            <span class=\" font-weight-bold\"> SANTASSIS EXPRESS :</span> service de coursiers. Nos agents sont disponibles pour toutes sortes de courses hors des centres de santé : recherche, achat et livraison de médicaments ou tous produits\n                            sanitaires, repas, appels, interventions etc.\n                        </li>\n                    </ul>\n                    <br>\n                    <div>\n                        SANTASSIS AFRIQUE ne présente que des articles de seconde main et ne donne pas de garantie. Cependant, les articles sensibles font l’objet d’un contrôle qualité vérifiable et accessible aux abonnés. Les informations ayant un caractère de données personnelles\n                        protégées par la loi sont sécurisées. SANTASSIS AFRIQUE se conforme à la législation du commerce et est membre de la Chambre de commerce et d’industrie du Bénin (CCIB).\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</section>\n\n<!-- Portfolio Grid -->\n\n\n\n<!-- Clients -->\n<section class=\"py-5\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-3 col-sm-6\">\n                <a href=\"#\">\n                    <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/logos/envato.jpg\" alt=\"\">\n                </a>\n            </div>\n            <div class=\"col-md-3 col-sm-6\">\n                <a href=\"#\">\n                    <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/logos/designmodo.jpg\" alt=\"\">\n                </a>\n            </div>\n            <div class=\"col-md-3 col-sm-6\">\n                <a href=\"#\">\n                    <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/logos/themeforest.jpg\" alt=\"\">\n                </a>\n            </div>\n            <div class=\"col-md-3 col-sm-6\">\n                <a href=\"#\">\n                    <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/logos/creative-market.jpg\" alt=\"\">\n                </a>\n            </div>\n        </div>\n    </div>\n</section>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- Contact -->\n<section id=\"contact\">\n    <br><br>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 text-center\">\n                <p></p>\n                <h2 class=\"section-heading text-uppercase\">Nous Contacter</h2>\n                <h3 class=\"section-subheading text-muted\">Nous restons toujours à votre écoute.</h3>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <form id=\"contactForm\" (ngSubmit)=\"sendMessage()\" novalidate>\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <input class=\"form-control text-black\" name=\"fullname\" [(ngModel)]=\"contact.fullname\" id=\"fullname\" type=\"text\" placeholder=\"Votre nom et prénoms *\" required data-validation-required-message=\"Entrez votre nom & Prénoms.\">\n                                <p class=\"help-block text-danger\"></p>\n                            </div>\n\n                            <div class=\"form-group\">\n                                <input class=\"form-control text-black\" name=\"emailC\" [(ngModel)]=\"contact.email\" id=\"emailC\" type=\"email\" placeholder=\"Votre adresse mail *\" required data-validation-required-message=\"Entrez votre adresse email.\">\n                                <p class=\"help-block text-danger\"></p>\n                            </div>\n                            <div class=\"form-group\">\n                                <input class=\"form-control\" name=\"telephoneC\" [(ngModel)]=\"contact.phone\" id=\"phoneC\" type=\"tel\" placeholder=\"Téléphone *\" required data-validation-required-message=\"Entrez votre numero de Téléphone.\">\n                                <p class=\"help-block text-danger\"></p>\n                            </div>\n                        </div>\n\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <textarea class=\"form-control\" name=\"messageC\" [(ngModel)]=\"contact.content\" id=\"messageC\" placeholder=\"Votre Message *\" required data-validation-required-message=\"Entrez votre message.\"></textarea>\n                                <p class=\"help-block text-danger\"></p>\n                            </div>\n                        </div>\n                        <div class=\"clearfix\"></div>\n                        <div class=\"col-lg-12 text-center\">\n                            <div id=\"success\"></div>\n                            <button id=\"sendMessageButton\" class=\"btn btn-light text-uppercase active\" type=\"submit\">Envoyez </button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</section>\n\n<!-- Footer -->\n<footer>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <span class=\"copyright\">Tous droits réservés &copy;  SANTASSIS AFRIQUE  2019</span>\n            </div>\n            <div class=\"col-md-4\">\n                <ul class=\"list-inline social-buttons\">\n                    <li class=\"list-inline-item\">\n                        <a href=\"#\">\n                            <i class=\"fa fa-twitter\"></i>\n                        </a>\n                    </li>\n                    <li class=\"list-inline-item\">\n                        <a href=\"#\">\n                            <i class=\"fa fa-facebook\"></i>\n                        </a>\n                    </li>\n                    <li class=\"list-inline-item\">\n                        <a href=\"#\">\n                            <i class=\"fa fa-linkedin\"></i>\n                        </a>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"col-md-4\">\n                <ul class=\"list-inline quicklinks\">\n                    <li class=\"list-inline-item\">\n                        <a href=\"#\">Règles De Sécurités</a>\n                    </li>\n                    <li class=\"list-inline-item\">\n                        <a href=\"#\">Conditions d'utilisation</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</footer>"

/***/ }),

/***/ "./src/app/layout/about-us/about-us.component.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_us_component__ = __webpack_require__("./src/app/layout/about-us/about-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_us_service__ = __webpack_require__("./src/app/layout/about-us/about-us.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AboutUsComponentModule = (function () {
    function AboutUsComponentModule() {
    }
    AboutUsComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__about_us_component__["a" /* AboutUsComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__about_us_service__["a" /* AboutUsService */],
            ],
        })
    ], AboutUsComponentModule);
    return AboutUsComponentModule;
}());



/***/ }),

/***/ "./src/app/layout/about-us/about-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_us_service__ = __webpack_require__("./src/app/layout/about-us/about-us.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutUsComponent = (function () {
    function AboutUsComponent(aboutUsService) {
        this.aboutUsService = aboutUsService;
        this.contact = {};
        this.loading = false;
    }
    AboutUsComponent.prototype.ngOnInit = function () {
        SmoothScroll();
    };
    AboutUsComponent.prototype.sendMessage = function () {
        var _this = this;
        this.loading = true;
        this.aboutUsService.sendMessage(this.contact)
            .subscribe(function (resp) {
            console.log(resp);
            // this.contact = resp.data;
            _this.loading = false;
        }, function (error) {
            // console.log(error);
            return;
        });
    };
    AboutUsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about-us',
            template: __webpack_require__("./src/app/layout/about-us/about-us.component.html"),
            styles: [__webpack_require__("./src/app/layout/about-us/about-us.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__about_us_service__["a" /* AboutUsService */]])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/layout/about-us/about-us.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_principal_service__ = __webpack_require__("./src/app/shared/services/principal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__request_util__ = __webpack_require__("./src/app/request-util.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AboutUsService = (function () {
    function AboutUsService(router, http, principal) {
        this.router = router;
        this.http = http;
        this.newsUrl = __WEBPACK_IMPORTED_MODULE_5__request_util__["a" /* HOST */] + 'messages';
        // this.carmesUrl = this.loginUrl + '/carte_puce/appCarte.php';
    }
    AboutUsService.prototype.sendMessage = function (data) {
        console.log(data);
        var options = Object(__WEBPACK_IMPORTED_MODULE_5__request_util__["c" /* createRequestOption */])();
        // options.headers.append('Content-Type','application/json')
        return this.http
            .post(this.newsUrl, data, options).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* map */])(function (res) {
            return res.json();
        }));
    };
    AboutUsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__shared_services_principal_service__["a" /* PrincipalService */]])
    ], AboutUsService);
    return AboutUsService;
}());



/***/ }),

/***/ "./src/app/layout/custom-password-validation.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqualValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EqualValidator = (function () {
    function EqualValidator(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    EqualValidator_1 = EqualValidator;
    Object.defineProperty(EqualValidator.prototype, "isReverse", {
        get: function () {
            if (!this.reverse)
                return false;
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    EqualValidator.prototype.validate = function (c) {
        // self value
        var v = c.value;
        // control vlaue
        var e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value && !this.isReverse) {
            return {
                validateEqual: false
            };
        }
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length)
                e.setErrors(null);
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({ validateEqual: false });
        }
        return null;
    };
    EqualValidator = EqualValidator_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALIDATORS */], useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* forwardRef */])(function () { return EqualValidator_1; }), multi: true }
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Attribute */])('validateEqual')),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Attribute */])('reverse')),
        __metadata("design:paramtypes", [String, String])
    ], EqualValidator);
    return EqualValidator;
    var EqualValidator_1;
}());



/***/ }),

/***/ "./src/app/layout/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n<header class=\"masthead\">\n    <div class=\"container\">\n        <div class=\"intro-text\">\n\n            <div class=\"first-box\">\n                <div class=\"intro-lead-in\"> Gagnez plus d'une manière inattendue ! </div>\n            </div>\n            <span></span>\n            <span></span>\n            <div class=\"second-box\">\n                <div class=\"intro-heading \">Réduisez Considérablement votre budget Santé\n                </div>\n            </div>\n            <!--<a class=\"btn btn-danger btn-xl text-uppercase js-scroll-trigger active\" href=\"#services\">plus</a> -->\n        </div>\n    </div>\n</header>\n\n<!-- Services -->\n<section id=\"services\">\n    <div class=\"container\">\n        <div class=\"row text-center\">\n            <div class=\"col-md-4\" style=\"margin-top: -16px;\">\n                <span class=\"row justify-content-center\">\n                    <div style=\"border:3px solid white;height:auto; width:140px;border-radius:60%\">\n                    <span class=\"fa-stack fa-4x box-style box-background-1\" >\n                        <i class=\"fa fa-laptop fa-stack-1x fa-inverse\"></i>\n                    </span>\n            </div>\n            </span>\n            <h4 class=\"service-heading\">Vente de Produits</h4>\n            <p class=\"text-muted\" style=\"color:#ced9e1 !important\">\n                à prix rabais (50% minimum) permettant au vendeur de récupérer des sous inespérés après le changement ou la fin du traitement, et à l’acheteur de se procurer un produit selon ses moyens afin de ne pas manquer un traitement à cause de sa situation financière\n                précaire.\n            </p>\n        </div>\n\n\n        <div class=\"col-md-4\" style=\"margin-top: -16px;\">\n            <span class=\"row justify-content-center\">\n                    <div style=\"border:3px solid white;height:auto; width:140px;border-radius:60%\">\n                    <span class=\"fa-stack fa-4x box-style box-background-2\" >\n                        <i class=\"fa fa-laptop fa-stack-1x fa-inverse\"></i>\n                    </span>\n        </div>\n        </span>\n        <h4 class=\"service-heading\">Dons de Produits</h4>\n        <p class=\"text-muted\" style=\"color:#ced9e1 !important\">\n            nous offrons l’opportunité à une personne qui ne voudrait pas vendre son produit pour diverses raisons, de faire un acte de générosité en le mettant gracieusement à la disposition d’une autre personne dans le besoin, plutôt que de le laisser périmer et/ou\n            finir dans une poubelle.\n        </p>\n    </div>\n\n    <div class=\"col-md-4\" style=\"margin-top: -16px;\">\n        <span class=\"row justify-content-center\">\n                    <div style=\"border:3px solid white;height:auto; width:140px;border-radius:60%\">\n                        <span class=\"fa-stack fa-4x box-style box-background-3\" >\n                            <i class=\"fa fa-laptop fa-stack-1x fa-inverse\"></i>\n                        </span>\n    </div>\n    </span>\n    <h4 class=\"service-heading\">L'échange</h4>\n    <p class=\"text-muted\" style=\"color:#ced9e1 !important\">\n        quoi qu’improbable, cette opération deviendrait possible au moment où le cas deviendrait une réalité pour des acteurs de la plate- forme dont le nombre s’accroitra inévitablement.\n    </p>\n    </div>\n    </div>\n    <br>\n    <div class=\"row text-center text-white font-weight-bold\">\n        <div class=\"offset-md-4\">\n            ^\n            <h4> Notre Service SANTASSIS TROCK</h4>\n        </div>\n    </div>\n    </div>\n</section>\n\n<!-- Portfolio Grid -->\n\n\n\n<!-- Clients -->\n<section class=\"py-5\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-3 col-sm-6\">\n                <a href=\"#\">\n                    <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/logos/envato.jpg\" alt=\"\">\n                </a>\n            </div>\n            <div class=\"col-md-3 col-sm-6\">\n                <a href=\"#\">\n                    <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/logos/designmodo.jpg\" alt=\"\">\n                </a>\n            </div>\n            <div class=\"col-md-3 col-sm-6\">\n                <a href=\"#\">\n                    <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/logos/themeforest.jpg\" alt=\"\">\n                </a>\n            </div>\n            <div class=\"col-md-3 col-sm-6\">\n                <a href=\"#\">\n                    <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/logos/creative-market.jpg\" alt=\"\">\n                </a>\n            </div>\n        </div>\n    </div>\n</section>\n\n\n\n<!-- Services 2-->\n<section id=\"services2\">\n    <div class=\"row text-center text-white font-weight-bold\">\n        <div class=\"offset-md-5\">\n            <br><br>\n            <h4> NOS AUTRES SERVICES </h4>\n        </div>\n    </div>\n    <br><br>\n    <div class=\"container\">\n        <div class=\"row text-center\">\n            <div class=\"col-md-4\" style=\"margin-top: -16px;\">\n                <span class=\"row justify-content-center\">\n            <div style=\"border:3px solid white;height:auto; width:140px;border-radius:60%\">\n              <span class=\"fa-stack fa-4x box-style box-background-1\" >\n                <i class=\"fa fa-laptop fa-stack-1x fa-inverse\"></i>\n              </span>\n            </div>\n            </span>\n            <h4 class=\"service-heading\">SANTASSIS NEWS</h4>\n            <p class=\"text-muted\" style=\"color:#b2b9bf !important\">\n\n            </p>\n        </div>\n\n\n        <div class=\"col-md-4\" style=\"margin-top: -16px;\">\n            <span class=\"row justify-content-center\">\n            <div style=\"border:3px solid white;height:auto; width:140px;border-radius:60%\">\n              <span class=\"fa-stack fa-4x box-style box-background-2\" >\n                <i class=\"fa fa-laptop fa-stack-1x fa-inverse\"></i>\n              </span>\n        </div>\n        </span>\n        <h4 class=\"service-heading\">SANTASSIS EXPRESS</h4>\n        <p class=\"text-muted\" style=\"color:#b2b9bf !important\">\n\n        </p>\n    </div>\n\n    <div class=\"col-md-4\" style=\"margin-top: -16px;\">\n        <span class=\"row justify-content-center\">\n            <div style=\"border:3px solid white;height:auto; width:140px;border-radius:60%\">\n              <span class=\"fa-stack fa-4x box-style box-background-3\" >\n                <i class=\"fa fa-laptop fa-stack-1x fa-inverse\"></i>\n              </span>\n    </div>\n    </span>\n    <h4 class=\"service-heading\">SANTASSIS KEEPER</h4>\n    <p class=\"text-muted\" style=\"color:#b2b9bf !important\">\n    </p>\n    </div>\n    </div>\n    <br>\n\n    </div>\n</section>\n\n\n\n\n\n\n\n\n<!-- Clients -->\n<section class=\"py-5\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-3 col-sm-6\">\n                <a href=\"#\">\n                    <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/logos/envato.jpg\" alt=\"\">\n                </a>\n            </div>\n            <div class=\"col-md-3 col-sm-6\">\n                <a href=\"#\">\n                    <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/logos/designmodo.jpg\" alt=\"\">\n                </a>\n            </div>\n            <div class=\"col-md-3 col-sm-6\">\n                <a href=\"#\">\n                    <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/logos/themeforest.jpg\" alt=\"\">\n                </a>\n            </div>\n            <div class=\"col-md-3 col-sm-6\">\n                <a href=\"#\">\n                    <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/logos/creative-market.jpg\" alt=\"\">\n                </a>\n            </div>\n        </div>\n    </div>\n</section>\n\n\n\n<!-- Services 2-->\n<section id=\"services3\">\n    <div class=\"offset-md-5\">\n        <br><br>\n        <h4> LES DERNIERS NEWS ... </h4>\n    </div>\n    <br> <br>\n    <div class=\"container\">\n        <div class=\"row text-center\">\n            <div class=\"col-md-4\" style=\"margin-top: -16px;\">\n                <span class=\"row justify-content-center\">\n                <div style=\"border:3px solid white;height:auto; width:140px;border-radius:60%\">\n                  <span class=\"fa-stack fa-4x box-style box-background-1\" >\n                    <i class=\"fa fa-laptop fa-stack-1x fa-inverse\"></i>\n                  </span>\n            </div>\n            </span>\n            <h4 class=\"service-heading\">Vente de Produits</h4>\n            <p class=\"text-muted\" style=\"color:#b2b9bf !important\">\n                à prix rabais (50% minimum) permettant au vendeur de récupérer des sous inespérés après le changement ou la fin du traitement, et à l’acheteur de se procurer un produit selon ses moyens afin de ne pas manquer un traitement à cause de sa situation financière\n                précaire.\n            </p>\n        </div>\n\n\n        <div class=\"col-md-4\" style=\"margin-top: -16px;\">\n            <span class=\"row justify-content-center\">\n                <div style=\"border:3px solid white;height:auto; width:140px;border-radius:60%\">\n                  <span class=\"fa-stack fa-4x box-style box-background-2\" >\n                    <i class=\"fa fa-laptop fa-stack-1x fa-inverse\"></i>\n                  </span>\n        </div>\n        </span>\n        <h4 class=\"service-heading\">Dons de Produits</h4>\n        <p class=\"text-muted\" style=\"color:#b2b9bf !important\">\n            nous offrons l’opportunité à une personne qui ne voudrait pas vendre son produit pour diverses raisons, de faire un acte de générosité en le mettant gracieusement à la disposition d’une autre personne dans le besoin, plutôt que de le laisser périmer et/ou\n            finir dans une poubelle.\n        </p>\n    </div>\n\n    <div class=\"col-md-4\" style=\"margin-top: -16px;\">\n        <span class=\"row justify-content-center\">\n                <div style=\"border:3px solid white;height:auto; width:140px;border-radius:60%\">\n                  <span class=\"fa-stack fa-4x box-style box-background-3\" >\n                    <i class=\"fa fa-laptop fa-stack-1x fa-inverse\"></i>\n                  </span>\n    </div>\n    </span>\n    <h4 class=\"service-heading\">L'échange</h4>\n    <p class=\"text-muted\" style=\"color:#b2b9bf !important\">\n        quoi qu’improbable, cette opération deviendrait possible au moment où le cas deviendrait une réalité pour des acteurs de la plate- forme dont le nombre s’accroitra inévitablement.\n    </p>\n    </div>\n    </div>\n    <br>\n\n    </div>\n</section>\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- Contact -->\n<section id=\"contact\">\n    <br><br>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 text-center\">\n                <p></p>\n                <h2 class=\"section-heading text-uppercase\">Nous Contacter</h2>\n                <h3 class=\"section-subheading text-muted\">Nous restons toujours à votre écoute.</h3>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <form id=\"contactForm\" name=\"sentMessage\" novalidate>\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <input class=\"form-control\" id=\"nameC\" type=\"text\" placeholder=\"Votre nom *\" required data-validation-required-message=\"Entrez votre nom.\">\n                                <p class=\"help-block text-danger\"></p>\n                            </div>\n                            <div class=\"form-group\">\n                                <input class=\"form-control\" id=\"emailC\" type=\"email\" placeholder=\"Votre Prénom *\" required data-validation-required-message=\"Entrez votre adresse email.\">\n                                <p class=\"help-block text-danger\"></p>\n                            </div>\n                            <div class=\"form-group\">\n                                <input class=\"form-control\" id=\"phoneC\" type=\"tel\" placeholder=\"Téléphone *\" required data-validation-required-message=\"Entrez votre numero de Téléphone.\">\n                                <p class=\"help-block text-danger\"></p>\n                            </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <textarea class=\"form-control\" id=\"message\" placeholder=\"Votre Message *\" required data-validation-required-message=\"Entrez votre message.\"></textarea>\n                                <p class=\"help-block text-danger\"></p>\n                            </div>\n                        </div>\n                        <div class=\"clearfix\"></div>\n                        <div class=\"col-lg-12 text-center\">\n                            <div id=\"success\"></div>\n                            <button id=\"sendMessageButton\" class=\"btn btn-light text-uppercase active\" type=\"submit\">Envoyez </button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</section>\n\n<!-- Footer -->\n<footer>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <span class=\"copyright\">Tous droits réservés &copy;  SANTASSIS  2019</span>\n            </div>\n            <div class=\"col-md-4\">\n                <ul class=\"list-inline social-buttons\">\n                    <li class=\"list-inline-item\">\n                        <a href=\"#\">\n                            <i class=\"fa fa-twitter\"></i>\n                        </a>\n                    </li>\n                    <li class=\"list-inline-item\">\n                        <a href=\"#\">\n                            <i class=\"fa fa-facebook\"></i>\n                        </a>\n                    </li>\n                    <li class=\"list-inline-item\">\n                        <a href=\"#\">\n                            <i class=\"fa fa-linkedin\"></i>\n                        </a>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"col-md-4\">\n                <ul class=\"list-inline quicklinks\">\n                    <li class=\"list-inline-item\">\n                        <a href=\"#\">Règles De Sécurités</a>\n                    </li>\n                    <li class=\"list-inline-item\">\n                        <a href=\"#\">Conditions d'utilisation</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</footer>"

/***/ }),

/***/ "./src/app/layout/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        SmoothScroll();
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/layout/home/home.component.html"),
            styles: [__webpack_require__("./src/app/layout/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.css":
/***/ (function(module, exports) {

module.exports = "/* .main-container{\n    margin-top: 60px;\n    margin-left: 235px;\n    padding: 15px;\n    -ms-overflow-x: hidden;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    position: relative;\n    overflow: hidden;\n\n}\n@media screen and (max-width: 992px) {\n    .main-container {\n        margin-left: 0px !important;\n    }\n} */\n"

/***/ }),

/***/ "./src/app/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<header-component></header-component>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LayoutComponent = (function () {
    function LayoutComponent(router) {
        this.router = router;
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-layout',
            template: __webpack_require__("./src/app/layout/layout.component.html"),
            styles: [__webpack_require__("./src/app/layout/layout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_routing_module__ = __webpack_require__("./src/app/layout/layout.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layout_component__ = __webpack_require__("./src/app/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_header_header_component__ = __webpack_require__("./src/app/shared/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_home_user_home_module__ = __webpack_require__("./src/app/layout/user_home/user_home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_products_module__ = __webpack_require__("./src/app/layout/product/products.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__news_news_component_module__ = __webpack_require__("./src/app/layout/news/news.component.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__testify_testify_component_module__ = __webpack_require__("./src/app/layout/testify/testify.component.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__prestations_prestations_component_module__ = __webpack_require__("./src/app/layout/prestations/prestations.component.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__about_us_about_us_component_module__ = __webpack_require__("./src/app/layout/about-us/about-us.component.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__custom_password_validation_directive__ = __webpack_require__("./src/app/layout/custom-password-validation.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_pagination__ = __webpack_require__("./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_search_filter__ = __webpack_require__("./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var LayoutModule = (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__layout_routing_module__["a" /* LayoutRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__product_products_module__["a" /* ProductsComponentModule */],
                __WEBPACK_IMPORTED_MODULE_7__news_news_component_module__["a" /* NewsComponentModule */],
                __WEBPACK_IMPORTED_MODULE_5__user_home_user_home_module__["UserHomeModule"],
                __WEBPACK_IMPORTED_MODULE_13_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_14_ng2_search_filter__["a" /* Ng2SearchPipeModule */],
                __WEBPACK_IMPORTED_MODULE_8__testify_testify_component_module__["a" /* TestifyComponentModule */],
                __WEBPACK_IMPORTED_MODULE_9__prestations_prestations_component_module__["a" /* PrestationsComponentModule */],
                __WEBPACK_IMPORTED_MODULE_10__about_us_about_us_component_module__["a" /* AboutUsComponentModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__layout_component__["a" /* LayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_4__shared_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_11__custom_password_validation_directive__["a" /* EqualValidator */]
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/layout/layout.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_component__ = __webpack_require__("./src/app/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./src/app/layout/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_products_component__ = __webpack_require__("./src/app/layout/product/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__news_news_component__ = __webpack_require__("./src/app/layout/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__testify_testify_component__ = __webpack_require__("./src/app/layout/testify/testify.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__prestations_prestations_component__ = __webpack_require__("./src/app/layout/prestations/prestations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_us_about_us_component__ = __webpack_require__("./src/app/layout/about-us/about-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__loggedIn_guard__ = __webpack_require__("./src/app/loggedIn.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__news_news_view_component__ = __webpack_require__("./src/app/layout/news/news.view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__layout_component__["a" /* LayoutComponent */],
        children: [
            {
                path: 'home',
                component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */],
            },
            {
                path: 'products',
                component: __WEBPACK_IMPORTED_MODULE_4__product_products_component__["a" /* ProductsComponent */],
            },
            {
                path: 'news',
                component: __WEBPACK_IMPORTED_MODULE_5__news_news_component__["a" /* NewsComponent */],
            },
            {
                path: 'news/:id',
                component: __WEBPACK_IMPORTED_MODULE_10__news_news_view_component__["a" /* ViewNewsComponent */],
            },
            {
                path: 'prestations',
                component: __WEBPACK_IMPORTED_MODULE_7__prestations_prestations_component__["a" /* PrestationsComponent */],
            },
            {
                path: 'testify',
                component: __WEBPACK_IMPORTED_MODULE_6__testify_testify_component__["a" /* TestifyComponent */],
            },
            {
                path: 'about_us',
                component: __WEBPACK_IMPORTED_MODULE_8__about_us_about_us_component__["a" /* AboutUsComponent */],
            },
            {
                path: 'user-home',
                loadChildren: 'app/layout/user_home/user_home.module#UserHomeModule',
                canActivate: [__WEBPACK_IMPORTED_MODULE_9__loggedIn_guard__["a" /* LoggedInGuard */]]
            },
            {
                path: '**',
                redirectTo: 'home'
            },
        ]
    }
];
var LayoutRoutingModule = (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */],
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/news/news.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" container-fluid \">\n    <div class=\"row\">\n        <div class=\"col-md-9 offset-2\">\n            <div class=\"main\">\n                <br>\n                <div class=\"col-auto font-weight-bold \">\n                    <h3 class=\"\" style=\"font-family: 'Courier New', Courier, monospace\"> LES NEWS SANTE - MEDECINE </h3>\n                </div>\n                <br>\n                <span *ngIf=\"loading\" class=\"row align-items-center\">\n                            <div class=\"col\">\n                                <!-- Chargement en cours... -->\n                                <div class=\"progress-circular progress-circular-primary\">\n                                    <div class=\"progress-circular-wrapper\">\n                                        <div class=\"progress-circular-inner\">\n                                            <div class=\"progress-circular-center\">\n                                                <div class=\"progress-circular-spinner\"></div>\n                                            </div>\n                                            <div class=\"progress-circular-gap\"></div>\n                                            <div class=\"progress-circular-center\">\n                                                <div class=\"progress-circular-spinner\"></div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </span>\n                <!--<div class=\"row float-right\" [routerLink]=\"['/layout/user-home/news/add']\">\n                    <button class=\"btn btn-float btn my-1 float-right\" type=\"button\"><i\n                                    class=\"fa fa-plus\"></i>\n                                </button>\n                </div>-->\n\n                <div *ngIf=\"news.length > 0\">\n                    <div class=\"row\">\n                        <div class=\"card mb-2\" style=\"width: 18rem;\" *ngFor=\"let item of news; let i=index\">\n                            <img class=\"card-img-top\" *ngIf=\"!item.image_c\" src=\"/assets/img/news.png\" style=\"width:100%;height:60%\" alt=\"Card image cap\">\n                            <img class=\"card-img-top\" *ngIf=\"item.image_c\" [src]=\"item.image_cover\" style=\"width:100%;height:60%\" alt=\"Card image cap\">\n                            <div class=\"card-body b-6 pb-6\" [routerLink]=\"['/layout/news',item.id]\" style=\"overflow-y:auto; cursor:pointer\">\n                                <h6 class=\"card-title text-capitalized\">{{item.title}} </h6>\n                                <p class=\"card-text\">{{item.resume}}</p>\n                                <br>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/layout/news/news.component.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_component__ = __webpack_require__("./src/app/layout/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__news_service__ = __webpack_require__("./src/app/layout/news/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__news_view_component__ = __webpack_require__("./src/app/layout/news/news.view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var NewsComponentModule = (function () {
    function NewsComponentModule() {
    }
    NewsComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__news_component__["a" /* NewsComponent */],
                __WEBPACK_IMPORTED_MODULE_5__news_view_component__["a" /* ViewNewsComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__news_service__["a" /* NewsService */],
            ],
        })
    ], NewsComponentModule);
    return NewsComponentModule;
}());



/***/ }),

/***/ "./src/app/layout/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__news_service__ = __webpack_require__("./src/app/layout/news/news.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsComponent = (function () {
    function NewsComponent(newService) {
        this.newService = newService;
        this.loading = false;
        this.news = [];
    }
    NewsComponent.prototype.ngOnInit = function () {
        SmoothScroll();
        this.loadNews();
    };
    NewsComponent.prototype.loadNews = function () {
        var _this = this;
        this.loading = true;
        this.newService.getNews()
            .subscribe(function (resp) {
            console.log(resp);
            _this.news = resp.data;
            _this.loading = false;
        }, function (error) {
            console.log(error);
            return;
        });
    };
    NewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/layout/news/news.component.html"),
            styles: [__webpack_require__("./src/app/layout/news/news.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__news_service__["a" /* NewsService */]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/layout/news/news.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_principal_service__ = __webpack_require__("./src/app/shared/services/principal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__request_util__ = __webpack_require__("./src/app/request-util.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewsService = (function () {
    function NewsService(router, http, principal) {
        this.router = router;
        this.http = http;
        this.newsUrl = __WEBPACK_IMPORTED_MODULE_5__request_util__["a" /* HOST */] + 'all_news';
        // this.carmesUrl = this.loginUrl + '/carte_puce/appCarte.php';
    }
    NewsService.prototype.getNews = function () {
        var options = Object(__WEBPACK_IMPORTED_MODULE_5__request_util__["c" /* createRequestOption */])();
        // options.headers.append('Content-Type','application/json')
        return this.http
            .get(this.newsUrl, options).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* map */])(function (res) {
            return res.json();
        }));
    };
    NewsService.prototype.getNew = function (id) {
        var options = Object(__WEBPACK_IMPORTED_MODULE_5__request_util__["c" /* createRequestOption */])();
        // options.headers.append('Content-Type','application/json')
        return this.http
            .get(this.newsUrl + "/" + id, options).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* map */])(function (res) {
            return res.json();
        }));
    };
    NewsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__shared_services_principal_service__["a" /* PrincipalService */]])
    ], NewsService);
    return NewsService;
}());



/***/ }),

/***/ "./src/app/layout/news/news.view.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\">\n    <div *ngIf=\"data\" class=\"main\">\n        <div [innerHTML]=\"data.content\"></div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/news/news.view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewNewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ckeditor_ckeditor5_build_classic__ = __webpack_require__("./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ckeditor_ckeditor5_build_classic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__ckeditor_ckeditor5_build_classic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__news_service__ = __webpack_require__("./src/app/layout/news/news.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewNewsComponent = (function () {
    function ViewNewsComponent(newsService, route, _sanitizer) {
        this.newsService = newsService;
        this.route = route;
        this._sanitizer = _sanitizer;
        this.loading = false;
        this.Editor = __WEBPACK_IMPORTED_MODULE_2__ckeditor_ckeditor5_build_classic__;
        this.model = {
            content: '<p> Ajouter votre texte!</p>',
            title: 'le titre'
        };
        this.config = { ckfinder: {
                uploadUrl: 'http://127.0.0.1:8000/api/upload_image',
                options: {
                    resourceType: 'Images'
                },
                openerMethod: 'popup'
            } };
        // this.Editor = ClassicEditor;
        this.news = [];
        this.data = {};
    }
    ViewNewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        SmoothScroll();
        this.route.params.subscribe(function (params) {
            _this.current = params['id'];
            _this.getData();
        });
    };
    ViewNewsComponent.prototype.getData = function () {
        var _this = this;
        this.newsService.getNew(this.current)
            .subscribe(function (resp) {
            // this.news.push(resp.data);
            console.log(resp.data);
            resp.data.content = _this._sanitizer.bypassSecurityTrustHtml(resp.data.content);
            _this.data = resp.data;
            // jQuery("#addNews").modal("hide");
        }, function (error) {
            console.log(error);
        });
    };
    ViewNewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-news-view',
            template: __webpack_require__("./src/app/layout/news/news.view.component.html"),
            styles: [__webpack_require__("./src/app/layout/news/news.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__news_service__["a" /* NewsService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]])
    ], ViewNewsComponent);
    return ViewNewsComponent;
}());



/***/ }),

/***/ "./src/app/layout/prestations/prestations.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/prestations/prestations.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" container-fluid \">\n    <div class=\"row\">\n        <div class=\"col-md-8 offset-2\">\n            <div class=\"main\">\n                <span *ngIf=\"loading\" class=\"row align-items-center\">\n                            <div class=\"col\">\n                                <!-- Chargement en cours... -->\n                                <div class=\"progress-circular progress-circular-primary\">\n                                    <div class=\"progress-circular-wrapper\">\n                                        <div class=\"progress-circular-inner\">\n                                            <div class=\"progress-circular-center\">\n                                                <div class=\"progress-circular-spinner\"></div>\n                                            </div>\n                                            <div class=\"progress-circular-gap\"></div>\n                                            <div class=\"progress-circular-center\">\n                                                <div class=\"progress-circular-spinner\"></div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </span>\n\n\n                <div *ngIf=\"prestations.length > 0\">\n                    <div class=\"table table-striped table-hover table-responsive\">\n                        <table class=\"table\">\n\n                            <thead>\n                                <th>#</th>\n                                <th>Désignation </th>\n                                <th> Description</th>\n                                <th> Coût </th>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let item of prestations; let i =index\">\n                                    <td>{{i+1}}</td>\n                                    <td>{{item.name}}</td>\n                                    <td>{{item.description}}</td>\n                                    <td>{{item.price}}</td>\n                                </tr>\n                            </tbody>\n\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/layout/prestations/prestations.component.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrestationsComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prestations_component__ = __webpack_require__("./src/app/layout/prestations/prestations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__prestations_service__ = __webpack_require__("./src/app/layout/prestations/prestations.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PrestationsComponentModule = (function () {
    function PrestationsComponentModule() {
    }
    PrestationsComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__prestations_component__["a" /* PrestationsComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__prestations_service__["a" /* PrestationsService */],
            ],
        })
    ], PrestationsComponentModule);
    return PrestationsComponentModule;
}());



/***/ }),

/***/ "./src/app/layout/prestations/prestations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrestationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__prestations_service__ = __webpack_require__("./src/app/layout/prestations/prestations.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrestationsComponent = (function () {
    function PrestationsComponent(prestationsService) {
        this.prestationsService = prestationsService;
        this.loading = false;
        this.prestations = [];
        this.prestations = {};
    }
    PrestationsComponent.prototype.ngOnInit = function () {
        SmoothScroll();
        this.loadTestifies();
    };
    PrestationsComponent.prototype.loadTestifies = function () {
        var _this = this;
        this.loading = true;
        this.prestationsService.getPrestations()
            .subscribe(function (resp) {
            console.log(resp);
            _this.prestations = resp.data;
            _this.loading = false;
        }, function (error) {
            console.log(error);
            return;
        });
    };
    PrestationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-prestations',
            template: __webpack_require__("./src/app/layout/prestations/prestations.component.html"),
            styles: [__webpack_require__("./src/app/layout/prestations/prestations.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__prestations_service__["a" /* PrestationsService */]])
    ], PrestationsComponent);
    return PrestationsComponent;
}());



/***/ }),

/***/ "./src/app/layout/prestations/prestations.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrestationsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_principal_service__ = __webpack_require__("./src/app/shared/services/principal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__request_util__ = __webpack_require__("./src/app/request-util.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PrestationsService = (function () {
    function PrestationsService(router, http, principal) {
        this.router = router;
        this.http = http;
        this.prestationsUrl = __WEBPACK_IMPORTED_MODULE_5__request_util__["a" /* HOST */] + 'all_prestations';
        // this.carmesUrl = this.loginUrl + '/carte_puce/appCarte.php';
    }
    PrestationsService.prototype.getPrestations = function () {
        var options = Object(__WEBPACK_IMPORTED_MODULE_5__request_util__["c" /* createRequestOption */])();
        // options.headers.append('Content-Type','application/json')
        return this.http
            .get(this.prestationsUrl, options).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* map */])(function (res) {
            return res.json();
        }));
    };
    PrestationsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__shared_services_principal_service__["a" /* PrincipalService */]])
    ], PrestationsService);
    return PrestationsService;
}());



/***/ }),

/***/ "./src/app/layout/product/custom-max-validator.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomMaxDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomMaxDirective = (function () {
    function CustomMaxDirective() {
    }
    CustomMaxDirective_1 = CustomMaxDirective;
    CustomMaxDirective.prototype.validate = function (c) {
        var v = c.value;
        return (v > this.customMax) ? { "customMax": true } : null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], CustomMaxDirective.prototype, "customMax", void 0);
    CustomMaxDirective = CustomMaxDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[customMax][formControlName],[customMax][formControl],[customMax][ngModel]',
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALIDATORS */], useExisting: CustomMaxDirective_1, multi: true }]
        })
    ], CustomMaxDirective);
    return CustomMaxDirective;
    var CustomMaxDirective_1;
}());



/***/ }),

/***/ "./src/app/layout/product/products.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/product/products.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n\n<div class=\"offset-md-1 col-md-10\">\n    <div class=\"main\">\n\n        <span *ngIf=\"loading\" class=\"row align-items-center\">\n            <div class=\"col\">\n                <!-- Chargement en cours... -->\n                <div class=\"progress-circular progress-circular-primary\">\n                    <div class=\"progress-circular-wrapper\">\n                        <div class=\"progress-circular-inner\">\n                            <div class=\"progress-circular-center\">\n                                <div class=\"progress-circular-spinner\"></div>\n                            </div>\n                            <div class=\"progress-circular-gap\"></div>\n                            <div class=\"progress-circular-center\">\n                                <div class=\"progress-circular-spinner\"></div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </span>\n\n        <div class=\"row float-right\" *ngIf=\"isConnected\">\n            <!--<button data-toggle=\"modal\" data-target=\"#addProduct\" *ngIf=\"isConnected\" class=\"btn btn-float btn my-1 float-right\" type=\"button\"><i\n                    class=\"fa fa-plus\"></i>\n            </button>-->\n            <button data-toggle=\"modal\" data-target=\"#bascketDetails\" *ngIf=\"isConnected\" class=\"btn btn-float btn-success text-white my-1 float-right\" type=\"button\">\n                <i class=\"fa fa-cart-plus\">\n                    {{shoppingBasket.length}}\n                </i>\n            </button>\n        </div>\n        <div *ngIf=\"products.length > 0\">\n            <div class=\"row\">\n                <nav class=\"navbar navbar-inverse col-md-8 offset-md-2\">\n                    <div class=\"input-group mb-2\">\n                        <div class=\"input-group-prepend\">\n                            <div class=\"input-group-text\"> <i class=\"fa fa-search\"></i></div>\n                        </div>\n                        <input class=\"form-control\" placeholder=\"Recherche\" type=\"text\" name=\"search\" [(ngModel)]=\"filter\">\n                    </div>\n                </nav>\n            </div>\n            <div class=\"row\">\n\n                <div class=\"card-deck col-lg-3 col-md-3 col-sm-6 col-xs-6\" *ngFor=\"let product of products | filter:filter | paginate: { itemsPerPage: pager_infos.per_page, currentPage: pager_infos.current_page, totalItems: pager_infos.total }\">\n\n                    <div class=\"card\">\n                        <img class=\"card-img-top\" [src]=\"product.image_url\" style=\"width:100%;height:60%\" alt=\"Card image cap\">\n                        <div class=\"card-body\">\n                            <h6 class=\" font-weight-bold text-capitalize\" style=\"cursor:pointer\" (click)=\"getProduct(product)\">{{product.name}}</h6>\n                            <h6 class=\"card-text row-1 text-truncate font-weight-normal\" style=\"cursor:pointer\" (click)=\"getProduct(product)\"> {{product.description}} </h6>\n\n                            <div class=\"card-text\">\n                                <h2 class=\"badge badge-light font-italic font-weight-bold typography-headline\" style=\"color: rgba(0,0,0,.87) !important; font-size:18px !important\"> {{product.price}} fcfa</h2>\n                                <span class=\"badge badge-success font-weight-bold ml-4\" style=\"cursor:pointer\" (click)=\"getProduct(product)\">Commander!</span>\n                                <span class=\"badge badge-danger font-weight-bold ml-2\" style=\"cursor:pointer\" (click)=\"productOrdonnanceModal(product)\">Ordonnance!</span>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n            <br><br>\n            <pagination-controls (pageChange)=\"pageChanged($event)\" directionLinks=\"true\" autoHide=\"true\" responsive=\"true\" previousLabel=\"Précédent\" nextLabel=\"Suivant\" screenReaderPaginationLabel=\"Pagination\" screenReaderPageLabel=\"page\" screenReaderCurrentLabel=\"Page Actuelle\">\n            </pagination-controls>\n        </div>\n    </div>\n</div>\n<!-- <button href=\"#\" class=\"btn btn-sm btn-outline-info float-right\">Acheter</button>\n<button href=\"#\" class=\"btn btn-sm btn-outline-dark float-right\"  style=\"margin-right:15px\">Voir</button> -->\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- addProductModal -->\n<div class=\"modal fade\" id=\"addProduct\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Ajoutez un Produit</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" [disabled]=\"isSaving\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <!-- <p class=\"text-center\">\n                        <em style=\"color:red\">{{errorSignUp}}</em>\n                    </p> -->\n\n                <form name=\"addForm\" role=\"form\" (ngSubmit)=\"addProduct()\" #addForm=\"ngForm\" novalidate>\n\n                    <div class=\"form-group\" [ngClass]=\"{ 'has-error': addForm.submitted && !name.valid }\">\n                        <label for=\"name\" class=\"text-black\">Nom du produit </label>\n                        <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"model.name\" #name=\"ngModel\" required />\n                        <div *ngIf=\"addForm.submitted && !name.valid\" class=\"help-block\">Name is required</div>\n                    </div>\n\n\n                    <div class=\"form-group\" [ngClass]=\"{ 'has-error': addForm.submitted && !dose.valid }\">\n                        <label for=\"dose\" class=\"text-black\">Dose du Produit</label>\n                        <input type=\"text\" class=\"form-control\" name=\"dose\" [(ngModel)]=\"model.dose\" #dose=\"ngModel\" placeholder=\"2mg ou 2g etc...\" />\n                        <div *ngIf=\"addForm.submitted && !dose.valid\" class=\"help-block\">dose is required</div>\n                    </div>\n\n                    <div class=\"form-group\" [ngClass]=\"{ 'has-error': addForm.submitted && !price.valid }\">\n                        <label for=\"price\" class=\"text-black\">Prix du produit</label>\n                        <input type=\"number\" class=\"form-control\" name=\"price\" [(ngModel)]=\"model.price\" #price=\"ngModel\" required />\n                        <div *ngIf=\"addForm.submitted && !price.valid\" class=\"help-block\">price is required</div>\n                    </div>\n\n                    <div class=\"form-group\" [ngClass]=\"{ 'has-error': addForm.submitted && !price.valid }\">\n                        <label for=\"quantity\" class=\"text-black\">Quantité du produit</label>\n                        <input type=\"number\" class=\"form-control\" name=\"quantity\" [(ngModel)]=\"model.quantity\" #quantity=\"ngModel\" required />\n                        <div *ngIf=\"addForm.submitted && !quantity.valid\" class=\"help-block\">quantity is required</div>\n                    </div>\n\n                    <div class=\"form-group\" [ngClass]=\"{ 'has-error': addForm.submitted && !type.valid }\">\n                        <label for=\"type\" class=\"text-black\">Type du produit</label>\n                        <select class=\"browser-default custom-select\" name=\"type\" [(ngModel)]=\"model.type\" #type=\"ngModel\" required>\n                            <option *ngFor=\"let type of types\" [ngValue]=\"type\">{{type}}</option>\n                        </select>\n                        <div *ngIf=\"addForm.submitted && !type.valid\" class=\"help-block\">type is required</div>\n                    </div>\n\n                    <div class=\"form-group\" [ngClass]=\"{ 'has-error': addForm.submitted && !description.valid }\">\n                        <label for=\"description\" class=\"text-black\">Description du Produit</label>\n                        <input type=\"text\" class=\"form-control\" name=\"description\" [(ngModel)]=\"model.description\" #description=\"ngModel\" required />\n                        <div *ngIf=\"addForm.submitted && !description.valid\" class=\"help-block\">Description is required</div>\n                    </div>\n\n                    <div class=\"form-group\" [ngClass]=\"{ 'has-error': addForm.submitted }\">\n                        <label for=\"peremption_date\" class=\"text-black\">Date de Péremption</label>\n                        <input type=\"date\" class=\"form-control\" name=\"peremption_date\" [ngModel]=\"model.peremption_date\" (keyup)=\"changeValue('birthdate', $event)\" #peremption_date=\"ngModel\" required />\n                        <div *ngIf=\"addForm.submitted && peremption_date.invalid\" class=\"help-block\" style=\"color:red\">date de péremption requise</div>\n                    </div>\n\n                    <div class=\"form-group\" [ngClass]=\"{ 'has-error': addForm.submitted }\">\n                        <label for=\"image\" class=\"text-black\">Image \n                            <span class=\"text-danger\"> *Il est recommandé de charger une image dont la date de péremption est visible </span>\n                        </label>\n                        <input type=\"file\" class=\"form-control\" name=\"image\" (change)=\"fileUpload($event)\" accept=\".jpg,.png\" required />\n                        <!-- <div *ngIf=\"addForm.submitted \" class=\"help-block\">Image is required</div> -->\n                    </div>\n\n                    <div class=\"form-group\" [ngClass]=\"{ 'has-error': addForm.submitted }\">\n                        <label for=\"image\" class=\"text-black\">Image Ordonnance \n                            <span class=\"text-danger\"> *Veuillez masquer le nom du patient</span>\n                        </label>\n                        <input type=\"file\" class=\"form-control\" name=\"ordonnance\" (change)=\"ordonnanceFileUpload($event)\" accept=\".jpg,.png\" required />\n                        <!-- <div *ngIf=\"addForm.submitted \" class=\"help-block\">Image is required</div> -->\n                    </div>\n\n                    <div class=\"form-group\">\n                        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n                        />\n                        <button type=\"submit\" class=\"btn btn-success\" style=\"float: right\" [disabled]=\"addForm.form.invalid || isSaving\">{{isSaving?'....':''}}\n                            Valider\n                        </button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"modal fade\" id=\"detailsProduct\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h6 class=\"modal-title\" id=\"exampleModalLabel\">{{productSelected.name}}</h6>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" [disabled]=\"isSaving\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <!-- <p class=\"text-center\">\n                        <em style=\"color:red\">{{errorSignUp}}</em>\n                    </p> -->\n\n                <form name=\"detailsf\" role=\"form\" (ngSubmit)=\"detailsf.form.valid\" #detailsf=\"ngForm\" novalidate>\n\n                    <div class=\"container\">\n                        <div class=\"row justify-content-md-center\">\n                            <div class=\"col col-lg-2\">\n\n                            </div>\n                            <div class=\"col-md-auto\">\n                                <img class=\"card-img-top\" [src]=\"productSelected.image_url\" width=\"230\" height=\"220\" alt=\"Card image cap\">\n                            </div>\n                            <div class=\"col col-lg-2\">\n\n                            </div>\n                        </div>\n                        <br> <br>\n                        <div class=\"row justify-content-md-center\">\n\n                            <div class=\"col-md-12 form-group\" [ngClass]=\"{ 'has-error': detailsf.submitted && !quantity_commanded.valid }\">\n                                <label for=\"quantity_commanded\" class=\"font-weight-bold text-black\"> Quantité à commander</label>\n                                <input type=\"number\" name=\"quantity_commanded\" class=\"form-control\" [(ngModel)]=\"productSelected.quantity_commanded\" #quantity_commanded=\"ngModel\" min=\"1\" [customMax]=\"productSelected.quantity\" pattern=\"^$|^([1-9]|[1-9][0-9]|[1][0][0])?\" required>\n                                <div *ngIf=\"quantity_commanded.invalid  && quantity_commanded.touched &&  quantity_commanded.errors?.required\" class=\"help-block\" style=\"color:red\">Ce champ est requis</div>\n                                <div *ngIf=\"quantity_commanded.errors?.pattern\" class=\"help-block\" style=\"color:red\">la valeur minimum est: 1</div>\n                                <div *ngIf=\"quantity_commanded.errors?.customMax\" class=\"help-block\" style=\"color:red\">la valeur maximum est celle de la quantité en stock 1</div>\n                            </div>\n\n                            <div class=\"font-weight-bold col-md-12\">\n                                <label for=\"price\" class=\"font-weight-bold text-black\"> Prix de vente</label>\n                                <span class=\" badge badge-danger font-weight-bold\"> {{productSelected.price}} Fcfa</span>\n                            </div>\n                            <div class=\"font-weight-bold col-md-12\">\n                                <label for=\"quantity\" class=\"font-weight-bold text-black\"> Quantité en stock</label>\n                                <span class=\"badge badge-success font-weight-bold\"> {{productSelected.quantity}} </span>\n                            </div>\n\n\n                            <div class=\"font-weight-bold col-md-12\">\n                                <label for=\"description\" class=\"font-weight-bold text-black\"> Description</label>\n                            </div>\n                            <div class=\" card-text  col\">\n                                <label for=\"description_text\" class=\"font-weight-normal text-black\">  {{productSelected.description}} </label>\n                            </div>\n                        </div>\n                    </div>\n\n\n                    <div class=\"form-group\">\n                        <button type=\"submit\" (click)=\"addToBasket(productSelected)\" class=\"btn btn-danger\" style=\"float: right\" [disabled]=\"detailsf.form.invalid || isSaving\">{{isSaving?'....':''}}\n                            Ajouter\n                        </button>\n\n                        <!-- <button type=\"submit\" (click)=\"byProduct()\" class=\"ml-2 btn btn-warning text-white\" style=\"float: right\" [disabled]=\"detailsf.form.invalid || isSaving\">{{isSaving?'....':''}}\n                            Acheter\n                        </button> -->\n                    </div>\n\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n<div class=\"modal fade bd-example-modal-lg\" id=\"bascketDetails\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h6 class=\"modal-title\" id=\"exampleModalLabel\">Panier</h6>\n\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" [disabled]=\"isSaving\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <!-- <p class=\"text-center\">\n                        <em style=\"color:red\">{{errorSignUp}}</em>\n                    </p> -->\n\n                <form name=\"f\" role=\"form\" (ngSubmit)=\"f.form.valid && byProduct()\" #f=\"ngForm\" novalidate>\n                    <div class=\"container\">\n\n                        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !zone.valid }\">\n                            <label for=\"zone\" class=\"text-black\">Zone de livraison</label>\n                            <select class=\"browser-default custom-select\" name=\"zone\" [(ngModel)]=\"panier.zone\" #zone=\"ngModel\" required>\n                                                <option *ngFor=\"let zone of zones\" [ngValue]=\"zone\">{{zone.name}}</option>\n                                            </select>\n                            <div *ngIf=\"f.submitted && !zone.valid\" class=\"help-block\">zone is required</div>\n                        </div>\n                        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !zone_price.valid }\">\n                            <label for=\"zone_name\" class=\"text-black\">Frais de livraisons</label>\n                            <input type=\"number\" class=\"form-control text-black font-weight-bold\" name=\"zone_price\" [(ngModel)]=\"panier.zone.price\" #zone_price=\"ngModel\" required disabled />\n                        </div>\n\n                       \n\n                        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !address.valid }\">\n                            <label for=\"address\" class=\"text-black\">Adresse Complète de livraisons</label>\n                            <input type=\"text\" class=\"form-control \" name=\"address\" [(ngModel)]=\"panier.address\" #address=\"ngModel\" required />\n                        </div>\n                        <table class=\"table table-bordered table-responsive-md table-striped text-center\">\n                            <thead>\n                                <tr>\n                                    <th class=\"text-black font-weight-bold \">Nom</th>\n                                    <th class=\"text-black font-weight-bold\">Quantité</th>\n                                    <th class=\"text-black font-weight-bold\">Prix Unitaire</th>\n                                    <th class=\"text-black font-weight-bold\">Prix Total</th>\n                                    <th class=\"text-black font-weight-bold\">Action</th>\n                                </tr>\n                            </thead>\n                            <tbody *ngIf=\"shoppingBasket.length>0\">\n                                <tr *ngFor=\"let item of shoppingBasket ; let id = index\">\n                                    <td scope=\"row\">{{item?.name}}</td>\n                                    <td scope=\"row\">\n                                        <span contenteditable=\"true\" (keyup)=\"changeValue(id, 'quantity_commanded', $event,item)\" (blur)=\"updateList(id, 'quantity_commanded', $event,item)\">{{item.quantity_commanded}}</span>\n\n                                    </td>\n                                    <td scope=\"row\">\n                                        <span>{{item.price}}</span>\n                                    </td>\n                                    <td scope=\"row\">{{item?.tva_price}}</td>\n                                    <td scope=\"row\" class=\"cursor:pointer\">\n                                        <i class=\"fa fa-trash text-danger \" (click)=\"revoveFromBascket(item)\"> </i>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td colspan=\"2\" class=\"text-black font-weight-bold\"> Sous Total </td>\n                                    <td colspan=\"2\" class=\"text-danger font-weight-bold\"> {{total}} </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                        <div class=\"\">\n                            <span class=\"text-black font-weight-bold\"> TTC : </span>\n                            <span class=\"badge badge-danger font-weight-bold float-right\"> {{ttcPrice}} Fcfa </span>\n                        </div>\n                        <br><br>\n                    </div>\n\n                    <div class=\"form-group\">\n                        \n                         <i *ngIf=\"loading\" class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i>\n                        <button type=\"submit\" class=\"ml-2 btn btn-warning text-white\" style=\"float: right\" [disabled]=\"f.form.invalid || isSaving\">{{isSaving?'....':''}}\n                            Acheter\n                        </button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n<div class=\"modal fade\" id=\"notConnected\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h6 class=\"modal-title\" id=\"exampleModalLabel\"> Impossible !!</h6>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <form name=\"notConnected\">\n                    <div class=\"container\">\n                        <div class=\"row justify-content-md-center\">\n                            <div class=\"text-danger font-weight-bold m-4\">\n                                Pour éffectuez un achat, Veuillez vous connecter ou assurez vous d'avoir un compte activé\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <button type=\"button\" class=\"btn btn-danger float-right\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\"> Fermer </span>\n                        </button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"modal fade bd-example-modal-lg\" id=\"productOrdonnance\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h6 class=\"modal-title\" id=\"exampleModalLabel\">Ordonnance</h6>\n\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" [disabled]=\"isSaving\">\n                                <span aria-hidden=\"true\">&times;</span>\n                        </button>\n            </div>\n            <div class=\"modal-body\">\n                <br>\n                <form action=\"\">\n\n                    <div style=\"width: auto; overflow:auto\">\n                        <img [src]=\"model.image_ordonnance_url\" alt=\"\">\n                    </div>\n                </form>\n                <br><br>\n                <div class=\"form-group\">\n                    <!--<button type=\"submit\" class=\"ml-2 btn btn-danger text-white\" style=\"float: right\" (click)=\"remove()\">\n                                   Confirmez\n                            </button>-->\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/product/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__products_service__ = __webpack_require__("./src/app/layout/product/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__request_util__ = __webpack_require__("./src/app/request-util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_principal_service__ = __webpack_require__("./src/app/shared/services/principal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductsComponent = (function () {
    // @Output() pageChanged: EventEmitter<number> = new EventEmitter();
    function ProductsComponent(route, router, productService, principalService) {
        this.route = route;
        this.router = router;
        this.productService = productService;
        this.principalService = principalService;
        this.image_url = __WEBPACK_IMPORTED_MODULE_3__request_util__["b" /* IMAGE_HOST */];
        this.loading = false;
        this.model = {};
        this.product = {};
        this.types = [];
        this.zones = [];
        this.panier = {};
        this.command_data = {};
        this.isConnected = false;
        this.products = [];
        this.shoppingBasket = [];
        this.product = {};
        this.command_data = {};
        this.productSelected = {};
        this.original_product = {};
        this.types = ['Comprimés', 'Géllules', 'Sirop', 'Autres'];
        this.zones = [{ name: 'Cotonou', 'price': '1000' }, { name: 'Calavi/Pahou', 'price': '1500' }, { name: 'Ouidah/Porto-Novo', 'price': '2000' }];
        this.panier = {};
        this.panier.zone = { 'price': 0 };
        this.pager_infos = [];
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.isConnected = false;
        SmoothScroll();
        this.connectedUser();
        this.productsList(1);
    };
    ProductsComponent.prototype.pageChanged = function (event) {
        console.log(event);
        // event.preventDefault();
        this.pager_infos.current_page = event;
        this.productsList(event);
        // this.router.navigate([''], {queryParams: {page:event} })
    };
    ProductsComponent.prototype.productsList = function (page) {
        var _this = this;
        this.loading = true;
        this.productService.getProducts(page)
            .subscribe(function (resp) {
            _this.pager_infos = resp.meta;
            _this.products = resp.data;
            _this.pager_infos.current_page = page;
            _this.loading = false;
        }, function (error) {
            console.log(error);
            _this.loading = false;
            return;
        });
    };
    ProductsComponent.prototype.productOrdonnanceModal = function (product) {
        this.model = product;
        console.log(this.model);
        jQuery("#productOrdonnance").modal("show");
    };
    ProductsComponent.prototype.getProduct = function (product) {
        var _this = this;
        console.log(product);
        this.product = product;
        // this.product.name= 'toto';
        console.log(this.product);
        this.productSelected = product;
        this.productService.getProduct(product.id)
            .subscribe(function (resp) {
            if (_this.isConnected) {
                var prod = resp.data;
                _this.original_product = Object.assign({}, prod);
                jQuery("#detailsProduct").modal("show");
            }
            else {
                jQuery("#notConnected").modal("show");
            }
        }, function (error) {
            console.log(error);
            return;
        });
    };
    ProductsComponent.prototype.addProduct = function () {
        var _this = this;
        this.productService.addProduct(this.model)
            .subscribe(function (resp) {
            resp.data.image_url = _this.image_url + resp.data.image;
            _this.products.push(resp.data);
            jQuery("#addProduct").modal("hide");
        }, function (error) {
            console.log(error);
        });
    };
    ProductsComponent.prototype.fileUpload = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = function () {
                _this.model.image = reader.result;
            };
        }
    };
    ProductsComponent.prototype.ordonnanceFileUpload = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = function () {
                _this.model.image_ordonnance = reader.result;
            };
        }
    };
    ProductsComponent.prototype.addToBasket = function (item) {
        console.log(item);
        item.tva_price = item.quantity_commanded * item.price;
        // this.product.show = true;
        if (this.shoppingBasket.length > 0) {
            var found = this.shoppingBasket.find(function (element) {
                return element.id == item.id;
            });
            console.log(found);
            if (!found) {
                this.shoppingBasket.push(item);
            }
            else {
                console.log(found);
                item.quantity_commanded = found.quantity_commanded;
            }
        }
        else {
            console.log('empty array');
            this.shoppingBasket.push(item);
        }
        // this.product.previous_quantity = this.product.quantity;
        this.quantity_commanded = this.productSelected.quantity - item.quantity_commanded;
        console.log(this.original_product.quantity);
        this.product.quantity = this.original_product.quantity - item.quantity_commanded;
        console.log(this.product.quantity);
        jQuery("#detailsProduct").modal("hide");
    };
    ProductsComponent.prototype.showProforma = function () {
    };
    //One command has many line commands
    //line_commands belongs to one commande so we have to save
    //a commande (id=returned by database, ref="generated in backend", 
    //client_id='connected_user')
    //after that we can loop on array to save each line_command
    ProductsComponent.prototype.byProduct = function () {
        var _this = this;
        this.loading = true;
        var data = this.shoppingBasket;
        var livraison = this.panier;
        console.log(this.panier);
        this.productService.saveCommand(data)
            .subscribe(function (resp) {
            _this.product = resp.data;
            _this.productsList(1);
            jQuery("#bascketDetails").modal("hide");
            //update command adding total ttc_price, commssion and livraison
            _this.command_data = {};
            _this.command_data.id = resp.data.id;
            _this.command_data.total = _this.ht_price;
            _this.command_data.ttc_price = parseInt(livraison.zone.price) + _this.ht_price;
            _this.command_data.comissions = (_this.ht_price * 10) / 100;
            _this.command_data.address_livraison = _this.ht_price;
            _this.command_data.zone_livraison = livraison.zone.name;
            _this.command_data.livraison_price = parseInt(livraison.zone.price);
            console.log(_this.command_data);
            _this.productService.updateCommand(_this.command_data)
                .subscribe(function (resp) {
                // console.log(resp);
                _this.shoppingBasket.length = 0;
                // this.panier={};
                _this.loading = false;
            }, function (error) {
                console.log(error);
                _this.loading = false;
            });
        }, function (error) {
            console.log(error);
            return;
        });
    };
    ProductsComponent.prototype.updateList = function (id, property, event, elm) {
        var editField = event.target.textContent;
        this.shoppingBasket[id][property] = editField;
        this.product.quantity = this.original_product.quantity - editField;
        console.log(elm);
        elm.tva_price = editField * elm.price;
        // this.shoppingBasket.forEach((item) => {
        //   if (item.id === id) {
        //     item.tva_price = editField * item.price;
        //   }
        // });
    };
    ProductsComponent.prototype.changeValue = function (id, property, event) {
        this.editField = event.target.textContent;
    };
    ProductsComponent.prototype.revoveFromBascket = function (elm) {
        var _this = this;
        this.shoppingBasket.forEach(function (p, i) {
            console.log(p.id);
            console.log(elm.id);
            if (p.id === elm.id) {
                _this.shoppingBasket.splice(i, 1);
                _this.product.quantity = _this.original_product.quantity;
            }
        });
    };
    ProductsComponent.prototype.connectedUser = function () {
        var _this = this;
        this.principalService.connectedUser()
            .subscribe(function (resp) {
            console.log(resp);
            _this.isConnected = true;
            _this.model = {};
        }, function (error) {
            console.log(error);
            _this.isConnected = false;
        });
    };
    Object.defineProperty(ProductsComponent.prototype, "total", {
        get: function () {
            var _this = this;
            return this.shoppingBasket.reduce(function (a, b) {
                _this.ht_price = a + b.tva_price;
                return a + b.tva_price;
            }, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductsComponent.prototype, "ttcPrice", {
        get: function () {
            return this.total + parseInt(this.panier.zone.price);
        },
        enumerable: true,
        configurable: true
    });
    ProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/layout/product/products.component.html"),
            styles: [__webpack_require__("./src/app/layout/product/products.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__products_service__["a" /* UserProductsService */], __WEBPACK_IMPORTED_MODULE_4__shared_services_principal_service__["a" /* PrincipalService */]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/layout/product/products.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_component__ = __webpack_require__("./src/app/layout/product/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_service__ = __webpack_require__("./src/app/layout/product/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_pagination__ = __webpack_require__("./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__custom_max_validator_directive__ = __webpack_require__("./src/app/layout/product/custom-max-validator.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_search_filter__ = __webpack_require__("./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ProductsComponentModule = (function () {
    function ProductsComponentModule() {
    }
    ProductsComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_search_filter__["a" /* Ng2SearchPipeModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__products_component__["a" /* ProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__custom_max_validator_directive__["a" /* CustomMaxDirective */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__products_service__["a" /* UserProductsService */],
            ],
        })
    ], ProductsComponentModule);
    return ProductsComponentModule;
}());



/***/ }),

/***/ "./src/app/layout/product/products.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProductsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_principal_service__ = __webpack_require__("./src/app/shared/services/principal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__request_util__ = __webpack_require__("./src/app/request-util.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserProductsService = (function () {
    function UserProductsService(router, http, principal) {
        this.router = router;
        this.http = http;
        this.ProductsUrl = __WEBPACK_IMPORTED_MODULE_5__request_util__["a" /* HOST */] + 'products';
        this.CommandsUrl = __WEBPACK_IMPORTED_MODULE_5__request_util__["a" /* HOST */] + 'commands';
        this.req = {};
    }
    UserProductsService.prototype.getProducts = function (page) {
        this.req.page = page;
        // this.req.size=10;
        var options = Object(__WEBPACK_IMPORTED_MODULE_5__request_util__["c" /* createRequestOption */])(this.req);
        // options.headers.append('Content-Type','application/json')
        return this.http
            .get(this.ProductsUrl, options).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* map */])(function (res) {
            return res.json();
        }));
    };
    UserProductsService.prototype.getProduct = function (id) {
        var options = Object(__WEBPACK_IMPORTED_MODULE_5__request_util__["c" /* createRequestOption */])(this.req);
        return this.http
            .get(this.ProductsUrl + "/" + id, options).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* map */])(function (res) {
            return res.json();
        }));
    };
    UserProductsService.prototype.addProduct = function (data) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* BaseRequestOptions */]();
        options.headers.append('Content-Type', 'application/json');
        options.headers.append('Authorization', 'Bearer ' + localStorage.authenticationtoken);
        return this.http
            .post(this.ProductsUrl, data, options).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* map */])(function (res) {
            return res.json();
        }));
    };
    UserProductsService.prototype.saveCommand = function (data) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* BaseRequestOptions */]();
        options.headers.append('Content-Type', 'application/json');
        options.headers.append('Authorization', 'Bearer ' + localStorage.authenticationtoken);
        return this.http
            .post(this.CommandsUrl, data, options).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* map */])(function (res) {
            return res.json();
        }));
    };
    UserProductsService.prototype.updateCommand = function (data) {
        var options = Object(__WEBPACK_IMPORTED_MODULE_5__request_util__["c" /* createRequestOption */])();
        options.headers.append('Content-Type', 'application/json');
        console.log(data);
        return this.http
            .put(this.CommandsUrl + "/" + data.id, data, options).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* map */])(function (res) {
            return res.json();
        }));
    };
    UserProductsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__shared_services_principal_service__["a" /* PrincipalService */]])
    ], UserProductsService);
    return UserProductsService;
}());



/***/ }),

/***/ "./src/app/layout/testify/testify.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/testify/testify.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" container-fluid \">\n    <div class=\"row\">\n        <div class=\"col-md-8 offset-2\">\n            <div class=\"main\">\n                <span *ngIf=\"loading\" class=\"row align-items-center\">\n                            <div class=\"col\">\n                                <!-- Chargement en cours... -->\n                                <div class=\"progress-circular progress-circular-primary\">\n                                    <div class=\"progress-circular-wrapper\">\n                                        <div class=\"progress-circular-inner\">\n                                            <div class=\"progress-circular-center\">\n                                                <div class=\"progress-circular-spinner\"></div>\n                                            </div>\n                                            <div class=\"progress-circular-gap\"></div>\n                                            <div class=\"progress-circular-center\">\n                                                <div class=\"progress-circular-spinner\"></div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </span>\n\n\n                <div *ngIf=\"testifies.length > 0\">\n                    <div class=\"table-responsive\">\n                        <table class=\"table\">\n\n                            <div class=\"card\" *ngFor=\"let item of testifies\">\n                                <div class=\"card-header text-black font-weight-bold text-capitalize\">\n                                    Par : {{item.user.name}}\n                                </div>\n                                <div class=\"card-body\">\n                                    <blockquote class=\"blockquote mb-0\">\n                                        <h6 class=\"text-black \">{{item.description}}</h6>\n                                        <footer class=\"blockquote-footer\">{{item.user.firstname}} {{item.user.lastname}}\n                                            <small title=\"Source Title\">{{item.created_at | date}}</small>\n                                        </footer>\n                                    </blockquote>\n                                </div>\n                            </div>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/layout/testify/testify.component.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestifyComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__testify_component__ = __webpack_require__("./src/app/layout/testify/testify.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__testify_service__ = __webpack_require__("./src/app/layout/testify/testify.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TestifyComponentModule = (function () {
    function TestifyComponentModule() {
    }
    TestifyComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__testify_component__["a" /* TestifyComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__testify_service__["a" /* TestifyService */],
            ],
        })
    ], TestifyComponentModule);
    return TestifyComponentModule;
}());



/***/ }),

/***/ "./src/app/layout/testify/testify.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestifyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__testify_service__ = __webpack_require__("./src/app/layout/testify/testify.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestifyComponent = (function () {
    function TestifyComponent(testifyService) {
        this.testifyService = testifyService;
        this.loading = false;
        this.testifies = [];
        this.testify = {};
    }
    TestifyComponent.prototype.ngOnInit = function () {
        SmoothScroll();
        this.loadTestifies();
    };
    TestifyComponent.prototype.loadTestifies = function () {
        var _this = this;
        this.loading = true;
        this.testifyService.getTestifys()
            .subscribe(function (resp) {
            console.log(resp);
            _this.testifies = resp.data;
            _this.loading = false;
        }, function (error) {
            console.log(error);
            return;
        });
    };
    TestifyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-testify',
            template: __webpack_require__("./src/app/layout/testify/testify.component.html"),
            styles: [__webpack_require__("./src/app/layout/testify/testify.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__testify_service__["a" /* TestifyService */]])
    ], TestifyComponent);
    return TestifyComponent;
}());



/***/ }),

/***/ "./src/app/layout/testify/testify.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestifyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_principal_service__ = __webpack_require__("./src/app/shared/services/principal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__request_util__ = __webpack_require__("./src/app/request-util.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TestifyService = (function () {
    function TestifyService(router, http, principal) {
        this.router = router;
        this.http = http;
        this.TestifyUrl = __WEBPACK_IMPORTED_MODULE_5__request_util__["a" /* HOST */] + 'all_testifies';
        // this.carmesUrl = this.loginUrl + '/carte_puce/appCarte.php';
    }
    TestifyService.prototype.getTestifys = function () {
        var options = Object(__WEBPACK_IMPORTED_MODULE_5__request_util__["c" /* createRequestOption */])();
        // options.headers.append('Content-Type','application/json')
        return this.http
            .get(this.TestifyUrl, options).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* map */])(function (res) {
            return res.json();
        }));
    };
    TestifyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__shared_services_principal_service__["a" /* PrincipalService */]])
    ], TestifyService);
    return TestifyService;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header  navbar-fixed-top\">\n    <nav class=\"navbar bg-inverse navbar-toggleable-md header \" id=\"mainNav\">\n        <div class=\"container-fluid\">\n            <div col-md-1>\n            </div>\n            <!--<a class=\"navbar-brand js-scroll-trigger logo\" href=\"#page-top\">\n                Santassis\n            </a>-->\n            <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <!-- Menu -->\n                <i class=\"fa fa-bars\"></i>\n            </button>\n\n            <!--<button class=\"navbar-toggler navbar-toggler-left\" type=\"button\" data-toggle=\"collapse\" data-target=\"#adminNavbarResponsive\" aria-controls=\"adminNavbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <i class=\"fa fa-bars\"></i>\n            </button>-->\n\n            <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n                <div class=\"offset-md-1\">\n\n                </div>\n                <div class=\"col-md-2 curseur navbar-brand\">\n                    <img [routerLink]=\"['/layout/home']\" src=\"/assets/img/logo.png\" alt=\"logo\">\n                </div>\n                <!--<div class=\"offset-md-1\">\n\n                </div>-->\n                <div class=\"col-md-7 col-sm-12 col-xs-12\">\n                    <ul class=\"navbar-nav  ml-auto text-black font-weight-bold\">\n                        <li class=\"nav-item curseur\" [routerLink]=\"['/layout/products']\" [routerLinkActive]=\"['router-link-active']\">\n                            <a class=\"nav-link js-scroll-trigger \">Produits</a>\n                        </li>\n\n                        <li class=\"nav-item curseur\" [routerLink]=\"['/layout/news']\" [routerLinkActive]=\"['router-link-active']\">\n                            <a class=\"nav-link js-scroll-trigger\">News</a>\n                        </li>\n\n                        <li class=\"nav-item curseur\" [routerLink]=\"['/layout/prestations']\" [routerLinkActive]=\"['router-link-active']\">\n                            <a class=\"nav-link js-scroll-trigger\">Prestations</a>\n                        </li>\n\n                        <li class=\"nav-item curseur\" [routerLink]=\"['/layout/testify']\" [routerLinkActive]=\"['router-link-active']\">\n                            <a class=\"nav-link js-scroll-trigger\">Temoignages</a>\n                        </li>\n\n                        <li class=\"nav-item curseur\" [routerLink]=\"['/layout/about_us']\" [routerLinkActive]=\"['router-link-active']\">\n                            <a class=\"nav-link js-scroll-trigger\">Qui Sommes Nous?</a>\n                        </li>\n                    </ul>\n                </div>\n\n                <div class=\"col-md-1\">\n                    <div class=\"float-right dropdown\">\n                        <span class=\"chip chip-light dropdown-toggle\" data-toggle=\"dropdown\" style=\"cursor: pointer\" id=\"dropdownMenuButton2\" aria-expanded=\"false\" aria-haspopup=\"true\">\n                                        <i class=\"chip-icon-blue \">C</i>Mon Compte </span>\n                        <div aria-labelledby=\"dropdownMenuButton2\" class=\"dropdown-menu dropdown-menu-sm text-center font-weight-bold\">\n                            <label class=\"  my-1 text-black  font-weight-bold\" *ngIf=\"isLogin\" [routerLink]=\"[ '/layout/user-home/products'] \" style=\"cursor: pointer; line-height:30px\">Mon Espace Pro! </label>\n\n                            <label class=\"  my-1 text-black  font-weight-bold\" data-toggle=\"modal\" *ngIf=\"!isLogin\" data-target=\"#connexion\" style=\"cursor: pointer; line-height:30px\">Se Connecter\n                                        \n                                    </label>\n                            <div></div>\n                            <label class=\"  my-1  text-black font-weight-bold\" data-toggle=\"modal\" data-target=\"#creation\" *ngIf=\"!isLogin\" style=\"cursor: pointer; line-height:30px\">S'enregistrer <br></label>\n\n                            <label class=\"  my-1  text-black font-weight-bold\" (click)=\"disconnect()\" *ngIf=\"isLogin\" style=\"cursor: pointer;line-height:30px \">Déconnexion</label>\n                            <div></div>\n                            <label class=\" my-1 text-black font-weight-bold\" *ngIf=\"isLogin\" [routerLink]=\"[ '/layout/user-home/profile'] \" style=\"cursor: pointer; line-height:30px\">Mon Profile</label>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </nav>\n</div>\n\n\n\n\n\n\n\n\n<!-- Modal connexion-->\n<div class=\"modal fade\" id=\"connexion\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Connexion</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" [disabled]=\"isSaving\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <p class=\"text-center\">\n                    <em style=\"color:red\">{{error}}</em>\n                </p>\n                <form name=\"editForm\" role=\"form\" novalidate (ngSubmit)=\"login()\" #editForm=\"ngForm\">\n                    <div class=\"form-group\">\n                        <label for=\"username\">Adresse Mail:</label>\n                        <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required>\n                        <small *ngIf=\"username.touched && username.invalid\" class=\"help-block text-danger\">Nom d'utilisateur required</small>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"Password\" class=\"\">Mot de Passe:</label>\n                        <input type=\"password\" minlength=\"6\" class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required>\n                        <small *ngIf=\"password.touched && password.invalid\" class=\"help-block text-danger\">Mot de passe requis (minimum 6 caractères)</small>\n                    </div>\n                    <div class=\"form-group\">\n                        <i *ngIf=\"isSaving\" class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i>\n                        <button type=\"submit\" class=\"btn btn-primary snackbar-toggler\" style=\"float: right\" [disabled]=\"editForm.form.invalid || isSaving\">{{isSaving?'....':''}}\n                            Connecter\n                        </button>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"forgotPassword\" class=\"text-black font-weight-bold\" style=\"cursor:pointer\" (click)=\"openResetModal()\" >Mot de Passe Oublié?</label>\n                    </div>\n\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- Modal reset password-->\n<div class=\"modal fade\" id=\"resetingPasswordToken\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Mot de Passe Oublié</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" [disabled]=\"isSaving\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <p class=\"text-center\">\n                    <em style=\"color:red\">{{error}}</em>\n                </p>\n                <form name=\"resetForm\" role=\"form\" novalidate (ngSubmit)=\"resetingPasswordToken()\" #resetForm=\"ngForm\">\n                    <div class=\"form-group\">\n                        <label for=\"username\">Adresse Mail:</label>\n                        <input type=\"email\" class=\"form-control\" id=\"email\" name=\"username\" [(ngModel)]=\"reset.email\" #username=\"ngModel\" required>\n                        <small *ngIf=\"username.touched && username.invalid\" class=\"help-block text-danger\">Email requis</small>\n                    </div>\n                    <!--<div class=\"form-group\">\n                        <label for=\"Password\" class=\"\">Mot de Passe:</label>\n                        <input type=\"password\" minlength=\"6\" class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required>\n                        <small *ngIf=\"password.touched && password.invalid\" class=\"help-block text-danger\">Mot de passe requis (minimum 6 caractères)</small>\n                    </div>-->\n                    <div class=\"form-group\">\n                        <i *ngIf=\"isSaving\" class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i>\n                        <button type=\"submit\" class=\"btn btn-primary snackbar-toggler\" style=\"float: right\" [disabled]=\"resetForm.form.invalid || isSaving\">{{isSaving?'....':''}}\n                                    Connecter\n                                </button>\n                    </div>\n\n                    \n\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n<div class=\"modal fade\" id=\"info-token\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h6 class=\"modal-title\" id=\"exampleModalLabel\"> ALERT INFOS !!</h6>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <form name=\"infoToken\">\n                    <div class=\"container\">\n                        <div class=\"row justify-content-md-center\">\n                            <div class=\"text-danger font-weight-bold m-4\">\n                            {{message}}\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <button type=\"button\" class=\"btn btn-danger float-right\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\"> Fermer </span>\n                        </button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- Modal creation -->\n<div class=\"modal fade\" id=\"creation\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Créer un Compte</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" [disabled]=\"isSaving\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <small class=\"text-center\">\n                    <em style=\"color:red\">{{errorSignUp}}</em>\n                </small>\n\n                <form name=\"signUpForm\" role=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\n                    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n                        <label for=\"username\">Nom d'utilisateur</label>\n                        <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.name\" #username=\"ngModel\" required />\n                        <small *ngIf=\"username.touched && username.invalid\" class=\"help-block text-danger\">Nom d'utilisateur required</small>\n                    </div>\n                    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !mail.valid }\">\n                        <label for=\"mail\">Adresse Mail</label>\n                        <input type=\"email\" class=\"form-control\" name=\"mail\" [(ngModel)]=\"model.email\" #mail=\"ngModel\" required />\n                        <small *ngIf=\"mail.touched && mail.invalid\" class=\"help-block text-danger\">email requis</small>\n                    </div>\n                    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !phone.valid }\">\n                        <label for=\"phone\">Numéro Téléphone</label>\n                        <input type=\"phone\" class=\"form-control\" name=\"phone\" [(ngModel)]=\"model.phone\" #phone=\"ngModel\" required />\n                        <small *ngIf=\"phone.touched && phone.invalid\" class=\"help-block text-danger\">phone requis</small>\n                    </div>\n                    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n                        <label for=\"password\">Mot de passe</label>\n                        <input type=\"password\" minlength=\"6\" class=\"form-control\" validateEqual=\"password_confirmation\" reverse=\"true\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n                        <small *ngIf=\"password.touched && password.invalid\" class=\"help-block text-danger\">Password requis</small>\n                    </div>\n\n                    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password_confirmation.valid }\">\n                        <label for=\"password_confirmation\">Confirmez Mot de passe</label>\n                        <input type=\"password\" minlength=\"6\" class=\"form-control\" name=\"password_confirmation\" validateEqual=\"password\" [(ngModel)]=\"model.password_confirmation\" #password_confirmation=\"ngModel\" required />\n                        <small *ngIf=\"password_confirmation.touched && password_confirmation.invalid\" class=\"help-block text-danger\">Les mots de passes ne correspondent pas</small>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n                        />\n                        <i *ngIf=\"isSaving\" class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i>\n                        <button type=\"submit\" class=\"btn btn-primary\" style=\"float: right\" [disabled]=\"f.form.invalid || isSaving\">{{isSaving?'....':''}}\n                            Valider\n                        </button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"snackbar snackbar-left\">\n    <div class=\"snackbar-body\">\n        Single line of text directly related to the operation performed\n    </div>\n    <button class=\"snackbar-btn\" type=\"button\">Action</button>\n</div>\n\n<div class=\"snackbar snackbar-multi-line\" id=\"snackId\">\n    <div class=\"snackbar-body\">\n        When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down ‘happy’. They told me I didn’t understand the assignment, and I told them they didn’t\n        understand life. –John Lennon\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = ".topnav {\n  border-radius: 0;\n  background-color: #eeeeee;\n  padding: 6px;\n  z-index: 2; }\n  .topnav .text-center {\n    text-align: center;\n    padding-left: 0;\n    cursor: pointer; }\n  .topnav .top-right-nav .buy-now a {\n    color: #999; }\n  .topnav .top-right-nav .dropdown-menu {\n    top: 40px;\n    right: -5px;\n    left: auto; }\n  .topnav .top-right-nav .dropdown-menu .message-preview .media .media-body .media-heading {\n      font-size: 14px;\n      font-weight: bold;\n      margin-bottom: 0; }\n  .topnav .top-right-nav .dropdown-menu .message-preview .media .media-body p {\n      margin: 0; }\n  .topnav .top-right-nav .dropdown-menu .message-preview .media .media-body p.last {\n      font-size: 13px;\n      margin-bottom: 0; }\n  .topnav .top-right-nav .dropdown-menu hr {\n      margin-top: 1px;\n      margin-bottom: 4px; }\n  .messages {\n  width: 300px; }\n  .messages .media {\n    border-bottom: 1px solid #DDD;\n    padding: 5px 10px; }\n  .messages .media:last-child {\n      border-bottom: none; }\n  .messages .media-body h5 {\n    font-size: 13px;\n    font-weight: 600; }\n  .messages .media-body .small {\n    margin: 0; }\n  .messages .media-body .last {\n    font-size: 12px;\n    margin: 0; }\n  .header .navbar {\n  background: #eeeeee !important; }\n  .header .logo {\n  font-family: 'Kaushan Script', 'Helvetica Neue', Helvetica, Arial, cursive; }\n  .curseur {\n  cursor: pointer; }\n  .text-danger {\n  color: red; }\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
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



var HeaderComponent = (function () {
    function HeaderComponent(router, principal) {
        this.router = router;
        this.principal = principal;
        this.error = '';
        this.errorSignUp = '';
        this.model = {};
        this.reset = {};
        this.isAuthenticated = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        SmoothScroll();
    };
    HeaderComponent.prototype.login = function () {
        var _this = this;
        if (!this.model.username && !this.model.password)
            return;
        this.isSaving = true;
        this.principal.login(this.model)
            .subscribe(function (result) {
            // console.log(result);
            _this.isSaving = false;
            localStorage.setItem('authenticationtoken', result.access_token);
            localStorage.setItem('refreshtoken', result.refresh_token);
            localStorage.setItem('auth', 'true');
            _this.isAuthenticated = true;
            _this.closeModal();
            _this.connectedUser();
            var x = jQuery('#snackId');
            // Add the "show" class to DIV
            x.className = "show";
            // After 3 seconds, remove the show class from DIV
            setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
            _this.model = {};
            // this.data=result;
            // this.router.navigate(['/']);
        }, function (error) {
            // console.log("something",error);
            _this.isSaving = false;
            console.log(error);
            _this.model = {};
            _this.error = error.json().message;
            // this.toastr.error('Erreur!', 'Identifiants Incorrect!');
        });
    };
    Object.defineProperty(HeaderComponent.prototype, "isLogin", {
        get: function () {
            if (localStorage.getItem('authenticationtoken')) {
                return true;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    HeaderComponent.prototype.credentials = function (credentials) {
        throw new Error("Method not implemented.");
    };
    HeaderComponent.prototype.register = function () {
        var _this = this;
        if (!this.model.name || !this.model.phone || !this.model.email)
            return;
        this.isSaving = true;
        this.principal.register(this.model)
            .subscribe(function (resp) {
            console.log(resp);
            _this.isSaving = false;
            _this.closeModal();
            _this.model = {};
        }, function (error) {
            console.log(error);
            _this.errorSignUp = "Une erreur s'est produite lors de l'opération,Veuillez réessayer";
            _this.isSaving = false;
            _this.model = {};
        });
    };
    HeaderComponent.prototype.closeModal = function () {
        var connexionModal = jQuery('#creation,#connexion');
        connexionModal.modal('hide');
    };
    HeaderComponent.prototype.disconnect = function () {
        var _this = this;
        this.principal.getDisconnect()
            .subscribe(function (resp) {
            // console.log(resp);
            _this.router.navigate(['/layout/home']);
            localStorage.removeItem('authenticationtoken');
            localStorage.removeItem('refreshtoken');
        }, function (error) {
            console.log(error);
        });
    };
    HeaderComponent.prototype.openResetModal = function () {
        jQuery('#connexion').modal('hide');
        jQuery('#resetingPasswordToken').modal('show');
    };
    HeaderComponent.prototype.resetingPasswordToken = function () {
        var _this = this;
        this.isSaving = true;
        this.principal.resetingPasswordToken(this.reset)
            .subscribe(function (resp) {
            console.log(resp);
            // this.router.navigate(['/layout/home']);
            jQuery('#resetingPasswordToken').modal('hide');
            _this.isSaving = false;
            _this.message = resp.message || 'Un mail vous a été envoyé, veuillez vous connecter a votre boite mail pour réinitialiser votre mot de passe';
            jQuery('#info-token').modal('show');
        }, function (error) {
            console.log(error);
            jQuery('#resetingPasswordToken').modal('hide');
            _this.isSaving = false;
            _this.message = error.message || 'Une erreur est survenue, merci de réessayer ultérieurement';
            jQuery('#info-token').modal('show');
        });
    };
    HeaderComponent.prototype.connectedUser = function () {
        var _this = this;
        this.principal.connectedUser()
            .subscribe(function (resp) {
            console.log(resp);
            _this.model = {};
        }, function (error) {
            console.log(error);
        });
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'header-component',
            template: __webpack_require__("./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__("./src/app/shared/header/header.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__services_principal_service__["a" /* PrincipalService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ })

});
//# sourceMappingURL=layout.module.chunk.js.map