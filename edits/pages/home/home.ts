import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';
import {Http} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { ServicesProvider } from '../../providers/services/services';

import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items:any=[];
  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController,public http:Http,public services:ServicesProvider ) {
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
   this.navCtrl.push("CategoryPage")
 }
 
}

