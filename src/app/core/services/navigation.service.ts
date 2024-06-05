import {inject, Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  navigate = inject(Router)

  goTo(to:string){
    // const n = await import("@angular/router")
    // n.Router.prototype.navigate([to]).then()
    console.log("#ROUTE:", to)
    setTimeout(()=>{
      this.navigate.navigate([to]).then()
    },500)
  }
}
