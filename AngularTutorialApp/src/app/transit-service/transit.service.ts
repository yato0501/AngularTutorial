import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProviderOperation } from '../models/provider-operation';

@Injectable({
  providedIn: 'root'
})
export class TransitService {
  private getRoutesUrl = 'http://svc.metrotransit.org/NexTrip/Routes';
  private getVehicleLocations = 'http://svc.metrotransit.org/NexTrip/VehicleLocations/{ROUTE}';

  constructor(private http: HttpClient) { }

  public GetRoutes(): Observable<ProviderOperation[]> {
    return this.http.get<ProviderOperation[]>(this.getRoutesUrl);
  }

  public GetVehicleLocations(route: string): Observable<any> {
    const url = this.getVehicleLocations.replace('{ROUTE}', route);
    return this.http.get<any>(url);
  }
}
