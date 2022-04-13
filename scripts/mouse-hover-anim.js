(function() {
  $( document )
    .on( "mousemove", ".ItemCard", function( event ) {

    var halfW = ( this.clientWidth / 2 ); // half pic width
    var halfH = ( this.clientHeight / 2 ); // half pic height
    // event.pageX = the mouse x position on screen
    //this.offsetLeft  = the page width
    var windowHeight = $(window).scrollTop();
    var offset = $(this).offset();
    var offsetL = offset.left;

    var coorX = ( halfW - ( event.pageX - offsetL ) );
    var coorY = ( halfH - ( event.pageY - windowHeight ) );

    var degX  = ( ( coorY / halfH ) * 2 ) + 'deg'; // max. degree = 10
    var degY  = ( ( coorX / halfW ) * -2 ) + 'deg'; // max. degree = 10

    var tranX = ( ( coorY / halfH ) * 10 )
    var tranY = ( ( coorX / halfW ) * -10 )

    $( this ).css( 'transform', function() {
      return 'perspective( 1000px ) translate3d( 0, 0px, 0 ) scale(1) rotateX('+ degX +') rotateY('+degY+')';
    } )
    // $('.angle-wrap, .bottom-angle').css( 'transform', function() {
    //   return 'perspective( 500px ) translate3d( '+tranX+'px, '+tranY+'px, 0 ) scale(1) rotateX('+ degX +') rotateY('+degY+')';
    // } )
  } )
    .on( "mouseout", ".ItemCard", function() {
    $( this ).removeAttr( 'style' )
  } );
})();
