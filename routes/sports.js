//////////////////////////////////////////////////////////////////////////////////////////API DEPORTES///////////////////////////////////////////////////////////////////////////////////////////////////////////

/****************************************************************************************Basket*****************************************************************************************************************/
const express = require('express');
const router = express.Router();

//Leagues
router.get('/basket', (req, res) => {
  const http = require("https");

  const options = {
    "method": "GET",
    "hostname": "api-basketball.p.rapidapi.com",
    "port": null,
    "path": "/leagues",
    "headers": {
      "X-RapidAPI-Key": "856ee9b690mshcfdc2e7c3a13635p19058ejsnc44e62d11ec6",
      "X-RapidAPI-Host": "api-basketball.p.rapidapi.com",
      "useQueryString": true
    }
  };
 
  const requ = http.request(options, function (response) {
    const chunks = [];

    response.on("data", function (chunk) {
      chunks.push(chunk);
    });

    response.on("end", function () {
      const body = Buffer.concat(chunks);
      const footballdata = JSON.parse(body.toString());
      const teams = footballdata.response.filter((league) => {
        if(league.id == 117 || league.id == 12 || league.id == 120 || league.id == 45|| league.id == 202){
          return league;
        }
      }).map((league) => {
          return { Nombre: league.name, Logo: league.logo, Pais: league.country.name, Bandera: league.country.flag}
      });
        res.json(teams);
      });
    });
  requ.end();
  });


//Standings
router.get('/basket/nba', (req, res) => {
  const options = {
    "method": "GET",
    "hostname": "api-basketball.p.rapidapi.com",
    "port": null,
    "path": "/standings?league=12&season=2022-2023",
    "headers": {
      "X-RapidAPI-Key": "856ee9b690mshcfdc2e7c3a13635p19058ejsnc44e62d11ec6",
      "X-RapidAPI-Host": "api-basketball.p.rapidapi.com",
      "useQueryString": true
    }
  };

  const requ = http.request(options, function (response) {
    const chunks = [];

    response.on("data", function (chunk) {
      chunks.push(chunk);
    });

    response.on("end", function () {
      const body = Buffer.concat(chunks);
      const basketdata = JSON.parse(body.toString());
      if (basketdata.response.length === 0) {
        res.json({ message: "No se esta jugando esta competicion actualmente" });
      } else {
        const teams = basketdata.response[0].map((team) => {
          return { Puesto: team.position, Equipo: team.team.name, Grupo: team.group.name, Logo: team.team.logo}
        });
        res.json(teams);
      }
    });
    
  });
requ.end();
});


router.get('/basket/acb', (req, res) => {
  const options = {
    "method": "GET",
    "hostname": "api-basketball.p.rapidapi.com",
    "port": null,
    "path": "/standings?league=117&season=2022-2023",
    "headers": {
      "X-RapidAPI-Key": "856ee9b690mshcfdc2e7c3a13635p19058ejsnc44e62d11ec6",
      "X-RapidAPI-Host": "api-basketball.p.rapidapi.com",
      "useQueryString": true
    }
  };
  const requ = http.request(options, function (response) {
    const chunks = [];

    response.on("data", function (chunk) {
      chunks.push(chunk);
    });

    response.on("end", function () {
      const body = Buffer.concat(chunks);
      const basketdata = JSON.parse(body.toString());
      if (basketdata.response.length === 0) {
        res.json({ message: "No se esta jugando esta competicion actualmente" });
      } else {
        const teams = basketdata.response[0].map((team) => {
          return { Puesto: team.position, Equipo: team.team.name, Grupo: team.group.name, Logo: team.team.logo}
        });
        res.json(teams);
      }
    });
    
  });
requ.end();
});


router.get('/basket/eurobasket', (req, res) => {
  const options = {
    "method": "GET",
    "hostname": "api-basketball.p.rapidapi.com",
    "port": null,
    "path": "/standings?league=120&season=2022-2023",
    "headers": {
      "X-RapidAPI-Key": "856ee9b690mshcfdc2e7c3a13635p19058ejsnc44e62d11ec6",
      "X-RapidAPI-Host": "api-basketball.p.rapidapi.com",
      "useQueryString": true
    }
  };
  const requ = http.request(options, function (response) {
    const chunks = [];

    response.on("data", function (chunk) {
      chunks.push(chunk);
    });

    response.on("end", function () {
      const body = Buffer.concat(chunks);
      const basketdata = JSON.parse(body.toString());
      if (basketdata.response.length === 0) {
        res.json({ message: "No se esta jugando esta competicion actualmente" });
      } else {
        const teams = basketdata.response[0].map((team) => {
          return { Puesto: team.position, Equipo: team.team.name, Grupo: team.group.name, Logo: team.team.logo}
        });
        res.json(teams);
      }
    });
    
  });
requ.end();
});

router.get('/basket/greek', (req, res) => {
  const options = {
    "method": "GET",
    "hostname": "api-basketball.p.rapidapi.com",
    "port": null,
    "path": "/standings?league=45&season=2022-2023",
    "headers": {
      "X-RapidAPI-Key": "856ee9b690mshcfdc2e7c3a13635p19058ejsnc44e62d11ec6",
      "X-RapidAPI-Host": "api-basketball.p.rapidapi.com",
      "useQueryString": true
    }
  };

  const requ = http.request(options, function (response) {
    const chunks = [];

    response.on("data", function (chunk) {
      chunks.push(chunk);
    });

    response.on("end", function () {
      const body = Buffer.concat(chunks);
      const basketdata = JSON.parse(body.toString());
      if (basketdata.response.length === 0) {
        res.json({ message: "No se esta jugando esta competicion actualmente" });
      } else {
        const teams = basketdata.response[0].map((team) => {
          return { Puesto: team.position, Equipo: team.team.name, Grupo: team.group.name, Logo: team.team.logo}
        });
        res.json(teams);
      }
    });
    
  });
requ.end();
});

router.get('/basket/champions', (req, res) => {
  const options = {
    "method": "GET",
    "hostname": "api-basketball.p.rapidapi.com",
    "port": null,
    "path": "/standings?league=202&season=2022-2023",
    "headers": {
      "X-RapidAPI-Key": "856ee9b690mshcfdc2e7c3a13635p19058ejsnc44e62d11ec6",
      "X-RapidAPI-Host": "api-basketball.p.rapidapi.com",
      "useQueryString": true
    }
  };

  const requ = http.request(options, function (response) {
    const chunks = [];

    response.on("data", function (chunk) {
      chunks.push(chunk);
    });

    response.on("end", function () {
      const body = Buffer.concat(chunks);
      const basketdata = JSON.parse(body.toString());
      if (basketdata.response.length === 0) {
        res.json({ message: "No se esta jugando esta competicion actualmente" });
      } else {
        const teams = basketdata.response[0].map((team) => {
          return { Puesto: team.position, Equipo: team.team.name, Grupo: team.group.name, Logo: team.team.logo}
        });
        res.json(teams);
      }
    });
    
  });
requ.end();
});

//Games
router.get('/basket/acb/games', (req, res) => {
  const http = require("https");

  const options = {
    "method": "GET",
    "hostname": "api-basketball.p.rapidapi.com",
    "port": null,
    "path": "/games?season=2022-2023&league=117",
    "headers": {
      "X-RapidAPI-Key": "856ee9b690mshcfdc2e7c3a13635p19058ejsnc44e62d11ec6",
      "X-RapidAPI-Host": "api-basketball.p.rapidapi.com",
      "useQueryString": true
    }
  };
  const requ = http.request(options, function (response) {
    const chunks = [];

    response.on("data", function (chunk) {
      chunks.push(chunk);
    });

    response.on("end", function () {
      const body = Buffer.concat(chunks);
      const basketdata = JSON.parse(body.toString());
      const games = basketdata.response.filter((game) => {
        if (basketdata.response.length === 0) {
          res.json({ message: "No se esta jugando esta competicion actualmente" });
        }
        if (game.status.long=="Not Started" && game.status.short=="NS"){
          return game;
        }
      }).map((game) => {
        return { Fecha: game.date, Local: game.teams.home.name, Local_logo: game.teams.home.logo, Visitante: game.teams.away.name, Visitante_logo: game.teams.away.logo}
      });
    res.json(games);
    });
  });
  requ.end();
});

router.get('/basket/nba/games', (req, res) => {
  const http = require("https");

  const options = {
    "method": "GET",
    "hostname": "api-basketball.p.rapidapi.com",
    "port": null,
    "path": "/games?season=2022-2023&league=12",
    "headers": {
      "X-RapidAPI-Key": "856ee9b690mshcfdc2e7c3a13635p19058ejsnc44e62d11ec6",
      "X-RapidAPI-Host": "api-basketball.p.rapidapi.com",
      "useQueryString": true
    }
  };
  const requ = http.request(options, function (response) {
    const chunks = [];

    response.on("data", function (chunk) {
      chunks.push(chunk);
    });

    response.on("end", function () {
      const body = Buffer.concat(chunks);
      const basketdata = JSON.parse(body.toString());
      const games = basketdata.response.filter((game) => {
        if (game.status.long=="Not Started" && game.status.short=="NS"){
          return game;
        }
      }).map((game) => {
        return { fecha: game.date, Local: game.teams.home.name, Local_logo: game.teams.home.logo, Visitante: game.teams.away.name, Visitante_logo: game.teams.away.logo}
      });
      res.json(games);
    });
  });
  requ.end();
});

router.get('/basket/acb/eurobasket', (req, res) => {
  const http = require("https");

  const options = {
    "method": "GET",
    "hostname": "api-basketball.p.rapidapi.com",
    "port": null,
    "path": "/games?season=2022-2023&league=117",
    "headers": {
      "X-RapidAPI-Key": "856ee9b690mshcfdc2e7c3a13635p19058ejsnc44e62d11ec6",
      "X-RapidAPI-Host": "api-basketball.p.rapidapi.com",
      "useQueryString": true
    }
  };
  const requ = http.request(options, function (response) {
    const chunks = [];

    response.on("data", function (chunk) {
      chunks.push(chunk);
    });

    response.on("end", function () {
      const body = Buffer.concat(chunks);
      const basketdata = JSON.parse(body.toString());
      const games = basketdata.response.filter((game) => {
        if (basketdata.response.length === 0) {
          res.json({ message: "No se esta jugando esta competicion actualmente" });
        }
        if (game.status.long=="Not Started" && game.status.short=="NS"){
          return game;
        }
      }).map((game) => {
        return { fecha: game.date, Local: game.teams.home.name, Local_logo: game.teams.home.logo, Visitante: game.teams.away.name, Visitante_logo: game.teams.away.logo}
      });
    res.json(games);
    });
  });
  requ.end();
});

router.get('/basket/greek/games', (req, res) => {
  const http = require("https");

  const options = {
    "method": "GET",
    "hostname": "api-basketball.p.rapidapi.com",
    "port": null,
    "path": "/games?season=2022-2023&league=45",
    "headers": {
      "X-RapidAPI-Key": "856ee9b690mshcfdc2e7c3a13635p19058ejsnc44e62d11ec6",
      "X-RapidAPI-Host": "api-basketball.p.rapidapi.com",
      "useQueryString": true
    }
  };
  const requ = http.request(options, function (response) {
    const chunks = [];

    response.on("data", function (chunk) {
      chunks.push(chunk);
    });

    response.on("end", function () {
      const body = Buffer.concat(chunks);
      const basketdata = JSON.parse(body.toString());
      const games = basketdata.response.filter((game) => {
        if (basketdata.response.length === 0) {
          res.json({ message: "No se esta jugando esta competicion actualmente" });
        }
        if (game.status.long=="Not Started" && game.status.short=="NS"){
          return game;
        }
      }).map((game) => {
        return { fecha: game.date, Local: game.teams.home.name, Local_logo: game.teams.home.logo, Visitante: game.teams.away.name, Visitante_logo: game.teams.away.logo}
      });
    res.json(games);
    });
  });
  requ.end();
});

router.get('/basket/champions/games', (req, res) => {
  const http = require("https");

  const options = {
    "method": "GET",
    "hostname": "api-basketball.p.rapidapi.com",
    "port": null,
    "path": "/games?season=2022-2023&league=202",
    "headers": {
      "X-RapidAPI-Key": "856ee9b690mshcfdc2e7c3a13635p19058ejsnc44e62d11ec6",
      "X-RapidAPI-Host": "api-basketball.p.rapidapi.com",
      "useQueryString": true
    }
  };
  const requ = http.request(options, function (response) {
    const chunks = [];

    response.on("data", function (chunk) {
      chunks.push(chunk);
    });

    response.on("end", function () {
      const body = Buffer.concat(chunks);
      const basketdata = JSON.parse(body.toString());
      const games = basketdata.response.filter((game) => {
        if (basketdata.response.length === 0) {
          res.json({ message: "No se esta jugando esta competicion actualmente" });
        }
        if (game.status.long=="Not Started" && game.status.short=="NS"){
          return game;
        }
      }).map((game) => {
        return { fecha: game.date, Local: game.teams.home.name, Local_logo: game.teams.home.logo, Visitante: game.teams.away.name, Visitante_logo: game.teams.away.logo}
      });
    res.json(games);
    });
  });
  requ.end();
});


/****************************************************************************************Futbol*****************************************************************************************************************/


router.get('/football', (req, res) => {
  const http = require("https");

  const options = {
    "method": "GET",
    "hostname": "api-football-v1.p.rapidapi.com",
    "port": null,
    "path": "/v3/leagues",
    "headers": {
      "X-RapidAPI-Key": "856ee9b690mshcfdc2e7c3a13635p19058ejsnc44e62d11ec6",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      "useQueryString": true
    }
};

const requ = http.request(options, function (response) {
  const chunks = [];

  response.on("data", function (chunk) {
    chunks.push(chunk);
  });

  response.on("end", function () {
    const body = Buffer.concat(chunks);
    const footballdata = JSON.parse(body.toString());
    const leagues = footballdata.response.filter((league) => {
      if(league.league.id == 140 || league.league.id == 2 || league.league.id == 39 || league.league.id == 3|| league.league.id == 78){
        return league;
      }
    }).map((league) => {
      return { Nombre: league.league.name, Logo: league.league.logo, Pais: league.country.name, Bandera: league.country.flag}
    });
      res.json(leagues);
    });
  });
requ.end();
});
    


//Standings
router.get('/football/LaLiga', (req, res) => {
  const http = require("https");

const options = {
	"method": "GET",
	"hostname": "api-football-v1.p.rapidapi.com",
	"port": null,
	"path": "/v3/standings?season=2022&league=140",
	"headers": {
		"X-RapidAPI-Key": "856ee9b690mshcfdc2e7c3a13635p19058ejsnc44e62d11ec6",
		"X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
		"useQueryString": true
	}
};

const requ = http.request(options, function (response) {
  const chunks = [];

  response.on("data", function (chunk) {
    chunks.push(chunk);
  });

  response.on("end", function () {
    const body = Buffer.concat(chunks);
    const footballdata = JSON.parse(body.toString());
    const teams = footballdata.response[0].league.standings[0].map((team) => {
        return { Puesto: team.rank, Equipo: team.team.name, Puntos: team.points, Logo: team.team.logo}
    });

      res.json(teams);
    });
  });
requ.end();
});


router.get('/football/Premier', (req, res) => {
  const http = require("https");

  const options = {
    "method": "GET",
    "hostname": "api-football-v1.p.rapidapi.com",
    "port": null,
    "path": "/v3/standings?season=2022&league=39",
    "headers": {
      "X-RapidAPI-Key": "856ee9b690mshcfdc2e7c3a13635p19058ejsnc44e62d11ec6",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      "useQueryString": true
    }
  };

  const requ = http.request(options, function (response) {
    const chunks = [];

    response.on("data", function (chunk) {
      chunks.push(chunk);
    });

    response.on("end", function () {
      const body = Buffer.concat(chunks);
      const footballdata = JSON.parse(body.toString());
      const teams = footballdata.response[0].league.standings[0].map((team) => {
          return { Puesto: team.rank, Equipo: team.team.name, Puntos: team.points, Logo: team.team.logo}
      });

        res.json(teams);
      });
    });
  requ.end();
});


router.get('/football/Champions', (req, res) => {
  const http = require("https");

  const options = {
    "method": "GET",
    "hostname": "api-football-v1.p.rapidapi.com",
    "port": null,
    "path": "/v3/standings?season=2022&league=2",
    "headers": {
      "X-RapidAPI-Key": "856ee9b690mshcfdc2e7c3a13635p19058ejsnc44e62d11ec6",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      "useQueryString": true
    }
  };

  const requ = http.request(options, function (response) {
    const chunks = [];

    response.on("data", function (chunk) {
      chunks.push(chunk);
    });

    response.on("end", function () {
      const body = Buffer.concat(chunks);
      const footballdata = JSON.parse(body.toString());
      const teams = footballdata.response[0].league.standings[0].map((team) => {
          return { Puesto: team.rank, Equipo: team.team.name, Puntos: team.points, Logo: team.team.logo}
      });

        res.json(teams);
      });
    });
  requ.end();
});


router.get('/football/EuropaLeague', (req, res) => {
  const http = require("https");

  const options = {
    "method": "GET",
    "hostname": "api-football-v1.p.rapidapi.com",
    "port": null,
    "path": "/v3/standings?season=2022&league=3",
    "headers": {
      "X-RapidAPI-Key": "856ee9b690mshcfdc2e7c3a13635p19058ejsnc44e62d11ec6",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      "useQueryString": true
    }
  };

  const requ = http.request(options, function (response) {
    const chunks = [];

    response.on("data", function (chunk) {
      chunks.push(chunk);
    });

    response.on("end", function () {
      const body = Buffer.concat(chunks);
      const footballdata = JSON.parse(body.toString());
      const teams = footballdata.response[0].league.standings[0].map((team) => {
          return { Puesto: team.rank, Equipo: team.team.name, Puntos: team.points, Logo: team.team.logo}
      });

        res.json(teams);
      });
    });
  requ.end();
});

router.get('/football/BundesLiga', (req, res) => {
  const http = require("https");

  const options = {
    "method": "GET",
    "hostname": "api-football-v1.p.rapidapi.com",
    "port": null,
    "path": "/v3/standings?season=2022&league=78",
    "headers": {
      "X-RapidAPI-Key": "856ee9b690mshcfdc2e7c3a13635p19058ejsnc44e62d11ec6",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      "useQueryString": true
    }
  };

  const requ = http.request(options, function (response) {
    const chunks = [];

    response.on("data", function (chunk) {
      chunks.push(chunk);
    });

    response.on("end", function () {
      const body = Buffer.concat(chunks);
      const footballdata = JSON.parse(body.toString());
      const teams = footballdata.response[0].league.standings[0].map((team) => {
          return { Puesto: team.rank, Equipo: team.team.name, Puntos: team.points, Logo: team.team.logo}
      });

        res.json(teams);
      });
    });
  requ.end();
});

//Matches
router.get('/football/LaLiga/matches', (req, res) => {
  const http = require("https");

const options = {
	"method": "GET",
	"hostname": "api-football-v1.p.rapidapi.com",
	"port": null,
	"path": "/v3/fixtures?next=50&league=140",
	"headers": {
		"X-RapidAPI-Key": "856ee9b690mshcfdc2e7c3a13635p19058ejsnc44e62d11ec6",
		"X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
		"useQueryString": true
	}
};

const requ = http.request(options, function (response) {
	const chunks = [];

	response.on("data", function (chunk) {
		chunks.push(chunk);
	});

	response.on("end", function () {
    const body = Buffer.concat(chunks);
    const footballdata = JSON.parse(body.toString());
    const match = footballdata.response.map((data) => {
      return { Fecha: data.fixture.date, Local: data.teams.home.name, Local_logo: data.teams.home.logo, Visitante: data.teams.away.name, Visitante_logo: data.teams.away.logo}
    });

      res.json(match);
    });
  });

requ.end();
});

router.get('/football/Premier/matches', (req, res) => {
  const http = require("https");

const options = {
	"method": "GET",
	"hostname": "api-football-v1.p.rapidapi.com",
	"port": null,
	"path": "/v3/fixtures?next=50&league=39",
	"headers": {
		"X-RapidAPI-Key": "856ee9b690mshcfdc2e7c3a13635p19058ejsnc44e62d11ec6",
		"X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
		"useQueryString": true
	}
};

const requ = http.request(options, function (response) {
	const chunks = [];

	response.on("data", function (chunk) {
		chunks.push(chunk);
	});

	response.on("end", function () {
    const body = Buffer.concat(chunks);
    const footballdata = JSON.parse(body.toString());
    const match = footballdata.response.map((data) => {
      return { Fecha: data.fixture.date, Local: data.teams.home.name, Local_logo: data.teams.home.logo, Visitante: data.teams.away.name, Visitante_logo: data.teams.away.logo}
    });

      res.json(match);
    });
  });

requ.end();
});

router.get('/football/Champions/matches', (req, res) => {
  const http = require("https");

const options = {
	"method": "GET",
	"hostname": "api-football-v1.p.rapidapi.com",
	"port": null,
	"path": "/v3/fixtures?next=50&league=2",
	"headers": {
		"X-RapidAPI-Key": "856ee9b690mshcfdc2e7c3a13635p19058ejsnc44e62d11ec6",
		"X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
		"useQueryString": true
	}
};

const requ = http.request(options, function (response) {
	const chunks = [];

	response.on("data", function (chunk) {
		chunks.push(chunk);
	});

	response.on("end", function () {
    const body = Buffer.concat(chunks);
    const footballdata = JSON.parse(body.toString());
    const match = footballdata.response.map((data) => {
      return { Fecha: data.fixture.date, Local: data.teams.home.name, Local_logo: data.teams.home.logo, Visitante: data.teams.away.name, Visitante_logo: data.teams.away.logo}
    });

      res.json(match);
    });
  });

requ.end();
});

router.get('/football/EuropaLeague/matches', (req, res) => {
  const http = require("https");

const options = {
	"method": "GET",
	"hostname": "api-football-v1.p.rapidapi.com",
	"port": null,
	"path": "/v3/fixtures?next=50&league=3",
	"headers": {
		"X-RapidAPI-Key": "856ee9b690mshcfdc2e7c3a13635p19058ejsnc44e62d11ec6",
		"X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
		"useQueryString": true
	}
};

const requ = http.request(options, function (response) {
	const chunks = [];

	response.on("data", function (chunk) {
		chunks.push(chunk);
	});

	response.on("end", function () {
    const body = Buffer.concat(chunks);
    const footballdata = JSON.parse(body.toString());
    const match = footballdata.response.map((data) => {
      return { Fecha: data.fixture.date, Local: data.teams.home.name, Local_logo: data.teams.home.logo, Visitante: data.teams.away.name, Visitante_logo: data.teams.away.logo}
    });

      res.json(match);
    });
  });

requ.end();
});

router.get('/football/Bundesliga/matches', (req, res) => {
  const http = require("https");

const options = {
	"method": "GET",
	"hostname": "api-football-v1.p.rapidapi.com",
	"port": null,
	"path": "/v3/fixtures?next=50&league=78",
	"headers": {
		"X-RapidAPI-Key": "856ee9b690mshcfdc2e7c3a13635p19058ejsnc44e62d11ec6",
		"X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
		"useQueryString": true
	}
};

const requ = http.request(options, function (response) {
	const chunks = [];

	response.on("data", function (chunk) {
		chunks.push(chunk);
	});

	response.on("end", function () {
    const body = Buffer.concat(chunks);
    const footballdata = JSON.parse(body.toString());
    const match = footballdata.response.map((data) => {
      return { Fecha: data.fixture.date, Local: data.teams.home.name, Local_logo: data.teams.home.logo, Visitante: data.teams.away.name, Visitante_logo: data.teams.away.logo}
    });

      res.json(match);
    });
  });

requ.end();
});

module.exports = router;