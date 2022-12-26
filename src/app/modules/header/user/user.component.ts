import { Component, EventEmitter, Output } from '@angular/core';
import { LogInResponse, LogInUser, User } from './user';

import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
    @Output() updateHeader = new EventEmitter<LogInResponse>();

    constructor (
        private userService_: UserService,
    ){}

    ngOnInit(){
    
    }

    set_user(user: User){
        this.userService_.create(user).subscribe();
    }

    login_user(user: LogInUser){
        this.userService_.login_user(user).subscribe({
            next: (res) => this.updateHeader.emit(res),
            error: (error) => this.updateHeader.emit(new LogInResponse(false))
        });
    }
}

