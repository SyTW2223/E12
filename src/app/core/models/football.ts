export class FootballMatch {
    constructor (
        public Fecha: string = '',
        public Local: string = '',
        public Local_logo: string = '',
        public Visitante: string = '',
        public Visitante_logo: string = ''
    ){}
}

export class FootballStandings {
    constructor(
        public Puesto: number = -1,
        public Equipo: string = '',
        public Puntos: number = -1,
        public Logo: string = ''
    ){}
}