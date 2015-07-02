$(function() {
  
  var alert = $("#alert")
  
  $('#add_record').click(function() {
    var newRecord = {
      artist: $('#artist').val(),
      name: $('#record_name').val()
    }
    $.ajax({
      type: 'POST',
      url: '/record',
      contentType: 'application/json',
      async: true,
      data: JSON.stringify(newRecord),
      success: recordAdded,
    })
  })
  
  function recordAdded(data) {
    alert.addClass("alert-success")
    alert.text("Added record with id " + data.id)
  }
})