import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,App,Tabs } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('myTabs') tabRef: Tabs;
  tab1Root = HomePage;
    tab2Root = AboutPage;
    tab3Root = ContactPage;
 
    // ionViewDidEnter() {
    //  this.tabRef.select(1);
  //   //  }
  // selectedTab
  // selectedTab2

  // index=1
  loaded:   boolean = false;
tabIndex: number  = 0;
  constructor(private nativePageTransitions: NativePageTransitions,public navCtrl: NavController,public app:App) {
    
    // this.selectedTab2 = this.tabRef.getSelected().tabTitle;
    // this.selectedTab = this.tabRef.getSelected().index;
    
    // this.tabRef.select(0);
  } 
   getAnimationDirection(index):string {
    var currentIndex = this.tabIndex;
  
    this.tabIndex = index;
    // alert("x"+this.tabIndex)
    switch (true){
      case (currentIndex < index):
        return('left');
      case (currentIndex > index):
        return ('right');
    }
  }
   transition(e):void {
    // alert("x")
    let options: NativeTransitionOptions = {
     direction:this.getAnimationDirection(e.index),
    //  duration: 250,
    //  slowdownfactor: -1,
    //  slidePixels: 0,
    //  iosdelay: 20,
    //  androiddelay: 0,
    //  fixedPixelsTop: 0,
    //  fixedPixelsBottom: 48
    };
  
    if (!this.loaded) {
      this.loaded = true;
      return;
    }
  
    this.nativePageTransitions.slide(options);
  }
 
  // myMethod(x)
  // {
  //   // this.tabRef.select(1);
  //   this.tabRef.select(1);
  //  this.selectedTab = this.tabRef.getSelected().index;
  // //  this.selectedTab+=1
  // alert(x)

  // this.selectedTab2 = this.tabRef.getSelected().tabTitle;
  // alert(this.selectedTab2)
  //   if(this.selectedTab2=='المنيو')
  //   {
  //     this.index=0
  //     // alert(this.index)
  //     this.navCtrl.push(TabsPage,{tabIndex:this.index});
  //     this.tabRef.select(0);
 
  //   }
   
  
  //   // console.log(selectedTab.index + ' - ' + selectedTab.tabTitle);
  // }
}
