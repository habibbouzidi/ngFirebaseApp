import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";

  constructor(private authService: AuthService){}

  ngOnInit(): void {}

  login(){
    if(this.email == ""){
      alert("Enter a valid Email!");
      return;
    }

    if(this.password == ""){
      alert("Enter your password!");
      return;
    }

    this.authService.login(this.email, this.password);
    this.email = "";
    this.password = "";
  }

  signInGoogle(){
    this.authService.googleSignIn();
  }
}
