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
  
    Course1lesson1page1Component,
       Course1lesson1page2Component,
       Course1lesson1page3Component,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
