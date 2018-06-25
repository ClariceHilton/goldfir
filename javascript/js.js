// logo clicl
$(function(){
 $("#logo").click(function(){
   $(".menu").css("display","inline-block");
})
});
// mute video on load
$("video").prop('muted', true);

// mute and unmute background
  $(function(){
    $("#mute, #myVideo").click( function (){
      console.log("here");
      if( $("video").prop('muted') ) {
            $("video").prop('muted', false);
            $("#mutepic").attr('src',"images/unmute.png");
            return false;
      } else {
        $("video").prop('muted', true);
        $("#mutepic").attr('src',"images/icons8-mute-50.png");
        return false;
      }
    });
  });

// menu on hover make bigger

$(function() {
$('.menu').hover(makeBigger, returnToOriginalSize);
});

function makeBigger() {
    console.log("hover");
    $(this).css({height: '+=5%', width: '+=5%'});
}

function returnToOriginalSize() {
    $(this).css({height: "", width: ""});
}


//speaker click
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
// camera click
$(function(){
 $("#camera").click(function(){
 $('.dvd').hide(); //hide the button
 $('.spotify').hide();
  $('.youtube').hide();
  $('.contact').hide();
  $('.gigs').hide();
  $('.instagram').toggle('slow', function() {
    // Animation complete.
  });
})
});
//cassette click
$(function(){
 $("#cassette").click(function(){
 $('.dvd').hide(); //hide the button
 $('.spotify').hide();
 $('.instagram').hide();
 $('.contact').hide();
 $('.gigs').hide();
 $('.youtube').toggle('slow', function() {
   // Animation complete.
 });
})
});
// phone click
$(function(){
 $("#phone").click(function(){
 $('.dvd').hide(); //hide the button
 $('.spotify').hide();
 $('.instagram').hide();
 $('.youtube').hide();
 $('.gigs').hide();
 $('.contact').toggle('slow', function() {
   // Animation complete.
 });
})
});
// synth click
$(function(){
 $("#synth").click(function(){
 $('.dvd').hide(); //hide the button
 $('.spotify').hide();
 $('.instagram').hide();
 $('.youtube').hide();
 $('.contact').hide();
 $('.gigs').toggle('slow', function() {
   // Animation complete.
 });
})
});
