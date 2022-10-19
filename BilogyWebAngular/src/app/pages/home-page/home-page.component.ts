import { Component, OnInit } from '@angular/core';
import { Course, CoursesService } from 'src/app/services/courses/courses.service';
import { LoginSergio } from 'src/app/services/loginsergio/loginsergio.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  courses: Course[] = [];
  currentUser?: LoginSergio;

  constructor(public coursesService: CoursesService) { }

  ngOnInit(): void {
    this.coursesService.loadCourses().then(fbCourses => this.courses = fbCourses);
    this.currentUser = {
      email: 'kyoo@google.com',
      password: '123',
      user: 'Rodrigo'
    };
  }

}
