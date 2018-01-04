import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';
import {Http} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { ServicesProvider } from '../../providers/services/services';
import { Storage } from '@ionic/storage';

import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items:any=[];
  count=0
  constructor(public storage:Storage,public loadingCtrl: LoadingController,public navCtrl: NavController,public http:Http,public services:ServicesProvider ) {
  //  this.items= this.services.getLocalData();
  // alert(JSON.stringify( this.services.getLocalData()))
  this.getdata();
  }
 getdata()
 {
  let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  loading.present();
  this.services.getmethod().then(data => { 
    this.items=data;
    // alert(JSON.stringify( this.items))
     })
  setTimeout(() => {
    loading.dismiss();
  }, 1500);
  
 }
 itemSelected(x)
 {
  this.storage.get('count').then((val) => {
    console.log(JSON.stringify(val)  + " = home count");
    this.count=val
  })

  // ['__zone_symbol__value']
     this.storage.get('products').then((val) => { 
      console.log(JSON.stringify(val)  + " = home array"); // 5
      // alert(JSON.stringify(val))
      if(val != null)
      {
      
        this.navCtrl.push("CategoryPage",{orders:val,counts: this.count})
      }
      else
      {
        this.navCtrl.push("CategoryPage")
      }
      // 6
    });
  
  
   
  //  alert("category"+JSON.stringify(this.storage.get("products")))
  
  
 
 }
 
}

