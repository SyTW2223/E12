import { createReducer, on } from '@ngrx/store';
import { UserStateInterface } from 'src/app/core/models/user.state';
import { RegisterResponse, LogInResponse, User } from 'src/app/core/models/user';
import { CreatedUser, CreateUser, HttpError, LogedIn, LogedOut, LogingIn } from '../actions/user.actions';
import { HttpErrorResponse, HttpResponseBase } from '@angular/common/http';

let token: string | null =  localStorage.getItem('token');
let user: string | null =  localStorage.getItem('user');
let initial: LogInResponse
    if(typeof(token) === 'string' && typeof(user) === 'string'){
      initial = new LogInResponse(true, 'Usuario actualmente identificado', token, JSON.parse(user));
    }else{
      initial = new LogInResponse()
    }
    
export const initialState: UserStateInterface = {LogInResponse: initial, CreationResponse: new RegisterResponse(), HttpError: new HttpErrorResponse({status: 999})}

export const userReducer = createReducer(
  initialState,
  on(LogingIn, (state) => {
    return { ...state, LogInResponse: initial, HttpError: new HttpErrorResponse({status: 999})}
  }),
  on(LogedIn, (state, {LogInResponse}) => {
    return { ...state, LogInResponse}
  }),
  on(CreateUser, (state) => {
    return { ...state, CreationResponse: new RegisterResponse(), HttpError: new HttpErrorResponse({status: 999})}
  }),
  on(CreatedUser, (state, {CreationResponse}) => {
    return { ...state, CreationResponse}
  }),
  on(HttpError, (state, {Error}) => {
    return { ...state, HttpError: Error}
  }),
  on(LogedOut, (state) => {
    return { ...state, LogInResponse: new LogInResponse()}
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