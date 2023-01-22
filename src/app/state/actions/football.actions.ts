import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { FootballMatchInterface, FootballStandingsInterface } from 'src/app/core/models/football.interface';
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

export const LoadingFootballMatches = createAction(
    '[football] Loading Matches',
    props<{League: string}>()
);

export const LoadedFootballMatches = createAction(
    '[football] Loaded Matches',
    props<{FootballMatchesResponse: FootballMatchInterface[]}>()
);

export const LoadingFootballStandings = createAction(
    '[football] Loading Standings',
    props<{League: string}>()
);

export const LoadedFootballStandings = createAction(
    '[football] Loaded Standings',
    props<{FootballStandingsResponse: FootballStandingsInterface[]}>()
);