import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";
import {MainComponent} from "./pages/main.component";
import {NewPageComponent} from "./pages/newPage.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { RouterOutletAppComponent } from './app.routes';

import { AppComponent } from "./app.component";

@NgModule({
    declarations: [AppComponent,
    MainComponent,
    NewPageComponent],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule,
		NativeScriptRouterModule,
		NativeScriptRouterModule.forRoot(RouterOutletAppComponent.routes),],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
