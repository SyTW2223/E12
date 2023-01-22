import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BasketMatchInterface } from 'src/app/core/models/basket.interface';
import { LoadingBasketMatches } from 'src/app/state/actions/basket.actions';
import { selectBasketMatches } from 'src/app/state/selectors/sport.selector';

@Component({
  selector: 'app-basket-matches-page',
  templateUrl: './basket-matches-page.component.html'
})
export class BasketMatchesPageComponent {
  MatchesResponse$: Observable<BasketMatchInterface[]> = new Observable();
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
      this.store_.dispatch(LoadingBasketMatches({League: this.actualLeague}));
    } else {
      this.store_.dispatch(LoadingBasketMatches({League: 'ACB'}));
      this.actualLeague = 'ACB';
    }
    this.MatchesResponse$ = this.store_.select(selectBasketMatches);
  }

  LoadBasket(leagueName: string){
    this.actualLeague = leagueName;
    this.store_.dispatch(LoadingBasketMatches({League: leagueName}));
    this.MatchesResponse$ = this.store_.select(selectBasketMatches);
  }
}
