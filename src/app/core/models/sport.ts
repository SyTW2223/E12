export class League {
    constructor(
        public Nombre: string = '',
        public Logo: string = '',
        public Pais: string = '',
        public Bandera: string | null = ''
    ){}
}

export class Sport {
    constructor(
        public leagues: League[] = []
    ){}
}