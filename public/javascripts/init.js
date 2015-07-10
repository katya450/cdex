$(function() {
  require.config({
    baseUrl: "../",
    paths: {
      'jquery': 'bower/jquery/dist/jquery',
      'handlebars': 'bower/handlebars/handlebars'
    }
  })
  require(['jquery', 'handlebars'], function($, Handlebars) {
    
    var recordTableRow = Handlebars.compile($('#record-table-row').html())
    var recordTable = $('#record-list tbody')

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
      records.forEach(function(el) { appendRecord(el) })
    }
    
    function appendRecord(record) {
      recordTable.append(recordTableRow(record))
    }    
  })
})