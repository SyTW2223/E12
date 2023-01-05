import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, Observable, of } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap, tap } from 'rxjs/operators';
import { UserService } from 'src/app/state/effects/user.service';
import { HttpError } from '../actions/user.actions';

@Injectable()
export class UserEffects {

  logInUser$ = createEffect(() => this.actions$.pipe(
    ofType('[header] Loging In'),
    mergeMap(action => this.userService.login_user(action).pipe(
      map(LogInResponse => ({type: '[header] Loged In', LogInResponse}))
    )),
    catchError(async (Error) => ({ type: '[header] HttpError', Error }))
  ));

  createUser$ = createEffect(() => this.actions$.pipe(
    ofType('[header] Create User'),
    mergeMap(action => this.userService.create_user(action).pipe(
      map(CreateResponse => ({type: '[header] User created', CreateResponse}))
    )),
    catchError(async (Error) => ({ type: '[header] HttpError', Error }))
  ));

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}