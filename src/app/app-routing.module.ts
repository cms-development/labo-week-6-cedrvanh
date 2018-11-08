import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CourseListComponent } from './components/courses/course-list/course-list.component';
import { LoginComponent } from './core/login/login.component';

const routes: Routes = [
  { path: 'courses', component: CourseListComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
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
