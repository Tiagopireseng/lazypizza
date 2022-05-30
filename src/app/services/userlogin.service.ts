import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../login/user';

@Injectable({
  providedIn: 'any',
})
export class UserloginService {
  usersUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>(this.usersUrl);
  }
}
