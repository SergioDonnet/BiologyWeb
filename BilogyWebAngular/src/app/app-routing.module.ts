import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsButtonComponent } from './navbar/about-us-page/about-us-button.component';
import { CoursesPageComponent } from './navbar/courses-page/courses-page.component';
import { HomePageComponent } from './navbar/home-page/home-page.component';

const routes: Routes = [
  {path:'home-button', component:HomePageComponent},
  {path:'courses-button', component:CoursesPageComponent},
  {path:'about-us-button', component:AboutUsButtonComponent},
  {path:'**', redirectTo: 'home-button', pathMatch: 'full'},
  {path:'', component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
