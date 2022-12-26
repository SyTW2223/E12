export interface UserDBInterface{
    name: string 
    email: string 
    username: string 
    password: string 
}

export interface UserInterface{
    name: string 
    email: string 
    username: string 
    password: string 
    editable: boolean
}

export interface LogInUserInterface{
    username: string 
    password: string 
}

export interface LogInResponseInterface{
    success: boolean
    token: string 
    user: UserInterface
}

// FLUX
// ngrx librería para conectar con backend
// librería Axios
