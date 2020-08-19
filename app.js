'use strict';

const express = require( 'express' );
const path = require( 'path' );
const app = express()

app.set( 'port', process.env.PORT || 3e3 );

const viewsPath = path.join( __dirname, 'views' );
app.set( 'view engine', 'ejs' );
app.set( 'views', viewsPath );

app.get( '/', ( req, res ) => {
  const userAgent = req.headers['user-agent'] || 'none';
  if ( req.accepts( 'html' ) ) {
    res.render( 'index', { userAgent: userAgent });
  } else {
    res.type( 'text' );
    res.send( userAgent );
  }
});
app.listen( app.get( 'port' ), () => {
  console.info( 'App started on port %d', app.get( 'port' ) );
});

module.exports = app;
