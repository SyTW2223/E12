import { createAction, props } from '@ngrx/store';
import { LogInResponseInterface, LogInUserInterface, UserDBInterface, UserInterface } from 'src/app/core/models/user.interface';

export const LogingIn = createAction(
    '[header] Loging In',
    props<{user: LogInUserInterface}>()
);

export const LogedIn = createAction(
    '[header] Loged In',
    props<{LogInResponse: LogInResponseInterface}>()
);

export const CreateUser = createAction(
    '[header] Create User',
    props<{user: UserDBInterface}>()
);

// export const LogingOut = createAction(
//     '[header] Loging Out'
// );

// export const LogedOut = createAction(
//     '[header] Loged Out'
// );