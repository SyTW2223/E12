import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { UserComponent } from './modules/header/user/user.component';
import { ProfileComponent } from './modules/header/profile/profile.component';
import { FootballMatchesPageComponent } from './modules/football/football-matches-page/football-matches-page.component';
import { FootballStandingsPageComponent } from './modules/football/football-standings-page/football-standings-page.component';
import { BasketMatchesPageComponent } from './modules/basket/basket-matches-page/basket-matches-page.component';
import { BasketStandingsPageComponent } from './modules/basket/basket-standings-page/basket-standings-page.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'user', component: UserComponent},
  {path:'profile', component: ProfileComponent},
  {path:'football-matches', component: FootballMatchesPageComponent},
  {path:'football-standings', component: FootballStandingsPageComponent},
  {path:'basket-matches', component: BasketMatchesPageComponent},
  {path:'basket-standings', component: BasketStandingsPageComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 