import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProfileResponseInterface, UserInterface } from 'src/app/core/models/user.interface';
import { LoadProfile } from 'src/app/state/actions/user.actions';
import { selectProfileData } from 'src/app/state/selectors/user.selector';
import { User } from '../../../core/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  ProfileResponse$: Observable<ProfileResponseInterface> = new Observable();

  constructor(
    private store_: Store<any>,
    private router_: Router
  ){}

  ngOnInit(){   
    let token: string | null = localStorage.getItem('token')
    if(token)
      this.store_.dispatch(LoadProfile({token}));
    else
      this.router_.navigate(['home']);
    this.ProfileResponse$ = this.store_.select(selectProfileData);
  }

  async logOut(){
    localStorage.removeItem('username')
    localStorage.removeItem('token')
  }
}
