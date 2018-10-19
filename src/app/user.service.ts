import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL = 'https://angular-movies-backend.herokuapp.com/';


  constructor(private http: HttpClient,
    private messagesService: HttpHeaders) { }

  SignUp(username: string, password: string, email: string): Observable<User> {
    return this.http.post<User>(this.apiURL + 'auth/local/register', {
      'username': username,
      'password':password,
      'email':email
    });
  }
}
