import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasketMatchInterface, BasketStandingsInterface } from 'src/app/core/models/basket.interface';
import { FootballMatchInterface, FootballStandingsInterface } from 'src/app/core/models/football.interface';
import { SportEffectInterface, SportInterface } from 'src/app/core/models/sport.interface';

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

  public football_matches(league: SportEffectInterface){
    return this.http_.get<FootballMatchInterface[]>( 'http://10.6.129.248:8080/sports/football/' + league.League + '/matches' );
  }

  public football_standings(league: SportEffectInterface){
    return this.http_.get<FootballStandingsInterface[]>('http://10.6.129.248:8080/sports/football/' + league.League);
  }

  public basket_leagues(){
    return this.http_.get<SportInterface>('http://10.6.129.248:8080/sports/basket');
  }
  
  public basket_matches(league: SportEffectInterface){
    return this.http_.get<BasketMatchInterface[]>( 'http://10.6.129.248:8080/sports/basket/' + league.League + '/games' );
  }

  public basket_standings(league: SportEffectInterface){
    return this.http_.get<BasketStandingsInterface[]>('http://10.6.129.248:8080/sports/basket/' + league.League);
  }

}