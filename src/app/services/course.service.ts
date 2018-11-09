import { Injectable } from '@angular/core';
import axios from 'axios';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  options = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  };

  constructor() { }

  getCourses(): Promise<any> {
    return axios.get(`${environment.api.url}${environment.api.endPoints.course}`)
      .then(res => {
        return res.data;
      });
  }

  createCourse(data) {
    return axios.post(`${environment.api.url}${environment.api.endPoints.course}`, data, this.options);
  }
}
