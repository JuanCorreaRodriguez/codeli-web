import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-simple-approach',
  standalone: true,
  imports: [
    NgOptimizedImage,
    TranslateModule
  ],
  templateUrl: './simple-approach.component.html',
  styleUrl: './simple-approach.component.scss'
})
export class SimpleApproachComponent {

}
