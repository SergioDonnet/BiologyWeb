import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

import { CoursesComponent } from './components/courses/courses.component';
import { Course1lesson1page1Component } from './coursesgo/course1/lesson1/page1/course1lesson1page1/course1lesson1page1.component';
import { AboutUsButtonComponent } from './pages/about-us-button/about-us-button.component';
import { CourseDetailsComponent } from './pages/courses-page/course-details/course-details/course-details.component';
import { CoursesPageArteComponent } from './pages/courses-page/courses-page-arte/courses-page-arte.component';
import { CoursesPageBiodiversidadComponent } from './pages/courses-page/courses-page-biodiversidad/courses-page-biodiversidad.component';
import { CoursesPageSeresVivosComponent } from './pages/courses-page/courses-page-seres-vivos/courses-page-seres-vivos.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { RegisterOrLogComponent } from './components/registerOrLog/register-or-log/register-or-log.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  {
    path: 'courses', component: CoursesPageComponent,
    children: [{ path: 'detail/:id', component: CourseDetailsComponent }],
  },
  { path: 'about-us', component: AboutUsButtonComponent },
  {
    path: 'profile', component: ProfilePageComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/register']))
  },
  { path: 'register', component: RegisterOrLogComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: HomePageComponent },
  {path: 'course1lesson1page1',component:Course1lesson1page1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
