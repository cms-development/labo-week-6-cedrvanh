import { Injectable } from '@angular/core';
import axios from 'axios';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  constructor() { }

  getInstructors(): Promise<any> {
    return axios.get(`${environment.api.url}${environment.api.endPoints.instructor}`)
      .then(res => {
        return res.data;
      });
  }
}
