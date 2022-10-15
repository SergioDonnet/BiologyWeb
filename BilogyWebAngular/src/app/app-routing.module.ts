import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsButtonComponent } from './navbar/about-us-button/about-us-button.component';
import { CoursesButtonComponent } from './navbar/courses-button/courses-button.component';
import { HomeButtonComponent } from './navbar/home-button/home-button.component';

const routes: Routes = [
  {path:'home-button', component:HomeButtonComponent},
  {path:'courses-button', component:CoursesButtonComponent},
  {path:'about-us-button', component:AboutUsButtonComponent},
  {path:'**', redirectTo: 'home-button', pathMatch: 'full'},
  {path:'', component:HomeButtonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
