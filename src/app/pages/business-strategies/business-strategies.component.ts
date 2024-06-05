import { Component } from '@angular/core';
import {MainHeaderComponent} from "./main-header/main-header.component";
import {LoaderComponent} from "../../standalone/loader/loader.component";
import {FooterComponent} from "../../standalone/footer/footer.component";
import {StrategyIntroduceComponent} from "./strategy-introduce/strategy-introduce.component";
import {NgOptimizedImage} from "@angular/common";
import {StrategyServiceComponent} from "../../shared/strategy-service/strategy-service.component";
import {StrategyCountersComponent} from "../../shared/strategy-counters/strategy-counters.component";
import {ContactComponent} from "../../shared/contact/contact.component";

@Component({
  selector: 'app-business-strategies',
  standalone: true,
  imports: [
    MainHeaderComponent,
    LoaderComponent,
    FooterComponent,
    StrategyIntroduceComponent,
    NgOptimizedImage,
    StrategyServiceComponent,
    StrategyCountersComponent,
    ContactComponent
  ],
  templateUrl: './business-strategies.component.html',
  styleUrl: './business-strategies.component.scss'
})
export class BusinessStrategiesComponent {

}
