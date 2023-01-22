export interface LeagueInterface {
    Nombre: string,
    Logo: string,
    Pais: string,
    Bandera: string | null
}

export interface SportInterface {
    leagues: LeagueInterface[]
}

export interface SportResponseInterface {
    leagues: LeagueInterface[]
}

export interface SportEffectInterface {
    League: string,
    type: string
}