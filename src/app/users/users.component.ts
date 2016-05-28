import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
    selector: 'my-users',
    template: '<h1>users</h1><ul><li *ngFor="let user of users" >{{ user }}</li></ul>',
    providers: [UserService]

})
export class UsersComponent {

    users: string[];
    constructor(private userService: UserService) {
        this.users = this.userService.getUsers();
    }

}
