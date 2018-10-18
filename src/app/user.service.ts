import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, 
    private messages: HttpHeaders) { }

  SignUp(username: string, password:string, email: string): void {

  }
}
