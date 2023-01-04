import { createReducer, on } from '@ngrx/store';
import { UserStateInterface } from 'src/app/core/models/user.state';
import { LogInResponse, User } from 'src/app/core/models/user';
import { LogedIn } from '../actions/user.actions';

export const initialState: UserStateInterface = {LogInResponse: new LogInResponse()}

export const LogedInReducer = createReducer(
  initialState,
  on(LogedIn, (state, {LogInResponse}) => {
    return { ...state, LogInResponse}
  })
);

// export const LogedOutReducer = createReducer(
//   initialState,
//   on(LogedIn, (state, {LogInResponse}) => {
//     return { ...state, LogInResponse}
//   })
// );