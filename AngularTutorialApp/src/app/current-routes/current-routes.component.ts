import { Component, OnInit } from '@angular/core';
import { TransitService } from '../transit-service/transit.service';
import { ProviderOperation } from '../models/provider-operation';
import { Observable, combineLatest } from 'rxjs';
import { containsTree } from '@angular/router/src/url_tree';

@Component({
  selector: 'app-current-routes',
  templateUrl: './current-routes.component.html',
  styleUrls: ['./current-routes.component.scss']
})
export class CurrentRoutesComponent implements OnInit {


  private routesObservable$: Observable<ProviderOperation[]>;
  private providers$: Observable<any>;
  private vehicleDirection$: Observable<any>;
  private vehicleLocation$: Observable<any>;
  public displayVM: any;


  constructor(private tService: TransitService) { }

  ngOnInit() {
    this.routesObservable$ = this.tService.GetRoutes();
    this.providers$ = this.tService.GetProviders();

    combineLatest(this.routesObservable$, this.providers$).subscribe(result => {
      const routes = result[0];
      const providers = result[1];

      const combinedRoutesAndProvider = routes.map(route => {
        const providerId = route.ProviderID;

        const provider = providers.find(x => x.Value === providerId);

        return {
          ProviderName: provider.Text,
          ProviderId: provider.Value,
          RouteDescription: route.Description,
          RouteId: route.Route
        };
      });

      this.displayVM = combinedRoutesAndProvider.sort((current, next) => {
        if (current.ProviderName > next.ProviderName) {
          return 1;
        } else if (current.ProviderName < next.ProviderName) {
          return -1;
        } else if (current.ProviderName === next.ProviderName) {
          if (Number.parseInt(current.RouteId, 10) > Number.parseInt(next.RouteId, 10)) {
            return 1;
          } else if (Number.parseInt(current.RouteId, 10) < Number.parseInt(next.RouteId, 10)) {
            return -1;
          } else if (Number.parseInt(current.RouteId, 10) === Number.parseInt(next.RouteId, 10)) {
            return 0;
          }
        }
      });
    });

  }
}
