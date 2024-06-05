import {AfterViewInit, Component, inject} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {NgOptimizedImage} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {TranslateModule} from "@ngx-translate/core";
import {AnimationsService} from "../../core/services/animations.service";
import {UtilitiesService} from "../../core/services/utilities.service";

@Component({
  selector: 'app-web-service',
  standalone: true,
  imports: [
    MatButton,
    NgOptimizedImage,
    MatIcon,
    TranslateModule
  ],
  templateUrl: './web-service.component.html',
  styleUrl: './web-service.component.scss'
})
export class WebServiceComponent implements AfterViewInit {
  animations = inject(AnimationsService)
  utilities = inject(UtilitiesService)

  async ngAfterViewInit(): Promise<void> {
    if (!this.utilities.isBrowser()) return
    const move = this.utilities.isMobile() ? 50 : 100
    await this.animations.webDesignAnim(move)
    await this.animations.titlesReveal(".wdTitle")
    await this.animations.resumeReveal(".wdDesc")
    this.animations.opacityAnimationX({
      object: ".webServAnim",
      start: "top 70%",
      end: "bottom 50%",
      ease: "back.out(1.4)",
      xStart: 250,
      scrub: 1
    })
    this.animations.opacityAnimationX({
      object: ".topLabelServ",
      start: "top 70%",
      end: "bottom 50%",
      ease: "back.out(1.4)",
      xStart: 250,
      scrub: 3,
    })
    this.animations.opacityAnimationY({
      object: ".inner2AnimServ",
      start: "top 70%",
      end: "bottom 50%",
      ease: "back.out(1.4)",
      yStart: 50,
      scrub: 3,
    })
  }
}
