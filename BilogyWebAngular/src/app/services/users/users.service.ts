import { Injectable } from '@angular/core';
import { collection, Firestore, getDocs } from '@angular/fire/firestore'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private db: Firestore) { }

  async loadUser(){
    const querySnapshot = await getDocs(collection(this.db, "user"));
    const user: User [] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      user.push({
        email:data['email'],
        password:data['password'],
        userName:data['userName'],
        imageUrl:data['imageUrl']
      });
    });
    return user;
  }
}

export interface User{
email: string,
password: string,
userName: string,
imageUrl: string,
progress?: Map<string, number>,
};