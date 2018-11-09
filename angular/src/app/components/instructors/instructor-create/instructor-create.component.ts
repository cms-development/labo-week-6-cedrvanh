import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstructorService } from '../../../services/instructor.service';

@Component({
  selector: 'app-instructor-create',
  templateUrl: './instructor-create.component.html',
  styleUrls: ['./instructor-create.component.scss']
})
export class InstructorCreateComponent implements OnInit {
  name: string;
  firstName: string;

  constructor(
    private instructorService: InstructorService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onCreateCourse() {
    const data = {
      data: {
        type: 'instructor--instructor',
        attributes: {
          name: this.name,
          field_first_name: this.firstName
        }
      }
    };

    this.instructorService.createInstructor(data)
      .then(res => {
        this.router.navigate(['/instructors']);
      });
  }
}
