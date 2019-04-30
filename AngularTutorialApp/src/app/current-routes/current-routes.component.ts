import { Component, OnInit } from '@angular/core';
import { TransitService } from '../transit-service/transit.service';
import { ProviderOperation } from '../models/provider-operation';
import { Observable, combineLatest } from 'rxjs';

@Component({
  selector: 'app-current-routes',
  templateUrl: './current-routes.component.html',
  styleUrls: ['./current-routes.component.scss']
})
export class CurrentRoutesComponent implements OnInit {


  public routesObservable$: Observable<ProviderOperation[]>;
  public providers$: Observable<any>;
  public vehicleDirection$: Observable<any>;
  public vehicleLocation$: Observable<any>;

  constructor(private tService: TransitService) { }

  ngOnInit() {
    this.routesObservable$ = this.tService.GetRoutes();
    this.providers$ = this.tService.GetProviders();

    combineLatest(this.routesObservable$, this.providers$).subscribe(result => {
      let routes = result[0];
      let providers = result[1];
    });



  }
}
