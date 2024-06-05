import {Component} from '@angular/core';
import {ContactComponent} from "../../shared/contact/contact.component";
import {FooterComponent} from "../../standalone/footer/footer.component";

import {MatButton} from "@angular/material/button";
import {MainHeaderComponent} from "./main-header/main-header.component";
import {LoaderComponent} from "../../standalone/loader/loader.component";
import {UiUxIntroduceComponent} from "./ui-ux-introduce/ui-ux-introduce.component";
import {WireframingComponent} from "../../shared/wireframing/wireframing.component";
import {UserBasedDesignComponent} from "../../shared/user-based-design/user-based-design.component";
import {UiUxAvantagesComponent} from "../../shared/ui-ux-avantages/ui-ux-avantages.component";
import {UiUxCountersComponent} from "../../shared/ui-ux-counters/ui-ux-counters.component";

@Component({
  selector: 'app-ui-ux',
  standalone: true,
  imports: [ContactComponent, FooterComponent, MatButton, MainHeaderComponent, LoaderComponent, UiUxIntroduceComponent, WireframingComponent, UserBasedDesignComponent, UiUxAvantagesComponent, UiUxCountersComponent],
  templateUrl: './ui-ux.component.html',
  styleUrl: './ui-ux.component.scss'
})
export class UiUxComponent {}
