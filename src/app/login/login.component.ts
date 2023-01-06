import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
isSignedIn = false
  
  constructor(public firebaseService : FirebaseService, private toastr: ToastrService, private router: Router){
  }
  ngOnInit(){
    
      if(localStorage.getItem('user')!==null)
      this.isSignedIn = true
      else
      this.isSignedIn = false
    }
    async onSignup(email:string, password:string){
      await this.firebaseService.signup(email,password)
      if(this.firebaseService.isLoggedIn)
      this.isSignedIn = true
      this.toastr.success('Emlak Portalı', 'Başarıyla kayıt olundu.');
      this.router.navigate(['main']);
      
      


    }
     async onSignin(email:string, password:string){
      await this.firebaseService.signin(email,password)
      if(this.firebaseService.isLoggedIn)
      this.isSignedIn = true
      this.toastr.success('Emlak Portalı', 'Başarıyla giriş yapıldı.');
      this.router.navigate(['main'])
      let Role = localStorage.getItem("userType")
      if(Role === "admin"){
        this.router.navigate(['admin'])
      }
    }
    handleLogout(){
      this.isSignedIn = false


    }
}
