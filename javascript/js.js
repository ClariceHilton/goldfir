
$(function(){
 $("#speakers").click(function(){
 $('.dvd').hide(); //hide the button
 $('.instagram').hide();
 $('.spotify').toggle('slow', function() {
   // Animation complete.
 });
})
});
$(function(){
 $("#camera").click(function(){
 $('.dvd').hide(); //hide the button
 $('.spotify').hide();
 $('.instagram').show();
})
});
