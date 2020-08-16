'use strict';

const path = require( 'path' );
const fs = require( 'fs' );
const morgan = require( 'morgan' );
const express = require( 'express' );
const app = express();

app.use( morgan( 'combined' ) );

const staticPath = path.join( __dirname, 'static' );
app.use( express.static( staticPath ) );

app.get( '/', ( req, res ) => {
  res.send( 'In the beginning...' );
});

app.use( ( req, res ) => {
  res.status( 404 );
  res.send( 'File not found...' );
});

app.listen( 3e3, () => {
  console.info( 'Express app started on port', 3e3 );
});
