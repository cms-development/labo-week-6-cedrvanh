import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../services/student.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {
  id: string;
  student: any;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getStudentById();
  }

  getStudentById() {
    this.studentService.getStudentById(this.id)
      .then(res => {
        console.log(res);
        this.student = res.data;
      });
  }
}
