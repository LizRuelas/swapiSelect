var template =
	'<div class="col s12 m4">'  +
	  '<div class="card horizontal">' +
	    '<div class="card-stacked">'+
	      '<div class="card-content purple accent-1">'+
	        '<p>Hi my name is <strong>{{name}}</strong></p>' +
	      '</div>'+
		    '<div class="card-action">'+
		      '<a data-show-url="{{url}}" class="about" >See more about me</a>'+
		    '</div>'+
		  '</div>'+
    '</div>'+
  '</div> ' ; 

$(document).ready(function(){
	var formatoOption = function(response){
			$.each(response.results , function(i,specie){
				$("#species").append('<option value ="' + specie.people+ '">' + specie.name + '</option>');
		});
	};
	$.getJSON("http://swapi.co/api/species/",formatoOption);
	var formatoFiltro = function(response){
			personajes2 +=template.replace("{{name}}" , response.name)
	}
	var personajes2 = "";

	$("#species").change(function(e) {
		var people = $(this).val().split(',');
		var l = people.length;
		for (var i = 0; i < l; i++) {
			var ja = people[i].substr(-3);
			link = "http://swapi.co/api/people/"+ja;
			console.log(link);
			//$("#people").append(personajes);
			$.getJSON(link,formatoFiltro);
			$("#people").html(personajes2);
			personajes2= "";	
		}
	});
	
});