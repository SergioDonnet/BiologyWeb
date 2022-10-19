import { Injectable } from '@angular/core';
import { collection, Firestore, getDocs } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginSergioService {

  constructor(private db: Firestore) { }

  async loadLoginSergio() {
    const querySnapshot = await getDocs(collection(this.db, "loginsergio"));
    const loginsergio: LoginSergio[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      loginsergio.push({
        email: data['email'],
        password: data['password'],
        user: data['user']
      });
    });
    return loginsergio;
  }
}

export interface LoginSergio {
  email: string,
  password: string,
  user: string,
  progress?: Map<string, number>,
};
