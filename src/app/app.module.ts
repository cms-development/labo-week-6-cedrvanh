import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { CourseListComponent } from './components/courses/course-list/course-list.component';
import { InstructorListComponent } from './components/instructors/instructor-list/instructor-list.component';
import { StudentListComponent } from './components/students/student-list/student-list.component';
import { LoginComponent } from './core/login/login.component';
import { CourseCreateComponent } from './components/courses/course-create/course-create.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CourseListComponent,
    InstructorListComponent,
    StudentListComponent,
    LoginComponent,
    CourseCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
