
$(document).ready(function () {
  $("div.flip-wrapper").click(function() {
    $(this).toggleClass("flip");
    console.log('clicked')
  })
    var keySequence = [
      'ArrowUp',
      'ArrowUp',
      'ArrowDown',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'ArrowLeft',
      'ArrowRight',
      'b',
      'a',
  ];
  var userInput = new Array(keySequence.length);

  window.addEventListener( 'keydown', function( { key } ){
    userInput = [ ...userInput.slice( 1 ), key ];

    if ( keySequence.every( function( v, k ) { v === userInput[ k ] })) {
        alert( 'Yatta!' );
    }
  } );

});
