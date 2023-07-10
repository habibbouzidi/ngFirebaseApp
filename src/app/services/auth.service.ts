import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth, private router: Router) {}

  login(email: string, password: string){
    this.fireAuth.signInWithEmailAndPassword(email, password).then(res=>{
      localStorage.setItem('token', 'true');

      if(res.user?.emailVerified == true){
        this.router.navigate(['/dashboard']);
      }else{
        this.router.navigate(['/email-verification']);
      }
      
    }, err=>{
      alert(err.message);
      this.router.navigate(['/login']);
    })
  }

  register(email: string, password: string){
    this.fireAuth.createUserWithEmailAndPassword(email, password).then(res=>{
      alert("Registration successful");
      
      this.sendEmailVerification(res.user);
    }, err=>{
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }

  logout(){
    this.fireAuth.signOut().then(()=>{
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err=>{
      alert(err.message);
    })
  }

  forgotPassword(email: string){
    this.fireAuth.sendPasswordResetEmail(email).then(()=>{
      this.router.navigate(['/email-verification']);
    }, err=>{
      alert(err.message);
    })
  }

  sendEmailVerification(user: any){
    user.sendEmailVerification().then((res:any)=>{
      this.router.navigate(['/email-verification']);
    }, (err: any)=>{
      alert(err.message);
    })
  }

  googleSignIn(){
    return this.fireAuth.signInWithPopup(new GoogleAuthProvider).then(res=>{
      this.router.navigate(['/dashboard']);
      localStorage.setItem('token', JSON.stringify(res.user?.uid));
    }, err=>{
      alert(err.message);
    })
  }
}
