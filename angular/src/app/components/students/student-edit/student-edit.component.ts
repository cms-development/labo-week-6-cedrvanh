import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss']
})
export class StudentEditComponent implements OnInit {
  id: string;
  student: any;
  courses: any;

  constructor(
    private studentService: StudentService,
    private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getStudentById(this.id);
    this.getCourses();
  }

  getCourses() {
    this.courseService.getCourses()
      .then(res => {
        this.courses = res.data;
      });
  }

  getStudentById(id: string) {
    this.studentService.getStudentById(id)
      .then(res => {
        this.student = res.data;
      });
  }

  onEditStudent() {
    const data = {
      data: {
        type: 'student--student',
        id: this.id,
        attributes: {
          name: this.student.attributes.name,
          field_first_name: this.student.attributes.field_first_name
        }
      }
    };

    this.studentService.updateStudent(this.id, data)
      .then(res => {
        this.router.navigate(['/students']);
      });
  }

  goBack() {
    this.location.back();
  }
}
