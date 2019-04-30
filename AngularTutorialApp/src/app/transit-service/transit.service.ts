import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProviderOperation } from '../models/provider-operation';

@Injectable({
  providedIn: 'root'
})
export class TransitService {
  public getRoutesUrl = 'http://svc.metrotransit.org/NexTrip/Routes';
  public getVehicleLocationsUrl = 'http://svc.metrotransit.org/NexTrip/VehicleLocations/{ROUTE}';
  public getDirectionUrl = 'http://svc.metrotransit.org/NexTrip/Directions/{ROUTE}';
  public getProviderUrl = 'http://svc.metrotransit.org/NexTrip/Providers';

  constructor(private http: HttpClient) { }

  public GetRoutes(): Observable<ProviderOperation[]> {
    return this.http.get<ProviderOperation[]>(this.getRoutesUrl);
  }

  public GetVehicleLocations(route: string): Observable<any> {
    const url = this.getVehicleLocationsUrl.replace('{ROUTE}', route);
    return this.http.get<any>(url);
  }

  public GetDirection(route: string): Observable<any> {
    const url = this.getDirectionUrl.replace('{ROUTE}', route);
    return this.http.get<any>(url);
  }

  public GetProviders(): Observable<any> {
    return this.http.get<any>(this.getProviderUrl);
  }
}
