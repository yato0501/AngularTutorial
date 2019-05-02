import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentRoutesComponent } from './current-routes.component';
import { TransitService } from '../transit-service/transit.service';
import { of } from 'rxjs';
import { Output, Component, EventEmitter } from '@angular/core';

describe('CurrentRoutesComponent', () => {
  let component: CurrentRoutesComponent;
  let fixture: ComponentFixture<CurrentRoutesComponent>;
  let mockTService;

  @Component({
    selector: 'app-button',
    template: '<div></div>'
  })
   class MockButtonComponent {
    @Output() btnClickEvt: EventEmitter<any> = new EventEmitter<any>();
   }

  beforeEach(async(() => {
    // debugger;
    // creating the mock object
    mockTService = jasmine.createSpyObj('TransitService', ['GetRoutes', 'GetProviders']);

    // mocking a call

    // configuring the component we are testing and injecting the required stuff.
    TestBed.configureTestingModule({
      declarations: [ CurrentRoutesComponent, MockButtonComponent ],
      providers: [{ provide: TransitService, useValue: mockTService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {

    // this creates the "component" that we are testing.
    fixture = TestBed.createComponent(CurrentRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sort values', () => {
    mockTService.GetRoutes.and.returnValue(of([]));
    mockTService.GetProviders.and.returnValue(of([]));

    component.displayRoute();

    expect(component.displayVM).toBeTruthy();
  });

});
