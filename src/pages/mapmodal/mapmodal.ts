import { Component,ViewChild ,ElementRef  } from '@angular/core';
import { Diagnostic } from '@ionic-native/diagnostic';
import { OpenNativeSettings } from '@ionic-native/open-native-settings';

import { IonicPage, NavController, NavParams ,ViewController,LoadingController} from 'ionic-angular';
import {
  GoogleMaps,
 
  GoogleMapOptions,
 
 } from '@ionic-native/google-maps';

 import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
 declare var google;
 let loading
/**
 * Generated class for the MapmodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mapmodal',
  templateUrl: 'mapmodal.html',
})
export class MapmodalPage {
  add
  // lat 
  // lng
  myModal
  items
  catedata
  // options : GeolocationOptions;
  // currentPos : Geoposition;

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  constructor(private openNativeSettings: OpenNativeSettings,private diagnostic: Diagnostic,public loadingCtrl: LoadingController,private view: ViewController,private navParams: NavParams,public navCtrl: NavController,public nativeGeocoder: NativeGeocoder) {
    // this.lat=30.0444196,
  
    // this.lng=31.23571160000006
 
      }
      
      ionViewDidLoad(){
        this.catedata = this.navParams.get('data');
        this.diagnostic.isLocationEnabled().then(data => { 
          // alert("Location setting is " + (data ? "enabled" : "disabled"));
          if(data==true)  this.initMap(this.catedata.lat,this.catedata.lng);
       else    {
        this.openNativeSettings.open("location").then(data => { 
          this.view.dismiss();   
// alert(data)
        }).catch(err => {
          this.view.dismiss();   
          // alert(err)
         })

       }
             }).catch(err => {
      alert(err)
             })
    //  alert(JSON.stringify(this.catedata))
       
    // window.cordova.plugins.settings.open("wifi", function() {
      }
  initMap(lat,lng) {
    // alert(lat)
     let latLng = new google.maps.LatLng(lat,lng);
     
         let mapOptions = {
         center: latLng,
       //   location : latLng,
         zoom: 15,
         // mapTypeId: google.maps.MapTypeId.ROADMAP
         }
     
         this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
     
     // this.map = new google.maps.Map(this.mapElement.nativeElement, {
     //   zoom: 7,
     //   center: {lat: 41.85, lng: -87.65}
     // });
   //  this.add= this.getlocation(30.0444196,31.23571160000006);
     this.addMarker(latLng);
    
     // this.directionsDisplay.setMap(this.map);
   }
   addMarker(center){
    //  var x='eeeeee';
    // alert(this.catedata.lat+"...."+this.catedata.lng)
 //  alert(this.add)
         let marker = new google.maps.Marker({
         map: this.map,
         animation: google.maps.Animation.DROP,
         position: center,
         // title:"dsfdsfd",
         });
     
         let infoWindow  = new google.maps.InfoWindow;
        
         google.maps.event.addListener(marker, 'click', () => {
           this.nativeGeocoder.reverseGeocode(this.catedata.lat,this.catedata.lng)
           .then((result: NativeGeocoderReverseResult) => 
           {
             var contentString = '<div id="content">'+
             '<div id="siteNotice">'+
             '</div>'+
             '<h1 id="firstHeading" style="color:blue" class="firstHeading">Branch Address</h1>'+
             '<div id="bodyContent">'+
             '<p>'   + JSON.stringify(result.countryName+","+result.administrativeArea+","+result.subAdministrativeArea+","+result.locality+","+result.thoroughfare)   + '</p>'+
             '</div>'+
             '</div>';
            
             infoWindow.open(this.map, marker);
             infoWindow.setContent(contentString);
             // alert(JSON.stringify(result))
           
           }
           
             
          )
         
       // infoWindow.open(this.map, marker);
       });
         // let infoWindow = new google.maps.InfoWindow({
       
         // });
       
       //  let content = "<p>This is your current position !</p>";          
         // google.maps.event.addListener(marker, 'click', () => {
         // infoWindow.open(this.map, marker);
         // });
     
     }

     closeModal1() {
      
        
       
      this.view.dismiss();   
      
      }
}
