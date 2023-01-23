import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UserService } from 'src/app/state/service/user.service';

@Injectable()
export class UserEffects {

  logInUser$ = createEffect(() => this.actions$.pipe(
    ofType('[header] Loging In'),
    mergeMap(action => this.userService.login_user(action).pipe(
      map(LogInResponse => ({type: '[header] Loged In', LogInResponse}))
    )),
    catchError(async (Error) => ({ type: '[header] Http Error', Error }))
  ));

  createUser$ = createEffect(() => this.actions$.pipe(
    ofType('[header] Create User'),
    mergeMap(action => this.userService.create_user(action).pipe(
      map(CreationResponse => ({type: '[header] Created User', CreationResponse}))
    )),
    catchError(async (Error) => ({ type: '[header] Http Error', Error }))
  ));

  UserProfile$ = createEffect(() => this.actions$.pipe(
    ofType('[header] Load Profile'),
    mergeMap(action => this.userService.profile(action).pipe(
      map(ProfileResponse => ({type: '[header] Loaded Profile', ProfileResponse}))
    )),
    catchError(async (Error) => ({ type: '[header] Http Error', Error }))
  ));

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}