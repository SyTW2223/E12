import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { LogInEffectInterface, LogInResponseInterface, ProfileEffectInterface, RegisterResponseInterface, UserDBInterface } from 'src/app/core/models/user.interface';

// const PORT = process.env['BACKEND_PORT'];
// const HOST = process.env['BACKEND_HOST'];

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http_: HttpClient 
  ){}

  public login_user(login: LogInEffectInterface){
    return this.http_.post<LogInResponseInterface>('http://10.6.129.248:8080/users/authenticate', login.user);
  }

  public create_user(user: UserDBInterface){
    return this.http_.post<RegisterResponseInterface>('http://10.6.129.248:8080/users/register', user.user);
  }
  
  public profile(jwt: ProfileEffectInterface){
    // console.log(PORT, HOST)
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': jwt.token
      })
    };
    return this.http_.get('http://10.6.129.248:8080/users/profile', httpOptions);
  }
}
