import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage} from '../login/login';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  params: Object;
  pushPage: any;

  constructor(public navCtrl: NavController) {
   this.pushPage = LoginPage;
    this.params = { id: 42 };
  }

}
