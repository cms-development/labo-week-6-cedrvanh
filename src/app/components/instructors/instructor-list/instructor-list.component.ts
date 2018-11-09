import { Component, OnInit } from '@angular/core';
import { InstructorService } from '../../../services/instructor.service';

@Component({
  selector: 'app-instructor-list',
  templateUrl: './instructor-list.component.html',
  styleUrls: ['./instructor-list.component.scss']
})
export class InstructorListComponent implements OnInit {
  instructors: {};

  constructor(private instructorService: InstructorService) { }

  ngOnInit() {
    this.getInstructors();
  }

  getInstructors(): void {
    this.instructorService.getInstructors()
    .then(res => {
      this.instructors = res.data;
    });
  }
}
