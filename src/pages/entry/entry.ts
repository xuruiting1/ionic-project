import { Component } from '@angular/core';
import { IonicPage,NavController,NavParams,App} from 'ionic-angular';
import{LoginPage} from '../login/login'
import{TabsPage} from '../tabs/tabs'
/**
 * Generated class for the EntryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entry',
  templateUrl: 'entry.html',
})
export class EntryPage {

  constructor(public app:App,public navCtrl: NavController, public navParams: NavParams) {
    
  }
  //注册页面
  goLogin(){
    this.navCtrl.push(LoginPage);
  }
  //跳到首页
  goHome(){
    this.navCtrl.push(TabsPage);
    // this.app.getRootNavs()[0].setRoot(TabsPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EntryPage');
  }

}
