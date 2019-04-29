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

  constructor(private tService: TransitService) { }

  ngOnInit() {
    this.routesObservable$ = this.tService.GetRoutes();

    this.routesObservable$.subscribe((routes: ProviderOperation[]) => {
      console.log('do something here');
    });

  }
}
