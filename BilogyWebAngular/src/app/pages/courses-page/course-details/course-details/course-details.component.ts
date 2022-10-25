import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course, CoursesService } from 'src/app/services/courses/courses.service';
import { Lesson, LessonsService } from 'src/app/services/lessons/lessons.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  // Modelos
  course?: Course;
  lessons?: Lesson[];

  constructor(
    private userService: UsersService,
    private coursesService: CoursesService,
    private lessonsService: LessonsService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.getUser('TNdSPjXPLQobQPPw8UjR').then(user => {
      console.log('pooky user: ' + JSON.stringify(user.progressList));
    });


    const courseId = this.getCourseIdFromRoute(); // 1

    this.coursesService.getCourse(courseId) // 2
      .then(course => { // 4 o 5
        this.course = course;
      });

    this.lessonsService.loadLessonsForCourse(courseId) // 3
      .then(lessons => { // 4 o 5
        this.lessons = lessons;
      });
  }

  private getCourseIdFromRoute() {
    return this.activatedRoute.snapshot.params['id']
  }
}
