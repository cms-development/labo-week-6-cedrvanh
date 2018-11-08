import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  handleFormData(obj: Object): FormData {
    const data = new FormData();
    Object.keys(obj).forEach(key => data.append(key, obj[key]));
    return data;
  }

  setTokens(user): void {
    localStorage.setItem('access_token', user.access_token);
    localStorage.setItem('refresh_token', user.refresh_token);
  }
}
