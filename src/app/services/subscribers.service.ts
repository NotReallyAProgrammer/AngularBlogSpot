import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class SubscribersService {

  constructor(private firestore:AngularFirestore) { }

  addSubs(subData:any){

    this.firestore.collection('subscriber').add(subData).then(() => {
    });
  }

  checkSubs( email:any ){
    return  this.firestore.collection('subscriber',ref => ref.where('email', '==' , email)).get()
  }
}
