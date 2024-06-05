import {
  AfterViewInit,
  Component, effect, ElementRef, EnvironmentInjector,
  inject,
  input, Renderer2,
  runInInjectionContext, viewChild,
} from '@angular/core';
import {iSearchables} from "../../core/interfaces/const.interface";
import {MatIcon} from "@angular/material/icon";
import {AnimationsService} from "../../core/services/animations.service";
import {NavigationService} from "../../core/services/navigation.service";
import {SearchService} from "../../core/services/search.service";

@Component({
  selector: 'app-search-options',
  standalone: true,
  imports: [
    MatIcon,
  ],
  templateUrl: './search-options.component.html',
  styleUrl: './search-options.component.scss'
})
export class SearchOptionsComponent implements AfterViewInit {
  animations = inject(AnimationsService)
  navigator = inject(NavigationService)
  search = inject(SearchService)
  render = inject(Renderer2);
  isOpen = false
  searchPanel = viewChild.required<ElementRef>("searchPanel")
  links = input.required<iSearchables[]>()
  private readonly injector = inject(EnvironmentInjector);

  constructor() {
    this.render.listen("window", "click", (e: Event) => {
      if (e.target != this.searchPanel().nativeElement && this.isOpen) {
        this.closePanel()
      }
    })
  }

  ngAfterViewInit(): void {
    this.animations.searchResultAnim()

    runInInjectionContext(this.injector, () => {
      effect(() => {
        this.panelAnim()
      })
    })
  }

  panelAnim() {
    if (this.links().length == 0 && this.isOpen) this.closePanel()
    else if (this.links().length > 0 && !this.isOpen) this.openPanel()
  }

  openPanel() {
    this.isOpen = true
    this.animations.searchResultAnim()
  }

  closePanel() {
    this.isOpen = false
    this.animations.searchResultReverseAnim()
  }

  goto(link: iSearchables) {
    this.closePanel()
    setTimeout(() => {
      this.navigator.goTo(link.url)
    }, 0)
    // this.search.addQueueSearch(link)
  }
}
