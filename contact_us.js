$(document).ready(function(){
  $("#b1").click(function(){

    if($(".el").length==0){

      var lastIdidx = $('#t1 tr[id]:last').attr('id').substr(1);
        $('#t1 > tbody:last-child').append('<tr id = "r"><td id = "d' + (lastIdidx + 1) + '" class = "el" contenteditable="true"></td>' +
                                           '<td id = "d' + (lastIdidx + 2) + '" class = "el" contenteditable="true"></td>' +
                                           '<td id = "d' + (lastIdidx + 3) + '" class = "el" contenteditable="true"></td>' +
                                           '<td id = "d' + (lastIdidx + 4) + '" class = "el" contenteditable="true"></td>' +
                                           '<td><button id ="del1">Delete</button></td></tr>');

    }

    else{
      var lastIdidx = +$('#t1 tr:last td[id]:last').attr('id').substr(1);
        $('#t1 > tbody:last-child').append('<tr id = "r"><td id = "d' + (lastIdidx + 1) + '" class = "el" contenteditable="true"></td>' +
                                           '<td id = "d' + (lastIdidx + 2) + '" class = "el" contenteditable="true"></td>' +
                                           '<td id = "d' + (lastIdidx + 3) + '" class = "el" contenteditable="true"></td>' +
                                           '<td id = "d' + (lastIdidx + 4) + '" class = "el" contenteditable="true"></td>' +
                                           '<td><button id ="del1">Delete</button></td></tr>');


    }
  });

  $("#t1").on('click','#del1',function(){
        $(this).parent().parent().remove();
  });


    $(document).on('mouseleave', '.el', function(e){
        $(this).removeClass("highlight");

    });

    $(document).on('keyup', function(e){
      if (e.which == 18) {
        $(".highlight").removeClass("highlight");

      }
    });

    $(document).on('keypress','.el', function(e){
      if (e.altkey) {
        $(".highlight").addClass("highlight");

      }
    });

    $(document).on('mouseenter keypress','.el', function(e) {
      if (e.altKey) {

        $(this).addClass("highlight");

      }

    });




})
