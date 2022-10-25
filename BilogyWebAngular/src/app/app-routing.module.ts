import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';
import { AboutUsButtonComponent } from './pages/about-us-button/about-us-button.component';
import { CourseDetailsComponent } from './pages/courses-page/course-details/course-details/course-details.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';


const routes: Routes = [
  {
    path: 'home', component: HomePageComponent
  },
  {
    path: 'courses', component: CoursesPageComponent,
    children: [
      { path: 'detail/:id', component: CourseDetailsComponent }
    ]
  },
  { path: 'about-us', component: AboutUsButtonComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
