import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-transform-vision',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatIcon,
    MatButton,
    TranslateModule
  ],
  templateUrl: './transform-vision.component.html',
  styleUrl: './transform-vision.component.scss'
})
export class TransformVisionComponent {

}
