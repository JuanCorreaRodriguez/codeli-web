import { Injectable, Renderer2, RendererFactory2} from '@angular/core';
import {UtilitiesService} from "./utilities.service";

type ThemeCodeli = 'dark-theme' | 'light-theme'

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2 = this.rendererFactory.createRenderer(null, null);
  private colorTheme: ThemeCodeli = "dark-theme";

  constructor(
    private rendererFactory: RendererFactory2,
    private utilities: UtilitiesService
  ) {}

  async initTheme(): Promise<void> {
    if (!this.utilities.isBrowser()) return

    await this.getColorTheme();
    this.renderer.addClass(document.body, this.colorTheme);
  }
  update(theme: ThemeCodeli) {
    const prevColorTheme = theme === 'dark-theme' ? 'light-theme' : 'dark-theme';

    if (!this.utilities.isBrowser()) return

    const body = document.querySelector("body")
    if(!body) return

    body.classList.remove(prevColorTheme)
    body.classList.add(theme)

    this.setColorTheme(theme);
  }
  isDarkMode() {
    return this.colorTheme == 'dark-theme';
  }
  private setColorTheme(theme: ThemeCodeli) {
    if (!this.utilities.isBrowser()) return

    localStorage.setItem('codeli-theme', theme);
    this.colorTheme = theme;
  }
  private async getColorTheme() {
    if (!this.utilities.isBrowser()) return

    let theme = localStorage.getItem('codeli-theme') as ThemeCodeli | null;
    if (theme != null) this.colorTheme = theme;
    else this.colorTheme = 'light-theme';
  }
}
