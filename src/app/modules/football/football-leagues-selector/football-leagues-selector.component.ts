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
  actualLeague: string | null = null;
  
  constructor( 
    private store_: Store<any>,
    private route_: ActivatedRoute
  ){}

  ngOnInit(){
    this.route_.paramMap.subscribe(params => {
      this.actualLeague = params.get('league');
    });
    if(this.actualLeague != null){
      this.store_.dispatch(LoadingFootballMatches({League: this.actualLeague}));
    } else {
      this.store_.dispatch(LoadingFootballMatches({League: 'Premier'}));
      this.actualLeague = 'Premier';
    }
    this.MatchesResponse$ = this.store_.select(selectFootballMatches);
  }

  LoadFootball(leagueName: string){
    this.actualLeague = leagueName;
    this.store_.dispatch(LoadingFootballMatches({League: leagueName}));
    this.MatchesResponse$ = this.store_.select(selectFootballMatches);
  }
}