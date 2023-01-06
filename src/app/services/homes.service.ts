import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AllHomes } from '../AllHomes.model';

@Injectable({
  providedIn: 'root'
})
export class HomesService {

  constructor(private angularFirestore: AngularFirestore) { }

  getHomeInfo(id: string){
    return this.angularFirestore.collection('home-collection').doc(id).valueChanges()
  }
  getHomeList(){
    return this.angularFirestore.collection('home-collection').snapshotChanges()
  }
  createHome(home: AllHomes){
    return new Promise<any>((resolve,reject) => {
      this.angularFirestore.collection("home-collection").add(home).then(resp => {console.log(resp)}, err => {console.log(err)})
    })
  }
  deleteHome(home: AllHomes){
    return this.angularFirestore.collection("home-collection").doc(home.id).delete();
  }
  updateHome(home: AllHomes, id:string){
    return this.angularFirestore.collection("home-collection").doc(id).update({
      homeName: home.homeName,
      homeDesc: home.homeDesc,
      homePrice: home.homePrice,
      homeRooms: home.homeRooms,
      homeMeters: home.homeMeters,
      homeType: home.homeType,
      homeColor: home.homeColor,
      homeLocation: home.homeLocation
    })
  }
}
