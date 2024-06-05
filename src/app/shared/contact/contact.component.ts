import {AfterViewInit, Component, inject} from '@angular/core';
import {FormsModule, ReactiveFormsModule, UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgClass, NgOptimizedImage} from "@angular/common";
import {MatError, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatButton} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {TranslateModule} from "@ngx-translate/core";
import {MatChipGrid, MatChipInput, MatChipListbox, MatChipOption, MatChipRow} from "@angular/material/chips";
import {MatIcon} from "@angular/material/icon";
import {selection, servicesEN, servicesES} from "../../core/interfaces/const.interface";
import {FirestoreService} from "../../core/services/firestore.service";
import {AnimationsService} from "../../core/services/animations.service";
import {UtilitiesService} from "../../core/services/utilities.service";
import {LanguageService} from "../../core/services/language.service";
import {NavigationService} from "../../core/services/navigation.service";
import {GoogleService} from "../../core/services/google.service";
import {ObservablesService} from "../../core/services/observables.service";
import {iContact, iContactEmail} from "../../core/interfaces/iContact";
import {MatProgressSpinner} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass,
    MatFormFieldModule,
    MatSelect,
    MatOption,
    MatCheckbox,
    MatButton,
    MatInputModule,
    MatLabel,
    MatError,
    NgOptimizedImage,
    TranslateModule,
    MatChipListbox,
    MatChipOption,
    MatChipGrid,
    MatChipRow,
    FormsModule,
    MatIcon,
    MatChipInput,
    MatProgressSpinner,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  providers: []
})
export class ContactComponent implements AfterViewInit, iContact {
  public formContact: UntypedFormGroup = new UntypedFormGroup({});
  enableSend = false
  sending = false
  creating = false
  services: selection[] = servicesES

  emailData: iContactEmail = {email: "", name: "", services: "", token: "", contact: "", messages: []};
  serverToken = ""
  nextTimeAvailable = ""

  firestore = inject(FirestoreService)
  animations = inject(AnimationsService)
  utils = inject(UtilitiesService)
  languageService = inject(LanguageService)
  nav = inject(NavigationService)
  googleService = inject(GoogleService)
  observables = inject(ObservablesService)

  constructor() {
    this.initContactForm()
    this.checkLan()
  }

  async ngAfterViewInit() {

    this.observables.logIn.subscribe({
      next: (v) => {
        if (typeof v != "boolean") this.googleService.sendEmailFunc(v)
        else if (!v) this.utils.launchSnack("ERROR", "", 5000)
      },
      error: (err) => console.log(` ERROR LOGIN SUBS ${err}`),
    })

    // PendingSEND EM
    // this.googleService.sendEmailFunc(this.event)

    // this.observables.serviceToken.subscribe((e) => {
    //   if (e == "") return
    //   this.tokenObservableAction(e)
    // })
    //
    // this.observables.dateAvailable.subscribe((e) => {
    //   if (!e) return
    //   this.meetingObservableAction(e)
    // })

    this.observables.sentEmail.subscribe(async (e) => {
      if (e == null) return
      const msg = await this.languageService.getTranslation("contact.sent")
      this.utils.launchSnack(msg, "", 2000)
      this.nav.goTo("")
    })
  }

  /** Access Token Verification Observable */
  async tokenObservableAction(e: string) {
    if (e == "error") {
      this.utils.launchSnack(await this.languageService.getTranslation("ERROR.something"), "", 2000)
      return
    }
    if (e.includes("Http failure")) {
      this.utils.launchSnack(await this.languageService.getTranslation("ERROR.conn"), "", 2000)
      return
    }
    this.serverToken = e
  }

  /** Update for data after check availability */
  updateFormData() {
    this.animations.updateFormDataAnim()
  }

  /** Check language */
  checkLan() {
    this.languageService.language == "es" ? this.services = servicesES : this.services = servicesEN
  }

  /** Init Form group */
  async initContactForm() {
    this.formContact = new UntypedFormGroup({
      name: new UntypedFormControl('', Validators.required),
      contact: new UntypedFormControl('', Validators.required),
      service: new UntypedFormControl([]),
      whatsapp: new UntypedFormControl(false),
      comments: new UntypedFormControl(''),
    });
    this.formChanges()
  }

  /** Changes on form general to notify user for save edits */
  formChanges() {
    this.formContact.valueChanges.subscribe(() => this.enableSend = this.formContact.valid && !this.sending);
  }

  /** Send Email contact*/
  initSendEmail() {
    // Unable form
    this.enableSend = false
    this.sending = true
    if (this.formContact.value.name == "") return

    let services: string = ""

    for (let s of this.formContact.value.service) services += `<br/>• ​${s}`

    const wa = this.formContact.value.whatsapp ? "Yes" : "No";
    services += `<br/><br/>Contact: ${this.formContact.value.contact}`
    services += `<br/>Contact via whatsapp : ${wa}`

    const desc = `${this.formContact.value.comments} <br/><br/> ${services}`

    this.emailData.name = this.formContact.value.name;
    this.emailData.comments = desc;
    this.emailData.contact = this.formContact.value.email;
    this.emailData.whatsapp = !!this.formContact.value.whatsapp;
    this.emailData.services = this.formContact.value.service;

    this.createEmailMsg()
  }

  async createEmailMsg() {
    let msg: string[] = []
    msg.push(await this.languageService.getTranslation("contact.email0"))
    msg.push(await this.languageService.getTranslation("contact.email1"))
    msg.push(await this.languageService.getTranslation("contact.email2"))
    msg.push(await this.languageService.getTranslation("contact.email3"))
    msg.push(await this.languageService.getTranslation("contact.email4"))
    this.emailData.messages = msg

    this.sendEmail()
  }

  sendEmail() {
    this.googleService.initAuth(this.emailData)
  }
}
