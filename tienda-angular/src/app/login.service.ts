import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {

  loginURL = 'https://baas.kinvey.com/user/kid_BkKvHV8mB/login';

  headers = {
    'Authorization': 'Basic a2lkX0JrS3ZIVjhtQjo4NzlmZDZmN2MzZmU0NGQzYjhmNmE4MTA4NWVlYzQ2NQ==',
    'X-Kinvey-API-Version': '3',
    'Content-Type': 'application/json'
  };

  constructor(private http: HttpClient) { }

  performLogin(username: string, password: string): Observable<any> {

    let credentials = {
      username: username,
      password: password
    };

    let response = this.http.post(
      this.loginURL,
      credentials,
      {
        headers: this.headers
      }
    );
    return response;
  }
}