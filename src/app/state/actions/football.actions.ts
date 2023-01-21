import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { LeagueInterface, SportInterface } from 'src/app/core/models/sport.interface';

export const LoadingFootball = createAction(
    '[football] Loading'
);

export const FootballLoaded = createAction(
    '[football] Loaded',
    props<{SportResponse: LeagueInterface[]}>()
);

export const HttpError = createAction(
    '[football] Http Error',
    props<{Error: HttpErrorResponse}>()
);