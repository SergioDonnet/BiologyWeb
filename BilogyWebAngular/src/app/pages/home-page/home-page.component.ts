import { Component, OnInit } from '@angular/core';
import { Course, CoursesService, } from 'src/app/services/courses/courses.service';
import { LoginSergio } from 'src/app/services/loginsergio/loginsergio.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  courses: Course[] = [];
  currentUser?: LoginSergio;

  constructor(public coursesService: CoursesService,
    private router: Router) { }

  ngOnInit(): void {
    this.currentUser = {
      email: 'kyoo@google.com',
      password: '123',
      user: 'Rodrigo',
      progress: new Map<string, number>([
        ['RtTUFKfAJb75cC5LpotL', 10],
        ['gqLv2rFoy6UYicEIOBMc', 80],
      ]),
    };

    this.coursesService.listCourses().then((fbCourses) => {
      // console.log('prueba: ' + JSON.stringify(fbCourses));
      this.courses = fbCourses;
    });
  }

  onClickC1() {
    this.router.navigate(['/course1'])
  }
  onClickC2() {
    this.router.navigate(['/course2'])
  }
  onClickC3() {
    this.router.navigate(['/course3'])
  }
}
