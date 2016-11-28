var template =
	'<div class="col s12 m4">'  +
	  '<div class="card horizontal">' +
	    '<div class="card-stacked">'+
	      '<div class="card-content blue-grey accent-1">'+
	        '<p>Hi my name is <strong>{{name}}</strong></p>' +
	      '</div>'+
		    '<div class="card-action">'+
		      '<a data-show-url="{{url}}" class="about" >See more about me</a>'+
		    '</div>'+
		  '</div>'+
    '</div>'+
  '</div> ' ; 

$(document).ready(function(){
	$.ajax({
		url : window.location.href,
		type : "GET",
		success : function(response){
			var formatoOption = function(response){
			$.each(response.results , function(i,specie){
				$("#species").append('<option value ="' + specie.people+ '">' + specie.name + '</option>');
				});
			};
			$.getJSON("https://swapi.co/api/species/",formatoOption);
			var formatoFiltro = function(response){
					var personajes2 = "";
					personajes2 +=template.replace("{{name}}" , response.name)
					$("#people").append(personajes2);
						personajes2= "";	
			}

			$("#species").change(function(e) {
				var people = $(this).val().split(',');
				var l = people.length;
				$("#people").html("");
				for (var i = 0; i < l; i++) {
					var ja = people[i].substr(-3);
					link = "https://swapi.co/api/people/"+ja;
					console.log(link);
					$.getJSON(link,formatoFiltro);
				}
			});
		}
	});
});