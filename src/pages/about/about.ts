import { Component,ViewChild ,ElementRef  } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';
// import { Geolocation,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation';
import {
  GoogleMaps,
 
  GoogleMapOptions,
 
 } from '@ionic-native/google-maps';
 import { Storage } from '@ionic/storage';
 
 import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
 import { ModalOptions,Modal,IonicPage,  NavParams,ModalController,App } from 'ionic-angular';
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
  
  // options : GeolocationOptions;
  // currentPos : Geoposition;

  // @ViewChild('map') mapElement: ElementRef;
  map: any;
  // start = 'chicago, il';
  // end = 'chicago, il';
  // directionsService = new google.maps.DirectionsService;
  // directionsDisplay = new google.maps.DirectionsRenderer;

  constructor(public storage:Storage,private callNumber: CallNumber,public loadingCtrl: LoadingController,public services:ServicesProvider,private modal: ModalController,public navCtrl: NavController,public nativeGeocoder: NativeGeocoder) {
    this.storage.set('products',[])
    this.storage.set('counts',0)
  }

  ionViewDidLoad(){
    this.getdata();
    // this.initMap();
   
  }
  // presentLoadingDefault() {
  //   loading = this.loadingCtrl.create({
  //      content: 'Please wait...'
  //    });
   
    
  //    loading.present();
     
  //  }
  call(mobile)
  {
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
        content: 'Please wait...'
      });
    
      loading.present();
      this.services.getallbranches().then(data => { 
        this.items=data;
         // alert(JSON.stringify( this.items))
         })
      setTimeout(() => {
        loading.dismiss();
      }, 1500);
    
     
        
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
