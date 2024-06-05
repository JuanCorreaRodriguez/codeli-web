import {Component} from '@angular/core';
import {PortfolioHeadComponent} from "./portfolio-head/portfolio-head.component";
import {LoaderComponent} from "../../standalone/loader/loader.component";
import {PortfolioBodyComponent} from "./portfolio-body/portfolio-body.component";
import {FooterComponent} from "../../standalone/footer/footer.component";
import {ContactComponent} from "../../shared/contact/contact.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    PortfolioHeadComponent,
    LoaderComponent,
    PortfolioBodyComponent,
    FooterComponent,
    ContactComponent
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
