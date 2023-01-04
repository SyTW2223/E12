import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LogInResponseInterface, UserInterface } from './core/models/user.interface';
import { User } from './core/models/user';
import { selectUserData } from './state/selectors/user.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'infosports';
  user$: Observable<LogInResponseInterface> = new Observable();
  user: UserInterface = new User();
  
  constructor(
    private store_: Store<any>,
    private router_: Router
  ){}

  ngOnInit(){
    this.user$ = this.store_.select(selectUserData);
    this.user$.subscribe((res) => {
      this.user = res.user;
    });
  }
}
