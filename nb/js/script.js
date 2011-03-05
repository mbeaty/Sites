/* Author: 

*/
$(document).ready(function(){
	// Make IWON header clickable
	$('#hdr-primary').click(function(){
	     window.location='http://iwon.com';
	     return false;
	});
	// Setup form buttons click events
	$('#create-btn').click(function(){
		$('#DefCreateButton').click();
		return false;
	});
	$('#signin-btn').click(function(){
		$('#DefSigninButton').click();
		return false;
	});
	
		$('#rules-expand').click( function(){
			if( document.getElementById( 'official-rules' ).offsetHeight > 0 ) {
				$( '#rule-link .more-less' ).html( '[+]' );
				$( '#official-rules' ).slideToggle( 'slow' );
			}
			else{
				$( '#rule-link .more-less' ).html('[-]');
				$( '#official-rules' ).slideToggle( 'slow' );
			}
			return false;
		});
});























