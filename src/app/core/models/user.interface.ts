import { HttpEventType, HttpHeaders } from "@angular/common/http"

export interface UserRegisterInterface{
    name: string 
    email: string 
    username: string 
    password: string 
}

export interface UserDBInterface{
    type: string,
    user: UserRegisterInterface
}

export interface UserInterface{
    id: string
    name: string 
    email: string 
    username: string 
}

export interface LogInUserInterface{
    username: string 
    password: string 
}

export interface LogInEffectInterface{
    type: string 
    user: LogInUserInterface 
}

export interface RegisterResponseInterface{
    success: boolean 
    msg: string 
}

export interface LogInResponseInterface{
    success: boolean
    msg: string
    token: string 
    user: UserInterface
}

export interface HttpErrorInterface{
    headers: HttpHeaders
    status: number
    statusText: string
    url: string | null
    ok: boolean
    type: HttpEventType.Response | HttpEventType.ResponseHeader
    error: any
}

// FLUX
// ngrx librería para conectar con backend
// librería Axios
