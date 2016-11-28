angular.module('starter.services', [])

.factory('annoncesService', function($http) {
	var annonces = [];
	var city;
	
	return {
		
		getAnnonces: function(){
			return $http.get("https://www.creditmutuel.fr/cmne/fr/banques/emploi-recrutement/nous-rejoindre/WsListeOffres.aspx?site=77bc870f-5f35-4815-7db3-0a3c79244e01&culture=fr-FR").then(function(response){
				annonces = response;
				return annonces;
			});
		},
		
		getAnnonce: function(id){
			return $http.get("https://www.creditmutuel.fr/cmne/fr/banques/emploi-recrutement/nous-rejoindre/WsDetailOffre.aspx?site=77bc870f-5f35-4815-7db3-0a3c79244e01&culture=fr-FR&idAnnonce="+id).then(function(response){
				annonce = response;
				return annonce;
				
			});

		},
		
		decodeHtml: function(html) {
		    var txt = document.createElement("textarea");
		    txt.innerHTML = html;
		    return txt.value;
		}
	}
});

/*getAnnonce: function(annonces, id){
			for(i=0;i<annonces.data.length;i++){
				if(annonces.data[i].id == id){
					console.log(annonces.data[i]);
					return annonces.data[i];
				}
			}
			return null;
		}*/