import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetProviderComponent } from './get-provider.component';
import { Component, Output, EventEmitter } from '@angular/core';
import { TransitService } from '../transit-service/transit.service';

describe('GetProviderComponent', () => {
  let component: GetProviderComponent;
  let fixture: ComponentFixture<GetProviderComponent>;
  let mockTService;

  // you must include a mock of all the components that you are using in the actual component
  @Component({
    selector: 'app-button',
    template: '<div></div>'
  })
   class MockButtonComponent {
     @Output() btnClickEvt: EventEmitter<any> = new EventEmitter<any>();
   }

  beforeEach(async(() => {

    mockTService = jasmine.createSpyObj('TransitService', ['GetRoutes', 'GetProviders']);
    TestBed.configureTestingModule({
      declarations: [ GetProviderComponent, MockButtonComponent ],
      providers: [{ provide: TransitService, useValue: mockTService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
