import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";
import {MatIconRegistry} from "@angular/material/icon";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  constructor(
    public matIconReg: MatIconRegistry,
    private _snack: MatSnackBar,
    @Inject(PLATFORM_ID) public _platformId: Object) {
    this.matIconReg.setDefaultFontSetClass('material-symbols-outlined');
  }

  isMobile():boolean {
    if (!isPlatformBrowser(this._platformId)) return false
    return window.innerWidth <= 770;
  }
  isBrowser(): boolean{
    return isPlatformBrowser(this._platformId)
  }

  launchSnack(msg: string, action: string, duration:number){
    this._snack.open(msg, action, {duration: duration})
  }
}
