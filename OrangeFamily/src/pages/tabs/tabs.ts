import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { PlusPage } from '../plus/plus';
import { MePage } from '../me/me';
import{ AddPage } from '../add/add';
import { ModalController } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = PlusPage;
  tab4Root=ContactPage;
  tab5Root=MePage;
  constructor( public modalCtrl:ModalController) {

  }
  ionViewDidLoad(){
    if(document.querySelector('#tab-t1-2')){

      document.querySelector('#tab-t1-2').addEventListener('click',() =>{
        let profileModal=this.modalCtrl.create(AddPage);
        profileModal.present();
      },false);
    }
  }
}
