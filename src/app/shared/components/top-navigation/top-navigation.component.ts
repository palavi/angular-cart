import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// import { StorageService } from './../../../core';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from 'rxjs/observable/forkJoin';

import 'rxjs/add/operator/filter';
import * as _ from 'lodash';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: []
})
export class TopNavigationComponent implements OnInit {

  navItems = [];
  userPermissions: any;
  dashboardType = 'home';
  errorMessage: string;
  constructor(private _http: HttpClient,
    private router: Router) {
  }

  ngOnInit(): void {
  }
}
