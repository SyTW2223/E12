import { createSelector } from '@ngrx/store';
import { SportStateIterface } from 'src/app/core/models/sport.state';
import { AppState } from '../app.state';

export const selectSport = (state: AppState) => state.sportData;

export const selectSportData = createSelector(
    selectSport,
    (state: SportStateIterface) => state.sport
);