import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LogInEffectInterface, LogInResponseInterface, UserDBInterface } from 'src/app/core/models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http_: HttpClient 
  ){}

  public login_user(user: LogInEffectInterface){
    return this.http_.post<LogInResponseInterface>('http://10.6.129.248:8080/users/authenticate', user.user);
  }

  public create_user(user: UserDBInterface){
    return this.http_.post('http://10.6.129.248:8080/users/register', user);
  }
  
  // public delete(user: User){
  //   return this.http_.delete('/delete' + user.username); // Elimina un usuario en base a su username
  // }

  // public update(user: Array<String|User>){
  //   return this.http_.put('/update/' + user[0], user[1]); // user[0] es el nickname y user[1] es un objeto usuario con los nuevos datos
  // }
}
