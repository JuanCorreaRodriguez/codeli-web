import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatIcon,
    TranslateModule
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
