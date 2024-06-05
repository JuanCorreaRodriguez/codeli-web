import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getStorage, ref} from "firebase/storage";
import {getDatabase} from "firebase/database";
import {getFirestore} from 'firebase/firestore';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  public auth: any;
  public storage: any;
  public storageRef: any;
  public databaseRealTime: any;
  public db: any;
  public app: any;

  constructor(@Inject(PLATFORM_ID) private _platformId: Object) {
    if (isPlatformBrowser(_platformId)) {
      this.app = initializeApp(environment.firebaseConfig);
      this.db = getFirestore(this.app);

      this.auth = getAuth(this.app);
      this.storage = getStorage();
      this.storageRef = ref(this.storage);
      this.databaseRealTime = getDatabase();
    }
  }
}
