import { Injectable } from '@angular/core';
import { Auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signInWithPopup,GoogleAuthProvider, } from '@angular/fire/auth';
import { FacebookAuthProvider, signOut } from '@firebase/auth';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}


  //login con email y password
  register({email,password}:any){
    return createUserWithEmailAndPassword(this.auth,email,password)
  }

  //login con autenticacion 

  login({email,password}:any){
    return signInWithEmailAndPassword(this.auth,email,password);
  }
  
//loigin con google

loginWithGoogle(){
  return signInWithPopup(this.auth,new GoogleAuthProvider());
}

loginWithFacebook(){
  return signInWithPopup(this.auth,new FacebookAuthProvider());
}

logOut(){
  return signOut(this.auth);
}

}
