
function init(){
  $(".shift").shapeshift();
}

$(document).ready(function() {

init();
$containers = $(".shift")
// console.log ("It works")

 $containers.on("ss-rearranged", function(e, selected) {

   // console.log ("This container:", $(this))
   // console.log ("Has rearranged this item:", $(selected))
   // console.log ("Into this position:", $(selected).index())

   // get positions

   // console.log("Item", $(selected))
   // console.log("is now in position", $(selected).index())
   });


   $( "#newnote" ).focus(function() {
   $( "#close" ).removeClass( "invisible" );
   $( "#body" ).removeClass( "invisible" );
   $( "#newnote" ).removeClass( "newnote" );
   $( "#newnote" ).attr("placeholder", "Title");
   $( "#newnoteform" ).addClass( "newnoteform" );
   });
   // $( "#body" ).blur(function() {
   // $( "#newnoteform" ).removeClass( "newnoteform" );
   // $( "#body" ).addClass( "invisible" );
   // $( "#close" ).addClass( "invisible" );
   // $( "#newnote" ).addClass( "newnote" );
   // var title = $("#newnote").val();
   // var body = $("#body").val();
   //
   //   $.post('note', {'title':title, 'body':body, '_token':$('input[name=_token]').val()}, function(data){
   //     console.log(data);
   //     $("#shift").empty();
   //     $('#shift').load(location.href + ' #shift >*', '');
   //   });
   // });

   $('#body').on('blur', function(e){
     $( "#newnoteform" ).removeClass( "newnoteform" );
     $( "#body" ).addClass( "invisible" );
     $( "#close" ).addClass( "invisible" );
     $( "#newnote" ).addClass( "newnote" );
     var title = $("#newnote").val();
     var body = $("#body").val();

       $.post('note', {'title':title, 'body':body, '_token':$('input[name=_token]').val()}, function(data){
         console.log(data);
         $("#shift").empty();
         $('#shift').load(location.href + ' #shift >*', '', function(){
            // Reinitialise plugins:
            init();
         });
         $("#newnote").val('');
         $( "#newnote" ).attr("placeholder", "Take a note...");
         $( "#body" ).val('');
       });
    });



 });
