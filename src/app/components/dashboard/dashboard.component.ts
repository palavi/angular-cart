import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../../core';

import { Observable } from 'rxjs/Observable';
import { forkJoin } from 'rxjs/observable/forkJoin';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import * as d3 from 'd3';
import * as _ from 'lodash';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit {
  errorMessage: any;
  csvData: any;
  constructor(
    private _dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.getCSVData();
  }
  
  getCSVData() {
    forkJoin([this._dashboardService.getCSVData()
  ])
    .subscribe(response => {
      this.csvData = response[0].toString();

    });
  }
}