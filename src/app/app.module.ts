import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { CourseListComponent } from './components/courses/course-list/course-list.component';
import { InstructorListComponent } from './components/instructors/instructor-list/instructor-list.component';
import { StudentListComponent } from './components/students/student-list/student-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CourseListComponent,
    InstructorListComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
