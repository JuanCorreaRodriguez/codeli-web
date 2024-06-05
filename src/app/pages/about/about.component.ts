import {Component} from '@angular/core';
import {SocialProofComponent} from "../../shared/social-proof/social-proof.component";
import {FooterComponent} from "../../standalone/footer/footer.component";
import {TechnosComponent} from "../../shared/technos/technos.component";
import {NgOptimizedImage} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {AboutHeaderComponent} from "./about-header/about-header.component";
import {LoaderComponent} from "../../standalone/loader/loader.component";
import {AboutUsComponent} from "../../shared/about-us/about-us.component";
import {StrengthsComponent} from "../../shared/strengths/strengths.component";
import {CodeliMetricsComponent} from "../../shared/codeli-metrics/codeli-metrics.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    SocialProofComponent,
    FooterComponent,
    TechnosComponent,
    NgOptimizedImage,
    TranslateModule,
    AboutHeaderComponent,
    LoaderComponent,
    AboutUsComponent,
    StrengthsComponent,
    CodeliMetricsComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent{}
