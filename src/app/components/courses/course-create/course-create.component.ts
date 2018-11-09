import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../services/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.scss']
})
export class CourseCreateComponent implements OnInit {
  name: string;
  institution: string;

  constructor(
    private courseService: CourseService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onCreateCourse() {
    const data = {
      data: {
        type: 'course--course',
        attributes: {
          name: this.name,
          field_academic_institution: this.institution
        }
      }
    };

    this.courseService.createCourse(data)
      .then(res => {
        this.router.navigate(['/courses']);
      });
  }
}
