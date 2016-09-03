/* global describe, it */
'use strict';
const isInteractiveElement = require( '../index.js' );
const document = require( 'jsdom' ).jsdom();
const assert = require( 'assert' );

describe( 'isInteractiveElement', function() {
	it( 'should return true for a <a> element', function() {
		const a = document.createElement( 'a' );

		assert.equal( isInteractiveElement( a ), true );
	});

	it( 'should return true for a <button> element', function() {
		const button = document.createElement( 'button' );

		assert.equal( isInteractiveElement( button ), true );
	});

	it( 'should return true for an <input> element', function() {
		const input = document.createElement( 'input' );

		assert.equal( isInteractiveElement( input ), true );
	});

	it( 'should return false for an <input type="hidden"> element', function() {
		const input = document.createElement( 'input' );

		input.type = 'hidden';
		assert.equal( isInteractiveElement( input ), false );
	});

	it( 'should return true for an <audio controls> element', function() {
		const audio = document.createElement( 'audio' );

		audio.controls = true;
		assert.equal( isInteractiveElement( audio ), true );
	});

	it( 'should return false for an <audio> element', function() {
		const audio = document.createElement( 'audio' );

		assert.equal( isInteractiveElement( audio ), false );
	});

	it( 'should return true for an <img usemap> element', function() {
		const img = document.createElement( 'img' );

		img.useMap = '#foo';
		assert.equal( isInteractiveElement( img ), true );
	});

	it( 'should return false for an <img> element', function() {
		const img = document.createElement( 'img' );

		assert.equal( isInteractiveElement( img ), false );
	});

	it( 'should return true for a <th sorted> element', function() {
		const th = document.createElement( 'th' );

		th.sorted = '1';
		assert.equal( isInteractiveElement( th ), true );
	});

	it( 'should return false for a <th> element', function() {
		const th = document.createElement( 'th' );

		assert.equal( isInteractiveElement( th ), false );
	});
});
