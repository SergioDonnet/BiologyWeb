import { Component, OnInit } from '@angular/core';
import {Course,CoursesService,} from 'src/app/services/courses/courses.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
})
export class CoursesPageComponent implements OnInit {
  
  courses: Course[] = [];
  currentUser?: CoursesService;

  constructor(public coursesService: CoursesService) { }

  ngOnInit(): void {
   

    this.coursesService.listCourses().then((fbCourses) => {
      // console.log('prueba: ' + JSON.stringify(fbCourses));
      this.courses = fbCourses;
    });
  }

}
