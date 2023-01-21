import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, exhaustMap, tap } from 'rxjs/operators';
import { SportService } from '../service/sport.service';

@Injectable()
export class SportEffects {

  FootballLoad$ = createEffect(() => this.actions$.pipe(
    ofType('[football] Loading'),
    mergeMap(() => this.sportService.football_leagues().pipe(
      map(SportResponse => ({type: '[football] Loaded', SportResponse}))
    )),
    catchError(async (Error) => ({ type: '[football] HttpError', Error }))
  ));

  constructor(
    private actions$: Actions,
    private sportService: SportService
  ) {}
}