import { Component } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-final';
  isSignedIn = false
  
  constructor(public firebaseService : FirebaseService, private toastr: ToastrService){
  }
  
   ngOnInit(){
    
    }
    
}
