import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SportService {

  constructor(
    private http_: HttpClient 
  ){}

  public login_user(login: SportEffectsInterface){
    return this.http_.post<LogInResponseInterface>('http://10.6.129.248:8080/users/authenticate', login.user);
  }

  // public login_user(login: LogInEffectInterface){
  //   return this.http_.post<LogInResponseInterface>('http://10.6.129.248:8080/users/authenticate', login.user);
  // }

}