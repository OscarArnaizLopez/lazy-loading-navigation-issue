// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {NativeScriptModule, platformNativeScriptDynamic } from "nativescript-angular/platform";
import {AppComponent} from "./app.component";
import { AppModule } from "./app.module";
import {RouterOutletAppComponent} from "./app.routes";

platformNativeScriptDynamic().bootstrapModule(AppModule);
