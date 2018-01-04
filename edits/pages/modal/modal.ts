import { Component, } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,App } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {CategoryPage } from '../category/category';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})

export class ModalPage {
catedata
number
array=[];
alldata=[];
count=1;
  constructor(public appCtrl: App,public navCtrl: NavController,private navParams: NavParams, private view: ViewController,public storage: Storage) {
    // this.storage.get('products').then((val) => { // 1
    //   console.log(val + " = previous value"); // 5
    //   //   // this.array.push(val); // 6
    //  });
  }

  ionViewWillLoad() {
  //  alert("modal")
   this.catedata = this.navParams.get('data');
    // // console.log( this.catedata);
    
    // //  console.log("after", JSON.stringify(this.array));
    // this.storage.get('products').then((val) => { // 1
    //   console.log(val + " = previous value"); // 5
    //   this.alldata=val; // 6
    // });
    
  }
  closeModal1() {
    // this.appCtrl.getRootNav().setRoot("CategoryPage");
    // this.appCtrl.getRootNav().push(CategoryPage);
    
    
  this.navCtrl.setRoot("CategoryPage")   
  }
  closeModal() {

    // alert(this.number)
    // this.storage.get('products').then((val) => { // 1
    //   console.log(val + " = previous value"); // 5
    //   // this.array.push(val); // 6
    // });
    // console.log("array",JSON.stringify(this.array))
   
    
  
this.array.push(
  {
    id:this.catedata.id,
    img:this.catedata.img,
name:this.catedata.name,
price:this.catedata.price,
amount:this.count,
totalprice:this.catedata.price * this.count,

  }
 


)
// this.alldata=this.array;
// this.storage.set('products', this.array);
 // 4
 
this.view.dismiss(this.storage.set('products', this.array));   

}
//  console.log("array",JSON.stringify( this.array))
    // const data = {
    //   name: 'John Doe',
    //   occupation: 'Milkman'
    // };


    plus()
    {
      this.count +=1
    }
    minus()
    {
      this.count -=1
      if(this.count < 1)  this.count=1;

     
    }

}
