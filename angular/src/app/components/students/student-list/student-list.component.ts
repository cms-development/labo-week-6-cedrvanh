import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  students: any;
  id: string;

  constructor(
    private studentService: StudentService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents()
    .then(res => {
      this.students = res.data;
    });
  }

  deleteStudent(event: any) {
    this.id = event.target.id;
    this.studentService.deleteStudent(this.id)
      .then(res => {
        this.router.navigate(['/']);
      });
  }
}
