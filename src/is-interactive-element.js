module.exports = function( element ) {
	var nodeName = element.nodeName;

	if ([ 'A', 'BUTTON', 'DETAILS', 'EMBED', 'IFRAME', 'KEYGEN', 'LABEL', 'SELECT', 'TEXTAREA' ].indexOf( nodeName ) > -1 ) {
		return true;
	}
	if ( nodeName === 'INPUT' && element.type !== 'hidden' ) {
		return true;
	}
	if ([ 'AUDIO', 'VIDEO' ].indexOf( nodeName ) > -1 && element.hasAttribute( 'controls' ) ) {
		return true;
	}
	if ([ 'IMG', 'OBJECT' ].indexOf( nodeName ) > -1 && element.hasAttribute( 'usemap' ) ) {
		return true;
	}
	if ( nodeName === 'TH' && element.hasAttribute( 'sorted' ) ) {
		return true;
	}
	return false;
}
