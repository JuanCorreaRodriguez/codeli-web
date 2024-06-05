import {inject, Injectable} from '@angular/core';
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {FirebaseService} from "./firebase.service";
import {FirestoreService} from "./firestore.service";
import {ObservablesService} from "./observables.service";
import {iContactEmail} from "../interfaces/iContact";

@Injectable({
  providedIn: 'root'
})
export class GoogleService {
  firebaseService = inject(FirebaseService);
  observables = inject(ObservablesService)
  public auth = this.firebaseService.auth;
  firestore = inject(FirestoreService);
  provider = new GoogleAuthProvider();

  async sendEmailFunc(data: iContactEmail) {
    console.log(`INIT email:${JSON.stringify(data)}`)
    try {
      const url: string = "http://127.0.0.1:5001/codeli-studio/us-central1/sendEmail"

      if (!data.token) return

      await fetch(url, {
        method: "post",
        headers: {
          'Accept': 'application/json',
          "Authorization": data.token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      }).then((e) => {
        console.log(`CONSOLE: ${e}`)
        this.observables.sentEmail.next(data)
      }).catch((err) => console.log(`EROROR ${err}`))
    } catch (e) {
      console.log("ERROR_CATCH", e)
    }
  }

  /** Client log in for add meeting to Google Calendar */
  async initAuth(data: iContactEmail) {
    // this.provider.addScope("https://www.googleapis.com/auth/calendar");
    // this.provider.addScope("https://www.googleapis.com/auth/calendar.events");
    await this.popUpGoogle(data)
  }

  async popUpGoogle(data: iContactEmail) {
    signInWithPopup(this.auth, this.provider)
      .then(async (result) => {

        const credential = GoogleAuthProvider.credentialFromResult(result);

        if (!credential || !credential.accessToken || !result.user.email) {
          this.errorLoginHandle()
          return
        }

        data.token = credential.accessToken;
        data.email = result.user.email;

        this.observables.logIn.next(data)

      }).catch(() => {
      this.errorLoginHandle()
    });
  }

  errorLoginHandle() {
    this.observables.logIn.next(false)
  }
}
