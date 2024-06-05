import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    TranslateModule,
    MatButton
  ],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss'
})
export class MainHeaderComponent {

}
