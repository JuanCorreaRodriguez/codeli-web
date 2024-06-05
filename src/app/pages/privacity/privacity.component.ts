import {Component} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {FooterComponent} from "../../standalone/footer/footer.component";
import {LoaderComponent} from "../../standalone/loader/loader.component";

@Component({
  selector: 'app-privacity',
  standalone: true,
  imports: [
    TranslateModule,
    FooterComponent,
    LoaderComponent
  ],
  templateUrl: './privacity.component.html',
  styleUrl: './privacity.component.scss'
})
export class PrivacityComponent {

}
