import {AfterViewInit, Component, inject} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {AnimationsService} from "../../../core/services/animations.service";

@Component({
  selector: 'app-web-dev-introduce',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './web-dev-introduce.component.html',
  styleUrl: './web-dev-introduce.component.scss'
})
export class WebDevIntroduceComponent implements AfterViewInit {
  animations = inject(AnimationsService)

  ngAfterViewInit(): void {
    this.animations.introduceAnimation()
  }
}
