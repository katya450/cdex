$(function() {
  require.config({
    baseUrl : "bower/",
    paths : {
      'jquery' : 'jquery/dist/jquery',
      'handlebars' : 'handlebars/handlebars',
      'bacon' : 'bacon/dist/bacon',
      'bacon.jquery': 'bacon.jquery/dist/bacon.jquery',
      'bacon.model': 'bacon.model/dist/bacon.model'
    }
  })
  require([ 'jquery', 'handlebars', 'bacon', 'bacon.jquery'], function($, Handlebars, Bacon, bjq) {

    var $recordRowTemplate = Handlebars.compile($('#records-template').html())

    var showRecordsE = Bacon.fromPromise($.ajax({ url : '/records' }))
    
    showRecordsE.onValue(listRecords)
    showRecordsE.onError(displayAlert('Could not load records'))

    var addE = $('#add').asEventStream('click')

    var recordInputE = Bacon.combineTemplate({
      artist: Bacon.$.textFieldValue($('#artist')).map('.trim'),
      name: Bacon.$.textFieldValue($('#name')).map('.trim'),
      mediaType: Bacon.$.textFieldValue($('#mediatype')).map(function(m) { return parseInt(m) })
      })

    var insertRecordE = recordInputE.sampledBy(addE).flatMap(addRecord)
    
    insertRecordE.onValue(appendRecord)
    insertRecordE.onError(displayAlert('Could not insert a record.'))

    function addRecord(record) {
      return Bacon.fromPromise($.ajax({
        type : 'POST',
        url : '/record',
        contentType : 'application/json',
        data : JSON.stringify(record),
      }))
    }

    function listRecords(response) {
      response.forEach(appendRecord)
    }

    function appendRecord(record) {
      var row = $recordRowTemplate(record)
      $('#recordtable tbody').append(row)
    }

    function displayAlert(message) {
      return function() {
        $('#alert .message').text(message)
        $('#alert').show()
      }
    }
    
  })
})