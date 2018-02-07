import { Component } from '@angular/core';
import { AlertController,ModalOptions,Modal,IonicPage, NavController, NavParams,ModalController,App,LoadingController } from 'ionic-angular';
import {Http} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { ServicesProvider } from '../../providers/services/services';


import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import {TabsPage } from '../tabs/tabs';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  items
array
alldata:any=[];
 myModal
 ordercount=0
 orderordercount=0;
 appear=true;
  constructor(public alert: AlertController,public loadingCtrl: LoadingController,public app:App,private modal: ModalController,public navCtrl: NavController, public navParams: NavParams,public services:ServicesProvider,public storage:Storage) {
    //  this.getdata()
    this.storage.get('count').then((val) => {
      console.log(JSON.stringify(val)  + " = home ordercount");
      this.ordercount=val
    })
    
       this.storage.get('products').then((val) => { 
        console.log(JSON.stringify(val)  + " = home array"); // 5
      
       
        if(val !='' )
        {
          this.alldata=val
          this.appear=false;
        
        }
        else
        {
          this.appear=true;
        
        }
       
      });
    
  }

  ionViewDidEnter(){
    this.getdata()

  }

  ionViewWillLeave()
  {
 

    this.storage.set('count', this.ordercount);
    this.storage.set('products', this.alldata);

  }
  
  openModal(x) {
    // alert("I have dismissed."+ JSON.stringify(x) );
        const myModalOptions: ModalOptions = {
          enableBackdropDismiss: false
        };
    
       
         this.myModal=this.modal.create('ModalPage', { data:  x }, myModalOptions);
    
         this.myModal.present();
    
         this.myModal.onDidDismiss((data) => {
         
            // this.ordercount+=1;
  
          // alert("I have dismissed."+ JSON.stringify(data) );
          // this.alldata.push(data)
  // alert(this.appear)
  if(  data == undefined)
  {
    this.appear=true
    this.alldata= this.alldata;
    if(this.alldata != '')
    {
      // this.alldata.push(data)
      this.appear=false;
    }
  //  alert(this.appear)
  }
  // if(this.alldata == [] )
  // {
  //   this.appear=true
  //   alert(this.appear)
  // }
  else{
    this.ordercount+=1;
    this.alldata.push(data)
    this.appear=false;
  // alert("1"+this.appear)
    // this.appear=false;
  // alert("1"+this.appear)
    
  }

       
          // if(  data == undefined)
          // {
          //   this.appear=true
          // //  alert(this.appear)
          // }
        
          // else{
          //   this.appear=false;
          // // alert("1"+this.appear)
            
          // }
        
        
          
        });
    
        this.myModal.onWillDismiss((data) => {
       
         
        });
      
      }
  getdata()
  {
  
      let loading = this.loadingCtrl.create({
        content: 'جارى التحميل...'
      });
    
      loading.present();
      this.services.getoffers().then(data => { 

        loading.dismiss();
        this.items=data;


         // alert(JSON.stringify( this.items))
         }).catch(err => {
          setTimeout(() => {

           
            loading.dismiss();
            this. showAlert()

          }, 1000);

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

  submit()
  {

    this.alldata.forEach(element => {
      // alert(JSON.stringify(element['__zone_symbol__value']) )
      this.array=element
      this.storage.set('products', this.alldata);
    });

  this.navCtrl.push("BranchesPage")
//  
  }
 

}
