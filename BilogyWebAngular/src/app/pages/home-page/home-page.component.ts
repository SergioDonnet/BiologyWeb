import { Component, OnInit } from '@angular/core';
import { Course, CoursesService } from 'src/app/services/courses/courses.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  courses: Course[] = [];

  constructor(public coursesService: CoursesService) {}

  ngOnInit(): void {
    this.coursesService.loadCourses().then(fbCourses => this.courses = fbCourses);
  }

}
