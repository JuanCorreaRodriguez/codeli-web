import {Component} from '@angular/core';
import {FooterComponent} from "../../standalone/footer/footer.component";
import {LoaderComponent} from "../../standalone/loader/loader.component";
import {MainHeaderComponent} from "./main-header/main-header.component";
import {ConsultingIntroduceComponent} from "./consulting-introduce/consulting-introduce.component";
import {ConsultancyBusinessComponent} from "../../shared/consultancy-business/consultancy-business.component";
import {ConsultingCountersComponent} from "../../shared/consulting-counters/consulting-counters.component";
import {ContactComponent} from "../../shared/contact/contact.component";
import {ConsultingNeedsComponent} from "../../shared/consulting-needs/consulting-needs.component";
import {ConsultingUsComponent} from "../../shared/consulting-us/consulting-us.component";

@Component({
  selector: 'app-consulting',
  standalone: true,
  imports: [
    FooterComponent,
    LoaderComponent,
    MainHeaderComponent,
    ConsultingIntroduceComponent,
    ConsultancyBusinessComponent,
    ConsultingCountersComponent,
    ContactComponent,
    ConsultingNeedsComponent,
    ConsultingUsComponent
  ],
  templateUrl: './consulting.component.html',
  styleUrl: './consulting.component.scss'
})
export class ConsultingComponent {

}
