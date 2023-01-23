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

export class RegisterResponse{
    public success: boolean = false;
    public msg: string = "";
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
        public username: string = "Mi Usuario"
    ){}
}

export class ProfileResponse{
    constructor(
        public _id: string = "",
        public name: string = "",
        public email: string = "",
        public username: string = "",
        public password: string = "",
        public __v: number = 0
    ){}
}
