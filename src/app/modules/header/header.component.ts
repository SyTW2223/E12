import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LogInResponseInterface } from 'src/app/core/models/user.interface';
import { selectLogInData } from 'src/app/state/selectors/user.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  LogInresponse$: Observable<LogInResponseInterface> = new Observable();
  username: string = "Mi Usuario";

  constructor( 
    private store_: Store<any>
  ){}

  ngOnInit(){
    let username: string | null =  localStorage.getItem('username');
    if(typeof(username) === 'string')
      this.username = username;
    else{
      this.LogInresponse$ = this.store_.select(selectLogInData);
        this.LogInresponse$.subscribe((res) => {
            this.username = res.username;
      });
    }
  }
}
