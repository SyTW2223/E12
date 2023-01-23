import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BasketStandingsInterface } from 'src/app/core/models/basket.interface';
import { LoadingBasketStandings } from 'src/app/state/actions/basket.actions';
import { selectBasketStandings } from 'src/app/state/selectors/sport.selector';

@Component({
  selector: 'app-basket-standings-page',
  templateUrl: './basket-standings-page.component.html'
})
export class BasketStandingsPageComponent {
  StandingsResponse$: Observable<BasketStandingsInterface[]> = new Observable();
  actualLeague: string = 'ACB';
  
  constructor( 
    private store_: Store<any>
  ){}

  ngOnInit(){
    this.store_.dispatch(LoadingBasketStandings({League: 'ACB'}));
    this.StandingsResponse$ = this.store_.select(selectBasketStandings);
  }

  LoadBasket(leagueName: string){
    this.actualLeague = leagueName;
    this.store_.dispatch(LoadingBasketStandings({League: leagueName}));
    this.StandingsResponse$ = this.store_.select(selectBasketStandings);
  }
}
