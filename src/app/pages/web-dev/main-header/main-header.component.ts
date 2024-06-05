import {AfterViewInit, Component, inject} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {UtilitiesService} from "../../../core/services/utilities.service";
import {AnimationsService} from "../../../core/services/animations.service";

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    TranslateModule
  ],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss'
})
export class MainHeaderComponent implements AfterViewInit {
  utilities = inject(UtilitiesService)
  animations = inject(AnimationsService)

  constructor() {
    console.log("HEADER WEB CONSTRUCTOR")
  }

  ngAfterViewInit(): void {
    if (this.utilities.isBrowser()) this.localAnimations()
  }

  localAnimations() {
    this.animations.animHeadersRoutes()
  }
}
