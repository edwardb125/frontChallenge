import { of, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Operation } from './operations.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { GetdataService } from './getdata.service';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';


describe('Operation', () => {
    let component: Operation;
    let fixture : ComponentFixture<Operation>;
    let userService : GetdataService;
    let snack : MatSnackBar;

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
        snack = fixture.debugElement.injector.get(MatSnackBar);
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
        userService.fetchPosts = () => {
            return of([{action:'add', value1:2, value2: 4, result:6},{action:'add', value1:2, value2: 5, result:7}]);
        }
        userService.doMath = (post) => {
            return post;
        }
        component.ngOnInit();
         fixture.detectChanges();
        const bannerDe : DebugElement = fixture.debugElement;
        const paragraphDe = bannerDe.queryAll(By.css('.head'));
        expect(paragraphDe.length).toBe(2);
      })


      it('this should throw error', () => {
        userService.fetchPosts = () => {
            return throwError('Server Error');
        }
        component.ngOnInit();
        expect(snack.open).toHaveBeenCalledWith('Server Error','close');
      })

})