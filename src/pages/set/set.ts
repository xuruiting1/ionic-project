import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import{ EntryPage } from '../entry/entry'
/**
 * Generated class for the SetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-set',
  templateUrl: 'set.html',
})
export class SetPage {
  //登录页面
  goEntry(){
    this.navCtrl.push(EntryPage);
    // this.app.getRootNavs()[0].setRoot(EntryPage);
  }
  constructor(public app:App ,public navCtrl: NavController, public navParams: NavParams) {
    // app.getRootNavs()[0].setRoot(EntryPage);
    
  }

  ionViewDidLoad() {
   
    console.log('ionViewDidLoad SetPage');
  }

}
