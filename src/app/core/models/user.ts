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
        public id: string = "",
        public name: string = "",
        public email: string = "",
        public username: string = "",
        public password: string = ""
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
        public msg: string = "",
        public token: string = "",
        public user: User = new User("","","","Mi Usuario")
    ){}
}

// FLUX
// ngrx librería para conectar con backend
// librería Axios
