import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 @Output() isLogout = new EventEmitter<void>()
  constructor(public firebaseService: FirebaseService){}
 ngOnInit(): void {
 }
 logout(){
  this.firebaseService.logout()
  this.isLogout.emit()
 }

}
