import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransitService {
  private getProviderOperationsUrl = 'http://svc.metrotransit.org/NexTrip/Routes';

  constructor(private http: HttpClient) { }

  public GetProviderOperations(): Observable<any> {
    return this.http.get<any>(this.getProviderOperationsUrl);
  }
}
