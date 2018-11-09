import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../../services/course.service';
import { Location } from '@angular/common';
import { InstructorService } from '../../../services/instructor.service';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.scss']
})
export class CourseEditComponent implements OnInit {
  course: any;
  id: string;
  instructors: any;
  selectedInstructor: any;

  constructor(
    private courseService: CourseService,
    private instructorService: InstructorService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getCourseById(this.id);
    this.getInstructors();
  }

  getInstructors() {
    this.instructorService.getInstructors()
      .then(res => {
        this.instructors = res.data;
      });
  }

  getCourseById(id: string) {
    this.courseService.getCourseById(id)
      .then(res => {
        this.course = res.data;
        console.log(this.course);
      });
  }

  onEditCourse() {
    const data = {
      data: {
        type: 'course--course',
        id: this.id,
        attributes: {
          name: this.course.attributes.name,
          field_academic_institution: this.course.attributes.field_academic_institution
        }
      }
    };

    this.courseService.updateCourse(this.id, data)
      .then(res => {
        this.router.navigate(['/courses']);
      });
  }

  goBack() {
    this.location.back();
  }
}
