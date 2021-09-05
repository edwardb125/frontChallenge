import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Operation } from './operations.component'
import { GetdataService } from './getdata.service';

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
    service.checkMultiply(numberJson, inputObject, final)
  expect(final.length).toBe(0)
  })
});



