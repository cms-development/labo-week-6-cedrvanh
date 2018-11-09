import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CourseListComponent } from './components/courses/course-list/course-list.component';
import { LoginComponent } from './core/login/login.component';
import { CourseCreateComponent } from './components/courses/course-create/course-create.component';
import { CourseEditComponent } from './components/courses/course-edit/course-edit.component';
import { InstructorListComponent } from './components/instructors/instructor-list/instructor-list.component';
import { InstructorCreateComponent } from './components/instructors/instructor-create/instructor-create.component';
import { InstructorEditComponent } from './components/instructors/instructor-edit/instructor-edit.component';
import { StudentListComponent } from './components/students/student-list/student-list.component';
import { StudentCreateComponent } from './components/students/student-create/student-create.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { CourseDetailComponent } from './components/courses/course-detail/course-detail.component';

const routes: Routes = [
  { path: 'courses', component: CourseListComponent },
  { path: 'courses/:id', component: CourseDetailComponent },
  { path: 'courses/add', component: CourseCreateComponent },
  { path: 'courses/:id/edit', component: CourseEditComponent },
  { path: 'instructors', component: InstructorListComponent },
  { path: 'instructors/add', component: InstructorCreateComponent },
  { path: 'instructors/:id/edit', component: InstructorEditComponent },
  { path: 'students', component: StudentListComponent },
  { path: 'students/add', component: StudentCreateComponent },
  { path: 'students/:id/edit', component: InstructorEditComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: DashboardComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
