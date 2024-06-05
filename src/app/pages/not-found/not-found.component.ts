import { Component } from '@angular/core';
import {MainHeaderComponent} from "./main-header/main-header.component";
import {LoaderComponent} from "../../standalone/loader/loader.component";

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    MainHeaderComponent,
    LoaderComponent
  ],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

}
