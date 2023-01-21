import { HttpErrorResponse } from "@angular/common/http";
import { LeagueInterface, SportInterface } from "./sport.interface";

export interface SportStateIterface {
    sport: LeagueInterface[],
    loaded: boolean,
    HttpError: HttpErrorResponse;
}