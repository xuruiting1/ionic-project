import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{ GosearchPage} from '../gosearch/gosearch';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {


  arr=['客厅','卧室','餐厅','书房','门厅'];
  isActive=0;
  isClick(i){
    this.isActive=i;
  }
  goSearch(){
    this.navCtrl.push(GosearchPage);
  }
  constructor(public navCtrl: NavController) {

  }

}
