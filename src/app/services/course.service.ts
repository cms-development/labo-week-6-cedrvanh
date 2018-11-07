import { Injectable } from '@angular/core';
import axios from 'axios';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourses(): Promise<any> {
    return axios.get(`${environment.api.url}${environment.api.endPoints.course}`)
      .then(res => {
        return res.data;
      });
  }
}
