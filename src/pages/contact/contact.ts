import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home'

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [
    HomePage
  ]
})
export class ContactPage {

  constructor(public navCtrl: NavController, public homePage: HomePage) {
  }
  
  listarPessoas(){
    console.log(this.homePage.listaPessoas());
  }

}
