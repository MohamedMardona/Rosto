import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
import { HttpClient } from '@angular/common/http';
/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
let constant="assets/data/";

@Injectable()
export class ServicesProvider {
items

  constructor(public http: Http) {
    console.log('Hello ServicesProvider Provider');
  }

  getLocalData() {
    
      this.http.get(constant+'menus.json').map(res => res.json()).subscribe(data => 
      {
        this.items=data.menus;
       alert(JSON.stringify( this.items) );
      }); 
     
    }
    public getmethod(){
      
          return new Promise(resolve => {
            this.http.get(constant+'menus.json').map(res => res.json())
              .subscribe((data) => {
                resolve(data.menus);
              },(err) => {
                resolve(err);
              });
          });
        }
        public getcate(){
          
              return new Promise(resolve => {
                this.http.get(constant+'cate.json').map(res => res.json())
                  .subscribe((data) => {
                    resolve(data.cate);
                  },(err) => {
                    resolve(err);
                  });
              });
            }

            public getbranches(){
              
                  return new Promise(resolve => {
                    this.http.get(constant+'branch.json').map(res => res.json())
                      .subscribe((data) => {
                        resolve(data.branch);
                      },(err) => {
                        resolve(err);
                      });
                  });
                }
                public getallbranches(){
                  
                      return new Promise(resolve => {
                        this.http.get(constant+'allbranches.json').map(res => res.json())
                          .subscribe((data) => {
                            resolve(data.branches);
                          },(err) => {
                            resolve(err);
                          });
                      });
                    }
}
