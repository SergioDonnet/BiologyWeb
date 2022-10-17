import { Injectable } from '@angular/core';
import { collection, Firestore, getDoc, getDocs, addDoc, deleteDoc, setDoc, doc, docData, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private db: Firestore) { }

  async createCourse(course: Course) {
    return addDoc(collection(this.db, `courses/${course.id}`), course);
  }
  async createCourseWithId(course: Course) {
    return setDoc(doc(this.db, `courses/${course.id}`), course);
  }

  async getCourse(id: string) {
    return getDoc(doc(this.db, `courses/${id}`));
  }

  getObservableCourse(id: string): Observable<Course> {
    return docData(doc(this.db, `courses/${id}`), { idField: 'id' }) as Observable<Course>;
  }

  async updateCourse(course: Course) {
    return setDoc(doc(this.db, `courses/${course.id}`), course, { merge: true });
  }

  async deleteCourse(course: Course) {
    return deleteDoc(doc(this.db, `courses/${course.id}`));
  }

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

  async loadCoursesWithTitle(title: string) {
    const q = query(collection(this.db, "courses"), where("title", "==", title));
    return getDocs(q);
  }

}

export interface Course {
  id?: string,
  title: string,
  subtitle: string,
  imageUrl: string,
  description: string,
};
