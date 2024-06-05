import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-consulting-us',
  standalone: true,
  imports: [
    NgOptimizedImage,
    TranslateModule
  ],
  templateUrl: './consulting-us.component.html',
  styleUrl: './consulting-us.component.scss'
})
export class ConsultingUsComponent {

}
