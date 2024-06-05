import {AfterViewInit, Component, inject} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {AnimationsService} from "../../../core/services/animations.service";

@Component({
  selector: 'app-portfolio-head',
  standalone: true,
  imports: [NgOptimizedImage, TranslateModule],
  templateUrl: './portfolio-head.component.html',
  styleUrl: './portfolio-head.component.scss'
})
export class PortfolioHeadComponent implements AfterViewInit {

  animations = inject(AnimationsService);

  ngAfterViewInit(): void {
    this.animations.animHeadersPortfolio()
  }
}

