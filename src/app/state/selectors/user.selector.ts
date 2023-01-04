import { createSelector } from '@ngrx/store';
import { UserStateInterface } from 'src/app/core/models/user.state';
import { AppState } from '../app.state';

export const selectUser = (state: AppState) => state.userData;

export const selectUserData = createSelector(
  selectUser,
  (state: UserStateInterface) => state.LogInResponse
);