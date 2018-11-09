import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../services/course.service';
import { Router } from '@angular/router';
import { InstructorService } from '../../../services/instructor.service';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.scss']
})
export class CourseCreateComponent implements OnInit {
  name: string;
  institution: string;
  instructors: any;
  selectedInstructor: any;

  constructor(
    private courseService: CourseService,
    private instructorService: InstructorService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getInstructors();
  }

  getInstructors() {
    this.instructorService.getInstructors()
      .then(res => {
        this.instructors = res.data;
      });
  }

  onCreateCourse() {
    const data = {
      data: {
        type: 'course--course',
        attributes: {
          name: this.name,
          field_academic_institution: this.institution
        },
        relationships: {
          field_instructor: {
            data: {
              type: 'instructor--instructor',
              id: this.selectedInstructor.id
            }
          }
        }
      }
    };

    this.courseService.createCourse(data)
      .then(res => {
        this.router.navigate(['/courses']);
      });
  }
}
