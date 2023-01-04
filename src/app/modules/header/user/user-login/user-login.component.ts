import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { LogingIn } from 'src/app/state/actions/user.actions';

import { LogInUser } from '../../../../core/models/user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  user: LogInUser = new LogInUser();

  constructor(private store_: Store<any>) {}

  ngOnInit(){
    
  }

  OnLoginSubmit(){
    this.store_.dispatch(LogingIn({user: this.user}))
    this.user = new LogInUser();
  }
}
