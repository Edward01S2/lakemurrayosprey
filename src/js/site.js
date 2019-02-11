$( document ).ready( function( $ ) {
  // Your JavaScript goes here
  //Test
  $(".stream-2").toggle();
  //console.log('Document is ready');
  $("#switchStream").click(function() {
    //console.log('Button clicked');
    $(".stream-1").toggle();
    $(".stream-2").toggle();
  });

});