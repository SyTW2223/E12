import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { UserComponent } from './modules/header/user/user.component';
import { ProfileComponent } from './modules/header/profile/profile.component';
import { FootballComponent } from './modules/football/football.component';
import { BasketComponent } from './modules/basket/basket.component';
import { FootballLeaguesSelectorComponent } from './modules/football/football-leagues-selector/football-leagues-selector.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'user', component: UserComponent},
  {path:'profile', component: ProfileComponent},
  {path:'football-leagues', component: FootballLeaguesSelectorComponent},
  {path:'football', component: FootballComponent},
  {path:'basket', component: BasketComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 