import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { CustomersComponent } from './customer/customer-list.component';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [CustomersComponent],
    providers: [HTTP_PROVIDERS]
})
export class AppComponent implements OnInit {
    pageTitle: string = 'Angular 2 Practice Application';
    name: string = 'Uvaraj';

    ngOnInit(): void {
    }

    onClick() {
        this.name = this.name === 'Uvaraj' ? 'Hero' : 'Uvaraj';
    }
}
