import { Component, OnInit } from '@angular/core';
import { Book, BooksService } from 'src/app/services/books/books.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
})
export class CoursesPageComponent implements OnInit {
  books: Book[] = [];

  constructor(public booksService: BooksService) {}

  ngOnInit(): void {
    this.booksService.loadBooks().then(fbBooks => this.books = fbBooks);
  }

}
