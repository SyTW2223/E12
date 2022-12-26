import { createReducer, on } from '@ngrx/store';
import { UserStateInterface } from 'src/app/core/models/user.state';
import { User } from 'src/app/modules/header/user/user';
import { Loging } from '../actions/user.actions';

export const initialState: UserStateInterface = {loged: false, user: new User()}

export const userReducer = createReducer(
  initialState,
  on(Loging, (state) => {
    return { ...state, loged: true }
  })
);

