import { Component,ViewChild ,ElementRef  } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';
// import { Geolocation,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation';
import {
  GoogleMaps,
 
  GoogleMapOptions,
 
 } from '@ionic-native/google-maps';
 import { Storage } from '@ionic/storage';
 
 import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
 import { AlertController,ModalOptions,Modal,IonicPage,  NavParams,ModalController,App } from 'ionic-angular';
 import { ServicesProvider } from '../../providers/services/services';
 import { CallNumber } from '@ionic-native/call-number';
 
 declare var google;
 let loading
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {
  add
  lat 
  lng
  myModal
  items
  arraynumber
  // options : GeolocationOptions;
  // currentPos : Geoposition;

  // @ViewChild('map') mapElement: ElementRef;
  map: any;
  // start = 'chicago, il';
  // end = 'chicago, il';
  // directionsService = new google.maps.DirectionsService;
  // directionsDisplay = new google.maps.DirectionsRenderer;

  constructor(public alertCtrl:AlertController,public storage:Storage,private callNumber: CallNumber,public loadingCtrl: LoadingController,public services:ServicesProvider,private modal: ModalController,public navCtrl: NavController,public nativeGeocoder: NativeGeocoder) {
    this.storage.set('products',[])
    this.storage.set('count',0)
  }

  ionViewDidEnter(){
    this.getdata()
  }
  // presentLoadingDefault() {
  //   loading = this.loadingCtrl.create({
  //      content: 'Please wait...'
  //    });
   
    
  //    loading.present();
     
  //  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'خطأ',
      subTitle: ' لا يوجد اتصال ',
      buttons: ['اغلاق']
    });
    alert.present();
  }
  call(mobile)
  {
    // alert(mobile)
    this.callNumber.callNumber(mobile, true).then(() => console.log('Launched dialer!'))
    .catch(() => console.log('Error launching dialer'));
  }
openModal(x) {
  
      const myModalOptions: ModalOptions = {
        enableBackdropDismiss: false
      };
  
  
  
       this.myModal=this.modal.create('MapmodalPage', { data:  x }, myModalOptions);
  
       this.myModal.present();
  
       this.myModal.onDidDismiss((data) => {
        // console.log("I have dismissed."+data);
        
      });
  
     
  
    }
    
    getdata()
    {
      let loading = this.loadingCtrl.create({
        content: 'جارى التحميل...'
      });
    
      loading.present();
      this.services.getallbranches().then(data => { 
        this.items=data;
        // alert(JSON.stringify( this.items))
        // this.items.forEach(category => {
        //   // if(category.numbers != null){
        //     this.arraynumber=category.numbers
        //     // category.numbers.forEach(number => {
        //     //   console.log(number);
              
        //     //    this.arraynumber=number.number;
        //       console.log("fgggggggggggggggggg"+JSON.stringify( this.arraynumber));
        //     // });
        //   // }
        // });

   
          loading.dismiss();
     
         }).catch(err => {
          setTimeout(() => {
            loading.dismiss();
          }, 1000);
          this.showAlert()
        })
     
    
     
        
    }
 
    // 

  // calculateAndDisplayRoute() {
  //   this.directionsService.route({
  //     origin: this.start,
  //     destination: this.end,
  //     travelMode: 'DRIVING'
  //   }, (response, status) => {
  //     if (status === 'OK') {
  //       this.directionsDisplay.setDirections(response);
  //     } else {
  //       window.alert('Directions request failed due to ' + status);
  //     }
  //   });
  // }
}
