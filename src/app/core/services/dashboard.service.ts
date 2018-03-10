import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { TestI } from './../interface/test';

@Injectable()
export class DashboardService {
    private _csvData = './assets/data/data.csv';
    constructor (private _http: HttpClient) {
    }
    getCSVData(): Observable<any[]>  {
        return this._http.get( this._csvData, { responseType: 'text' } )
        .catch(this.handleError);
    }
    
    private handleError(err: HttpErrorResponse) {
        return Observable.throw(err.message);
    }
}
