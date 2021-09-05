import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { GetdataService } from './getdata.service';
import { of, throwError } from 'rxjs';

describe('GetdataService', () => {
  let service: GetdataService;
  let http: jasmine.SpyObj<HttpClient>;


  beforeEach(() => {
    const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({providers : [
      GetdataService,
      {provide : HttpClient, useValue: httpClientSpy}
    ]});
    service = TestBed.inject(GetdataService);
    http = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('this function should return an observable',
  (done : DoneFn) => {
    http.get.withArgs('../../assets/Multiply.json').and.returnValue(of('multiplyValue'));
    http.get.withArgs('../../assets/Add.json').and.returnValue(of('addValue'));
    http.get.withArgs('../../assets/Adds.json').and.throwError('Missage Data!');
    http.get.withArgs('../../assets/Numbers.json').and.returnValue(of('numberValue'));
    service.fetchPosts().subscribe(
      value => {
        const finalValue = {MultiplyJson: 'multiplyValue', addJson: 'addValue', NumberJson: 'numberValue'};
        expect(value).toEqual(finalValue);
        done();
      }
    )
  })

  it('this function should push an onject that result value added by two number', () => {
    const final : any[] = [];
    const numberJson = {value: 5, action : 'add'};
    const inputObject = {
      addJson:{
        value: 6
      }
    }
    service.checkAdd(numberJson, inputObject, final)
  expect(final[0].result).toBe(11)
  })

  it('this function should not increase final array lenght ', () => {
    const final : any[] = [];
    const numberJson = {value: 5, action : 'multiply'};
    const inputObject = {
      addJson:{
        value: 6
      }
    }
    service.checkAdd(numberJson, inputObject, final)
  expect(final.length).toBe(0);
  })

  it('this function should push an onject that result value multiply by two number', () => {
    const final : any[] = [];
    const numberJson = {value: 5, action : 'multiply'};
    const inputObject = {
      MultiplyJson:{
        value: 6
      }
    }
    service.checkMultiply(numberJson, inputObject, final)
  expect(final[0].result).toBe(30)
  })
  
  it('this function should not push an onject that result value multiply by two number', () => {
    const final : any[] = [];
    const numberJson = {value: 5, action : 'add'};
    const inputObject = {
      MultiplyJson:{
        value: 6
      }
    }
    service.checkMultiply(numberJson, inputObject, final);
  expect(final.length).toBe(0);
  })

  it('this function should return an object that contain add two value', () => {
    const inputObject = {
      NumberJson: [{value:3, action:'add'}],
      addJson : {
        value : 6
      }
    }
    const result = service.doMath(inputObject);
    expect(result[0].result).toBe(9);
  })

  it('this function should return an object that contain multiply two value', () => {
    const inputObject = {
      NumberJson: [{value:3, action:'multiply'}],
      MultiplyJson : {
        value : 6
      }
    }
    const result = service.doMath(inputObject);
    expect(result[0].result).toBe(18);
  })

});



