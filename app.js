'use strict';

const express = require( 'express' );
const app = express();

app.get( '/', ( req, res ) => {
  res.send( 'In the beginning...' );
});

app.listen( 3e3, () => {
  console.info( 'Express app started on port', 3e3 );
})
