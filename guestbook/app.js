'use strict';

const bodyParser = require( 'body-parser' );
const express = require( 'express' );
const http = require( 'http' );
const logger = require( 'morgan' );
const path = require( 'path' );

const app = express();

const entries = [];
app.locals.entries = entries;

app.use( logger( 'dev' ) );

app.set( 'views', path.resolve( __dirname, 'views' ) );
app.set( 'view engine', 'ejs' );

app.use( bodyParser.urlencoded({ extended: false }) );

app.get( '/', ( req, res ) => {
  res.render( 'index' );
});

app.get( '/new-entry', ( req, res ) => {
  res.render( 'new-entry' );
});

app.post( '/new-entry', ( req, res ) => {
  if ( !req.body.title || !req.body.body ) {
    res.status( 400 ).send( 'Entries must have a title and a body.' );
    return;
  }
  entries.push({
    title: req.body.title,
    body: req.body.body,
    published: new Date()
  });
  res.redirect( '/' );
});

app.use( ( req, res ) => {
  res.status( 404 ).render( '404' );
});

http.createServer( app ).listen( 3e3, () => {
  console.info( 'Guestbook app started.' );
});
