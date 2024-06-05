import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-approach-cards',
  standalone: true,
  imports: [
    NgOptimizedImage,
    TranslateModule
  ],
  templateUrl: './approach-cards.component.html',
  styleUrl: './approach-cards.component.scss'
})
export class ApproachCardsComponent {

}
