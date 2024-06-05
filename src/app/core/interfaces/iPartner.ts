import {LanguageService} from "../services/language.service";
import {ProjectData} from "./const.interface";

export interface iPartner {
  oPartnerId: string
  lan: LanguageService | null
  oPartner: ProjectData

  setAnimation(): Promise<void>

  getPartner(): Promise<void>
}
