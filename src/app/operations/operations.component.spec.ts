import { of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Operation } from './operations.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { GetdataService } from './getdata.service';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
// import { MatCardModule} from '@angular/material/card';


describe('Operation', () => {
    let component: Operation;
    let fixture : ComponentFixture<Operation>;
    let userService : GetdataService
    beforeEach(() => {
        const SpyObject = jasmine.createSpyObj('GetdataService', ['doMath','fetchPosts'])
        const SpyMatSnackBar = jasmine.createSpyObj('MatSnackBar',['open'])

        TestBed.configureTestingModule({
            declarations : [
            Operation
        ],
        // imports:[MatCardModule],
        schemas:[CUSTOM_ELEMENTS_SCHEMA],
        providers:[
            {provide: MatSnackBar, useValue: SpyMatSnackBar},
            {provide: GetdataService, useValue: SpyObject}
        ]}).compileComponents();

        fixture = TestBed.createComponent(Operation);
        userService = fixture.debugElement.injector.get(GetdataService);
        userService.fetchPosts = () => {
            return of([]);
        }
        userService.doMath = (post) => {
            return [];
        }
        component = fixture.componentInstance;
        fixture.detectChanges();
      });

      it('should have <p> with "add"', () => {
          component.finalArray=[{action:'add', value1:2, value2: 4, result:6},{action:'add', value1:2, value2: 5, result:7}];
          fixture.detectChanges();

        const bannerDe : DebugElement = fixture.debugElement;
        const paragraphDe = bannerDe.queryAll(By.css('.head'));
        expect(paragraphDe.length).toBe(2);
        
      })

})