'use strict';

const express = require( 'express' );
const http = require( 'http' );
const path = require( 'path' );

const app = express();

app.set( 'views', path.resolve( __dirname, 'views' ) );
app.set( 'view engine', 'ejs' );

app.use( '/', ( req, res ) => {
  res.render( 'index', {
    message: 'Hey everyone! This is my webpage.'
  });
});

http.createServer( app ).listen( 3e3 );
