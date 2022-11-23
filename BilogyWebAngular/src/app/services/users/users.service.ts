import { Injectable } from '@angular/core';
import { collection, DocumentData, DocumentSnapshot, Firestore, getDocs } from '@angular/fire/firestore';
import { doc, getDoc, setDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private db: Firestore) { }

  //Parámetros? para usuario con email
  async createUserWithEmail(user: User){
    
  }
  //Parámetros? para usuario con Google
  async createUserWithGoogleAccount() {

  }
  //Parámetros? para usuario con Facebook
  async createUserWithFacebookAccount(){

  }

  async getUser(id: string) {
    const fbObject = await getDoc(doc(this.db, `user/${id}`));
    const user: User = this.convertUser(fbObject)!;
    return user;
  }

  async loadUsers() {
    const firebaseObjects = await getDocs(collection(this.db, "user"));
    const users: User[] = [];
    firebaseObjects.forEach((fbObject) =>
      users.push(this.convertUser(fbObject)!)
    );
    return users;
  }

  async updateUser(user: User) {
    return setDoc(doc(this.db, `users/${user.id}`), user, {merge: true});
  }

  async getProgressOfUser(progress: Progress) {
    return setDoc(doc(this.db,`users/${progress.courseId}` ), progress,{merge: true});
  }

  private convertUser(doc: DocumentSnapshot<DocumentData>) {
    const data = doc.data();
    if (!data) {
      return undefined;
    }
    return {
      id: doc.id,
      email: data['email'],
      password: data['password'],
      userName: data['userName'],
      imageUrl: data['imageUrl'],
      progress: (data['progress'] as Array<Progress>)
    };
  }
}

export interface User {
  id: string,
  email: string,
  password: string,
  userName: string,
  imageUrl: string,
  progress?: Array<Progress>,
};

export interface Progress {
  courseId: string,
  amount: number
};