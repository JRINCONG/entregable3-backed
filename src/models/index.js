const Genre = require('./Genre')
const Actor = require('./Actor')
const Director = require('./Director')
const Movie = require('./Movie')


Actor.belongsToMany(Movie,{through:'moviesActors'})
Movie.belongsToMany(Actor,{through:'moviesActors'})


Genre.belongsToMany(Movie,{through:'moviesGenres'})
Movie.belongsToMany(Genre,{through:'moviesGenres'})


Director.belongsToMany(Movie,{through:'moviesDirectors'})
Movie.belongsToMany(Director, {through:'moviesDirectors'})