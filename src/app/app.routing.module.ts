import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { UserComponent } from './modules/header/user/user.component';
import { ProfileComponent } from './modules/header/profile/profile.component';
import { FootballLeaguesSelectorComponent } from './modules/football/football-leagues-selector/football-leagues-selector.component';
import { FootballStandingsPageComponent } from './modules/football/football-standings-page/football-standings-page.component';
import { BasketMatchesPageComponent } from './modules/basket/basket-matches-page/basket-matches-page.component';
import { BasketStandingsComponent } from './modules/basket/basket-standings/basket-standings.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'user', component: UserComponent},
  {path:'profile', component: ProfileComponent},
  {path:'football-matches', component: FootballLeaguesSelectorComponent},
  {path:'football-standings', component: FootballStandingsPageComponent},
  {path:'basket-matches', component: BasketMatchesPageComponent},
  {path:'basket-standings', component: BasketStandingsComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 