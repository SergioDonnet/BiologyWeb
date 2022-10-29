import { Injectable } from '@angular/core';
import { collection, Firestore, getDoc, getDocs, addDoc, deleteDoc, setDoc, doc, docData, query, where, DocumentData, DocumentSnapshot, QueryDocumentSnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  constructor(private db: Firestore) { }

  async createLesson(lesson: Lesson) {
    return addDoc(collection(this.db, `lessons/${lesson.id}`), lesson);
  }

  async getLesson(id: string) {
    const fbObject = await getDoc(doc(this.db, `lessons/${id}`));
    //const lesson: Lesson = this.
  }

  async updateLesson(lesson: Lesson) {
    return setDoc(doc(this.db, `lessons/${lesson.id}`), lesson, { merge: true });
  }

  async listLessons() {
    const firebaseObjects = await getDocs(collection(this.db, "lessons"));

    const lessons: Lesson[] = [];
    firebaseObjects.forEach((fbObject) => {
      lessons.push(this.convertLesson(fbObject)!);
    });
    return lessons;
  }

  async deleteLesson(lesson: Lesson) {
    return deleteDoc(doc(this.db, `lessons/${lesson.id}`));
  }

  async getProgressLesson() {

  }

  async loadLessonsForCourse(courseId: string) {
    const q = query(collection(this.db, "lessons"), where("courseId", "==", courseId));
    const querySnapshot = await getDocs(q);
    const lessons: Lesson[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      lessons.push({
        courseId: data['courseId'],
        title: data['title'],
        id: doc.id
      });
    });
    return lessons;
  }

  

  private convertLesson(doc: DocumentSnapshot<DocumentData>) {
    const data = doc.data();
    if (!data) {
      return undefined;
    }
    return {
      id: doc.id,
      title: data['title'],
      courseId: data['courseId']
    };
  }
}


export interface Lesson {
  courseId: string,
  title: string,
  id: string
};