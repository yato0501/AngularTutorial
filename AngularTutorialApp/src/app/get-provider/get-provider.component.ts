import { Component, OnInit } from '@angular/core';
import { TransitService } from '../transit-service/transit.service';
import { Observable } from 'rxjs';
import { Provider } from '../models/provider';

@Component({
  selector: 'app-get-provider',
  templateUrl: './get-provider.component.html',
  styleUrls: ['./get-provider.component.scss']
})
export class GetProviderComponent implements OnInit {

  private providers$: Observable<Provider[]>;

  // CONSTRUCTOR
  constructor(private tService: TransitService) {
  }

  ngOnInit() {
  }

  public displayProvider() {
    this.providers$ = this.tService.GetProviders();
  }

}
