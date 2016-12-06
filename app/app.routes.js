"use strict";
var main_component_1 = require("./pages/main.component");
var RouterOutletAppComponent = (function () {
    function RouterOutletAppComponent() {
    }
    RouterOutletAppComponent.routes = [
        { path: "", component: main_component_1.MainComponent },
        { path: "new-page", component: main_component_1.MainComponent }
    ];
    RouterOutletAppComponent.entries = [
        main_component_1.MainComponent,
        main_component_1.MainComponent
    ];
    return RouterOutletAppComponent;
}());
exports.RouterOutletAppComponent = RouterOutletAppComponent;
//# sourceMappingURL=app.routes.js.map