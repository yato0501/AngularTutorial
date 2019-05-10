import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentRoutesComponent } from './current-routes.component';
import { TransitService } from '../transit-service/transit.service';
import { of } from 'rxjs';
import { Output, Component, EventEmitter } from '@angular/core';
import { ProviderOperation } from '../models/provider-operation';

describe('CurrentRoutesComponent', () => {
  let component: CurrentRoutesComponent;
  let fixture: ComponentFixture<CurrentRoutesComponent>;
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
    // creating the mock object
    mockTService = jasmine.createSpyObj('TransitService', ['GetRoutes', 'GetProviders']);

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
    expect(component.displayVM).toBe(null);
  });

  it('should get a 0 count displayVM', () => {
    mockTService.GetRoutes.and.returnValue(of([]));
    mockTService.GetProviders.and.returnValue(of([]));

    component.displayRoute();

    expect(component.displayVM.length).toBe(0);
  });

  it('should sort the displayVM by provider Description follow by  bus Route', () => {
    const routes: ProviderOperation[] =  [
      {Description: 'b', ProviderID: '11', Route: '777'},
      {Description: 'a', ProviderID: '10', Route: '7'},
      {Description: 'c', ProviderID: '11', Route: '77'}
    ];

    const providers: any[] = [
      {Text: 'numba 10', Value: '10'},
      {Text: 'numba 11', Value: '11'}
    ];


    mockTService.GetRoutes.and.returnValue(of(routes));
    mockTService.GetProviders.and.returnValue(of(providers));

    component.displayRoute();

    const result = component.displayVM;

    expect(result[0].ProviderName).toEqual(providers[0].Text);
    expect(result[0].RouteId).toEqual(routes[1].Route);


    expect(mockTService.GetRoutes).toHaveBeenCalled();
  });

});
