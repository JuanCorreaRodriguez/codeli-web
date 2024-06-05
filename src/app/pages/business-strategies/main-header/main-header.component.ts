import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-main-header',
  standalone: true,
    imports: [
        NgOptimizedImage,
        TranslateModule
    ],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss'
})
export class MainHeaderComponent {

}
