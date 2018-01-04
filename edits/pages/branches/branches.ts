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
  constructor(public loadingCtrl: LoadingController,private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams,public services:ServicesProvider) {
    this.getdata();
    // alert(JSON.stringify(this.navParams.get('comarray')) )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BranchesPage');
  }
  getdata()
  {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
    this.services.getbranches().then(data => { 
      this.items=data;
       // alert(JSON.stringify( this.items))
       })
    setTimeout(() => {
      loading.dismiss();
    }, 1500);
  
 
  }
  back()
  {
    this.navCtrl.push('CategoryPage')
  }
  changeStatus(s)
  {
    //  alert(s)
    
    this.s=s
    // alert("xxx"+this.s)
    // this.navCtrl.setRoot(this.navCtrl.getActive().component);
    
    
    // window.location.reload();
    
    
    
  }
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'خطأ',
      subTitle: 'من فضلك اختر الفرع',
      buttons: ['Dismiss']
    });
    alert.present();
  }
  go()
    {
if(this.s==undefined)
{
  this.presentAlert() 
}
else{
  this.navCtrl.push("OrderPage",{branch:this.s})
}
    
      
    }
  
}
