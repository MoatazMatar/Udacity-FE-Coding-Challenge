import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {
  private lgoinUrl = environment.apiEndpoint + '/api/login';
  private registerUrl = environment.apiEndpoint + '/api/register';
  constructor(private http: HttpClient) { }

  login(email, password) {
    const user = {
      email: email,
      password: password
    };
    return this.http.post(this.lgoinUrl, user);
  }

  register(email, password) {
    const user = {
      email: email,
      password: password
    };
    return this.http.post(this.registerUrl, user);
  }
}
