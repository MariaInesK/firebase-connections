import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirebaseDetailsPage } from './firebase-details.page';

const routes: Routes = [
  {
    path: '',
    component: FirebaseDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirebaseDetailsPageRoutingModule {}
