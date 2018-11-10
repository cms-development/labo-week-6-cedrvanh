import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../services/course.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  id: string;
  course: any;
  students: any;
  instructors: any;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getCourseById();
  }

  getCourseById() {
    this.courseService.getCourseById(this.id)
      .then(res => {
        console.log(res);
        this.course = res.data;
      });
  }
}
