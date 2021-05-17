import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirebaseDetailsPageRoutingModule } from './firebase-details-routing.module';

import { FirebaseDetailsPage } from './firebase-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirebaseDetailsPageRoutingModule
  ],
  declarations: [FirebaseDetailsPage]
})
export class FirebaseDetailsPageModule {}
