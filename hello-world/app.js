'use strict';

const express = require( 'express' );
const http = require( 'http' );
const path = require( 'path' );
const logger = require( 'morgan' );

const app = express();

app.use( logger( 'combined' ) );

app.get( '/', ( req, res ) => {
  res.end( 'Welcome to my homepage!' );
});

app.get( '/about', ( req, res ) => {
  res.end( 'Welcome to the about page!' );
});

app.get( '/weather', ( req, res ) => {
  res.end( 'The current weather is NICE.' );
});

app.get( '/hello/:who', ( req, res ) => {
  res.end( `Hello, ${req.params.who}.` );
});

app.get( '/redirect_home',  ( req, res ) => {
  res.redirect( '/' );
});

app.get( '/sendfile',  ( req, res ) => {
  const filePath = path.resolve( __dirname, '..', 'statics', 'public', 'file.txt' );
  res.sendFile( filePath );
});

app.use( ( req, res ) => {
  res.statusCode = 404;
  res.end( '404!' );
});

http.createServer( app ).listen( 3e3 );
