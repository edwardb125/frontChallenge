import { Injectable } from '@angular/core';
import { Data } from './operations.model';
import { HttpClient } from '@angular/common/http';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class GetdataService {
  
  constructor(private http: HttpClient) { }

  fetchPosts() {
    return this.http.get('../../assets/Numbers.json').pipe(
      mergeMap(number => {
        return this.http.get('../../assets/Add.json').pipe(
          catchError(() => {
            return of({value: 'Missing Data!'})
          })
          ,map(add => {
            return {addJson: add, NumberJson: number}
          }),
          mergeMap((data : any) =>{
            return this.http.get('../../assets/Multiply.json').pipe(
              catchError(() => {
                return of({value: 'Missing Data!'})
              })
              ,map(multipy => {
                return {MultiplyJson: multipy, ...data}
              })
            )
          })
        )
      }
    ));
  }         
             
  doMath(obj: any){
    const finalArray : Data[] = [];
    for (const iterator of obj.NumberJson) {
      this.checkAdd(iterator, obj, finalArray);
      this.checkMultiply(iterator, obj, finalArray);
    }
    return finalArray;
  }


  checkMultiply(iterator : any, obj : any, finalArray : Data[]){
    if(iterator.action === 'multiply'){
      finalArray.push({
        value1 : iterator.value,
        value2 : obj.MultiplyJson.value,
        action : iterator.action,
        result : iterator.value * obj.MultiplyJson.value,
      })
    }
  }


  checkAdd(iterator : any, obj : any, finalArray : any[]){
    if(iterator.action === 'add'){
      finalArray.push({
        value1 : iterator.value,
        value2 : obj.addJson.value,
        action : iterator.action,
        result : iterator.value + obj.addJson.value,
      })
    }
  }
}
