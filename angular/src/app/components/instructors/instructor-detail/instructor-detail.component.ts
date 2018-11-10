import { Component, OnInit } from '@angular/core';
import { InstructorService } from '../../../services/instructor.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-instructor-detail',
  templateUrl: './instructor-detail.component.html',
  styleUrls: ['./instructor-detail.component.scss']
})
export class InstructorDetailComponent implements OnInit {
  id: string;
  instructor: any;

  constructor(
    private instructorService: InstructorService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getInstructorById();
  }

  getInstructorById() {
    this.instructorService.getInstructorByid(this.id)
      .then(res => {
        console.log(res);
        this.instructor = res.data;
      });
  }
}
