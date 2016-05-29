import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service';

@Component({
    selector: 'my-users',
    template: '<h1>Users</h1><ul><li *ngFor="let user of users" >{{ user }}</li></ul>',
    providers: [UserService]

})
export class UsersComponent implements OnInit {

    users: string[];

    constructor(private userService: UserService) {
        this.users = this.userService.getUsers();
    }

    ngOnInit() {
        console.log('Hello Users');
    }

}
