import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FootballMatchInterface } from 'src/app/core/models/football.interface';
import { LoadingFootballMatches } from 'src/app/state/actions/football.actions';
import { selectFootballMatches } from 'src/app/state/selectors/sport.selector';

@Component({
  selector: 'app-football-matches-page',
  templateUrl: './football-matches-page.component.html'
})
export class FootballMatchesPageComponent {
  MatchesResponse$: Observable<FootballMatchInterface[]> = new Observable();
  actualLeague: string | null = null;
  
  constructor( 
    private store_: Store<any>,
    private route_: ActivatedRoute
  ){}

  ngOnInit(){
    this.route_.queryParams.subscribe(params => {
      this.actualLeague = params['league'];
    });
    if(this.actualLeague != null){
      this.store_.dispatch(LoadingFootballMatches({League: this.actualLeague}));
    } else {
      this.store_.dispatch(LoadingFootballMatches({League: 'LaLiga'}));
      this.actualLeague = 'LaLiga';
    }
    this.MatchesResponse$ = this.store_.select(selectFootballMatches);
  }

  LoadFootball(leagueName: string){
    this.actualLeague = leagueName;
    this.store_.dispatch(LoadingFootballMatches({League: leagueName}));
    this.MatchesResponse$ = this.store_.select(selectFootballMatches);
  }
}