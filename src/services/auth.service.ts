import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth"
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   
  

  constructor(private fireauth:AngularFireAuth,private router:Router) { }

  logIn(email:string,password:string){
    this.fireauth.signInWithEmailAndPassword(email,password).then((res)=>{
      localStorage.setItem('token','true');

      if(`res.user?.emailVerified==true`){
        this.router.navigate(['home']);
      }else{
        this.router.navigate(['verifyemail']);
      }

    },(err)=>{
      alert('something went wrong');
      this.router.navigate(['/login']);
    })
  }

  logOut(){
   this.fireauth.signOut().then(()=>{
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
   },err=>{
    alert(err.message);
   })
  }

  register(email:string,password:string){
  this.fireauth.createUserWithEmailAndPassword(email,password).then((res)=>{
    alert('Registration Successful');
    this.router.navigate(['/login']);
    this.sendEmailForVerification(res.user);
  },err=>{
    alert(err.message);
    this.router.navigate(['/register'])
  })
  }
  
  forgetpassword(email:string){
    this.fireauth.sendPasswordResetEmail(email).then(()=>{
      this.router.navigate(['/verifyemail'])
    },err=>{
      alert('something went wrong')
    })
  }

   sendEmailForVerification(user:any){
    user.sendEmailForVerification().then((res:any)=>{
    this.router.navigate(['/verifyemail'])
    },(err:any)=>{
      alert('something went wrong,Not send email');
    })
   }
}
