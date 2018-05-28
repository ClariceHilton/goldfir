
$("video").prop('muted', true);


  $(function(){
    $("#mute").click( function (){
      console.log("here");
      if( $("video").prop('muted') ) {
            $("video").prop('muted', false);
      } else {
        $("video").prop('muted', true);
      }
    });
  });
$(function(){
 $("#speakers").click(function(){
 $('.dvd').hide(); //hide the button
 $('.instagram').hide();
 $('.youtube').hide();
 $('.contact').hide();
 $('.gigs').hide();
 $('.spotify').toggle('slow', function() {
   // Animation complete.
 });
})
});

$(function(){
 $("#camera").click(function(){
 $('.dvd').hide(); //hide the button
 $('.spotify').hide();
  $('.youtube').hide();
  $('.contact').hide();
  $('.gigs').hide();
  $('.instagram').show();
})
});

$(function(){
 $("#cassette").click(function(){
 $('.dvd').hide(); //hide the button
 $('.spotify').hide();
 $('.instagram').hide();
 $('.contact').hide();
 $('.gigs').hide();
 $('.youtube').show();
})
});

$(function(){
 $("#phone").click(function(){
 $('.dvd').hide(); //hide the button
 $('.spotify').hide();
 $('.instagram').hide();
 $('.youtube').hide();
 $('.gigs').hide();
 $('.contact').show();
})
});

$(function(){
 $("#mic").click(function(){
 $('.dvd').hide(); //hide the button
 $('.spotify').hide();
 $('.instagram').hide();
 $('.youtube').hide();
 $('.gigs').show();
 $('.contact').hide();
})
});
