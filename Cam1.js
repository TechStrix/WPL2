$(document).ready(function(){
  $(document).keypress(function(e){
    if(e.which == 13){
     $("#i1").fadeOut(2000).fadeIn(2000).fadeTo(2000,0.5);
    }
  });
})
