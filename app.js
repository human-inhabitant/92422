'use strict';

const path = require( 'path' );
const express = require( 'express' );
const zipDb = require( 'zippity-do-dah' );
const weather = require( 'weather-js' );

const app = express();

app.use( express.static( path.resolve( __dirname, 'public' ) ) );

app.set( 'views', path.resolve( __dirname, 'views' ) );
app.set( 'view engine', 'ejs' );

app.get( '/', ( req, res ) => {
  res.render( 'index' );
});

app.get( /^\/(\d{5})$/, ( req, res, next ) => {
  const zipcode = req.params[0];
  const location = zipDb.zipcode( zipcode );
  if ( !location.zipcode ) {
    next();
    return;
  }

  const weatherOptions = { search: zipcode, degreeType: 'F' };
  weather.find( weatherOptions, ( err, data ) => {
    if ( err ) {
      next();
      return;
    }
    res.json({
      zipcode: zipcode,
      temperature: data[0].current.temperature
    });
  });
});

app.use( ( req, res ) => {
  res.status( 404 ).render( '404' );
});

app.listen( 3e3 );
