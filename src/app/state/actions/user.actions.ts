import { createAction, props } from '@ngrx/store';
import { UserDBInterface } from 'src/app/core/models/user.interface';

export const Loging = createAction(
    '[user] Loging In'
);

export const Loged = createAction(
    '[user] Loged In',
    props<{user: UserDBInterface}>()
);