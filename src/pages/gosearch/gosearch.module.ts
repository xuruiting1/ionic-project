import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GosearchPage } from './gosearch';

@NgModule({
  declarations: [
    GosearchPage,
  ],
  imports: [
    IonicPageModule.forChild(GosearchPage),
  ],
})
export class GosearchPageModule {}
