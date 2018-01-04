import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App,Platform  } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {TabsPage } from '../tabs/tabs';

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// this.alldata.forEach(element => {
//   alert(JSON.stringify(element['__zone_symbol__value']) )
@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
  branche
  element=[];
  items=[]
  total=0
  constructor(public appCtrl: App,public navCtrl: NavController, public navParams: NavParams,public storage:Storage,platform: Platform) {
    let backAction1 =  platform.registerBackButtonAction(() => {
      alert("second click to go menu");
      // this.appCtrl.getRootNav().setRoot(TabsPage);
      backAction1();
    },2)
    let backAction =  platform.registerBackButtonAction(() => {
      alert("second");
      this.appCtrl.getRootNav().setRoot(TabsPage);
      backAction();
    },2)
    this.branche=this.navParams.get("branch")
    // alert(this.branche)
       // alert(JSON.stringify(this.alldata[0]['__zone_symbol__value'][0].id))

    this.storage.get('products').then((val) => { 
      console.log(JSON.stringify(val))
      for (var index = 0; index < val.length; index++) {
        this.total+=val[index]['__zone_symbol__value'][0].totalprice
        this.element .push(val[index]['__zone_symbol__value'][0]);
        console.log('   this.element',JSON.stringify(  this.element))
        // this.totalorice=
      }
      this.items= this.element 

     
      console.log(' this.items',JSON.stringify(  this.items))
      // val.forEach(element => {
      //   alert(JSON.stringify(element['__zone_symbol__value']) )
      //   this.items=val['__zone_symbol__value']
       
      // })
        // console.log(JSON.stringify(val)  + " = previous value"); // 5
        // this.items=val;
        // alert(JSON.stringify( this.items))
      });
    // this.items=this.storage.get('products'); 
    
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }
  End()
  {
    // this.navCtrl.setRoot(HomePage)
    this.appCtrl.getRootNav().setRoot(TabsPage);
    
    
   // this.navCtrl.push("TabsPage")   
    
    // this.navCtrl.push('TabsPage')
  }

}
