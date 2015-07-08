$(function() {
  
  loadRecords()
  
  $('#add_record').click(function() {
    var newRecord = {
      artist: $('#artist').val(),
      name: $('#record_name').val()
    }
    addRecord(newRecord)
  })
  
  function addRecord(record, success) {
    $.ajax({
      type: 'POST',
      url: '/record',
      contentType: 'application/json',
      async: true,
      data: JSON.stringify(record),
      success: loadRecords
    })
  }
  
  function loadRecords() {
    $.ajax({
      type: 'GET',
      url: '/records',
      async: true,
      success: displayRecords
    })
  }
  
  function displayRecords(records) {
    var body = $('#record-list tbody')
    body.html('')
    records.forEach(function(el) {
      body.append('<tr>' +
          '<td>' + el.id + '</td>' +
          '<td>' + el.artist + '</td>' +
          '<td>' + el.name + '</td></tr>')
    })
  }
})