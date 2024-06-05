import {AfterViewInit, Component, inject} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {AnimationsService} from "../../../core/services/animations.service";

@Component({
  selector: 'app-ui-ux-introduce',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './ui-ux-introduce.component.html',
  styleUrl: './ui-ux-introduce.component.scss'
})
export class UiUxIntroduceComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.animations.introduceAnimation()
  }

  animations = inject(AnimationsService)
}
