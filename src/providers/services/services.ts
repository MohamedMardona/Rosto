import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
// import { HttpClient } from '@angular/common/http';
/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
// let constant="assets/data/";
let constant="https://rosto.be4em.info/api/";


@Injectable()
export class ServicesProvider {
items

  constructor(public http: Http) {
    console.log('Hello ServicesProvider Provider');
  }
  // public getLocalData()
  // {
  //   var promise = new Promise((resolve,reject)=>
  //    {
  //      this.http.get(constant+'menus.json').map(res => res.json()).subscribe((data) => {           
  //       resolve(data.menus)
  //     },
      
  //    (error)=> { reject(error)});
  //    })

  //    return promise;
  // }
  // public postMethod(url,body):Promise<any>
  // {
  //    return new Promise((resolve,reject)=>{
  //        this.http.post(url,body,this.config).subscribe(response=>{
  //         resolve(response);
  //        },error=>{
  //            reject(error);
  //        })
     
  //    })
  // }
  // getLocalData() {
    
  //     this.http.get(constant+'menus.json').map(res => res.json()).subscribe(data => 
  //     {
  //       this.items=data.menus;
  //      alert(JSON.stringify( this.items) );
  //     }); 
     
  //   }
  // public getMethod(url):Promise<any>
  // {
  //    return new Promise((resolve,reject)=>
  //    {
  //      this.http.get(url).map(res => res.json()).subscribe(data => {           
  //         return resolve(data)
  //     },error=> {return reject(error)});
  //    })
  // }
    public getmethod():Promise<any>{
      
          var promise= new Promise((resolve,reject)=> {
            // alert(constant+'categories')
            this.http.get(constant+'categories').map(res => res.json()).subscribe(data => { 
              console.log(JSON.stringify(data))          
               resolve(data.categories)
          },error=> {
            console.log(JSON.stringify("hjyyyyyyyyyyyyyyyyy"+error))
            reject(error)});
         })
         return promise;
        }
        // kapp.be4em.com/rosto/api/category_items

        public getoffers(){
          
          var promise= new Promise((resolve,reject)=> {
                this.http.get(constant+'offers').map(res => res.json()).subscribe(data => { 
                  console.log(JSON.stringify(data))          
                   resolve(data.offers)
              },error=> {
                console.log(JSON.stringify("hjyyyyyyyyyyyyyyyyy"+error))
                reject(error)});
             })
             return promise;
            }
            public  getcate(id):Promise<any>
  {
     return new Promise((resolve,reject)=>{
         this.http.post(constant+'category_items',{"id":id}).map(res => res.json())
         .subscribe((data) => {
  console.log(JSON.stringify(data.items))       
          resolve(data.items);
         },error=>{
             reject(error);
         })
     
     })
  }

            public getbranches(){
              
                  return new Promise((resolve,reject) => {
                    this.http.get(constant+'branch.json').map(res => res.json())
                      .subscribe((data) => {
                        resolve(data.branch);
                      },(err) => {
                        reject(err);
                      });
                  });
                }
                public getallbranches(){
                  
                      return new Promise((resolve,reject) => {
                        this.http.get(constant+'branches').map(res => res.json())
                          .subscribe((data) => {
                            resolve(data.categories);
                          },(err) => {
                            reject(err);
                          });
                      });
                    }
}
