import { createSelector } from '@ngrx/store';
import { BasketStateInterface, FootballStateInterface, SportStateIterface } from 'src/app/core/models/sport.state';
import { AppState } from '../app.state';

export const selectSport = (state: AppState) => state.sportData;
export const selectFootball = (state: AppState) => state.footballData;
export const selectBasket = (state: AppState) => state.basketData;

export const selectSportData = createSelector(
    selectSport,
    (state: SportStateIterface) => state.sport
);

export const selectFootballMatches = createSelector(
    selectFootball,
    (state: FootballStateInterface) => state.matches
);

export const selectFootballStandings = createSelector(
    selectFootball,
    (state: FootballStateInterface) => state.standings
);

export const selectBasketMatches = createSelector(
    selectBasket,
    (state: BasketStateInterface) => state.matches
);

export const selectBasketStandings = createSelector(
    selectBasket,
    (state: BasketStateInterface) => state.standings
);