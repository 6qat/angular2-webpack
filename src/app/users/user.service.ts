import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    getUsers() {
        return ['User 1', 'User 2', 'User 3', 'User 4'];
    }
}
