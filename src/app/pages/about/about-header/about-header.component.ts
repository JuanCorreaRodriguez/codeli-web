import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-about-header',
  standalone: true,
    imports: [
        NgOptimizedImage,
        TranslateModule
    ],
  templateUrl: './about-header.component.html',
  styleUrl: './about-header.component.scss'
})
export class AboutHeaderComponent {

}
