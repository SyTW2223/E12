import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { observable, Observable } from 'rxjs';
import { Loging } from 'src/app/state/actions/user.actions';
import { selectUserStatus } from 'src/app/state/selectors/user.selector';
import { LogInUser } from '../user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  @Output() LogInUserEvent = new EventEmitter();
  loged$: Observable<boolean> = new Observable();

  user: LogInUser = new LogInUser();

  constructor(private store_: Store<any>) {}

  ngOnInit(){
    this.loged$ = this.store_.select(selectUserStatus);
  }

  OnLoginSubmit(){
    this.loged$ = this.store_.select(selectUserStatus);
    this.store_.dispatch(Loging())
    this.LogInUserEvent.emit(this.user);
  }
}
