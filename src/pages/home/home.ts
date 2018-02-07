import { Component } from '@angular/core';
import { NavController,LoadingController,App,Platform ,AlertController} from 'ionic-angular';
import {Http} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { ServicesProvider } from '../../providers/services/services';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';

import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items:any=[];
  count=0
  order
  flag
  appear=true
  constructor(public alert:AlertController,public platform:Platform,public appCtrl:App,public storage:Storage,public loadingCtrl: LoadingController,public navCtrl: NavController,public http:Http,public services:ServicesProvider ) {
    platform.ready().then(() => {
      // alert("qqqqq")
      this.appear=true
      // this.storage.set('products', '');

    })
   
  
    // this.getdata();
  }
  
  ionViewDidEnter(){
    this.getdata()
    // this.getdata();
   
    this.storage.get('count').then((val) => {
      // console.log(JSON.stringify(val)  + " = home count pppppp");
      this.count=val
      // alert(JSON.stringify(val))
    })
  
    // // // ['__zone_symbol__value']
       this.storage.get('products').then((val) => { 
        //  alert(JSON.stringify(val))
        //   console.log(JSON.stringify(val)  + " = home array ppppp"); // 5
      // alert(JSON.stringify(val))
      //  alert(JSON.stringify(val))
       if( val != '' )
      {
      
       this.appear=false
      }
       })
  
  }

  showAlert() {
    let alert = this.alert.create({
      title: 'خطأ',
      subTitle: ' لا يوجد اتصال ',
      buttons: ['اغلاق']
    });
    alert.present();
  }

 getdata()
 {
  let loading = this.loadingCtrl.create({
    content: 'جارى التحميل...'
  });

  loading.present();
  this.services.getmethod().then(data => { 

    // alert(JSON.stringify( data))
    this.items=data;
    // alert(JSON.stringify( this.items))

    // setTimeout(() => {
      loading.dismiss();
    // }, 1500);
     }).catch(err => {
      this. showAlert()

      setTimeout(() => {
        loading.dismiss();
      }, 1500);
    })

  
  
 }
 itemSelected(id)
 {
  //  alert(id)
  this.storage.get('count').then((val) => {
    console.log(JSON.stringify(val)  + " = home count pppppp");
    this.count=val
  })

  // ['__zone_symbol__value']
     this.storage.get('products').then((val) => { 
      console.log(JSON.stringify(val)  + " = home array ppppp"); // 5
      // alert(JSON.stringify(val))
      this.order=val
      if( this.order != null )
      {
      
        this.navCtrl.push("CategoryPage",{orders:val,counts: this.count,id:id})
      }
      else
      {
        this.navCtrl.push("CategoryPage",{id:id})
      }
      // 6
    });
  
  
   
  
  
  
 
 }
 clear()
 {
  this.storage.set('products',[])
  this.storage.set('count',0)
  // this.navCtrl.setRoot(HomePage)
  this.appCtrl.getRootNav().setRoot(TabsPage);
 }
 
}

