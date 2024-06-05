import {HttpClient, HttpHeaders} from '@angular/common/http';
import {
  Injectable,
  runInInjectionContext,
  inject,
  EnvironmentInjector
} from '@angular/core';
import {iSearchables} from "../interfaces/const.interface";
import {environment} from "../../../environments/environment";
import {iSearch} from "../interfaces/iSearch";

@Injectable({
  providedIn: 'root'
})
export class SearchService implements iSearch {
  url = environment.url[0].local
  localLinks: iSearchables[] = []
  lan = "en"
  
  // public queueSearch = new QueueSearch()
  private readonly injector = inject(EnvironmentInjector)

  constructor(private httpClient: HttpClient) {
  }

  async readLinks() {
    runInInjectionContext(this.injector, () => {
      const e = localStorage.getItem("codeli-language")
      if (e) this.lan = e
      else this.lan = "en"
      console.log(`LANGUAGE ${this.lan}`)
    })
    // SINGLETON
    if (this.localLinks.length == 0) {

      let url = "./assets/searchList/links.json"
      if (this.lan == "es") url = "./assets/searchList/links_es.json"

      this.httpClient.get<iSearchables[]>(
        url, {headers: this.getHeaders()})
        .subscribe((e) => this.localLinks = e)
    }
  }

  getLinks(v: string) {
    if (v == "") return []
    if (this.localLinks.length == 0) this.readLinks()
    return this.localLinks.filter((e) => {
      return e.match.toLowerCase().includes(v.toLowerCase())
    })
  }

  getHeaders() {
    return new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Content-Type', 'text/plain');
  }
}
