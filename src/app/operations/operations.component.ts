import {Component,OnInit} from '@angular/core';
import AddJson from '../../assets/Add.json';
import MultiplyJson from '../../assets/Multiply.json';
import NumberJson from '../../assets/Numbers.json';

@Component({
  selector: 'app-operation',
  templateUrl: 'operations.component.html',
  styleUrls: ['operations.component.css'],
})
export class Operation implements OnInit {
  // let num:temp;
  
  addNum: number = 0;
  multiplyNum: number = 0;
  num: number = 0;
  itteration: number = 0;
  fakeArray = new Array(6);
  temp = new Array(6);
  final = new Array(6);
  constructor(){
    console.log(AddJson.value);
    console.log(MultiplyJson);
    console.log(NumberJson);
  }

  ngOnInit(){
    for(let i = 0; i < NumberJson.length ; i++){
      if(NumberJson[i].action === 'add'){
        this.final[i] = NumberJson[i].value + AddJson.value;
      }
      else{
        this.final[i] = NumberJson[i].value * MultiplyJson.value;
      }
    }
    this.temp = NumberJson;
    this.itteration = NumberJson.length;
    this.addNum = AddJson.value;
    this.multiplyNum = MultiplyJson.value;
  }

  doMath(a: number, b:number) {
    return a+b;
  }

}
