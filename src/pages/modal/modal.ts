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
array2:any=[];
count=1;
ordercount=0
size
count2=0
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
    // var x=['__zone_symbol__value']
    var x
//       [
//       '__zone_symbol__state":true,"__zone_symbol__value":'
//     ]
    
// var z="{"
//     var y='}'
    // this.appCtrl.getRootNav().setRoot("CategoryPage");
    // this.appCtrl.getRootNav().push(CategoryPage);
    this.storage.get('count').then((val) => {
      console.log(JSON.stringify(val)  + " = home count");
      x=  this.storage.set("count",val)
    })
  
  
       this.storage.get('products').then((val) => { 
        console.log(JSON.stringify(val)  + " = home array"); // 5
        var val2 = {"__zone_symbol__state" : true,
          "__zone_symbol__value" : val
      };
      console.log(JSON.stringify(val2)  + " = home array"); // 5
        alert(JSON.stringify(val2))
        if(val != null)
        {
        
          this.navCtrl.push("CategoryPage",{orders:val,counts: x})
        }
        else
        {
          this.navCtrl.push("CategoryPage")
        }
        // 6
      });
    
  // this.navCtrl.setRoot("CategoryPage")   
  }
  closeModal() {

    // alert(this.number)
    // this.storage.get('products').then((val) => { // 1
    //   console.log(val + " = previous value"); // 5
    //   // this.array.push(val); // 6
    // });
    // console.log("array",JSON.stringify(this.array))
  this.ordercount=this.ordercount+1,

 
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
// this.array2.push(
//   {
//     amount:this.ordercount+=1,
//   }
// )
// this.alldata=this.array;
// this.storage.set('products', this.array);
 // 4
//  var arr:any=this.storage.set('products', this.array2)
// this.storage.set('count', this.ordercount)

this.view.dismiss(this.storage.set('products', this.array));   

}
//  console.log("array",JSON.stringify( this.array))
    // const data = {
    //   name: 'John Doe',
    //   occupation: 'Milkman'
    // };

    onSelectChange(value)
    {
// alert(value)
this.size=value
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
