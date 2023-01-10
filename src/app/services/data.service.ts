import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AllHomes } from '../AllHomes.model';
import { Users } from '../users.model.';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs: AngularFirestore) { }

  addHome(home: AllHomes){
    home.id = this.afs.createId()
    return this.afs.collection('/Homes').add(home)
  }
  addUser(user: Users){
    user.id = this.afs.createId()
    return this.afs.collection('/users').add(user)
  }
  deleteUser(user: Users){
    return this.afs.doc('/users'+user.id).delete()
  }
  getAllHomes(){
    return this.afs.collection('/Homes').snapshotChanges()
  }
  deleteHome(home: AllHomes){
    return this.afs.doc('/Homes/' + home.id).delete()
  }
  

  updateHome(home: AllHomes){
    this.deleteHome(home)
    this.addHome(home)
  }
}
