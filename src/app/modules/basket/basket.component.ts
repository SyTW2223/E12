import { Component } from '@angular/core';
import { LeagueInterface } from 'src/app/core/models/sport.interface';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html'
})
export class BasketComponent {
  sport: LeagueInterface[] = [];

  constructor( 
  ){}

  ngOnInit(){
      this.sport = 
      [
        {
          "Nombre": "Champions League",
          "Logo": "https://media-3.api-sports.io/basketball/leagues/202.png",
          "Pais": "Europe",
          "Bandera": null
        },
        {
          "Nombre": "Euroleague",
          "Logo": "https://media-3.api-sports.io/basketball/leagues/120.png",
          "Pais": "Europe",
          "Bandera": null
        },
        {
          "Nombre": "Basket League",
          "Logo": "https://media-3.api-sports.io/basketball/leagues/45.png",
          "Pais": "Greece",
          "Bandera": "https://media-3.api-sports.io/flags/gr.svg"
        },
        {
          "Nombre": "ACB",
          "Logo": "https://media-3.api-sports.io/basketball/leagues/117.png",
          "Pais": "Spain",
          "Bandera": "https://media-3.api-sports.io/flags/es.svg"
        },
        {
          "Nombre": "NBA",
          "Logo": "https://media-3.api-sports.io/basketball/leagues/12.png",
          "Pais": "USA",
          "Bandera": "https://media-3.api-sports.io/flags/us.svg"
        }
      ]
  }
}