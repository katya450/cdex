$(document).ready(function(){

	$('#add').click(function() {
		var artist = $('#artist').val()
		var name = $('#name').val()
		addRecord({							//luo json olion, sisältö {:n sisällä
			artist: artist,
			name: name
		})
	})	
	
	function addRecord(record) {				//nimeää saamansa parametrin "recordiksi" (koska whatever)
		$.ajax({
			type: 'POST',
			url: '/record',
			contentType: 'application/json',
			data: JSON.stringify(record),		//tekee json oliosta stringin
			success: showSuccess
		})
	}
	
	function showSuccess(response) {
		console.log(JSON.stringify(response))
		
	}
})

//JavaScriptissä ei puolipisteitä!
//Stringeissä yksittäishipsut, ei tuplia