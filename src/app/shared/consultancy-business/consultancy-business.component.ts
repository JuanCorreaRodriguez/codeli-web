import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-consultancy-business',
  standalone: true,
  imports: [
    NgOptimizedImage,
    TranslateModule
  ],
  templateUrl: './consultancy-business.component.html',
  styleUrl: './consultancy-business.component.scss'
})
export class ConsultancyBusinessComponent {

}
