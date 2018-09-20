$(document).ready(function() {
  var $containers = $(".shift");



  // Initial Shapeshift
  $containers.shapeshift({
    gutterX: 20,
    gutterY: 1
  });


  // ----------------------------------------------------------------------
  // - Drag and Drop events for shapeshift
  // ----------------------------------------------------------------------

  $containers.on("ss-event-dropped", function(e, selected) {
    var $selected = $(selected)
    // console.log("The dropped item is:", $selected)

    // Get the index position of each object
    $objects = $(this).children();
    $objects.each(function(i) {
      // console.log("Get the index position:", i)
      // console.log("Get the current element:", $(this))
    });
  });

  $containers.on("ss-event-dragged", function(e, selected) {
    var $selected = $(selected);
    // console.log("This is the item being dragged:", $selected);
  });
});
