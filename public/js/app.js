$(function() {
  require.config({
    baseUrl : "bower/",
    paths : {
      'jquery' : 'jquery/dist/jquery',
      'handlebars' : 'handlebars/handlebars',
      'bacon' : 'bacon/dist/bacon'
    }
  })
  require([ 'jquery', 'handlebars', 'bacon' ], function($, Handlebars, Bacon) {

    var $recordRowTemplate = Handlebars.compile($('#records-template').html())

    var showRecordsE = showRecords()
    var addE = $('#add').asEventStream('click')
      .flatMap(recordFromUi)
      .flatMap(addRecord)

    showRecordsE.onValue(listRecords)
    showRecordsE.onError(function(e) { console.log('TODO: error loading /records', e) })

    addE.onValue(appendRecord)
    addE.onError(function(e) { console.log('TODO: error inserting /record', e) })

    function showRecords() {
      return Bacon.fromPromise($.ajax({
        url : '/records'
      }))
    }

    function addRecord(record) {
      return Bacon.fromPromise($.ajax({
        type : 'POST',
        url : '/record',
        contentType : 'application/json',
        data : JSON.stringify(record),
      }))
    }

    function recordFromUi() {
      return {
        artist : $('#artist').val(),
        name : $('#name').val(),
        mediaType : parseInt($('#mediatype').val())
      }
    }

    function listRecords(response) {
      response.forEach(appendRecord)
    }

    function appendRecord(record) {
      var row = $recordRowTemplate(record)
      $('#recordtable tbody').append(row)
    }

  })
})