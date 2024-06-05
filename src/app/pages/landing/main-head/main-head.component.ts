import {AfterViewInit, Component, inject} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {NgOptimizedImage} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {AnimationsService} from "../../../core/services/animations.service";
import {NavigationService} from "../../../core/services/navigation.service";

@Component({
  selector: 'app-main-head',
  standalone: true,
  imports: [
    MatButton,
    NgOptimizedImage,
    TranslateModule,
  ],
  templateUrl: './main-head.component.html',
  styleUrl: './main-head.component.scss'
})
export class MainHeadComponent implements AfterViewInit {
  animations = inject(AnimationsService)
  nav = inject(NavigationService)

  ngAfterViewInit(): void {
    this.animations.animHeaders()
  }

  goTo(path: string) {
    this.nav.goTo(path)
  }
}
