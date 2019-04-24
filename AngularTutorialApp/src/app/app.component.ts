import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { TransitService } from './transit-service/transit.service';
import { DebugRenderer2 } from '@angular/core/src/view/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngularTutorialApp';
  public result: any;

  constructor(private tService: TransitService) {
  }

  ngOnInit() {
    this.tService.GetProviderOperations().subscribe(result => {
      this.result = result;

    });
  }
}
