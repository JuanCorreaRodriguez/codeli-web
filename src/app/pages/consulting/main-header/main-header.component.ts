import {AfterViewInit, Component, inject} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
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
  animation = inject(AnimationsService)

  ngAfterViewInit(): void {
    this.animation.animHeadersRoutes()
  }
}
