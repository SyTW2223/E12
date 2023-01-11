import { createAction, props } from '@ngrx/store';
import { SportInterface } from 'src/app/core/models/sport.interface';

export const LoadingSport = createAction(
    '[sport] Loading'
);

export const SportLoaded = createAction(
    '[sport] Loaded',
    props<{sport: SportInterface}>()
);