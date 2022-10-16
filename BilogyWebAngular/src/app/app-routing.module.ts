import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { AboutUsButtonComponent } from './pages/about-us-page/about-us-button.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {path:'home-page', component:HomePageComponent},
  {path:'courses-page', component:CoursesPageComponent},
  {path:'about-us-page', component:AboutUsButtonComponent},
  {path:'**', redirectTo: 'home-page', pathMatch: 'full'},
  {path:'', component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
