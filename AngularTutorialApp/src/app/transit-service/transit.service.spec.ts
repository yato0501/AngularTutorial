import { TestBed } from '@angular/core/testing';

import { TransitService } from './transit.service';
import { HttpClient } from '@angular/common/http';

describe('TransitService', () => {

  let mockHttpClient;
  beforeEach(() => {
    mockHttpClient = jasmine.createSpyObj('httpClient', ['get']);
    TestBed.configureTestingModule({providers: [
      { provide: HttpClient, useValue: mockHttpClient }
    ]});
  });

  it('should be created', () => {
    const service: TransitService = TestBed.get(TransitService);
    expect(service).toBeTruthy();
  });
});
