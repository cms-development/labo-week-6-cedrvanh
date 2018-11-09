import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { InstructorService } from '../../services/instructor.service';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  courses: object;
  instructors: object;
  students: object;

  constructor(
    private courseService: CourseService,
    private instructorService: InstructorService,
    private studentService: StudentService,
  ) { }

  ngOnInit() {
    this.getCourses();
    this.getInstructors();
    this.getStudents();
  }

  getCourses() {
    this.courseService.getCourses()
      .then(res => {
        this.courses = res.data;
      });
  }

  getInstructors() {
    this.instructorService.getInstructors()
      .then(res => {
        this.instructors = res.data;
      });
  }

  getStudents() {
    this.studentService.getStudents()
      .then(res => {
        this.students = res.data;
      });
  }
}
