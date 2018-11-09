import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../services/course.service';

import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courses: object;
  id: string;

  constructor(
    private courseService: CourseService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses(): void {
    this.courseService.getCourses()
    .then(res => {
      console.log(res);
      this.courses = res.data;
    });
  }

  deleteCourse(event: any) {
    this.id = event.target.id;
    this.courseService.deleteCourse(this.id)
      .then(res => {
        this.router.navigate(['/']);
      });
  }
}
