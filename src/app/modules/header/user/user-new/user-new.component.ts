import { Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { UserRegisterInterface } from 'src/app/core/models/user.interface';
import { CreateUser } from 'src/app/state/actions/user.actions';

import { UserDB } from '../../../../core/models/user'

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html'
})
export class UserNewComponent {
  newUser: UserRegisterInterface = new UserDB();

  constructor(private store_: Store<any>){}

  ngOnInit(){}

  create(){
    this.store_.dispatch(CreateUser({user: this.newUser}))
    this.newUser = new UserDB();
  }

}