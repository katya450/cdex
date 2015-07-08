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
      success: appendRecord
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
    $('#record-list tbody').html('')
    records.forEach(function(el) { appendRecord(el) })
  }
  
  function appendRecord(record) {
    $('#record-list tbody').append('<tr>' +
          '<td>' + record.id + '</td>' +
          '<td>' + record.artist + '</td>' +
          '<td>' + record.name + '</td></tr>')
  }
})