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

export interface LogInEffectIterface{
    type: string 
    user: LogInUserInterface 
}

export interface LogInResponseInterface{
    success: boolean
    msg: string
    token: string 
    user: UserInterface
}

// FLUX
// ngrx librería para conectar con backend
// librería Axios
