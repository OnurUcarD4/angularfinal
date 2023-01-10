import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { DataService } from '../services/data.service';
import { Users } from '../users.model.';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
isSignedIn = false
userList: Users[] = [];
userObj: Users = {
  id: '',
email: '',
password: '',
};
  id: string;
  email: string;
  password: string;

  
  constructor(public firebaseService : FirebaseService, private toastr: ToastrService, private router: Router, private angularFirestore: AngularFirestore, private dataService: DataService){
  }
  ngOnInit(){
    
      if(localStorage.getItem('user')!==null)
      this.isSignedIn = true
      else
      this.isSignedIn = false
    }
    async onSignup(email:string, password:string){
      await this.firebaseService.signup(email,password)
      if(this.firebaseService.isLoggedIn){
      this.isSignedIn = true
      this.toastr.success('Emlak Portalı', 'Başarıyla kayıt olundu.');
      this.router.navigate(['dashboard']);
      this.userObj.id = '';
      this.userObj.email = this.email;
      this.userObj.password = this.password;
      console.log(this.userObj)
      this.dataService.addUser(this.userObj)
      }
      
    }
     async onSignin(email:string, password:string){
      await this.firebaseService.signin(email,password)
      if(this.firebaseService.isLoggedIn)
      this.isSignedIn = true
      this.toastr.success('Emlak Portalı', 'Başarıyla giriş yapıldı.');
      this.router.navigate(['dashboard'])
      let Role = localStorage.getItem("userType")
      if(Role === "admin"){
        this.router.navigate(['admin'])
      }
    }
    handleLogout(){
      this.isSignedIn = false


    }
}
