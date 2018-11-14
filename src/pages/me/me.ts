import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SetPage } from '../set/set';
import{ EntryPage } from '../entry/entry';
import {OrderPage} from '../order/order';
/**
 * Generated class for the MePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-me',
  templateUrl: 'me.html',
})
export class MePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  //注册页面
  goLogin(){
    this.navCtrl.push(LoginPage);
  }
  //设置页面
  goSet(){
    this.navCtrl.push(SetPage);
  }
  //订单详情
  goOrder(){
    this.navCtrl.push(OrderPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MePage');
  }

}
