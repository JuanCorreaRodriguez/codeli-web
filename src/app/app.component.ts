import {Component, enableProdMode} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {MainToolbarComponent} from "./standalone/main-toolbar/main-toolbar.component";

enableProdMode();

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Codeli Studio';
}

// ]e=*5y*uJ`i3%-@9

