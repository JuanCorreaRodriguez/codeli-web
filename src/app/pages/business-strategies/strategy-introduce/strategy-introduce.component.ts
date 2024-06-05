import {AfterViewInit, Component, inject} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {AnimationsService} from "../../../core/services/animations.service";

@Component({
  selector: 'app-strategy-introduce',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './strategy-introduce.component.html',
  styleUrl: './strategy-introduce.component.scss'
})
export class StrategyIntroduceComponent implements AfterViewInit {
  animations = inject(AnimationsService)

  ngAfterViewInit(): void {
    this.animations.introduceAnimation()
  }

}
