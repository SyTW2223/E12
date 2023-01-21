import { Component, NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { UserService } from './state/service/user.service'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HeaderComponent } from './modules/header/header.component';
import { HomeComponent } from './modules/home/home.component';
import { UserComponent } from './modules/header/user/user.component';
import { UserNewComponent } from './modules/header/user/user-new/user-new.component';
import { UserLoginComponent } from './modules/header/user/user-login/user-login.component';
import { ProfileComponent } from './modules/header/profile/profile.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ROOT_REDUCERS } from './state/app.state';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './state/effects/user.effects';
import { FootballComponent } from './modules/football/football.component';
import { FootballLeaguesSelectorComponent } from './modules/football/football-leagues-selector/football-leagues-selector.component';
import { FootballStandingsPageComponent } from './modules/football/football-standings-page/football-standings-page.component';
import { FootballStandingsComponent } from './modules/football/football-standings-page/football-standings/football-standings.component';
import { SportService } from './state/service/sport.service';
import { SportEffects } from './state/effects/football.effects';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserNewComponent,
    HeaderComponent,
    HomeComponent,
    UserLoginComponent,
    ProfileComponent,
    FootballComponent,
    FootballLeaguesSelectorComponent,
    FootballStandingsPageComponent,
    FootballStandingsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([UserEffects, SportEffects])
  ],
  providers: [
    UserService,
    SportService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
