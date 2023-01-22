import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { BasketMatchInterface, BasketStandingsInterface } from 'src/app/core/models/basket.interface';
import { LeagueInterface, SportInterface } from 'src/app/core/models/sport.interface';

export const LoadingBasket = createAction(
    '[Basket] Loading'
);

export const BasketLoaded = createAction(
    '[Basket] Loaded',
    props<{SportResponse: LeagueInterface[]}>()
);

export const HttpError = createAction(
    '[Basket] Http Error',
    props<{Error: HttpErrorResponse}>()
);

export const LoadingBasketMatches = createAction(
    '[Basket] Loading Matches',
    props<{League: string}>()
);

export const LoadedBasketMatches = createAction(
    '[Basket] Loaded Matches',
    props<{BasketMatchesResponse: BasketMatchInterface[]}>()
);

export const LoadingBasketStandings = createAction(
    '[Basket] Loading Standings',
    props<{League: string}>()
);

export const LoadedBasketStandings = createAction(
    '[Basket] Loaded Standings',
    props<{BasketStandingsResponse: BasketStandingsInterface[]}>()
);