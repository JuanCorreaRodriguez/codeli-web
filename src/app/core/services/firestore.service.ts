import {inject, Injectable} from '@angular/core';
import {FirebaseService} from "./firebase.service";
import {doc, updateDoc, getDoc, query, getDocs, where, collection} from 'firebase/firestore';
import {GoogleAuthProvider} from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  firebase = inject(FirebaseService)
  db = this.firebase.db;

  async updateCodeliKey(key:string){
    let status = false;
    console.log("INIT UPDATE KEY")
    try {
      const ref = doc(this.db, "auth", "data");
      await updateDoc(ref, { key: key })
        .then(() => {
          status = true;
          console.log("OK CODE")
        })
        .catch((err) => {
          console.log("NOK CODE", err)

        });
    } catch (err) {
      console.log("NOK CODE CATHC", err)
    }

    console.log("END UPDATE KEY")
    return status;
  }
  async getCodeliKey(k:string): Promise<string> {
    let key:any = null;
    try {
      const ref = collection(this.db, "auth");

      const q = query(ref, where("key", "==", k))
      const snap = await getDocs(q);
      snap.forEach((e)=>{
        if(e.exists()) key = e.data()
      })
    } catch (err) {
      console.log("CATCH ERROR", err)
    }
    return key.key;
  }
  async updateGoogleToken(credential:any){
    let status = false;
    try {
      const ref = doc(this.db, 'auth', "data");
      await updateDoc(ref, { credential: credential })
        .then(() => status = true)
        .catch((err) => console.log("ERR", err));
    } catch (err) {
      console.log("ERR", err)
    }
    return status;
  }
  async getGoogleToken(): Promise<string> {
    let token = "";
    try {
      const ref = doc(this.db, 'auth', "data",);
      const data:any = await getDoc(ref)

      console.log("CREDENTIAL", data.data().credential)
      console.log("CREDENTIAL", typeof data.data())

      if(data.exists()) token = data.data().credential

    } catch (err) {
      console.log("catcherr",err)
    }
    return token;
  }
  async getAccessToken(r: any){
    const credential = GoogleAuthProvider.credentialFromResult(r);
    console.log("getAccessToken", credential)
    if(credential?.accessToken) return credential.accessToken
    else return ""
  }
  /** Create code **/
  async createToken(lenght: number) {
    let code = '';
    let characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLenght = characters.length;
    for (let i = 0; i < lenght; i++) {
      code += characters.charAt(Math.floor(Math.random() * charactersLenght));
    }
    return code;
  }

  getToken(){
    return "TOKEN"
  }
}
