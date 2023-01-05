import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { RegisterResponseInterface, LogInResponseInterface, LogInUserInterface, UserDBInterface, UserInterface } from 'src/app/core/models/user.interface';

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

export const CreatedUser = createAction(
    '[header] Created User',
    props<{CreateResponse: RegisterResponseInterface}>()
);

export const HttpError = createAction(
    '[header] Http Error',
    props<{Error: HttpErrorResponse}>()
);

// export const LogingOut = createAction(
//     '[header] Loging Out'
// );

// export const LogedOut = createAction(
//     '[header] Loged Out'
// );