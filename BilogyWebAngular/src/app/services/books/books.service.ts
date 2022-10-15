import { Injectable } from '@angular/core';
import { collection, Firestore, getDocs } from '@angular/fire/firestore'; `
import { Observable } from 'rxjs';`

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private db: Firestore) { }

  async loadBooks(){
    const querySnapshot = await getDocs(collection(this.db, "books"));
    const books: Book[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      books.push({
        author: data['author'],
        title: data['title'],
        description: data['description']
      });
    });
    return books;
  }
}

export interface Book {
  author: string,
  title: string,
  description: string;
};