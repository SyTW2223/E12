import { createReducer, on } from '@ngrx/store';
import { UserStateInterface } from 'src/app/core/models/user.state';
import { RegisterResponse, LogInResponse, User } from 'src/app/core/models/user';
import { CreatedUser, HttpError, LogedIn } from '../actions/user.actions';
import { HttpErrorResponse, HttpResponseBase } from '@angular/common/http';

export const initialState: UserStateInterface = {LogInResponse: new LogInResponse(), CreationResponse: new RegisterResponse(), HttpError: new HttpErrorResponse({status: 1})}

export const userReducer = createReducer(
  initialState,
  on(LogedIn, (state, {LogInResponse}) => {
    return { ...state, LogInResponse}
  }),
  on(CreatedUser, (state, {CreateResponse}) => {
    return { ...state, CreateResponse}
  }),
  on(HttpError, (state, {Error}) => {
    return { ...state, HttpError: Error}
  })
);

// export const CreatedReducer = createReducer(
//   initialState,
  
// );

// export const LogedOutReducer = createReducer(
//   initialState,
//   on(LogedIn, (state, {LogInResponse}) => {
//     return { ...state, LogInResponse}
//   })
// );