import {AfterViewInit, Component, inject, OnDestroy} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {LoaderComponent} from "../../standalone/loader/loader.component";
import {SimpleApproachComponent} from "../../pages/landing/simple-approach/simple-approach.component";
import {AnimationsService} from "../../core/services/animations.service";

@Component({
  selector: 'app-features-grid',
  standalone: true,
  imports: [
    NgOptimizedImage,
    TranslateModule,
    LoaderComponent,
    SimpleApproachComponent,
  ],
  templateUrl: './features-grid.component.html',
  styleUrl: './features-grid.component.scss'
})
export class FeaturesGridComponent implements AfterViewInit, OnDestroy {
  animations = inject(AnimationsService)

  ngAfterViewInit(): void {
    this.animations.backgroundDark({
      trigger: ".contCodePartner",
      object: ".contCodePartner",
      start: "0", end: "0", scrub: 1
    })
  }

  ngOnDestroy(): void {
    this.animations.destroyBackgroundTL()
  }
}
