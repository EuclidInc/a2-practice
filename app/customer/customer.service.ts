import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ICustomer } from './customer';

@Injectable()
export class CustomerService {

    constructor(private _http: Http) { }

    getCustomers(): Observable<ICustomer[]> {
        return this._http.get('app/customer/customer-list.json')
            .map((response: Response) => response.json());
    }
}