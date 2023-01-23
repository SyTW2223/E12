import { HttpErrorResponse } from "@angular/common/http";
import { RegisterResponseInterface, LogInResponseInterface, HttpErrorInterface, ProfileResponseInterface } from "./user.interface"

export interface UserStateInterface {
    LogInResponse: LogInResponseInterface;
    CreationResponse: RegisterResponseInterface;
    ProfileInformation: ProfileResponseInterface;
    HttpError: HttpErrorResponse;
}