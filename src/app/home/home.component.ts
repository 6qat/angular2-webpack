import {Component, OnInit} from '@angular/core';
import {ApiService} from '../shared/api.service';

@Component({
    selector: 'my-home',
    providers: [ApiService],
    template: require('./home.component.html'),
    styles: [require('./home.component.scss')]
})
export class HomeComponent implements OnInit {

    constructor(private api: ApiService) {
    }

    ngOnInit() {
        console.log('Hello Home');
    }

}
