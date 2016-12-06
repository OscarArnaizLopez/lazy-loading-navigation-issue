"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var main_component_1 = require("./pages/main.component");
var newPage_component_1 = require("./pages/newPage.component");
var router_1 = require("nativescript-angular/router");
var app_routes_1 = require('./app.routes');
var app_component_1 = require("./app.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent,
                main_component_1.MainComponent,
                newPage_component_1.NewPageComponent],
            bootstrap: [app_component_1.AppComponent],
            imports: [platform_1.NativeScriptModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot(app_routes_1.RouterOutletAppComponent.routes),],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map