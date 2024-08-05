const Genre = require('./Genre')
const Actor = require('./Actor')
const Director = require('./Director')
const Movie = require('./Movie')


Actor.belongsToMany(Movie,{through:'movieActor'})
Movie.belongsToMany(Actor,{through:'movieActor'})


Genre.belongsToMany(Movie,{through:'movieGenre'})
Movie.belongsToMany(Genre,{through:'movieGenre'})


Director.belongsToMany(Movie,{through:'movieDirector'})
Movie.belongsToMany(Director, {through:'movieDirector'})