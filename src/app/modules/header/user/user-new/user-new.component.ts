import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserDBInterface } from 'src/app/core/models/user.interface';
import { CreateUser } from 'src/app/state/actions/user.actions';

import { UserDB } from '../../../../core/models/user'

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent {
  newUser: UserDBInterface = new UserDB();

  constructor(private store_: Store<any>){}

  ngOnInit(){}

  create(){
    this.store_.dispatch(CreateUser({user: this.newUser}))
    this.newUser = new UserDB();
  }

}
