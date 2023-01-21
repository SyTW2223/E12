import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Sport } from 'src/app/core/models/sport';
import { LeagueInterface, SportInterface } from 'src/app/core/models/sport.interface';
import { LoadingFootball } from 'src/app/state/actions/football.actions';
import { selectSportData } from 'src/app/state/selectors/sport.selector';

@Component({
  selector: 'app-football',
  templateUrl: './football.component.html'
})
export class FootballComponent {
  SportResponse$: Observable<LeagueInterface[]> = new Observable();
  sport: LeagueInterface[] = [];

  constructor( 
    private store_: Store<any>
    //private router_: Router
  ){}

  ngOnInit(){
      // this.SportResponse$ = this.store_.select(selectSportData);
      // this.SportResponse$.subscribe((res) => {
      //       this.sport = res;
      //       console.log(this.sport)
      // });
      this.sport = 
      [
        {
          "Nombre": "Premier League",
          "Logo": "https://media-3.api-sports.io/football/leagues/39.png",
          "Pais": "England",
          "Bandera": "https://media-3.api-sports.io/flags/gb.svg"
        },
        {
          "Nombre": "Bundesliga",
          "Logo": "https://media-3.api-sports.io/football/leagues/78.png",
          "Pais": "Germany",
          "Bandera": "https://media-3.api-sports.io/flags/de.svg"
        },
        {
          "Nombre": "La Liga",
          "Logo": "https://media-3.api-sports.io/football/leagues/140.png",
          "Pais": "Spain",
          "Bandera": "https://media-3.api-sports.io/flags/es.svg"
        },
        {
          "Nombre": "UEFA Champions League",
          "Logo": "https://media-3.api-sports.io/football/leagues/2.png",
          "Pais": "World",
          "Bandera": null
        },
        {
          "Nombre": "UEFA Europa League",
          "Logo": "https://media-3.api-sports.io/football/leagues/3.png",
          "Pais": "World",
          "Bandera": null
        }
      ]
  }
}
