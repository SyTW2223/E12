import { createReducer, on } from '@ngrx/store';
import { UserStateInterface } from 'src/app/core/models/user.state';
import { RegisterResponse, LogInResponse, User, ProfileResponse } from 'src/app/core/models/user';
import { CreatedUser, CreateUser, HttpError, LoadedProfile, LoadProfile, LogedIn, LogingIn } from '../actions/user.actions';
import { HttpErrorResponse, HttpResponseBase } from '@angular/common/http';

let token: string | null =  localStorage.getItem('token');
let username: string | null =  localStorage.getItem('username');
let initial: LogInResponse;

if(typeof(token) === 'string' && typeof(username) === 'string')
  initial = new LogInResponse(true, 'Usuario actualmente identificado', token, username);
else
  initial = new LogInResponse()
    
export const initialState: UserStateInterface = {LogInResponse: initial, CreationResponse: new RegisterResponse(), ProfileInformation: new ProfileResponse(), HttpError: new HttpErrorResponse({status: 999})}

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
  on(LoadProfile, (state) => {
    return { ...state, ProfileInformation: new ProfileResponse(), HttpError: new HttpErrorResponse({status: 999})}
  }),
  on(LoadedProfile, (state, {ProfileResponse}) => {
    return { ...state, ProfileInformation: ProfileResponse}
  }),
  on(HttpError, (state, {Error}) => {
    return { ...state, HttpError: Error}
  })
);