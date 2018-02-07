import { Component } from '@angular/core';
import {AlertController, ModalOptions,Modal,IonicPage, NavController, NavParams,ModalController,App,LoadingController,Platform } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
import { Storage } from '@ionic/storage';
import {TabsPage } from '../tabs/tabs';
// import {HomePage } from '../tabs/tabs';

/**HomePage
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
alldata:any=[];
 myModal
 ordercount=0;
 appear=true;
 cateid
  constructor(public alert:AlertController,public platform:Platform,public loadingCtrl: LoadingController,public app:App,private modal: ModalController,public navCtrl: NavController, public navParams: NavParams,public services:ServicesProvider,public storage:Storage) {
  
    platform.ready().then(() => {
      // this.ordercount=this.navParams.get('counts');
      // this.alldata=this.navParams.get('orders');
      if(this.navParams.get('orders') == ''   )
      {
      this.appear=true

      }
    })
    this.cateid=this.navParams.get('id');
    // this.getdata(this.cateid)
   
    // console.log('ionViewDidLoad CategoryPage');
   
    
    // ['__zone_symbol__value'][0]
    // alert(this.cateid)
  //  alert("zdfdfefyeyreyryeryyr"+JSON.stringify(this.ordercount) )
    // 
    // console.log("categoryconstractor",this.navParams.get('orders'))
    // console.log("modelconstractor",this.navParams.get('orders'))
    // if(  this.ordercount!=0 )
    // {
if(this.navParams.get('orders') != ''   )
{
  // alert("data")
  this.appear=false;
  this.alldata=this.navParams.get('orders');
  this.ordercount=this.navParams.get('counts');
// alert("ordercount"+ JSON.stringify( this.ordercount))
  
}
else{
  // alert("data2")
  this.appear=true
   this.ordercount=0
}
    // }
  }
  ionViewDidEnter(){
    this.getdata(this.cateid)

  }
  // ionViewDidLoad(){
  //   this.getdata(this.cateid)
  //   // this.initMap();
   
  // }
  back()
  {
    
    this.storage.set('count', this.ordercount);
    this.storage.set('products', this.alldata);

    this.navCtrl.push(TabsPage)
    // this.navCtrl.pop();
          //this.app.getRootNav().setRoot(TabsPage);

  }
  showAlert() {
    let alert = this.alert.create({
      title: 'خطأ',
      subTitle: ' لا يوجد اتصال ',
      buttons: ['اغلاق']
    });
    alert.present();
  }
  openModal(x) {
    // this.storage.set('count', this.ordercount);
    // alert("xxxxxxx open "+JSON.stringify(x))
        const myModalOptions: ModalOptions = {
          enableBackdropDismiss: false
        };
    
        // const myModalData = {
        //   name: 'Paul Halliday',
        //   occupation: 'Developer'
        // };
    
         this.myModal=this.modal.create('ModalPage', { data:  x,id: this.cateid }, myModalOptions);
    
         this.myModal.present();
    
         this.myModal.onDidDismiss((data) => {
          //  alert(count)
            // this.ordercount+=1;
            // this.storage.set('count', this.ordercount);
        //  var x= this.storage.get('count')
        //  alert("xx"+ x)
          console.log("I have dismissed."+ JSON.stringify(data) );
          // this.alldata.push(data)

          // alert(data)
          // alert(this.alldata )'
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
  getdata(id)
  {
  // alert("rrrr"+id)
      let loading = this.loadingCtrl.create({
        content: 'جارى التحميل...'
      });
    
      loading.present();
      this.services.getcate(id).then(data => { 
        this.items=data;
        // alert(J  loading.dismiss();SON.stringify(data))
        loading.dismiss();
         }).catch(err => {
          setTimeout(() => {
            loading.dismiss();
          }, 1000);

          this.showAlert()
        })
    
  }
  submit()
  {

    this.alldata.forEach(element => {
      // alert(JSON.stringify(element['__zone_symbol__value']) )
      this.array=element
      this.storage.set('products', this.alldata);
    });
  // alert(JSON.stringify(this.alldata))
  this.navCtrl.push("BranchesPage")
  // this.storage.set('products', this.alldata);
    
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
