"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var MainComponent = (function () {
    function MainComponent(router) {
        this.router = router;
    }
    MainComponent.prototype.onTap = function () {
        this.router.navigate(["/new-page"]);
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "pages/main.component.html",
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map