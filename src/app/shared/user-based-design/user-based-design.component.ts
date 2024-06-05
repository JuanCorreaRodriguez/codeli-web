import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-user-based-design',
  standalone: true,
  imports: [
    NgOptimizedImage,
    TranslateModule
  ],
  templateUrl: './user-based-design.component.html',
  styleUrl: './user-based-design.component.scss'
})
export class UserBasedDesignComponent {

}
