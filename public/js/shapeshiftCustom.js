
function init(){
// ================================================================================================================
//  Function initialisers
// ================================================================================================================
// *** =================================
// ***Initialise shapeshift
// ***==================================

  $containers = $(".shift");
  // console.log ("It works")
  //
  $(".shift").shapeshift();

  // Handle Card Icons
  $( ".card" ).hover(
    function() {
      $( this ).find( ".space-between" ).animate({opacity: 1}, 300);
    }, function() {
      $( this ).find( ".space-between" ).animate({opacity: 0}, 250);
    }
  );


// *** =================================
// ***Initialise More Dropdown list
// ***==================================

  $(document).click(function(e) {
    if (!$(e.target).is('a')) {
        $('.collapse').collapse('hide');
    }
  });


// *** =================================
// ***Initialise Text Fit
// ***==================================
//
// // Fit text
// var fitties = [];
// fitties = fitty('.fit', {
//   minSize: 14,
//   maxSize: 250
// });

// *** =================================
// ***Initialise Note Delete Feature
// ***==================================
$('.delete').on('click', function(e){
  // e.preventDefault()
  var id = $(this).attr('recordId');
  deleteNote(id);
});

// *** =================================
// ***Expand New Note Form when user
// ***focuses on Take a note input
// ***==================================
$( "#newnote" ).focus(function() {
$( "#close" ).removeClass( "invisible" );
$( "#body" ).removeClass( "invisible" );
$( "#newnote" ).removeClass( "newnote" );
$( "#newnote" ).attr("placeholder", "Title");
$( "#newnoteform" ).addClass( "newnoteform" );
});


// *** =================================
// ***Initialise Note Form Processor
// ***==================================
$('#body').on('blur', function(e){
  $( "#newnoteform" ).removeClass( "newnoteform" );
  $( "#body" ).addClass( "invisible" );
  $( "#close" ).addClass( "invisible" );
  $( "#newnote" ).addClass( "newnote" );
  var title = $("#newnote").val();
  var body = $("#body").val();

   processNoteForm(title, body);

 });

 // *** =================================
 // ***Initialise Note Edit Form Processor
 // ***==================================
 $('.card-close').on('click', function(e){

   var parent = $(this).parent().parent().parent().parent();
   var title = parent.find("#editNoteTitle").val();
   var body = parent.find("#noteBodyEdit").val();
   var id = parent.attr("data-index");
   var position = parent.attr("note-position");

   // console.log(id+":"+title+":"+body);

    processNoteEditForm(id, title, body, position);

  });


 // *** =================================
 // ***Initalise note position processor
 // ***==================================
 $containers.on("ss-rearranged", function(e, selected) {

   $(this).children().each(function(index){
     if($(this).attr('data-position') != (index+1)){
       $(this).attr('data-position', (index+1)).addClass('updated')
     }
   });
    saveNewPositions();
   });

   // *** =================================
   // ***Initialise form textarea autoresize
   // ***==================================

   // $("textarea").height( $("textarea")[0].scrollHeight );
   autosize($('textarea'));


   // *** =================================
   // ***Initialise Modal form textarea height on
   // click
   // ***==================================

   $('.modal').on('shown.bs.modal', function (e) {
      var val = $(this).find("#noteBodyEdit");
      var sHeight = $(this).find("#noteBodyEdit")[0].scrollHeight;
      val.animate({height: sHeight+"px"},300);
      //set focus on input
      val.focus();

  })

  $('.modal').on('show.bs.modal', function (e) {
     var val = $(this).find("#noteBodyEdit");
     //set focus on input
     val.focus();
     val.scrollTop();
     val.setCursorPosition(0);
    // console.log(sHeight);
 })

  $('.modal').on('hide.bs.modal', function (e) {
     var val = $(this).find("#noteBodyEdit");
     val.animate({height: "50px"},150);

    // console.log(sHeight);
 })



   // *** =================================
   // ***Initialise Edit Function
   // ***==================================


}

// ================================================================================================================
//Functions
// ================================================================================================================

/**
 * Processes the new note form. Saves Note when body textarea loses focus.
 * @param  {string} title the title of the note. Picked from the title input.
 * @param  {string} body  the body of the note. Picked from the Body textarea.
 */
function processNoteForm(title, body){
  $.post('note', {'title':title, 'body':body, '_token':$('input[name=_token]').val()}, function(data){
    // console.log(data);
    $("#shift").empty();
    $('#shift').load(location.href + ' #shift >*', '', function(){
       // Reinitialise plugins:
       init();
    });
      //Empty form values and form fields to normal
    $("#newnote").val('');
    $( "#newnote" ).attr("placeholder", "Take a note...");
    $( "#body" ).val('');
  });
}


/**
 * Processes the new note form. Saves Note when body textarea loses focus.
 * @param  {string} title the title of the note. Picked from the title input.
 * @param  {string} body  the body of the note. Picked from the Body textarea.
 */
function processNoteEditForm(id, title, body, position){
  $.post('editnote', {'id':id, 'title':title, 'body':body, 'position':position, '_token':$('input[name=_token]').val()}, function(data){
    console.log(data);
    $("#shift").empty();
    $('#shift').load(location.href + ' #shift >*', '', function(){
       // Reinitialise plugins:
       init();
    });

  });
}


/**
 * Processes note deletion. Takes the note id and posts it to NoteController destroy method.
 * @param  {[integer]} id Note ID
 */
function deleteNote(id){
  $.post('delete', {'id':id, '_token':$('input[name=_token]').val()}, function(data){
    console.log(data);
    $("#shift").empty();
    $('#shift').load(location.href + ' #shift >*', '', function(){
       // Reinitialise plugins:
       init();
    });
  });
}


/**
 * Processes notes position. Sends data to to the NoteController update function. Note positions determines
 * how the notes are organised in the dashboard.
 */
function saveNewPositions(){
  var positions = [];
  var indexes = [];
  $(".updated").each(function(){
    positions.push([$(this).attr('data-index')]);
    indexes.push([$(this).attr('data-position')]);
    $(this).removeClass('updated');
  });

  $.post('position', {'positions':positions, 'indexes':indexes, '_token':$('input[name=_token]').val()}, function(data){
    console.log(data);
  });
}

/**
 * Set Cursor position when modal pops up.
 */
$.fn.setCursorPosition = function(pos) {
  this.each(function(index, elem) {
    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  });
  return this;
  init();
};

// ================================================================================================================
//DOM Processing
// ================================================================================================================

/**
 * Make sure page has loaded fully.
 */
$(document).ready(function() {

/**
 * Initialise all scripts
 */
    init();



});
