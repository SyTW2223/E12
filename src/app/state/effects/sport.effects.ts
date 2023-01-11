import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, Observable, of } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap, tap } from 'rxjs/operators';
import { UserService } from 'src/app/state/service/user.service';

@Injectable()
export class SportEffects {

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
      map(CreateResponse => ({type: '[header] Created User', CreateResponse}))
    )),
    catchError(async (Error) => ({ type: '[header] HttpError', Error }))
  ));

  LogOut$ = createEffect(() => this.actions$.pipe(
    ofType('[header] Loging Out'),
    map(() => ({type: '[header] Loged Out'}))
  ));

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}