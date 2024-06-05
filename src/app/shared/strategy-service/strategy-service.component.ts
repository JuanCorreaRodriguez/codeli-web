import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-strategy-service',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatIcon,
    TranslateModule
  ],
  templateUrl: './strategy-service.component.html',
  styleUrl: './strategy-service.component.scss'
})
export class StrategyServiceComponent {

}
