import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';
import { Course1lesson1page1Component } from './coursesgo/course1/lesson1/page1/course1lesson1page1/course1lesson1page1.component';
import { AboutUsButtonComponent } from './pages/about-us-button/about-us-button.component';
import { CourseDetailsComponent } from './pages/courses-page/course-details/course-details/course-details.component';
import { CoursesPageArteComponent } from './pages/courses-page/courses-page-arte/courses-page-arte.component';
import { CoursesPageBiodiversidadComponent } from './pages/courses-page/courses-page-biodiversidad/courses-page-biodiversidad.component';
import { CoursesPageSeresVivosComponent } from './pages/courses-page/courses-page-seres-vivos/courses-page-seres-vivos.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'home',component: HomePageComponent,},
  { path: 'course1', component: CoursesPageArteComponent },
  {path: 'course2', component: CoursesPageBiodiversidadComponent},
  {path: 'course3', component: CoursesPageSeresVivosComponent},
  {path: 'courses', component: CoursesPageComponent,
  children: [{ path: 'detail/:id', component: CourseDetailsComponent }],},
  { path: 'about-us', component: AboutUsButtonComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: HomePageComponent },
  {path: 'course1lesson1page1',component:Course1lesson1page1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
