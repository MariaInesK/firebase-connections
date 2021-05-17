import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
//import { RouterModule } from '@angular/router';
//import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

collectionName = 'Rooms';'zones'; 'chairs;'


constructor(
  private firestore: AngularFirestore
  ) { }
  get_rooms(){
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  get_zones(){
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }
  
  get_chairs(){
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }


}



