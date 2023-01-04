import { Component, EventEmitter, Output } from '@angular/core';
import { LogInResponse, LogInUser, User } from '../../../core/models/user';

import { Observable, take } from 'rxjs';
import { Store } from '@ngrx/store';
import { LogingIn, LogedIn } from 'src/app/state/actions/user.actions';
import { selectUserData } from 'src/app/state/selectors/user.selector';
import { Router } from '@angular/router';
import { LogInResponseInterface } from 'src/app/core/models/user.interface';

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
    response$: Observable<LogInResponseInterface> = new Observable();
    response: LogInResponseInterface = new LogInResponse();
    failed: boolean = false;
    loged: boolean = false;
    msg: string = "";

    constructor (
        private store_: Store<any>,
        private router_: Router
    ){}

    ngOnInit(){
        this.response$ = this.store_.select(selectUserData);
        this.response$.subscribe((res) => {
            this.response = res;
            this.login_user();
        });
    }

    set_user(user: User){
        // this.userService_.create(user).subscribe();
    }

    async login_user(){
        this.failed = false;
        this.loged = false;
        if(this.response.success == true){
            this.msg = this.response.msg
            this.loged = true;
            await delay(2000);
            this.router_.navigate(['profile']);
        } else if (this.response.msg != '') {
            this.msg = this.response.msg;
            this.failed = true;
        }
    }
}

