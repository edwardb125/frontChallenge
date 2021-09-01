import { GetdataService } from './getdata.service';
import { Component,OnInit} from '@angular/core';
import { Data } from './operations.model'

@Component({
  selector: 'app-operation',
  templateUrl: 'operations.component.html',
  styleUrls: ['operations.component.css'],
})
export class Operation implements OnInit {
  finalArray : Data[] = [];

  constructor(private oprService: GetdataService){
  }

  ngOnInit(){
    this.finalArray = this.oprService.doMath()
  }

}
