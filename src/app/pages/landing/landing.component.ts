import {Component, HostListener} from '@angular/core';
import {FooterComponent} from "../../standalone/footer/footer.component";
import {LoaderComponent} from "../../standalone/loader/loader.component";
import {MainHeadComponent} from "./main-head/main-head.component";
import {MatButton} from "@angular/material/button";
import {NgOptimizedImage} from "@angular/common";
import {BaseComponent} from "../../standalone/base/base.component";
import {MainToolbarComponent} from "../../standalone/main-toolbar/main-toolbar.component";
import {TechnosComponent} from "../../shared/technos/technos.component";
import {ContactComponent} from "../../shared/contact/contact.component";
import {ClientsComponent} from "../../shared/clients/clients.component";
import {FeaturesGridComponent} from '../../shared/features-grid/features-grid.component';
import {WebDevelopmentComponent} from "../../shared/web-development/web-development.component";
import {CodeliMetricsComponent} from "../../shared/codeli-metrics/codeli-metrics.component";
import {WebDesignComponent} from "../../shared/web-design/web-design.component";
import {TransformVisionComponent} from "../../shared/transform-vision/transform-vision.component";
import {SocialProofComponent} from "../../shared/social-proof/social-proof.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  imports: [ClientsComponent, FeaturesGridComponent,
    FooterComponent, LoaderComponent, MainHeadComponent, MatButton,
    NgOptimizedImage, BaseComponent, MainToolbarComponent,
    WebDevelopmentComponent, TechnosComponent, ContactComponent,
    CodeliMetricsComponent, WebDesignComponent, TransformVisionComponent, SocialProofComponent]
})
export class LandingComponent {


  // @HostListener("scroll", ['$event'])
  // onScroll(event: Event) {
  //   console.log(`SCROLL EVENT ${event}`)
  // }
}


// let lastScrollTop = 0

// fromEvent(window, 'scroll')
//   .pipe(
//     debounceTime(100),
//     map(() => {
//       let st = window.pageYOffset || document.documentElement.scrollTop;
//       let diff = st - lastScrollTop;
//       lastScrollTop = st <= 0 ? 0 : st;
//       return diff >= 0 ? 'Down' : 'Up';
//     }),
//     distinctUntilChanged()
//   )
//   .subscribe((scrollDirection) => {
//     console.log('Scroll Direction:', scrollDirection);
//   });

// Example Date-Time
// const date = "Thu May 09 2024 00:00:00 GMT-0600 (Central Standard Time)"
// const time = "08:00 PM"
// const sTime = this.calendar.getRFCDate(date, time)
// const eTime = this.calendar.addHourToRFCDate(sTime)
// const newDate  = await this.calendar.nextDateWithinSchedule(sTime)
