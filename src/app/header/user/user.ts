export class UserDB {
    constructor (
        public name: string = "",
        public email: string = "",
        public username: string = "",
        public password: string = ""
    ){}
}

export class User {
    constructor (
        public name: string = "",
        public email: string = "",
        public username: string = "",
        public password: string = "",
        public editable: boolean = false
    ){}
}

export class LogInUser{
    constructor (
        public username: string = "",
        public password: string = ""
    ){}
}

export class LogInResponse{
    constructor (
        public success: boolean = false,
        public token: string = "",
        public user: User = new User()
    ){}
}

// FLUX
// ngrx librería para conectar con backend
// librería Axios
