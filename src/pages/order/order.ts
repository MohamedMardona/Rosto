import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App,Platform,AlertController    } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {TabsPage } from '../tabs/tabs';
import { CallNumber } from '@ionic-native/call-number';

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
  mob=[]
  mobarray=[]
  constructor(public callnumber:CallNumber,public alertCtrl:AlertController,public appCtrl: App,public navCtrl: NavController, public navParams: NavParams,public storage:Storage,public platform: Platform) {
   
    this.branche=this.navParams.get("branch")
    this.mob=this.navParams.get("mob")
    // this.mob.forEach(element => {
      
    // });
    this.mobarray= this.mob

  // alert(JSON.stringify(  this.mobarray) )
       // alert(JSON.stringify(this.alldata[0]['__zone_symbol__value'][0].id))

    this.storage.get('products').then((val) => { 
      // console.log("hjhjhjhgjhGGGG"+JSON.stringify(val))
      for (var index = 0; index < val.length; index++) {
        this.total+=val[index]['__zone_symbol__value'][0].totalprice
        this.element .push(val[index]['__zone_symbol__value'][0]);
        console.log('   this.element',JSON.stringify(  this.element))
        // this.totalorice=
      }

      // this.storage.get('products').then((val) => { 
      //   console.log(JSON.stringify(val))
      //   for (var index = 0; index < val.length; index++) {
      //     this.total+=val[index]['__zone_symbol__value'][0].totalprice
      //     this.element .push(val[index]['__zone_symbol__value'][0]);
      //     console.log('   this.element',JSON.stringify(  this.element))
      //     // this.totalorice=
      //   }

      this.items= this.element 
// alert(  this.items)
     
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
  call(mob)
  {
  //  alert(mob)
    this.callnumber.callNumber(mob, true).then(() => console.log('Launched dialer!'))
    .catch(() => console.log('Error launching dialer'));
  }
  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm purchase',
      message: 'Do you want to buy this book?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Buy',
          handler: () => {
            this.platform.exitApp();
          }
        }
      ]
    });
    alert.present();
  }
  
  

   
  
  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }
  End()
  {
    this.storage.set('products',[])
    this.storage.set('count',0)
    // this.navCtrl.setRoot(HomePage)
    this.appCtrl.getRootNav().setRoot(TabsPage);
    
    
   // this.navCtrl.push("TabsPage")   
    
    // this.navCtrl.push('TabsPage')
  }

}
