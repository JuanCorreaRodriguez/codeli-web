import {AfterViewInit, Component, inject} from '@angular/core';
import {Meta} from "@angular/platform-browser";
import {AnimationsService} from "../../core/services/animations.service";
import {UtilitiesService} from "../../core/services/utilities.service";

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [],
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss'
})
export class BaseComponent implements AfterViewInit {
  meta = inject(Meta)
  animations = inject(AnimationsService)
  utilities = inject(UtilitiesService)

  ngAfterViewInit(): void {
    setTimeout(async () => {
      if (!this.utilities.isBrowser()) return
      await this.configScroll()
    }, 0)
  }

  async configScroll() {
    await this.animations.configScroll();
    this.addMetas()
  }

  async addMetas() {

    this.meta.addTags([{
      name: "title", content: "Codeli Studio"
    }, {
      name: "description", content: "We create the efficient web solutions " +
        "for any kind of business"
    }, {
      name: "keywords", content: "Web development, Mobile apps Development, Landing pages"
    }], true)
  }
}
