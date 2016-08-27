import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { ICustomer } from './customer';

import { CustomerService } from './customer.service';

@Component({
    moduleId: module.id,
    selector: 'app-customers',
    templateUrl: 'customer-list.component.html',
    providers: [CustomerService]
})
export class CustomersComponent implements OnInit {
    customers: Observable<ICustomer[]>;
    constructor(private _customerService: CustomerService) { }

    ngOnInit() {
        this.customers = this._customerService.getCustomers();
    }
}
