'use strict';

const fs = require( 'fs' );
const options = { encoding: 'utf-8' };

fs.readFile( '/etc/hosts', options, callback );

function callback( err, data ) {
  if ( err ) {
    console.error( 'Error reading file:', err );
    return;
  }
  console.info( data.match( /x/gi ).length, 'letter x\'s' );
}

console.info( 'Run me first...' );
