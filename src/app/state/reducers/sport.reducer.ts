import { createReducer, on } from '@ngrx/store';
import { SportStateIterface } from 'src/app/core/models/sport.state';
import { SportLoaded } from '../actions/sport.actions';

export const initialState: SportStateIterface = {sport: "", API: "", loaded: false}

export const sportReducer = createReducer(
  initialState,
  on(SportLoaded, (state) => {
    return { ...state, loaded: true }
  })
);

