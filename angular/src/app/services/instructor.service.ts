import { Injectable } from '@angular/core';
import axios from 'axios';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {
  options = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  };

  constructor() { }

  getInstructors(): Promise<any> {
    return axios.get(`${environment.api.url}${environment.api.endPoints.instructor}`)
      .then(res => {
        return res.data;
      });
  }

  getInstructorByid(id: string) {
    return axios.get(`${environment.api.url}${environment.api.endPoints.instructor}/${id}`, this.options)
      .then(res => {
        return res.data;
      });
  }

  createInstructor(data: object) {
    return axios.post(`${environment.api.url}${environment.api.endPoints.instructor}`, data, this.options);
  }

  updateInstructor(id: string, data: any) {
    return axios.patch(`${environment.api.url}${environment.api.endPoints.instructor}/${id}`, data, this.options);
  }

  deleteInstructor(id: string) {
    return axios.delete(`${environment.api.url}${environment.api.endPoints.instructor}/${id}`, this.options);
  }
}
