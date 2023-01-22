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

  FootballMatches$ = createEffect(() => this.actions$.pipe(
    ofType('[football] Loading Matches'),
    mergeMap(action => this.sportService.football_matches(action).pipe(
      map(FootballMatchesResponse => ({type: '[football] Loaded Matches', FootballMatchesResponse}))
    )),
    catchError(async (Error) => ({ type: '[football] HttpError', Error }))
  ));

  FootballStandings$ = createEffect(() => this.actions$.pipe(
    ofType('[football] Loading Standings'),
    mergeMap(action => this.sportService.football_standings(action).pipe(
      map(FootballStandingsResponse => ({type: '[football] Loaded Standings', FootballStandingsResponse}))
    )),
    catchError(async (Error) => ({ type: '[football] HttpError', Error }))
  ));

  constructor(
    private actions$: Actions,
    private sportService: SportService
  ) {}
}