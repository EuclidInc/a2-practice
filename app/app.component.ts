import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    pageTitle: string = 'Angular 2 Practice Application';
    name: string = 'Uvaraj';

    onClick() {
        this.name = this.name === 'Uvaraj' ? 'Hero' : 'Uvaraj';
    }
}
