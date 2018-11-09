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
    return axios.get(`${environment.api.url}${environment.api.endPoints.course}`, this.options)
      .then(res => {
        return res.data;
      });
  }

  getCourseById(id: string) {
    return axios.get(`${environment.api.url}${environment.api.endPoints.course}/${id}`, this.options)
      .then(res => {
        return res.data;
      });
  }

  createCourse(data: object) {
    return axios.post(`${environment.api.url}${environment.api.endPoints.course}`, data, this.options);
  }

  updateCourse(id: string, data: any) {
    return axios.patch(`${environment.api.url}${environment.api.endPoints.course}/${id}`, data, this.options);
  }

  deleteCourse(id: string) {
    return axios.delete(`${environment.api.url}${environment.api.endPoints.course}/${id}`, this.options);
  }
}
