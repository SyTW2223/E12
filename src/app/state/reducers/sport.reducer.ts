import { HttpErrorResponse } from '@angular/common/http';
import { createReducer, on } from '@ngrx/store';
import { Sport } from 'src/app/core/models/sport';
import { SportStateIterface } from 'src/app/core/models/sport.state';
import { FootballLoaded, HttpError } from '../actions/football.actions';

export const initialState: SportStateIterface = {sport: [], loaded: false, HttpError: new HttpErrorResponse({status: 999})}

export const sportReducer = createReducer(
  initialState,
  on(FootballLoaded, (state, {SportResponse}) => {
    return { ...state, loaded: true, sport: SportResponse}
  }),
  on(HttpError, (state, {Error}) => {
    return { ...state, HttpError: Error}  
  })
);

