import {AfterViewInit, Component, inject} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {NgOptimizedImage} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {TranslateModule} from "@ngx-translate/core";
import {AnimationsService} from "../../core/services/animations.service";
import {UtilitiesService} from "../../core/services/utilities.service";

@Component({
  selector: 'app-web-development',
  standalone: true,
  imports: [
    MatButton,
    NgOptimizedImage,
    MatIcon,
    TranslateModule
  ],
  templateUrl: './web-development.component.html',
  styleUrl: './web-development.component.scss'
})
export class WebDevelopmentComponent implements AfterViewInit {
  animations = inject(AnimationsService)
  utilities = inject(UtilitiesService)

  ngAfterViewInit(): void {
    if (!this.utilities.isBrowser()) return
    // const move = this.utilities.isMobile() ? 50 : 100
    this.animations.devCircle()
    this.animations.titlesReveal(".wsTitle")
    this.animations.titlesReveal(".dataWebDevServiceTitle")
    this.animations.resumeReveal(".wsDesc")
    this.animations.resumeReveal(".dataWebDevServiceDesc")
    this.animations.opacityAnimationX({
      object: ".webDevAnim",
      start: "top 60%",
      end: "bottom 20%",
      ease: "back.out(1.4)",
      xStart: 250,
      scrub: 0,
    })
    this.animations.opacityAnimationX({
      object: ".topLabelDev",
      start: "top 70%",
      end: "bottom 50%",
      ease: "back.out(1.4)",
      xStart: 250,
      scrub: 3,
    })
    this.animations.opacityAnimationY({
      object: ".inner2Anim",
      start: "top 70%",
      end: "bottom 50%",
      ease: "back.out(1.4)",
      yStart: 50,
      scrub: 1,
    })
  }
}
