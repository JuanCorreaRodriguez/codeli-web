import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-ui-ux-avantages',
  standalone: true,
  imports: [
    NgOptimizedImage,
    TranslateModule
  ],
  templateUrl: './ui-ux-avantages.component.html',
  styleUrl: './ui-ux-avantages.component.scss'
})
export class UiUxAvantagesComponent {

}
