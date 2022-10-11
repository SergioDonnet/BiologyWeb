import { Component, OnInit } from '@angular/core';
import { Course, CoursesService } from './services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'BilogyWebAngular';
  courses: Course[] = [];

  constructor(public coursesService: CoursesService) {}

  ngOnInit(): void {
    this.coursesService.loadCourses().then(courses => this.courses = courses);
  }
}