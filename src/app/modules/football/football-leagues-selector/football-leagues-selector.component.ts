import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FootballMatchInterface } from 'src/app/core/models/football.interface';
import { League, Sport } from 'src/app/core/models/sport';
import { LeagueInterface, SportInterface } from 'src/app/core/models/sport.interface';
import { LoadingFootballMatches } from 'src/app/state/actions/football.actions';
import { selectFootball, selectFootballMatches, selectSportData } from 'src/app/state/selectors/sport.selector';

@Component({
  selector: 'app-football-leagues-selector',
  templateUrl: './football-leagues-selector.component.html'
})
export class FootballLeaguesSelectorComponent {
  MatchesResponse$: Observable<FootballMatchInterface[]> = new Observable();
  // matches: FootballMatchInterface[] = 
  // [
  //   {
  //     "Fecha": "2023-01-22T13:00:00+00:00",
  //     "Local": "Villarreal",
  //     "Local_logo": "https://media.api-sports.io/football/teams/533.png",
  //     "Visitante": "Girona",
  //     "Visitante_logo": "https://media.api-sports.io/football/teams/547.png"
  //   },
  //   {
  //     "Fecha": "2023-01-22T15:15:00+00:00",
  //     "Local": "Elche",
  //     "Local_logo": "https://media.api-sports.io/football/teams/797.png",
  //     "Visitante": "Osasuna",
  //     "Visitante_logo": "https://media-3.api-sports.io/football/teams/727.png"
  //   },
  //   {
  //     "Fecha": "2023-01-22T17:30:00+00:00",
  //     "Local": "Barcelona",
  //     "Local_logo": "https://media-3.api-sports.io/football/teams/529.png",
  //     "Visitante": "Getafe",
  //     "Visitante_logo": "https://media.api-sports.io/football/teams/546.png"
  //   },
  //   {
  //     "Fecha": "2023-01-22T20:00:00+00:00",
  //     "Local": "Athletic Club",
  //     "Local_logo": "https://media.api-sports.io/football/teams/531.png",
  //     "Visitante": "Real Madrid",
  //     "Visitante_logo": "https://media-3.api-sports.io/football/teams/541.png"
  //   },
  //   {
  //     "Fecha": "2023-01-23T20:00:00+00:00",
  //     "Local": "Valencia",
  //     "Local_logo": "https://media.api-sports.io/football/teams/532.png",
  //     "Visitante": "Almeria",
  //     "Visitante_logo": "https://media.api-sports.io/football/teams/723.png"
  //   }
  // ]
 
  constructor( 
    private store_: Store<any>,
    private route_: ActivatedRoute
  ){}

  async ngOnInit(){
    let initialLeague: string | null = null;
    this.route_.paramMap.subscribe(params => {
      initialLeague = params.get('league');
    });
    if(initialLeague != null){
      this.store_.dispatch(LoadingFootballMatches({League: initialLeague}));
    } else
      this.store_.dispatch(LoadingFootballMatches({League: 'Premier'}));
    this.MatchesResponse$ = this.store_.select(selectFootballMatches);
  }

  async LoadFootball(leagueName: string){
    this.store_.dispatch(LoadingFootballMatches({League: leagueName}));
    this.MatchesResponse$ = this.store_.select(selectFootballMatches);
  }
}