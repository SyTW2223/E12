import { HttpErrorResponse } from "@angular/common/http";
import { RegisterResponseInterface, LogInResponseInterface, HttpErrorInterface } from "./user.interface"

export interface UserStateInterface {
    LogInResponse: LogInResponseInterface;
    CreationResponse: RegisterResponseInterface;
    HttpError: HttpErrorResponse;
}