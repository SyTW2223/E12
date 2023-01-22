import { HttpErrorResponse } from '@angular/common/http';
import { createReducer, on } from '@ngrx/store';
import { Sport } from 'src/app/core/models/sport';
import { BasketStateInterface, FootballStateInterface, SportStateIterface } from 'src/app/core/models/sport.state';
import { FootballLoaded, HttpError, LoadedFootballMatches, LoadedFootballStandings } from '../actions/football.actions';

export const initialSportState: SportStateIterface = {
  sport: [],
  loaded: false, 
  HttpError: new HttpErrorResponse({status: 999})
}

export const sportReducer = createReducer(
  initialSportState,
  on(FootballLoaded, (state, {SportResponse}) => {
    return { ...state, loaded: true, sport: SportResponse}
  }),
  on(HttpError, (state, {Error}) => {
    return { ...state, HttpError: Error}  
  })
);

export const initialFootballState: FootballStateInterface = {
  matches: [],
  standings: [], 
  HttpError: new HttpErrorResponse({status: 999})
}

export const footballReducer = createReducer(
  initialFootballState,
  on(LoadedFootballMatches, (state, {FootballMatchesResponse}) => {
    return { ...state, loaded: true, matches: FootballMatchesResponse}
  }),
  on(LoadedFootballStandings, (state, {FootballStandingsResponse}) => {
    return { ...state, loaded: true, standings: FootballStandingsResponse}
  })
);

export const initialBasketState: BasketStateInterface = initialFootballState

export const basketReducer = createReducer(
  initialBasketState,
  // on(LoadedFootballMatches, (state, {FootballMatchesResponse}) => {
  //   return { ...state, loaded: true, matches: FootballMatchesResponse}
  // }),
  // on(LoadedFootballStandings, (state, {FootballStandingsResponse}) => {
  //   return { ...state, loaded: true, standings: FootballStandingsResponse}
  // })
);