import { Injectable } from '@angular/core';
import AddJson from '../../assets/Add.json';
import MultiplyJson from '../../assets/Multiply.json';

import {Data} from './operations.model';
import NumberJson from '../../assets/Numbers.json';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetdataService {


  // constructor(private http: HttpClient) { }
  constructor() { }

  ngOnInit() {
    // this.fetchPosts();
  }


  // onFetchPosts(){
  //   this.fetchPosts();
  // }


  // private fetchPosts() {
  //   this.http.get('../../assets/Add.json')
  //   .subscribe(posts => {
  //     console.log(posts);
  //   });
  // }

  doMath(){
    console.log(NumberJson)
    const finalArray : Data[] = [];

    for (const iterator of NumberJson) {
      if(iterator.action === 'add'){
        finalArray.push({
          value1 : iterator.value,
          value2 : AddJson.value,
          action : iterator.action,
          result : iterator.value + AddJson.value,
        })
      }
      else{
        finalArray.push({
          value1 : iterator.value,
          value2 : MultiplyJson.value,
          action : iterator.action,
          result : iterator.value * MultiplyJson.value,
        })
      }
    }
    console.log(finalArray)
    return finalArray;


  }
}
