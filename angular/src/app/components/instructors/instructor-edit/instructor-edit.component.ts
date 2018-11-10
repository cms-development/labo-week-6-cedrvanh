import { Component, OnInit } from '@angular/core';
import { InstructorService } from '../../../services/instructor.service';
import { StudentService } from '../../../services/student.service';
import { CourseService } from '../../../services/course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-instructor-edit',
  templateUrl: './instructor-edit.component.html',
  styleUrls: ['./instructor-edit.component.scss']
})
export class InstructorEditComponent implements OnInit {
  id: string;
  instructor: any;

  constructor(
    private courseService: CourseService,
    private instructorService: InstructorService,
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getInstructorById(this.id);
  }

  getInstructorById(id: string) {
    this.instructorService.getInstructorByid(id)
      .then(res => {
        this.instructor = res.data;
      });
  }

  onEditInstructor() {
    const data = {
      data: {
        type: 'instructor--instructor',
        id: this.id,
        attributes: {
          name: this.instructor.attributes.name,
          field_first_name: this.instructor.attributes.field_first_name
        }
      }
    };

    this.instructorService.updateInstructor(this.id, data)
      .then(res => {
        this.router.navigate(['/instructors']);
      });
  }

  goBack() {
    this.location.back();
  }
}
