'use strict';

const mustache = require( 'mustache' );
const result = mustache.render( 'Wurd... {{given}} {{family}}!', {
  given: 'Human',
  family: 'Inhabitant'
});
console.info( result );
