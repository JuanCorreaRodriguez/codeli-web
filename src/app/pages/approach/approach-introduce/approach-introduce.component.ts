import {AfterViewInit, Component, inject} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {AnimationsService} from "../../../core/services/animations.service";

@Component({
  selector: 'app-approach-introduce',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './approach-introduce.component.html',
  styleUrl: './approach-introduce.component.scss'
})
export class ApproachIntroduceComponent implements AfterViewInit {
  animations = inject(AnimationsService)

  ngAfterViewInit(): void {
    this.animations.introduceAnimation()
  }

}
