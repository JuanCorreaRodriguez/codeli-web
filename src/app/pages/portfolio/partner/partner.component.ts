import {AfterViewInit, Component, inject} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {ContactComponent} from "../../../shared/contact/contact.component";
import {LoaderComponent} from "../../../standalone/loader/loader.component";
import {FooterComponent} from "../../../standalone/footer/footer.component";
import {MatIcon} from "@angular/material/icon";
import {oPartner, partnersListEN, partnersListES} from "../../../core/interfaces/const.interface";
import {TranslateModule} from "@ngx-translate/core";
import {iPartner} from "../../../core/interfaces/iPartner";
import {UtilitiesService} from "../../../core/services/utilities.service";
import {NavigationService} from "../../../core/services/navigation.service";
import {LanguageService} from "../../../core/services/language.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-partner',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ContactComponent,
    LoaderComponent,
    FooterComponent,
    MatIcon,
    TranslateModule,
  ],
  templateUrl: './partner.component.html',
  styleUrl: './partner.component.scss'
})
export class PartnerComponent implements AfterViewInit, iPartner {
  oPartnerId: string = "";
  oPartner = oPartner;
  lan: LanguageService | null = null

  navigator = inject(NavigationService)
  router = inject(ActivatedRoute)
  utilities = inject(UtilitiesService)

  constructor() {
    this.oPartnerId = this.router.snapshot.params['id'];
    if (!this.oPartnerId) this.navigator.goTo("404")

    this.lan = inject(LanguageService)
    this.lan.initLanguage()
  }

  async ngAfterViewInit() {
    await this.setAnimation()

    if (!this.utilities.isBrowser()) return
    if (this.lan != null) await this.getPartner()
  }

  async setAnimation() {
    document.getElementById("transitionImg")!.style.setProperty("view-transition-name", this.oPartner.transition)
  }

  async getPartner() {
    let list
    if (this.lan == null) return
    if (this.lan.language === "es") list = partnersListES;
    else list = partnersListEN;

    // Find partner in list
    this.oPartner = list.find(e => e.id == this.oPartnerId)!
  }
}
