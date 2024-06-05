import { TestBed } from '@angular/core/testing';
// import {doc, updateDoc, getDoc, query, getDocs, where, collection} from 'firebase/firestore'
// import {GoogleAuthProvider} from "firebase/auth";
import { FirestoreService } from './firestore.service';

describe('FirestoreService', () => {
  let service: FirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("createToken returns code", (done: DoneFn) => {
    service.createToken(10).then((e)=>{
      expect(e.length).toBe(10);
      done()
    })
  })
  it("SImple return token", ()=>{
    expect(service.getToken()).toBe("TOKEN")
  })
});
