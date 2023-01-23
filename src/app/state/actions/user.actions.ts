import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { RegisterResponseInterface, LogInResponseInterface, LogInUserInterface, UserDBInterface, UserInterface, UserRegisterInterface, ProfileResponseInterface } from 'src/app/core/models/user.interface';

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
    props<{user: UserRegisterInterface}>()
);

export const CreatedUser = createAction(
    '[header] Created User',
    props<{CreationResponse: RegisterResponseInterface}>()
);

export const LoadProfile = createAction(
    '[header] Load Profile',
    props<{token: string}>()
);

export const LoadedProfile = createAction(
    '[header] Loaded Profile',
    props<{ProfileResponse: ProfileResponseInterface}>()
);

export const HttpError = createAction(
    '[header] Http Error',
    props<{Error: HttpErrorResponse}>()
);