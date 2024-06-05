import {AfterViewInit, Component, inject} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {TranslateModule} from "@ngx-translate/core";
import {AnimationsService} from "../../core/services/animations.service";
import {NavigationService} from "../../core/services/navigation.service";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatButton, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements AfterViewInit {
  animations = inject(AnimationsService)
  navigate = inject(NavigationService)

  ngAfterViewInit(): void {
    this.animations.footerAnim()
  }

  goTo(to: string) {
    this.navigate.goTo(to)
  }
}
