import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SportInterface } from 'src/app/core/models/sport.interface';

@Injectable({
  providedIn: 'root'
})
export class SportService {

  constructor(
    private http_: HttpClient 
  ){}
  
  public football_leagues(){
    return this.http_.get<SportInterface>('http://10.6.129.248:8080/sports/football');
  }

  public basket_leagues(){
    return this.http_.get<SportInterface>('http://10.6.129.248:8080/sports/basket');
  }
  
  // public login_user(login: SportEffectsInterface){
  //   return this.http_.post<SportInterface>('http://10.6.129.248:8080/users/authenticate', login.user);
  // }
}