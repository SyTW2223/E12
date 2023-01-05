import { HttpEventType, HttpHeaders } from "@angular/common/http"

export interface UserDBInterface{
    name: string 
    email: string 
    username: string 
    password: string 
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
}

// FLUX
// ngrx librería para conectar con backend
// librería Axios
