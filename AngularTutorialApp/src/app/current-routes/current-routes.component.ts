import { Component, OnInit } from '@angular/core';
import { TransitService } from '../transit-service/transit.service';

@Component({
  selector: 'app-current-routes',
  templateUrl: './current-routes.component.html',
  styleUrls: ['./current-routes.component.scss']
})
export class CurrentRoutesComponent implements OnInit {

  // tslint:disable-next-line:align
  public result: any;

  constructor(private tService: TransitService) { }

  ngOnInit() {
    this.tService.GetProviderOperations().subscribe(result => {
      this.result = result;
    });
  }

}
