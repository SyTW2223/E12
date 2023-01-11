import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserInterface } from 'src/app/core/models/user.interface';
import { LogingOut } from 'src/app/state/actions/user.actions';
import { User } from '../../../core/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  user: UserInterface = new User();

  constructor(
    private store_: Store<any>,
    private router_: Router
  ){}

  ngOnInit(){
    let localuser: string | null =  localStorage.getItem('user');    
    if(typeof(localuser) === 'string'){
      this.user = JSON.parse(localuser);
    } else 
      this.router_.navigate(['home']);
  }

  async logOut(){
    this.store_.dispatch(LogingOut());
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }
}
