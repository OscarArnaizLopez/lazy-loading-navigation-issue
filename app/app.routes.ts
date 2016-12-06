import { NewPageComponent } from "./pages/newPage.component";
import { MainComponent } from "./pages/main.component";


export class RouterOutletAppComponent {
    static routes = [
        { path: "", component: MainComponent},
        { path: "new-page", component: MainComponent }
    ];
    static entries = [
        MainComponent,
        MainComponent
    ]

}