import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LogInUser, User, UserDB } from './user/user';
import { delay } from 'rxjs';

export interface LogInResponseInterface {
  success: boolean;
  token: string;
  user: User;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http_: HttpClient 
  ){}

  public create(user: User){
    let dbuser: UserDB = new UserDB(user.name, user.email, user.username, user.password);
    return this.http_.post('http://10.6.129.248:8080/users/register', dbuser);
  }

  public delete(user: User){
    return this.http_.delete('/delete' + user.username); // Elimina un usuario en base a su username
  }

  public update(user: Array<String|User>){
    return this.http_.put('/update/' + user[0], user[1]); // user[0] es el nickname y user[1] es un objeto usuario con los nuevos datos
  }

  public login_user(user: LogInUser){
    return this.http_.post<LogInResponseInterface>('http://10.6.129.248:8080/users/authenticate', user).pipe(delay(1500));
  }
}
