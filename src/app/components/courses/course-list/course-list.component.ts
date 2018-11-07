import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../services/course.service';

import axios from 'axios';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courses: {};

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses(): void {
    this.courseService.getCourses()
    .then(res => {
      this.courses = res.data;
    });
  }
}
