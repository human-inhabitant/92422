'use strict';

const supertest = require( 'supertest' );
const cheerio = require( 'cheerio' );
const app = require( '../app' );

describe( 'html response', () => {
  let request;

  beforeEach( () => {
    request = supertest( app )
      .get( '/' )
      .set( 'User-Agent', 'my cool browser' )
      .set( 'Accept', 'text/html' )
    ;
  });

  it( 'returns an html response', done => {
    request
      .expect( 'Content-Type', /html/ )
      .expect( 200 )
      .end( done )
    ;
  });
  it( 'returns your user agent', done => {
    request
      .expect( res => {
        const htmlResponse = res.text;
        const $ = cheerio.load( htmlResponse );
        const userAgent = $( '.user-agent' ).html().trim();
        if ( userAgent !== 'my cool browser' ) {
          throw new Error( 'User agent not found...' );
        }
      })
      .end( done )
    ;
  });
});
