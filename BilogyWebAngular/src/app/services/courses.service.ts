import { Injectable } from '@angular/core';
import { collection, Firestore, getDocs, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private db: Firestore) { }

  async loadCourses() {
    const querySnapshot = await getDocs(collection(this.db, "courses"));
    const courses: Course[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      courses.push({
        title: data['title'],
        subtitle: data['subtitle'],
        imageUrl: data['imageUrl'],
        description: data['description']
      });
    });
    return courses;
  }
}

export interface Course {
  title: string,
  subtitle: string,
  imageUrl: string,
  description: string,
};
