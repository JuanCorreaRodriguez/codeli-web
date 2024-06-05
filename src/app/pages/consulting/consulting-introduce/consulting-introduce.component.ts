import {AfterViewInit, Component, inject} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {AnimationsService} from "../../../core/services/animations.service";

@Component({
  selector: 'app-consulting-introduce',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './consulting-introduce.component.html',
  styleUrl: './consulting-introduce.component.scss'
})
export class ConsultingIntroduceComponent implements AfterViewInit {
  animations = inject(AnimationsService)

  ngAfterViewInit(): void {
    this.animations.introduceAnimation()
  }

}
