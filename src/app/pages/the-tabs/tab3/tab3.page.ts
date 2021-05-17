import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {
  public RoomsArray ; ZonesArray; ChairsArray;
  constructor(firestore: AngularFirestore,) {
    firestore.collection('rooms').doc('Rooms').valueChanges().subscribe((doc: any) => {
      this.RoomsArray = doc.rooms;
    });
    

  }
  
   
}
