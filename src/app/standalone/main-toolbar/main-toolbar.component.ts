import {
  afterNextRender,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import {AsyncPipe, NgOptimizedImage} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {LoaderComponent} from "../loader/loader.component";
import {MatToolbar, MatToolbarRow} from "@angular/material/toolbar";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {ReactiveFormsModule, UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {MatDivider} from "@angular/material/divider";
import {BaseComponent} from "../base/base.component";
import {iSearchables} from "../../core/interfaces/const.interface";
import {RouterLink} from "@angular/router";
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from "@angular/material/autocomplete";
import {SearchOptionsComponent} from "../search-options/search-options.component";
import {ThemeService} from "../../core/services/theme.service";
import {NavigationService} from "../../core/services/navigation.service";
import {SearchService} from "../../core/services/search.service";
import {AnimationsService} from "../../core/services/animations.service";
import {LanguageService} from "../../core/services/language.service";
import {UtilitiesService} from "../../core/services/utilities.service";

@Component({
  selector: 'app-main-toolbar',
  standalone: true,
  imports: [
    TranslateModule, NgOptimizedImage, LoaderComponent, MatToolbar, MatToolbarRow, MatButton, MatIcon,
    MatMenuTrigger, MatMenu, MatMenuItem, MatFormField, MatLabel, ReactiveFormsModule, MatInput, MatSuffix, MatDivider, BaseComponent, RouterLink, MatAutocomplete, MatOption, AsyncPipe, MatAutocompleteTrigger, SearchOptionsComponent,
  ],
  templateUrl: './main-toolbar.component.html',
  styleUrl: './main-toolbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainToolbarComponent implements AfterViewInit {
  public isDarkTheme = false;
  links: iSearchables[] = [];

  searcher = inject(SearchService);
  // searchList: iSearchables[] = []

  public searchForm: UntypedFormGroup = new UntypedFormGroup({});

  constructor(
    private themeService: ThemeService,
    private navigation: NavigationService,
    private animation: AnimationsService,
    private utilities: UtilitiesService,
    public language: LanguageService,) {
    this.initSearchForm()

    afterNextRender(() => {
      this.searcher.readLinks()
    })
  }

  async ngAfterViewInit(): Promise<void> {
    /** Init variables **/
    await this.themeService.initTheme()
    await this.language.initLanguage()
    this.animation.toolbarInit()
    this.isDarkTheme = this.themeService.isDarkMode();

    if (this.utilities.isMobile()) return

    const _dot = document.getElementById("data-cursor-dot");
    if (!_dot) return
    window.addEventListener("mousemove", (e: any) => {
      _dot.style.left = `${e.clientX}px`
      _dot.style.top = `${e.clientY}px`
      _dot.animate(
        {left: `${e.clientX}px`, top: `${e.clientY}px`},
        {duration: 150, fill: "forwards"})
    })

  }

  async initSearchForm() {
    this.searchForm = new UntypedFormGroup({
      search: new UntypedFormControl("")
    })
    this.changesSearch()
  }

  async changesSearch() {
    this.searchForm.valueChanges.subscribe((e: any) => {
      this.searching(e.search)
    })
  }

  searching(v: string) {
    this.links = this.searcher.getLinks(v)
  }

  async focusAnim() {
    this.animation.searchEnable()
    // this.searchList = this.searcher.getAllSearchables()
    // console.log(`getSearchLen ${this.searcher.getSearchLen()}`)
    // console.log(`all ${this.searcher.getAllSearchables()}`)
    // console.log(`len ${this.searchList}`)
  }

  async focusOut() {
    this.animation.searchDisable()
  }

  async goTo(to: string) {
    await this.navigation.goTo(to)
  }

  public toggleLanguage(lang: string) {
    this.language.saveLanguage(lang);
  }

  /** BREAK */
  public toggleTheme() {
    this.isDarkTheme = this.themeService.isDarkMode();
    if (this.isDarkTheme) {
      this.themeService.update('light-theme')
      this.animation.reverseDarkScroll()
    } else {
      this.themeService.update('dark-theme');
      this.animation.setDarkScroll()
    }
  }
}
