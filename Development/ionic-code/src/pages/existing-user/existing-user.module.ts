import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExistingUserPage } from './existing-user';

@NgModule({
  declarations: [
    ExistingUserPage,
  ],
  imports: [
    IonicPageModule.forChild(ExistingUserPage),
  ],
})
export class ExistingUserPageModule {}
