System.register(['@angular/core', '@angular/http', '@angular/router', '@angular2-material/button', '@angular2-material/toolbar', '@angular2-material/list', '@angular2-material/sidenav', '@angular2-material/card', '@angular2-material/icon', '../home/home.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, router_1, button_1, toolbar_1, list_1, sidenav_1, card_1, icon_1, home_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            },
            function (toolbar_1_1) {
                toolbar_1 = toolbar_1_1;
            },
            function (list_1_1) {
                list_1 = list_1_1;
            },
            function (sidenav_1_1) {
                sidenav_1 = sidenav_1_1;
            },
            function (card_1_1) {
                card_1 = card_1_1;
            },
            function (icon_1_1) {
                icon_1 = icon_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = "ACM at University of Cincinnati";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'client/components/app/app.component.html',
                        styleUrls: ['client/components/app/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, button_1.MdButton, card_1.MD_CARD_DIRECTIVES, sidenav_1.MD_SIDENAV_DIRECTIVES, toolbar_1.MdToolbar, icon_1.MdIcon, list_1.MD_LIST_DIRECTIVES],
                        providers: [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, icon_1.MdIconRegistry]
                    }),
                    router_1.Routes([
                        {
                            path: '/',
                            component: home_component_1.HomeComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map