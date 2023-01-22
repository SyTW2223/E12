import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FootballStandingsInterface } from 'src/app/core/models/football.interface';
import { LoadingFootballStandings } from 'src/app/state/actions/football.actions';
import { selectFootballStandings } from 'src/app/state/selectors/sport.selector';

@Component({
  selector: 'app-football-standings-page',
  templateUrl: './football-standings-page.component.html'
})
export class FootballStandingsPageComponent {
  StandingsResponse$: Observable<FootballStandingsInterface[]> = new Observable();
  actualLeague: string = 'LaLiga';
  
  constructor( 
    private store_: Store<any>
  ){}

  ngOnInit(){
    this.store_.dispatch(LoadingFootballStandings({League: 'LaLiga'}));
    this.StandingsResponse$ = this.store_.select(selectFootballStandings);
  }

  LoadFootball(leagueName: string){
    this.actualLeague = leagueName;
    this.store_.dispatch(LoadingFootballStandings({League: leagueName}));
    this.StandingsResponse$ = this.store_.select(selectFootballStandings);
  }
}
