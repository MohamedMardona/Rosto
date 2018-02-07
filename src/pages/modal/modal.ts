import { Component, } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,App } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {CategoryPage } from '../category/category';
import { AlertController } from 'ionic-angular';

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
array2:any=[];
count=1;
ordercount=0
size
count2=0
selectedprice;
catedata2
  constructor(public alert :AlertController,public appCtrl: App,public navCtrl: NavController,private navParams: NavParams, private view: ViewController,public storage: Storage) {
    // this.storage.get('products').then((val) => { // 1
    //   console.log(val + " = previous value"); // 5
    //   //   // this.array.push(val); // 6
    //  });
  }

  ionViewWillLoad() {
  //  alert("modal")
   this.catedata = this.navParams.get('data');
   this.catedata2 = this.navParams.get('id');
  //  alert( this.catedata2);
    
      console.log("after catedata", JSON.stringify(this.catedata));
    // this.storage.get('products').then((val) => { // 1
    //   console.log(val + " = previous value"); // 5
    //   this.alldata=val; // 6
    // });
    
  }
  closeModal1() {
    this.view.dismiss(undefined);   
  
//     var x

//     this.storage.get('count').then((val) => {
//       console.log(JSON.stringify(val)  + " = home count");

//       // alert(val)
//       //  var l= ['__zone_symbol__value'][0]
//  x=val;
//       //  alert("lllll"+l)
//        this.storage.set("count",val)
//       console.log(JSON.stringify(x)  + " = home count x");
     
//     })
  
  
//        this.storage.get('products').then((val) => { 
//         console.log(JSON.stringify(val)  + " = home array"); // 5
//         // var val2 = {"__zone_symbol__state" : true,
//         //   "__zone_symbol__value" : val}
//        this.storage.set('products', this.alldata)
     
//         if(val != null)
//         {
       
//         this.storage.set("products",val)
//           this.navCtrl.push("CategoryPage",{orders:val,counts: x,id:this.catedata2})
//         }
//         else
//         {
//           this.navCtrl.push("CategoryPage",{id:this.catedata2}
//         )
//         }
   
//       });
    
  // this.navCtrl.setRoot("CategoryPage")   
  }
  showAlert() {
    let alert = this.alert.create({
      title: 'تنبيه',
      subTitle: 'من فضلك اختر حجم الوجبه ',
      buttons: ['اغلاق']
    });
    alert.present();
  }

  closeModal() {
    if(this.selectedprice==undefined)
  {
 this.showAlert()
  }
  else
  {
// alert(JSON.stringify(this.catedata))
   
    this.ordercount=this.ordercount+1,

 
    this.array.push(
      {
     
        id:this.catedata.id,
        image:this.catedata.image,
    name:this.catedata.name,
    price:this.selectedprice,
    amount:this.count,
    totalprice:this.selectedprice * this.count,
    
      }
     
    
    
    )
    
    
    this.view.dismiss(this.storage.set('products', this.array));   
  }


}
//  console.log("array",JSON.stringify( this.array))
    // const data = {
    //   name: 'John Doe',
    //   occupation: 'Milkman'
    // };

    onSelectChange(value)
    {
      //  alert(value)
       this.selectedprice=value
// this.size=value
    }
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
