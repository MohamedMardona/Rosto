import { Component } from '@angular/core';
import { ModalOptions,Modal,IonicPage, NavController, NavParams,ModalController,App,LoadingController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
import { Storage } from '@ionic/storage';
import {TabsPage } from '../tabs/tabs';

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
items
array
alldata=[];
 myModal
 appear=true;
  constructor(public loadingCtrl: LoadingController,public app:App,private modal: ModalController,public navCtrl: NavController, public navParams: NavParams,public services:ServicesProvider,public storage:Storage) {
    this.getdata()
   
    console.log('ionViewDidLoad CategoryPage');

  }

  ionViewDidLoad() {
    // alert("view")
    
    // alert("1")
    // this.storage.get('products').then((val) => { 
    //   console.log(JSON.stringify(val)  + " = previous value"); // 5
    //   if(val != null)
    //   {
    //     this.array=val; 
    //   }
    //   // 6
    // });
    // alert(JSON.stringify(this.alldata))
  }
  back()
  {
         this.app.getRootNav().setRoot(TabsPage);

  }
  openModal(x) {
    
        const myModalOptions: ModalOptions = {
          enableBackdropDismiss: false
        };
    
        // const myModalData = {
        //   name: 'Paul Halliday',
        //   occupation: 'Developer'
        // };
    
         this.myModal=this.modal.create('ModalPage', { data:  x }, myModalOptions);
    
         this.myModal.present();
    
         this.myModal.onDidDismiss((data) => {
          // console.log("I have dismissed."+data);
          this.alldata.push(data)

          // alert(data)
          // alert(this.alldata )'
          // alert(this.appear)
          if(  data == undefined)
          {
            this.appear=true
          //  alert(this.appear)
          }
          // if(this.alldata == [] )
          // {
          //   this.appear=true
          //   alert(this.appear)
          // }
          else{
            this.appear=false;
          // alert("1"+this.appear)
            
          }
        
        
          // var arrat=[];
          // arrat.push(data)
          // alert(JSON.stringify(data) );
          // this.storage.set('products', arrat);
          // console.log("I'm about to dismiss");
          // console.log(data);
          // this.storage.set('products', data);
        });
    
        this.myModal.onWillDismiss((data) => {
        // var arrat=[];
        // arrat.push(data)
         
        });
    
      }
  getdata()
  {
  
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
    
      loading.present();
      this.services.getcate().then(data => { 
        this.items=data;
         // alert(JSON.stringify( this.items))
         })
      setTimeout(() => {
        loading.dismiss();
      }, 1500);
  }
  submit()
  {

    this.alldata.forEach(element => {
      // alert(JSON.stringify(element['__zone_symbol__value']) )
      this.array=element
      this.storage.set('products', this.alldata);
    });

  this.navCtrl.push("BranchesPage")
//  this.storage.set('products', this.alldata);
    
    // this.alldata=this.storage.get('products'); // 4
    // this.storage.get('products').then((val) => { // 1
    //   console.log(val + " = previous value"); // 5
    //   this.alldata=val; // 6
    // });
    // this.alldata='';
    // console.log(JSON.stringify(this.alldata[0]))
    // alert(JSON.stringify(this.alldata[0]['__zone_symbol__value'][0].id))
    // this.alldata=[]
  }
 
}
