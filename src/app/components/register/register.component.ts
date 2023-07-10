import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email: string ="";
  password: string = "";

  constructor(private authService: AuthService){}
  ngOnInit(): void {}

  register(){
    if(this.email == ""){
      alert("Enter a valid Email!");
      return;
    }

    if(this.password == ""){
      alert("Enter your password!");
      return;
    }

    this.authService.register(this.email, this.password);
    this.email = "";
    this.password = "";
  }
}
