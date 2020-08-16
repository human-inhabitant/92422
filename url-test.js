'use strict';

const url = require( 'url' );
const parsedUrl = url.parse( 'https://human-inhabitant.com/user/?id=ioNg0ohg%20Ahwuuc0f%20xobuo1Ie' );

console.info( 'parsedUrl.protocol => %s', parsedUrl.protocol );
console.info( 'parsedUrl.host => %s', parsedUrl.host );
console.info( 'parsedUrl.query => %s', parsedUrl.query );


