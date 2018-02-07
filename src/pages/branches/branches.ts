import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController,LoadingController} from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the BranchesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-branches',
  templateUrl: 'branches.html',
})
export class BranchesPage {
s
items
array:any=[]
mobile
numarray=[];
  constructor(public loadingCtrl: LoadingController,private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams,public services:ServicesProvider) {
    // this.getdata();
    // alert(JSON.stringify(this.navParams.get('comarray')) )
    this.mobile=[];
    this.array=[]
  }

  ionViewDidEnter(){
    this.getdata()
    this.mobile=[];
    this.array=[]
   
  }
  getdata()
  {
    let loading = this.loadingCtrl.create({
      content: 'جارى التحميل...'
    });
  
    loading.present();
    this.services.getallbranches().then(data => { 
      this.items=data;
      // alert("gggggg"+JSON.stringify(this.items[0].numbers[0].number) )
      this.items.forEach(branch => {
      // alert("fgfgfgfgf"+JSON.stringify(branch.numbers[0].number) )
      this.numarray=branch.numbers;
     
      //  this.numarray=category.numbers;
      })
      
        loading.dismiss();
      
    
       }).catch(err => {
        setTimeout(() => {
          loading.dismiss();
        }, 1000);
      this.showAlert();
      })
    
 
  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'تنبيه',
      subTitle: ' خطأ ',
      buttons: ['OK']
    });
    alert.present();
  }
  saveSettings(s)
  {
// alert(s)
this.s=s
  }
  back()
  {
    this.navCtrl.pop();
    // this.navCtrl.push('CategoryPage')
  }
  goo(mobile)
  {
    // alert(JSON.stringify(mobile) )
    // for (const iterator of mobile) {


      mobile.forEach(element => {
      // alert(element.number)
      this.array.push(element.number)
    });
   
      
  //   // }
  //   // alert( this.array)
  this.mobile=this.array

  // alert(JSON.stringify(this.mobile))
  }
  // changeStatus(s)
  // {
  //     // alert(s)
  //   // this.mobile=mobile
  //   this.s=s
  //   // alert("xxx"+this.s)
  //   // this.navCtrl.setRoot(this.navCtrl.getActive().component);
    
    
  //   // window.location.reload();
  // keytool -genkey -v -keystore Rosto.keystore -alias Rosto -keyalg RSA -keysize 2048 -validity 10000
    
    
  // }
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'خطأ',
      subTitle: 'من فضلك اختر الفرع',
      buttons: ['اغلاق']
    });
    alert.present();
  }
  go()
    {
        // alert(this.mobile)
    
if(this.mobile == '' )
{
  this.presentAlert() 
}
else{
  // alert(this.mobile)
  this.navCtrl.push("OrderPage",{branch:this.s,mob:this.mobile})
}
    
      
    }
  
}
