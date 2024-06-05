import {inject, Injectable} from '@angular/core';
import {UtilitiesService} from "./utilities.service";
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  language = 'es';
  public langBrowser: any;
  utilities = inject(UtilitiesService)
  translate = inject(TranslateService)

  constructor() {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang("en")
  }

  async initLanguage() {
    if (!this.utilities.isBrowser()) return
    await this.getSavedLanguage()
  }

  async getSavedLanguage() {
    if (this.utilities.isBrowser()) this.language = localStorage.getItem('codeli-language')!;
    if (this.language == '') await this.getBrowserLanguage();
    if (this.language == null) this.language = "en"

    await this.setLanguage()
  }

  async setLanguage(){
    await this.setDefaultLanguage()
    await this.saveLanguage(this.language)
  }

  async getBrowserLanguage() {
    this.langBrowser = this.translate.getBrowserLang();
    if(!this.langBrowser) this.langBrowser = "es"
  }

  async setDefaultLanguage(){
    this.translate.setDefaultLang(this.language);
  }

  async saveLanguage(lang: string) {
    if(lang == "" || lang == null) lang = "en"
    this.translate.use(lang);
    this.language = lang;
    if (this.utilities.isBrowser()) localStorage.setItem('codeli-language', lang);
  }
  async getTranslation(ref:string){
    let  val = ""
    this.translate.get(ref).subscribe((e)=> val = e)
    return val
  }
}

// if (['es', 'en'].includes(this.langBrowser)) this.language = this.langBrowser;
// else this.language = 'en';
