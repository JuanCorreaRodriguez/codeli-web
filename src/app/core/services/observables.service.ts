import {Injectable} from '@angular/core';
import {BehaviorSubject, concatAll, Subject} from "rxjs";
import {iSearchables} from "../interfaces/const.interface";
import {iContactEmail} from "../interfaces/iContact";

@Injectable({
  providedIn: 'root'
})
export class ObservablesService {
  get logIn(): Subject<iContactEmail | boolean> {
    return this._logIn;
  }

  set logIn(value: Subject<iContactEmail | boolean>) {
    this._logIn = value;
  }

  get sentEmail(): Subject<iContactEmail> {
    return this._sentEmail;
  }

  set sentEmail(value: Subject<iContactEmail>) {
    this._sentEmail = value;
  }

  get eventCreated(): BehaviorSubject<string> {
    return this._eventCreated;
  }

  set eventCreated(value: BehaviorSubject<string>) {
    this._eventCreated = value;
  }

  get authObserver(): BehaviorSubject<string> {
    return this._authObserver;
  }

  set authObserver(value: BehaviorSubject<string>) {
    this._authObserver = value;
  }

  get serviceToken(): BehaviorSubject<string> {
    return this._serviceToken;
  }

  set serviceToken(value: BehaviorSubject<string>) {
    this._serviceToken = value;
  }

  get dateAvailable(): BehaviorSubject<string> {
    return this._dateAvailable;
  }

  set dateAvailable(value: BehaviorSubject<string>) {
    this._dateAvailable = value;
  }

  private _dateAvailable: BehaviorSubject<string> = new BehaviorSubject<string>("")
  private _serviceToken: BehaviorSubject<string> = new BehaviorSubject<string>("")
  private _authObserver: BehaviorSubject<string> = new BehaviorSubject<string>("")
  private _eventCreated: BehaviorSubject<string> = new BehaviorSubject<string>("")
  private _sentEmail: Subject<iContactEmail> = new Subject<iContactEmail>()
  private _logIn: Subject<iContactEmail | boolean> = new Subject<iContactEmail | boolean>()

  constructor() {
  }
}
