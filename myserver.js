'use strict';

const http = require( 'http' );
const server = http.createServer( requestHandler );
server.listen( 3e3 );

function requestHandler( req, res ) {
  console.info( 'In comes a request to:', req.url );
  res.end( 'In the beginning...' );
}

