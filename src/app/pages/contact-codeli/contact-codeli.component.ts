import { Component } from '@angular/core';
import {LoaderComponent} from "../../standalone/loader/loader.component";
import {FooterComponent} from "../../standalone/footer/footer.component";
import {ContactHeadComponent} from "./contact-head/contact-head.component";

@Component({
  selector: 'app-contact-codeli',
  standalone: true,
  imports: [
    LoaderComponent,
    FooterComponent,
    ContactHeadComponent
  ],
  templateUrl: './contact-codeli.component.html',
  styleUrl: './contact-codeli.component.scss'
})
export class ContactCodeliComponent {

}
