import { Component } from '@angular/core';
import { LeagueInterface } from 'src/app/core/models/sport.interface';

@Component({
  selector: 'app-football',
  templateUrl: './football.component.html'
})
export class FootballComponent {
  sport: LeagueInterface[] = [];

  constructor( 
  ){}

  ngOnInit(){
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
