'use strict';

function capitalize( str ) {
  const first = str.charAt( 0 ).toUpperCase();
  const remaining = str.slice( 1 ).toLowerCase();
  return [first, remaining].join( '' );
}

module.exports = capitalize;
