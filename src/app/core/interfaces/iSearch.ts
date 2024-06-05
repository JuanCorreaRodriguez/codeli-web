import {iSearchables} from "./const.interface";
import {HttpHeaders} from "@angular/common/http";

export interface iSearch {
  url: string
  localLinks: iSearchables[]
  lan: string

  readLinks(): Promise<void>

  getLinks(value: string): iSearchables[]

  getHeaders(): HttpHeaders
}
