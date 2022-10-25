import { Injectable } from '@angular/core';
import { collection, Firestore, getDocs } from '@angular/fire/firestore';
import { query, where } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  constructor(private db: Firestore) { }

  async loadLessonsForCourse(courseId: string) {
    const q = query(collection(this.db, "lessons"), where("courseId", "==", courseId));
    const querySnapshot = await getDocs(q);
    const lessons: Lesson[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      lessons.push({
        curseId: data['curseId'],
        title: data['title'],
      });
    });
    return lessons;
  }

  async loadLessons() {
    const querySnapshot = await getDocs(collection(this.db, "lessons"));
    const lessons: Lesson[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      lessons.push({
        curseId: data['curseId'],
        title: data['title'],
      });
    });
    return lessons;
  }
}

export interface Lesson {
  curseId: string,
  title: string,
};