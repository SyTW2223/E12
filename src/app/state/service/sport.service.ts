import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FootballMatchesEffectInterface } from 'src/app/core/models/football.interface';
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

  public football_matches(league: FootballMatchesEffectInterface){
    return this.http_.get<SportInterface>( 'http://10.6.129.248:8080/sports/football/' + league.League + '/matches' );
  }

  public football_standings(league: string){
    return this.http_.get<SportInterface>('http://10.6.129.248:8080/sports/football/' + league);
  }

  public basket_leagues(){
    return this.http_.get<SportInterface>('http://10.6.129.248:8080/sports/basket');
  }
  
}