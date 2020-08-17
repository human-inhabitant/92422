'use strict';

(function( $ ) {
  const $h1 = $( 'h1' );
  const $zip = $( 'input[name="zip"]' );
  $( 'form' )
    .on( 'submit', event => {
      event.preventDefault();
      const zipCode = $.trim( $zip.val() );
      $h1.text( 'Loading...' );
      const request = $.ajax({
        url: `/${zipCode}`,
        dataType: 'json'
      });
      request.done( data => {
        const temperature = data.temperature;
        $h1.text( `It is ${temperature}º in ${zipCode}.` );
      });
      request.fail( () => {
        $h1.text( 'Error!' );
      });
  });
})( jQuery );
