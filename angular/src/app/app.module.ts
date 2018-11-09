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
import { CourseEditComponent } from './components/courses/course-edit/course-edit.component';
import { InstructorCreateComponent } from './components/instructors/instructor-create/instructor-create.component';
import { InstructorEditComponent } from './components/instructors/instructor-edit/instructor-edit.component';
import { StudentCreateComponent } from './components/students/student-create/student-create.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { CourseDetailComponent } from './components/courses/course-detail/course-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CourseListComponent,
    InstructorListComponent,
    StudentListComponent,
    LoginComponent,
    CourseCreateComponent,
    CourseEditComponent,
    InstructorCreateComponent,
    InstructorEditComponent,
    StudentCreateComponent,
    DashboardComponent,
    CourseDetailComponent,
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
