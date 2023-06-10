import { Component } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string='';
  password:string='';

  constructor(private authService:AuthService){}

  login(){
    if(this.email==''){
      alert('please enter email');
      return;
    }

    if(this.password==''){
      alert('please enter password');
      return;
    }

    this.authService.logIn(this.email,this.password);
    this.email='';
    this.password='';
  }
}
