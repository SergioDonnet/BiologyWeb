import { Component, OnInit } from '@angular/core';
import { Course, CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-home-button',
  templateUrl: './home-button.component.html',
  styleUrls: ['./home-button.component.scss'],
})
export class HomeButtonComponent implements OnInit {
  courses: Course[] = [];

  constructor(public coursesService: CoursesService) {}

  ngOnInit(): void {
    this.coursesService.loadCourses().then(fbCourses => this.courses = fbCourses);
  }

}
