import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectErrorData, selectLogInData, selectRegisterData } from 'src/app/state/selectors/user.selector';
import { Router } from '@angular/router';
import { HttpErrorInterface, LogInResponseInterface, RegisterResponseInterface, UserInterface } from 'src/app/core/models/user.interface';

function delay(ms: number){ return new Promise( resolve => setTimeout(resolve, ms) ); }

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent {
    RegisterResponse$: Observable<RegisterResponseInterface> = new Observable();
    LogInresponse$: Observable<LogInResponseInterface> = new Observable();
    HttpError$: Observable<HttpErrorInterface> = new Observable();

    constructor (
        private store_: Store<any>,
        private router_: Router
    ){}

    ngOnInit(){
        if(localStorage.getItem('token') != null)
            this.router_.navigate(['profile']);

        this.RegisterResponse$ = this.store_.select(selectRegisterData);
        this.LogInresponse$ = this.store_.select(selectLogInData);
        this.HttpError$ = this.store_.select(selectErrorData);
    }

    manage_login(token: string, username: string): void{
        localStorage.setItem('token',token)
        localStorage.setItem('username',username)
        this.redirigir();
    }

    async redirigir(){
        await delay(2000);
        this.router_.navigate(['profile']);
    }
}

