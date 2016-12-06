import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "my-app",
    templateUrl: "pages/main.component.html",
})
export class MainComponent {

    constructor(private router: Router){

    }
    
    
    public onTap() {
       this.router.navigate(["/new-page"])
    }
}