import { HttpErrorResponse } from "@angular/common/http";
import { BasketMatchInterface, BasketStandingsInterface } from "./basket.interface";
import { FootballMatchInterface, FootballStandingsInterface } from "./football.interface";
import { LeagueInterface, SportInterface } from "./sport.interface";

export interface SportStateIterface {
    sport: LeagueInterface[],
    loaded: boolean,
    HttpError: HttpErrorResponse;
}

export interface FootballStateInterface {
    matches: FootballMatchInterface[],
    standings: FootballStandingsInterface[],
    HttpError: HttpErrorResponse;
}

export interface BasketStateInterface {
    matches: BasketMatchInterface[],
    standings: BasketStandingsInterface[],
    HttpError: HttpErrorResponse;
}