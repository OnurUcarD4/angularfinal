import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AllHomes } from '../AllHomes.model';
import { Users } from '../users.model.';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs: AngularFirestore, private firebaseService : FirebaseService) { }

  addHome(home: AllHomes){
    home.id = this.afs.createId()
    return this.afs.collection('/Homes').add(home)
  }
  addUser(user: Users){
    user.id = this.afs.createId()
    return this.afs.collection('/Users').add(user)
  }
  getAllHomes(){
    return this.afs.collection('/Homes').snapshotChanges()
  }
  getAllUsers(){
    return this.afs.collection('/Users').snapshotChanges()
  }
  getCurrentUser(){
    console.log(this.firebaseService.firebaseAuth.currentUser)
  }

  deleteHome(home: AllHomes){
    return this.afs.doc('/Homes/' + home.id).delete()
  }
  

  updateHome(home: AllHomes,newHome: AllHomes){
    this.deleteHome(home)
    this.addHome(newHome)
  }
}
