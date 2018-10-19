import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  username: string;
  password: string;
  email: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    
  }

  Singup(): void {
    this.userService.SignUp(this.username, this.password, this.email).pipe();
  }
}
