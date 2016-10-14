

$(document).ready(function(){


  $('#d1').click(function(){
    $('#d8').hide();
  });

  $('#d2').click(function(){
    $('#d8').show();
  });

  $('#d3').click(function(){
    $('#d8').toggle();
  });

  $('#d4').dblclick(function(){
    $('#d8').fadeOut(2000)
  });

  $('#d5').dblclick(function(){
    $('#d8').fadeIn(2000);
  });

  $('#d6').dblclick(function(){
    $('#d8').fadeToggle(2000);
  });

  $('#d7').dblclick(function(){
    $('#d8').fadeTo(2000,0.10).delay(1000);
  });

})
