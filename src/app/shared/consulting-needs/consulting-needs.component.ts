import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-consulting-needs',
  standalone: true,
  imports: [
    NgOptimizedImage,
    TranslateModule
  ],
  templateUrl: './consulting-needs.component.html',
  styleUrl: './consulting-needs.component.scss'
})
export class ConsultingNeedsComponent {

}
