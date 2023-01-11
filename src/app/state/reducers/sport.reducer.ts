import { createReducer, on } from '@ngrx/store';
import { Sport } from 'src/app/core/models/sport';
import { SportStateIterface } from 'src/app/core/models/sport.state';
import { SportLoaded } from '../actions/sport.actions';

export const initialState: SportStateIterface = {sport: new Sport(), API: "", loaded: false}

export const sportReducer = createReducer(
  initialState,
  on(SportLoaded, (state, {sport}) => {
    return { ...state, loaded: true, sport}
  })
);

