import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {ContactComponent} from "../../../shared/contact/contact.component";
import {LoaderComponent} from "../../../standalone/loader/loader.component";

@Component({
  selector: 'app-contact-head',
  standalone: true,
  imports: [
    NgOptimizedImage,
    TranslateModule,
    ContactComponent,
    LoaderComponent
  ],
  templateUrl: './contact-head.component.html',
  styleUrl: './contact-head.component.scss'
})
export class ContactHeadComponent {

}
