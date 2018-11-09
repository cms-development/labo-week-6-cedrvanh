import { Injectable } from '@angular/core';
import axios from 'axios';

import { environment } from '../../environments/environment';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  body: object;
  formData: object;

  constructor(private helperService: HelperService) { }

  login(username: string, password: string) {
    this.body = {
      grant_type: 'password',
      client_id: '0da7bd8c-0f28-4afe-8ff7-e2a7f65b7f4d',
      client_secret: 'secret',
      username: username,
      password: password,
    };

    this.formData = this.helperService.handleFormData(this.body);

    return axios.post(`${environment.api.url}${environment.api.endPoints.auth}`, this.formData);
  }
}
