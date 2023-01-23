import { createSelector } from '@ngrx/store';
import { UserStateInterface } from 'src/app/core/models/user.state';
import { AppState } from '../app.state';

export const selectUser = (state: AppState) => state.userData;

export const selectLogInData = createSelector(
  selectUser,
  (state: UserStateInterface) => state.LogInResponse
);

export const selectRegisterData = createSelector(
  selectUser,
  (state: UserStateInterface) => state.CreationResponse
);

export const selectProfileData = createSelector(
  selectUser,
  (state: UserStateInterface) => state.ProfileInformation
);

export const selectErrorData = createSelector(
  selectUser,
  (state: UserStateInterface) => state.HttpError
);