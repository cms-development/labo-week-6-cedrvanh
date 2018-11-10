import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../services/student.service';
import { Router } from '@angular/router';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.scss']
})
export class StudentCreateComponent implements OnInit {
  name: string;
  firstName: string;
  courses: any;

  constructor(
    private studentService: StudentService,
    private courseService: CourseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    this.courseService.getCourses()
      .then(res => {
        this.courses = res.data;
      });
  }

  onCreateStudent() {
    const data = {
      data: {
        type: 'student--student',
        attributes: {
          name: this.name,
          field_first_name: this.firstName
        }
      }
    };

    this.studentService.createStudent(data)
      .then(res => {
        this.router.navigate(['/students']);
      });
  }
}
