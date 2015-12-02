$(function() {
  require.config({
    baseUrl: "bower/",
    paths: {
      'jquery': 'jquery/dist/jquery',
      'handlebars': 'handlebars/handlebars'
    }
  })
  require(['jquery', 'handlebars'], function($, Handlebars) {

	showRecords()
	
	var recordsTemplate = Handlebars.compile($('#records-template').html())
	var recordTable = $('#recordtable tbody')

	function showRecords() {
		$.ajax({
			type: 'GET',
			url: '/records',
			success: listRecords
		})
	}
	
	function listRecords(response) {
		response.forEach(appendRecord)
		
	}
	
	function appendRecord(record) {
		var row = recordsTemplate(record)
		recordTable.append(row)			
	}
	
	$('#add').click(function() {
		var artist = $('#artist').val()
		var name = $('#name').val()
		var mediaType = parseInt($('#mediatype').val())
		addRecord({
			artist: artist,
			name: name,
			mediaType: mediaType
		})
	})	
	
	function addRecord(record) {
		$.ajax({
			type: 'POST',
			url: '/record',
			contentType: 'application/json',
			data: JSON.stringify(record),
			success: appendRecord
		})
	}
  })
})