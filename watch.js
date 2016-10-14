$(document).ready(function(){
  $('#e1').mouseenter(function(){
    $('.overlay1').show();
    setTimeout(function() { alert("Done!"); }, 1000);
  });

  $('#e1').mouseleave(function(){
    $('.overlay1').hide();
  });

  $('#e2').mouseenter(function(){
    $('.overlay2').show();
    setTimeout(function() { alert("Done!"); }, 1000);
  });

  $('#e2').mouseleave(function(){
    $('.overlay2').hide();
  });



})
