import { Component, OnInit } from '@angular/core';
import { InstructorService } from '../../../services/instructor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructor-list',
  templateUrl: './instructor-list.component.html',
  styleUrls: ['./instructor-list.component.scss']
})
export class InstructorListComponent implements OnInit {
  instructors: object;
  id: any;

  constructor(
    private instructorService: InstructorService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getInstructors();
  }

  getInstructors(): void {
    this.instructorService.getInstructors()
    .then(res => {
      this.instructors = res.data;
    });
  }

  deleteInstructor(event: any) {
    this.id = event.target.id;
    this.instructorService.deleteInstructor(this.id)
      .then(res => {
        this.router.navigate(['/']);
      });
  }
}
