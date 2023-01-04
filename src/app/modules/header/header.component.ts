import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LogInResponseInterface } from 'src/app/core/models/user.interface';
import { selectUserData } from 'src/app/state/selectors/user.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  user$: Observable<LogInResponseInterface> = new Observable();
  username: string = "";

  constructor(
    private store_: Store<any>,
    private router_: Router
  ){}

  // editUser(user: User){
  //   this.userService_.update([user.username,user])
  // }

  ngOnInit(){
    this.user$ = this.store_.select(selectUserData);
    this.user$.subscribe((res) => {
      this.username = res.user.username;
    });
  }

  goHome(){
    // this.router_.navigate(['home'])
  }

}
