import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LogInResponse } from 'src/app/core/models/user';
import { LogInResponseInterface } from 'src/app/core/models/user.interface';
import { selectUserData } from 'src/app/state/selectors/user.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  LogInresponse$: Observable<LogInResponseInterface> = new Observable();
  username: string = "Mi Usuario";

  constructor( 
    private store_: Store<any>,
    private router_: Router 
  ){}

  ngOnInit(){
    let user: string | null =  localStorage.getItem('user');
    if(typeof(user) === 'string')
      this.username = JSON.parse(user).username;
    else{
      this.LogInresponse$ = this.store_.select(selectUserData);
        this.LogInresponse$.subscribe((res) => {
            this.username = res.user.username;
      });
    }

    
  }
}
