import {Component, inject} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {NgOptimizedImage} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {NavigationService} from "../../../core/services/navigation.service";

@Component({
  selector: 'app-portfolio-body',
  standalone: true,
  imports: [
    MatButton,
    NgOptimizedImage,
    TranslateModule
  ],
  templateUrl: './portfolio-body.component.html',
  styleUrl: './portfolio-body.component.scss'
})
export class PortfolioBodyComponent {
  navigation = inject(NavigationService)

  details(id: string) {
    this.navigation.goTo(`partner/${id}`)
  }
}
