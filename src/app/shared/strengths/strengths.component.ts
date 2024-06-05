import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-strengths',
  standalone: true,
  imports: [
    NgOptimizedImage,
    TranslateModule
  ],
  templateUrl: './strengths.component.html',
  styleUrl: './strengths.component.scss'
})
export class StrengthsComponent {

}
