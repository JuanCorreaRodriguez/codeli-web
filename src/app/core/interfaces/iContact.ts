import {selection, servicesES} from "./const.interface";
import {UntypedFormGroup} from "@angular/forms";

export interface iContactCalendar {

  formContact: UntypedFormGroup
  enableSend: boolean
  sending: boolean
  creating: boolean

  services: selection[]

  event: any

  startDateTime: string
  endDateTime: string
  serverToken: string
  nextTimeAvailable: string

  // eventCreated(event: string): Promise<void>

  tokenObservableAction(event: string): Promise<void>

  // meetingObservableAction(event: string): Promise<void>

  nextDateTimeParse(): void

  updateFormData(): void

  confirmMeeting(): void

  checkLan(): void

  initContactForm(): Promise<void>

  formChanges(): void

  sendEmail(): void
}

export interface iContact {
  formContact: UntypedFormGroup
  enableSend: boolean
  sending: boolean
  creating: boolean

  services: selection[]

  emailData: iContactEmail

  serverToken: string
  nextTimeAvailable: string

  tokenObservableAction(event: string): Promise<void>

  updateFormData(): void

  checkLan(): void

  initContactForm(): Promise<void>

  formChanges(): void

  initSendEmail(): void

  createEmailMsg(): Promise<void>

  sendEmail(): void

}

export interface iContactEmail {
  name: string
  email: string
  services: string
  whatsapp?: boolean
  comments?: string
  token: string
  contact: string
  messages: string[]
}

