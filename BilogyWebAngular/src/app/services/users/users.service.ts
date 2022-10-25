import { Injectable } from '@angular/core';
import { collection, DocumentData, DocumentSnapshot, Firestore, getDocs } from '@angular/fire/firestore';
import { doc, getDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private db: Firestore) { }

  async getUser(id: string) {
    const fbObject = await getDoc(doc(this.db, `user/${id}`));
    const course: User = this.convertUser(fbObject)!;
    return course;
  }

  async loadUsers() {
    const firebaseObjects = await getDocs(collection(this.db, "user"));
    const users: User[] = [];
    firebaseObjects.forEach((fbObject) =>
      users.push(this.convertUser(fbObject)!)
    );
    return users;
  }

  private convertUser(doc: DocumentSnapshot<DocumentData>) {
    const data = doc.data();
    if (!data) {
      return undefined;
    }
    return {
      email: data['email'],
      password: data['password'],
      userName: data['userName'],
      imageUrl: data['imageUrl'],
      progressList: (data['progress'] as Array<Progress>)
    };
  }
}

export interface User {
  email: string,
  password: string,
  userName: string,
  imageUrl: string,
  progressList?: Array<Progress>,
};

export interface Progress {
  courseId: string,
  amount: number
};