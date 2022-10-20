import { Injectable } from '@angular/core';
import { collection, Firestore, getDocs } from '@angular/fire/firestore'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  constructor(private db: Firestore) { }

  async loadLessons(){
    const querySnapshot = await getDocs(collection(this.db, "lessons"));
    const lessons: Lessons [] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      lessons.push({
        curseId:data['curseId'],
        lessons:data['lessons'],
      });
    });
    return lessons;
  }
}

export interface Lessons{
curseId: string,
lessons: string,
};