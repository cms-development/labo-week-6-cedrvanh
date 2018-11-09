import { Injectable } from '@angular/core';
import axios from 'axios';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  options = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  };

  constructor() { }

  getStudents(): Promise<any> {
    return axios.get(`${environment.api.url}${environment.api.endPoints.student}`)
      .then(res => {
        return res.data;
      });
  }

  getStudentById(id: string) {
    return axios.get(`${environment.api.url}${environment.api.endPoints.student}/${id}`, this.options)
      .then(res => {
        return res.data;
      });
  }

  createStudent(data: object) {
    return axios.post(`${environment.api.url}${environment.api.endPoints.student}`, data, this.options);
  }

  updateStudent(id: string, data: any) {
    return axios.patch(`${environment.api.url}${environment.api.endPoints.student}/${id}`, data, this.options);
  }

  deleteStudent(id: string) {
    return axios.delete(`${environment.api.url}${environment.api.endPoints.student}/${id}`, this.options);
  }
}
