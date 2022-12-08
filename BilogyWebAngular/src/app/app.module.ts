import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuButtonComponent } from './components/menu/menu-button/menu-button.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { CoolSocialLoginButtonsModule } from '@angular-cool/social-login-buttons';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { CardsComponent } from './components/cards/cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideFunctions, getFunctions } from '@angular/fire/functions';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { BooksComponent } from './components/books/books.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { AboutUsButtonComponent } from './pages/about-us-button/about-us-button.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseDetailsComponent } from './pages/courses-page/course-details/course-details/course-details.component';
import { CoursesPageArteComponent } from './pages/courses-page/courses-page-arte/courses-page-arte.component';
import { CoursesPageBiodiversidadComponent } from './pages/courses-page/courses-page-biodiversidad/courses-page-biodiversidad.component';
import { CoursesPageSeresVivosComponent } from './pages/courses-page/courses-page-seres-vivos/courses-page-seres-vivos.component';
import { Course1lesson1page1Component } from './coursesgo/course1/lesson1/page1/course1lesson1page1/course1lesson1page1.component';
import { Course1lesson1page2Component } from './coursesgo/course1/lesson1/page2/course1lesson1page2/course1lesson1page2.component';
import { Course1lesson1page3Component } from './coursesgo/course1/lesson1/page3/course1lesson1page3/course1lesson1page3.component';
import { Course1lesson1page4Component } from './coursesgo/course1/lesson1/page4/course1lesson1page4/course1lesson1page4.component';
import { Course1lesson1page5Component } from './coursesgo/course1/lesson1/page5/course1lesson1page5/course1lesson1page5.component';
import { Course1lesson1page6Component } from './coursesgo/course1/lesson1/page6/course1lesson1page6/course1lesson1page6.component';
import { Course1lesson1page7Component } from './coursesgo/course1/lesson1/page7/course1lesson1page7/course1lesson1page7.component';
import { Course1lesson2page1Component } from './coursesgo/course1/lesson2/page1/course1lesson2page1/course1lesson2page1.component';
import { Course1lesson2page2Component } from './coursesgo/course1/lesson2/page2/course1lesson2page2/course1lesson2page2.component';
import { Course1lesson2page3Component } from './coursesgo/course1/lesson2/page3/course1lesson2page3/course1lesson2page3.component';
import { Course1lesson3page1Component } from './coursesgo/course1/lesson3/page1/course1lesson3page1/course1lesson3page1.component';
import { Courses1lesson3page2Component } from './coursesgo/course1/lesson3/page2/courses1lesson3page2/courses1lesson3page2.component';
import { Course1lesson3page3Component } from './coursesgo/course1/lesson3/page4/course1lesson3page3/course1lesson3page3.component';
import { Course1lesson3page4Component } from './coursesgo/course1/lesson3/page5/course1lesson3page4/course1lesson3page4.component';
import { Course1lesson3page5Component } from './coursesgo/course1/lesson3/page6/course1lesson3page5/course1lesson3page5.component';
import { Course1lesson4page1Component } from './coursesgo/course1/lesson4/page1/course1lesson4page1/course1lesson4page1.component';
import { Course1lesson4page2Component } from './coursesgo/course1/lesson4/page2/course1lesson4page2/course1lesson4page2.component';
import { Course1lesson4page3Component } from './coursesgo/course1/lesson4/page3/course1lesson4page3/course1lesson4page3.component';
import { Course1lesson4page4Component } from './coursesgo/course1/lesson4/page4/course1lesson4page4/course1lesson4page4.component';
import { Course1lesson4page5Component } from './coursesgo/course1/lesson4/page5/course1lesson4page5/course1lesson4page5.component';
import { Course1lesson5page1Component } from './coursesgo/course1/lesson5/page1/course1lesson5page1/course1lesson5page1.component';
import { Course1lesson5page2Component } from './coursesgo/course1/lesson5/page2/course1lesson5page2/course1lesson5page2.component';
import { RegisterOrLogComponent } from './components/registerOrLog/register-or-log/register-or-log.component';
import { HomePageSignInComponent } from './pages/home-page/home-page-sign-in/home-page-sign-in/home-page-sign-in.component';
import { Course2lesson1page1Component } from './coursesgo/course2/lesson1/page1/course2lesson1page1/course2lesson1page1.component';
import { Course2lesson1page2Component } from './coursesgo/course2/lesson1/page2/course2lesson1page2/course2lesson1page2.component';
import { Course2lesson1page3Component } from './coursesgo/course2/lesson1/page3/course2lesson1page3/course2lesson1page3.component';
import { Course2lesson1page4Component } from './coursesgo/course2/lesson1/page4/course2lesson1page4/course2lesson1page4.component';
import { Course2lesson1page5Component } from './coursesgo/course2/lesson1/page5/course2lesson1page5/course2lesson1page5.component';
import { Courses1lesson1page6Component } from './coursesgo/course2/lesson1/page6/courses1lesson1page6/courses1lesson1page6.component';
import { Course2lesson2page1Component } from './coursesgo/course2/lesson2/page1/course2lesson2page1/course2lesson2page1.component';
import { Course2lesson2page2Component } from './coursesgo/course2/lesson2/page2/course2lesson2page2/course2lesson2page2.component';
import { Course2lesson2page3Component } from './coursesgo/course2/lesson2/page3/course2lesson2page3/course2lesson2page3.component';
import { Course2lesson2page4Component } from './coursesgo/course2/lesson2/page4/course2lesson2page4/course2lesson2page4.component';
import { Course2lesson2page5Component } from './coursesgo/course2/lesson2/page5/course2lesson2page5/course2lesson2page5.component';
import { Course2lesson3page1Component } from './coursesgo/course2/lesson3/page1/course2lesson3page1/course2lesson3page1.component';
import { Course2lesson3page2Component } from './coursesgo/course2/lesson3/page2/course2lesson3page2/course2lesson3page2.component';
import { Course2lesson3page3Component } from './coursesgo/course2/lesson3/page3/course2lesson3page3/course2lesson3page3.component';
//import { CoursesInfoComponent } from './components/courses-info/courses-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuButtonComponent,
    LoginComponent,
    CardsComponent,
    FooterComponent,
    NavbarComponent,
    HomePageComponent,
    CoursesPageComponent,
    ProfileComponent,
    ProfilePageComponent,
    BooksComponent,
    AboutUsButtonComponent,
    CoursesComponent,
    CourseDetailsComponent,
    CoursesPageArteComponent,
    CoursesPageBiodiversidadComponent,
    CoursesPageSeresVivosComponent,
    RegisterOrLogComponent,
    Course1lesson1page3Component,
    Course1lesson1page4Component,
    Course1lesson1page5Component,
    Course1lesson1page6Component,
    Course1lesson1page7Component,
    Course1lesson2page1Component,
    Course1lesson2page2Component,
    Course1lesson2page3Component,
    Course1lesson3page1Component,
    Courses1lesson3page2Component,
    Course1lesson3page3Component,
    Course1lesson3page4Component,
    Course1lesson3page5Component,
    Course1lesson4page1Component,
    Course1lesson4page2Component,
    Course1lesson4page3Component,
    Course1lesson4page4Component,
    Course1lesson4page5Component,
    Course1lesson5page1Component,
    Course1lesson5page2Component,
    Course2lesson1page1Component,
    Course2lesson1page2Component,
    Course2lesson1page3Component,
    Course2lesson1page4Component,
    Course2lesson1page5Component,
    Courses1lesson1page6Component,
    Course2lesson2page1Component,
    Course2lesson2page2Component,
    Course2lesson2page3Component,
    Course2lesson2page4Component,
    Course2lesson2page5Component,
    Course2lesson3page1Component,
    Course2lesson3page2Component,
    Course2lesson3page3Component,
    //CoursesInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatInputModule,
    ReactiveFormsModule,
    CoolSocialLoginButtonsModule,
    MatMenuModule,

    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
