import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { League, Sport } from 'src/app/core/models/sport';
import { LeagueInterface, SportInterface } from 'src/app/core/models/sport.interface';
import { LoadingFootball } from 'src/app/state/actions/football.actions';
import { selectSportData } from 'src/app/state/selectors/sport.selector';

function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}

@Component({
  selector: 'app-football-leagues-selector',
  templateUrl: './football-leagues-selector.component.html'
})
export class FootballLeaguesSelectorComponent {
  SportResponse$: Observable<LeagueInterface[]> = new Observable();
  sport: LeagueInterface[] = [];
  league: LeagueInterface = new League();
 
  constructor( 
    private store_: Store<any>
    //private router_: Router
  ){}

  async ngOnInit(){
      // this.store_.dispatch(LoadingFootball());
      // await delay(2000);
      // this.SportResponse$ = this.store_.select(selectSportData);
      // this.SportResponse$.subscribe((res) => {
      //       this.sport = res;
      // }).unsubscribe();
  }

  public LoadFootball(leagueName: string){
    let leaguefinded = this.sport.find(league => league.Nombre == leagueName);
    if(leaguefinded != undefined){
      this.league = leaguefinded;
    }
  }
}