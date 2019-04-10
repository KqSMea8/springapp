import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {

  items:any;
  d:any;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.initializeItems();
    }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad NotifyPage');
    }
  initializeItems() {
        this.items = [
        {name: 'Hasan ', avatar: 'http://placehold.it/100', group: 'Group 1'},
        {name: 'Amcik ', avatar: 'http://placehold.it/100', group: 'Group 1'},
        {name: 'Pezo ', avatar: 'http://placehold.it/100', group: 'Group 1'},
        {name: 'Achu ', avatar: 'http://placehold.it/100', group: 'Group 2'},
        {name: 'abi ', avatar: 'http://placehold.it/100', group: 'Group 2'},
        {name: 'Ami ', avatar: 'http://placehold.it/100', group: 'Group 2'},
        {name: 'Emmy ', avatar: 'http://placehold.it/100', group: 'Group 3'},
        {name: 'Danny ', avatar: 'http://placehold.it/100', group: 'Group 3'},
        {name: '6pack ', avatar: 'http://placehold.it/100', group: 'Group 3'},
        {name: 'Marco ', avatar: 'http://placehold.it/100', group: 'Group 4'},
        {name: 'Suresh  ', avatar: 'http://placehold.it/100', group: 'Group 4'},
        {name: 'Lancer ', avatar: 'http://placehold.it/100', group: 'Group 4'},
        {name: 'Aadi ', avatar: 'http://placehold.it/100', group: 'Group 3'}
        ]
  
  
            let groups = [
                        {
                                name: 'Group 1',
                                count: 0,
                                items: [],
                        },
                        {
                                name: 'Group 2',
                                count: 0,
                                items: [],
                        },
                        {
                          name: 'Group 3',
                          count: 0,
                          items: [],
                  },
                  {
                          name: 'Group 4',
                          count: 0,
                          items: [],
                  }

          ]


          for(var j = 0; j < groups.length; j++) {
                  for(var i=0; i<this.items.length; i++) {
                          if (this.items[i].group == groups[j].name) {
                                  groups[j].count++;
                                  groups[j].items.push(this.items[i]);
                          }
                  }
                }
                this.items = groups;
  
        }
  }
  

