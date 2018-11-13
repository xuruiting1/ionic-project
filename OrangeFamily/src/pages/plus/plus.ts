import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import{ AddPage} from '../add/add';

/**
 * Generated class for the PlusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-plus',
  templateUrl: 'plus.html',
})
export class PlusPage {
  // modalCtrl:any;
  constructor(public modalCtrl:ModalController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // let profileModal=this.modalCtrl.create(AddPage);
    // profileModal.present();
    console.log('ionViewDidLoad PlusPage');
  }

}
