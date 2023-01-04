import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap, tap } from 'rxjs/operators';
import { UserService } from 'src/app/state/effects/user.service';

@Injectable()
export class UserEffects {

  logInUser$ = createEffect(() => this.actions$.pipe(
    ofType('[header] Loging In'),
    mergeMap(action => this.userService.login_user(action).pipe(
      map(LogInResponse => ({type: '[header] Loged In', LogInResponse}))
    ))
  ));

  createUser$ = createEffect(() => this.actions$.pipe(
    ofType('[header] Loging In'),
    mergeMap(action => this.userService.login_user(action).pipe(
      map(LogInResponse => ({type: '[header] Loged In', LogInResponse}))
    ))
  ));

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}