import { Component} from '@angular/core';
import {SuccessComponent} from "../../shared/success/success.component";
import {TechnosComponent} from "../../shared/technos/technos.component";
import {FooterComponent} from "../../standalone/footer/footer.component";
import {MatButton} from "@angular/material/button";
import {NgOptimizedImage} from "@angular/common";
import {MainHeaderComponent} from "./main-header/main-header.component";
import {LoaderComponent} from "../../standalone/loader/loader.component";
import {WebDevIntroduceComponent} from "./web-dev-introduce/web-dev-introduce.component";
import {TransformVisionComponent} from "../../shared/transform-vision/transform-vision.component";
import {WebServiceComponent} from "../../shared/web-service/web-service.component";
import {ContactComponent} from "../../shared/contact/contact.component";


@Component({
  selector: 'app-web-dev',
  standalone: true,
  imports: [
    SuccessComponent,
    TechnosComponent,
    FooterComponent,
    MatButton,
    NgOptimizedImage,
    MainHeaderComponent,
    LoaderComponent,
    WebDevIntroduceComponent,
    TransformVisionComponent,
    WebServiceComponent,
    ContactComponent
  ],
  templateUrl: './web-dev.component.html',
  styleUrl: './web-dev.component.scss'
})
export class WebDevComponent{}
