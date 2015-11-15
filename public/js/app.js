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
		var row = recordsTemplate(record) 		//laittaa levytemplateen objectin arvot (artisti+nimi tässä tapauksessa)
		recordTable.append(row)					//lisää sisällön html -sivulle			
	}
	
	$('#add').click(function() {
		var artist = $('#artist').val()
		var name = $('#name').val()
		var mediaType = parseInt($('#mediatype').val())
		addRecord({							//luo json olion, sisältö {:n sisällä
			artist: artist,
			name: name,
			mediaType: mediaType
		})
	})	
	
	function addRecord(record) {				//nimeää saamansa parametrin "recordiksi" (koska whatever)
		$.ajax({
			type: 'POST',
			url: '/record',
			contentType: 'application/json',
			data: JSON.stringify(record),		//tekee json oliosta stringin
			success: appendRecord
		})
	}
  })
})

//JavaScriptissä ei puolipisteitä!
//Stringeissä yksittäishipsut, ei tuplia