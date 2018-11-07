import { Injectable } from '@angular/core';
import axios from 'axios';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getStudents(): Promise<any> {
    return axios.get(`${environment.api.url}${environment.api.endPoints.student}`)
      .then(res => {
        return res.data;
      });
  }
}
