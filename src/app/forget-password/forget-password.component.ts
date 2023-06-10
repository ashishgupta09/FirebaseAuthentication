import { Component } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {

  email:string='';
  constructor(private auth:AuthService){}
  forgetpass(){
   this.auth.forgetpassword(this.email);
   this.email='';

  }
}
