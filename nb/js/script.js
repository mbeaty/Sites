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
});























