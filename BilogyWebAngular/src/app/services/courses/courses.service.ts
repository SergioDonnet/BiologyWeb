import { Injectable } from '@angular/core';
import { collection, Firestore, getDoc, getDocs, addDoc, deleteDoc, setDoc, doc, docData, query, where, DocumentData, DocumentSnapshot, QueryDocumentSnapshot } from '@angular/fire/firestore';
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
    const fbObject = await getDoc(doc(this.db, `courses/${id}`));
    const course: Course = this.convertCourse(fbObject)!;
    return course;
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

  async listCourses() {
    const firebaseObjects = await getDocs(collection(this.db, "courses"));

    const courses: Course[] = []; // ArrayList<Course> courses = new ArrayList<Course>;
    firebaseObjects.forEach((fbObject) => {
      courses.push(this.convertCourse(fbObject)!);
    });
    return courses;
  }

  async loadCoursesWithTitle(title: string) {
    const q = query(collection(this.db, "courses"), where("title", "==", title));
    return getDocs(q);
  }

  private convertCourse(doc: DocumentSnapshot<DocumentData>) {
    const data = doc.data();
    if (!data) {
      return undefined;
    }
    return {
      id: doc.id,
      title: data['title'],
      subtitle: data['subtitle'],
      imageUrl: data['imageUrl'],
      description: data['description'],
      videoUrl: data['videoUrl'],
    };
  }
}

export interface Course {
  id: string,
  title: string,
  subtitle: string,
  imageUrl: string,
  description: string,
  videoUrl: string,
};
