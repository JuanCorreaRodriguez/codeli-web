import {Component} from '@angular/core';
import {ContactComponent} from "../../shared/contact/contact.component";
import {FooterComponent} from "../../standalone/footer/footer.component";
import {TranslateModule} from "@ngx-translate/core";
import {NgOptimizedImage} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {LoaderComponent} from "../../standalone/loader/loader.component";
import {MainHeaderComponent} from "./main-header/main-header.component";
import {ApproachIntroduceComponent} from "./approach-introduce/approach-introduce.component";
import {ApproachCardsComponent} from "../../shared/approach-cards/approach-cards.component";
import {StrengthsComponent} from "../../shared/strengths/strengths.component";
import {TransformVisionComponent} from "../../shared/transform-vision/transform-vision.component";
import {AlliancesComponent} from "../../shared/alliances/alliances.component";

@Component({
  selector: 'app-approach_landing',
  standalone: true,
  imports: [
    ContactComponent, FooterComponent, TranslateModule, NgOptimizedImage, MatButton,
    LoaderComponent, MainHeaderComponent, ApproachIntroduceComponent, ApproachCardsComponent, StrengthsComponent, TransformVisionComponent, AlliancesComponent
  ],
  templateUrl: './approach.component.html',
  styleUrl: './approach.component.scss'
})
export class ApproachComponent {}
