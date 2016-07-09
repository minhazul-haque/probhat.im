( function ( $ ) {
	'use strict';

	$.extend( $.ime.sources, {
		'bn-probhat': {
			name: 'প্রভাত',
			source: 'probhat.im/js/bn-probhat.js'
		}
	} );

	$.extend( $.ime.languages, {
		bn: {
			autonym: 'বাংলা',
			inputmethods: [ 'bn-probhat' ]
		}
	} );

}( jQuery ) );
