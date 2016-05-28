import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {ApiService} from './shared';
import {HomeComponent} from './home';
import {AboutComponent} from './about';

import '../style/uikit.less';
import '../style/app.scss';
import {UsersComponent} from './users/users.component';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'my-app', // <my-app></my-app>
    providers: [ApiService],
    directives: [...ROUTER_DIRECTIVES, UsersComponent],
    template: require('./app.component.html'),
    styles: [require('./app.component.scss')],
})
@RouteConfig([
    {path: '/', component: HomeComponent, name: 'Home'},
    {path: '/Users', component: UsersComponent, name: 'Users'},
    {path: '/About', component: AboutComponent, name: 'About'}
])
export class AppComponent {
    url = 'https://github.com/preboot/angular2-webpack';

    constructor(private api: ApiService) {
    }
}
