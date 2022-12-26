import { createAction, props } from '@ngrx/store';
import { UserDBInterface } from 'src/app/core/models/user.interface';

export const LoadingSport = createAction(
    '[sport] Loading'
);

export const SportLoaded = createAction(
    '[sport] Loaded',
    props<{user: UserDBInterface}>()
);