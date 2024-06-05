import {AfterViewInit, Component, inject} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {AnimationsService} from "../../core/services/animations.service";

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [
    NgOptimizedImage, TranslateModule
  ],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent implements AfterViewInit {
  animations = inject(AnimationsService);

  ngAfterViewInit(): void {
    this.animations.logosAnim(".clientsIcs")
  }
}
