import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LogInResponseInterface, UserInterface } from 'src/app/core/models/user.interface';
import { selectUserData } from 'src/app/state/selectors/user.selector';
import { User } from '../../../core/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  loged$: Observable<boolean> = new Observable();
  user$: Observable<LogInResponseInterface> = new Observable();
  user: UserInterface = new User();

  constructor(
    private store_: Store<any>,
    private router_: Router
  ){}

  ngOnInit(){
    this.user$ = this.store_.select(selectUserData);
    this.user$.subscribe((res) => {
      if(res.success == false){ 
        this.router_.navigate(['user']);
      }
      this.user = res.user;
    });
  }

  logOut(){
    
    this.router_.navigate(['user']);
  }
}
