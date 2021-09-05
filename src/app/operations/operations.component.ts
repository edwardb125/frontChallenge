import { GetdataService } from './getdata.service';
import { Component,OnInit} from '@angular/core';
import { Data } from './operations.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-operation',
  templateUrl: 'operations.component.html',
  styleUrls: ['operations.component.css'],
})
export class Operation implements OnInit {
  finalArray : Data[] = [];
  

  constructor(private oprService: GetdataService, private _snackBar: MatSnackBar){
  }

  ngOnInit(){
    this.oprService.fetchPosts().subscribe(
      posts => {
      this.finalArray = this.oprService.doMath(posts);
    },errorHandling =>{
      this._snackBar.open('Server Error','close');
    } );
  }

}
