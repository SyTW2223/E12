import { Component, EventEmitter, Output } from '@angular/core';
import { LogInResponse, LogInUser, RegisterResponse, User } from '../../../core/models/user';

import { Observable, take } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectErrorData, selectRegisterData, selectUserData } from 'src/app/state/selectors/user.selector';
import { Router } from '@angular/router';
import { HttpErrorInterface, LogInResponseInterface, RegisterResponseInterface } from 'src/app/core/models/user.interface';
import { HttpErrorResponse } from '@angular/common/http';

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent {
    RegisterResponse$: Observable<RegisterResponseInterface> = new Observable();
    LogInresponse$: Observable<LogInResponseInterface> = new Observable();
    HttpError$: Observable<HttpErrorInterface> = new Observable();
    RegisterResponse: RegisterResponseInterface = new RegisterResponse();
    LogInresponse: LogInResponseInterface = new LogInResponse();
    HttpError: HttpErrorInterface = new HttpErrorResponse({});

    HttpErrored: boolean = false;
    LogInFailed: boolean = false;
    RegisterFailed: boolean = false;
    loged: boolean = false;
    registred: boolean = false;
    msg: string = "";

    constructor (
        private store_: Store<any>,
        private router_: Router
    ){}

    ngOnInit(){
        if(localStorage.getItem('token') != null)
            this.router_.navigate(['profile']);        
    }

    resetFeedBack(){
        this.RegisterFailed = false;
        this.registred = false;
        this.LogInFailed = false;
        this.loged = false;
        this.HttpErrored = false;
        this.msg = "";
    }

    async set_user(){
        await delay(2000);
        this.RegisterResponse$ = this.store_.select(selectRegisterData);
        this.RegisterResponse$.subscribe((res) => {
            this.RegisterResponse = res;
            this.manage_register();
        }).unsubscribe();
        this.http_Error();
    }

    async manage_register(){
        this.resetFeedBack();

        if(this.RegisterResponse.success == true){
            this.msg = this.RegisterResponse.msg
            this.registred = true;
        } else if (this.RegisterResponse.msg != '') {
            this.msg = this.RegisterResponse.msg;
            this.RegisterFailed = true;
        }
    }

    async login_user(){
        await delay(2000);
        this.LogInresponse$ = this.store_.select(selectUserData);
        this.LogInresponse$.subscribe((res) => {
            this.LogInresponse = res;
            this.manage_login();
        }).unsubscribe();
        this.http_Error();
    }

    async manage_login(){
        this.resetFeedBack();

        if(this.LogInresponse.success == true){
            localStorage.setItem('token',this.LogInresponse.token)
            localStorage.setItem('user',JSON.stringify(this.LogInresponse.user))
            this.msg = this.LogInresponse.msg
            this.loged = true;
            await delay(2000);
            this.router_.navigate(['profile']);
        } else if (this.LogInresponse.msg != '') {
            this.msg = this.LogInresponse.msg;
            this.LogInFailed = true;
        }
    }

    async http_Error(){
        this.HttpError$ = this.store_.select(selectErrorData);
        this.HttpError$.subscribe((res) => {
            this.HttpError = res;
            this.manage_http_error();
        }).unsubscribe();
    }

    async manage_http_error(){
        this.resetFeedBack();
        if(this.HttpError.status == 0){
            this.msg = 'Fallo de conexión con el servidor';
            this.HttpErrored = true;
        } else if (this.HttpError.status != 999){
            this.msg = this.HttpError.error.msg
            this.HttpErrored = true;
        } else {
            this.msg = 'Ha ocurrido un fallo';
            this.HttpErrored = true;
        }
    }
}

