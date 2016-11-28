angular.module('starter.controllers', [])


/*WebService*/
.controller('AnnoncesCtrl', function($scope, $stateParams, annoncesService) {
	
	annoncesService.getAnnonces().then(function(annonces){
		$scope.annonces = annonces.data;
		$scope.nombresAnnonces = annonces.data.length;

	});
	
	$scope.q=$stateParams.recherche;
	
})


.controller('AnnonceCtrl', function($scope, $stateParams, annoncesService) {

	annoncesService.getAnnonce($stateParams.IdAnnonce).then(function(annonce){
		$scope.annonce = annonce.data;
		$scope.IdAnnonce = $stateParams.IdAnnonce;

		/* WS */
		if($scope.Intitule = annoncesService.decodeHtml($scope.annonce.Intitule).trim() == ""){
			$scope.Intitule = "Non Renseigné";
		} else {
			$scope.Intitule = annoncesService.decodeHtml($scope.annonce.Intitule);
		}
		
		if($scope.NiveauxExperience = annoncesService.decodeHtml($scope.annonce.NiveauxExperience).trim() == ""){
			$scope.NiveauxExperience = "Non Renseigné";
		} else {
			$scope.NiveauxExperience = annoncesService.decodeHtml($scope.annonce.NiveauxExperience);
		}
		
		if($scope.NiveauxFormation = annoncesService.decodeHtml($scope.annonce.NiveauxFormation).trim() == ""){
			$scope.NiveauxFormation = "Non Renseigné";
		} else {
			$scope.NiveauxFormation = annoncesService.decodeHtml($scope.annonce.NiveauxFormation);
		}
		
		if($scope.Localisation = annoncesService.decodeHtml($scope.annonce.Localisation).trim() == ""){
			$scope.Localisation = "Non Renseigné";
		} else {
			$scope.Localisation = annoncesService.decodeHtml($scope.annonce.Localisation);
		}
		
		if($scope.DatePublication = annoncesService.decodeHtml($scope.annonce.DatePublication).trim() == ""){
			$scope.DatePublication = "Non Renseigné";
		} else {
			$scope.DatePublication = annoncesService.decodeHtml($scope.annonce.DatePublication);
		}
		
		if(annoncesService.decodeHtml($scope.annonce.DateLimite).trim() == ""){
			$scope.DateLimite = "Non Renseigné";
		} else {
			$scope.DateLimite = annoncesService.decodeHtml($scope.annonce.DateLimite);
		}
		
		if($scope.NatureContrat = annoncesService.decodeHtml($scope.annonce.NatureContrat).trim() == ""){
			$scope.NatureContrat = "Non Renseigné";
		} else {
			$scope.NatureContrat = annoncesService.decodeHtml($scope.annonce.NatureContrat);
		}
		
		if($scope.DescriptifSociete = annoncesService.decodeHtml($scope.annonce.DescriptifSociete).trim() == ""){
			$scope.DescriptifSociete = "Non Renseigné";
		} else {
			$scope.DescriptifSociete = annoncesService.decodeHtml($scope.annonce.DescriptifSociete);
		}
		
		if($scope.MissionPrincipale = annoncesService.decodeHtml($scope.annonce.MissionPrincipale).trim() == ""){
			$scope.MissionPrincipale = "Non Renseigné";
		} else {
			$scope.MissionPrincipale = annoncesService.decodeHtml($scope.annonce.MissionPrincipale);
		}
		
		if($scope.ActivitesTaches = annoncesService.decodeHtml($scope.annonce.ActivitesTaches).trim() == ""){
			$scope.ActivitesTaches = "Non Renseigné";
		} else {
			$scope.ActivitesTaches = annoncesService.decodeHtml($scope.annonce.ActivitesTaches);
		}
		
		if($scope.ConnaissancesCompetences = annoncesService.decodeHtml($scope.annonce.ConnaissancesCompetences).trim() == ""){
			$scope.ConnaissancesCompetences = "Non Renseigné";
		} else {
			$scope.ConnaissancesCompetences = annoncesService.decodeHtml($scope.annonce.ConnaissancesCompetences);
		}
		
		if($scope.Savoirs = annoncesService.decodeHtml($scope.annonce.Savoirs).trim() == ""){
			$scope.Savoirs = "Non Renseigné";
		} else {
			$scope.Savoirs = annoncesService.decodeHtml($scope.annonce.Savoirs);
		}
		
		if($scope.CertificationsAccreditations = annoncesService.decodeHtml($scope.annonce.CertificationsAccreditations).trim() == ""){
			$scope.CertificationsAccreditations = "Non Renseigné";
		} else {
			$scope.CertificationsAccreditations = annoncesService.decodeHtml($scope.annonce.CertificationsAccreditations);
		}
		
		if($scope.InformationsComplementaires = annoncesService.decodeHtml($scope.annonce.InformationsComplementaires).trim() == ""){
			$scope.InformationsComplementaires = "Non Renseigné";
		} else {
			$scope.InformationsComplementaires = annoncesService.decodeHtml($scope.annonce.InformationsComplementaires);
		}
		
		if($scope.IdResponsableRH = annoncesService.decodeHtml($scope.annonce.IdResponsableRH).trim() == ""){
			$scope.IdResponsableRH = "Non Renseigné";
		} else {
			$scope.IdResponsableRH = annoncesService.decodeHtml($scope.annonce.IdResponsableRH);
		}
		
	});
	
})


/*Verification Online/Offline*/
.controller('HomeCtrl', function($scope, $cordovaNetwork) {
	$scope.message = "";
	
	if($cordovaNetwork.isOnline()){
		$scope.message = "Online";
		console.log($cordovaNetwork.isOnline());
	}
	else{
		console.log($cordovaNetwork.isOffline());
		$scope.message = "Offline";
	}
	
})


/*Partage des annonces*/
.controller('shareCtrl',['$scope',function($scope) {

   $scope.partager=function(){
	 var intitule = document.getElementById('Intitule').textContent;
	 var nivExp = document.getElementById('NiveauxExperience').textContent;
	 var nivForm = document.getElementById('NiveauxFormation').textContent;
	 var localisation = document.getElementById('Localisation').textContent;
	 var datePub = document.getElementById('DatePublication').textContent;
	 
	 var message = "Le CMNE recherche "+intitule+" de niveau "+nivExp+" à "+localisation+" \nAnnonce publiée le "+datePub;

     window.plugins.socialsharing.share(message, 'Le CMNE recherche '+intitule, null, '\n\n https://play.google.com/store/apps/lienDelAppliDuCMNE');
  }
 
}])


/*Menu Burger*/
.controller('MyController', function($scope, $ionicModal) {
	
	$ionicModal.fromTemplateUrl('views/menu.html', {
	scope: $scope,
	animation: 'slide-in'
	}).then(function(modal) {
	$scope.modal = modal;
	});
	$scope.openModal = function() {
	$scope.modal.show();
	};
	$scope.closeModal = function() {
	$scope.modal.hide();
	};
	// Cleanup the modal when we're done with it!
	$scope.$on('$destroy', function() {
	$scope.modal.remove();
	});
	// Execute action on hide modal
	$scope.$on('modal.hidden', function() {
	// Execute action
	});
	// Execute action on remove modal
	$scope.$on('modal.removed', function() {
	// Execute action
	});
  
})



/*Autre*/
.controller("changerAccueil",function($scope){
	
	$scope.class = { 
		class1: "BtnViolet", 
		class2: "BtnAcc",
		class3: "BtnAcc"
	}
	
	$scope.changeClass1 = function(){
		$scope.class.class1 = "BtnViolet";
		$scope.class.class2 = "BtnAcc";
		$scope.class.class3 = "BtnAcc";
	}
	
	$scope.changeClass2 = function(){
		$scope.class.class1 = "BtnAcc";
		$scope.class.class2 = "BtnViolet";
		$scope.class.class3 = "BtnAcc";	
	}
	
	$scope.changeClass3 = function(){
		$scope.class.class1 = "BtnAcc";
		$scope.class.class2 = "BtnAcc";
		$scope.class.class3 = "BtnViolet";	
	}
})

.controller("changer",function($scope){
	
	$scope.class = { 
		class1: "BtnViolet", 
		class2: "BtnAcc"
	}
	
	$scope.changeClass = function(){
		
    if ($scope.class.class1 === "BtnAcc"){
		$scope.class.class1 = "BtnViolet";
		$scope.class.class2 = "BtnAcc";
	}
    else{
		$scope.class.class1 = "BtnAcc";
		$scope.class.class2 = "BtnViolet";
	}
  }
})



.controller('Bienvenue', ['$scope', function($scope) { 
	$scope.title = 'Bienvenue'; 
}]);



/*masquer_div('voirDetail','barre')*/
function masquer_div(id, id2)
{
	if (document.getElementById(id).style.display == 'block') {
		document.getElementById(id).style.display = 'none';
		document.getElementById('testIcon').style.transform = "rotate(270deg)";
	}
	else {
		document.getElementById('testIcon').style.transform = "rotate(0deg)";
		document.getElementById(id).style.display = 'block';
	}

	if (document.getElementById(id2).style.display == 'none') {
		document.getElementById(id2).style.display = 'block';
	}
	else {
		document.getElementById(id2).style.display = 'none';
	}
}


function afficherdiv1(id, id2, id3){
       	document.getElementById(id).style.display = 'block';
		document.getElementById(id2).style.display = 'none';
		document.getElementById(id3).style.display = 'none';
}


function afficherdiv2(id, id2){
       	document.getElementById(id).style.display = 'block';
		document.getElementById(id2).style.display = 'none';
}

function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

function test(id){
	document.getElementById(id).innerHTML =document.getElementById(id).textContent
}

/*function traductionWS(id) {
	
	var find = "</p>";
	var regex = new RegExp(find, "g");
	document.getElementById(id).textContent = document.getElementById(id).textContent.replace(regex,"\n");
	
	var find2 = "<p>";
	var regex2 = new RegExp(find2, "g");
	document.getElementById(id).textContent = document.getElementById(id).textContent.replace(regex2," ");
	
	var find3 = "<strong>";
	var regex3 = new RegExp(find3, "g");
	document.getElementById(id).textContent = document.getElementById(id).textContent.replace(regex3,"");
	
	var find4 = "</strong>";
	var regex4 = new RegExp(find4, "g");
	document.getElementById(id).textContent = document.getElementById(id).textContent.replace(regex4,"\n");
	
	var find5 = "</ul>";
	var regex5 = new RegExp(find5, "g");
	document.getElementById(id).textContent = document.getElementById(id).textContent.replace(regex5,"\n");
	
	var find6 = "<ul>";
	var regex6 = new RegExp(find6, "g");
	document.getElementById(id).textContent = document.getElementById(id).textContent.replace(regex6," ");

	var find7 = "</li>";
	var regex7 = new RegExp(find7, "g");
	document.getElementById(id).textContent = document.getElementById(id).textContent.replace(regex7,"\n");
	
	var find8 = "<li>";
	var regex8 = new RegExp(find8, "g");
	document.getElementById(id).textContent = document.getElementById(id).textContent.replace(regex8," ");
	
	var find9 = "<br/>";
	var regex9 = new RegExp(find9, "g");
	document.getElementById(id).textContent = document.getElementById(id).textContent.replace(regex9,"\n");
	
	var find10 = "</em>";
	var regex10 = new RegExp(find10, "g");
	document.getElementById(id).textContent = document.getElementById(id).textContent.replace(regex10,"");
	
	var find11 = "<em>";
	var regex11 = new RegExp(find11, "g");
	document.getElementById(id).textContent = document.getElementById(id).textContent.replace(regex11,"");
	
	var find12 = "</span>";
	var regex12 = new RegExp(find12, "g");
	document.getElementById(id).textContent = document.getElementById(id).textContent.replace(regex12,"");

	var find13 = '<span style="font-family:calibri,sans-serif; font-size:11pt; line-height:115%; mso-ansi-language:FR; mso-ascii-theme-font:minor-latin; mso-bidi-language:AR-SA; mso-bidi-theme-font:minor-latin; mso-fareast-font-family:"Times New Roman"; mso-fareast-language:FR; mso-fareast-theme-font:minor-fareast; mso-hansi-theme-font:minor-latin">';
	var regex13 = new RegExp(find13, "g");
	document.getElementById(id).textContent = document.getElementById(id).textContent.replace(regex13,"");
	
	var find14 = "</u>";
	var regex14 = new RegExp(find14, "g");
	document.getElementById(id).textContent = document.getElementById(id).textContent.replace(regex14,"\n");
	
	var find15 = "<u>";
	var regex15 = new RegExp(find15, "g");
	document.getElementById(id).textContent = document.getElementById(id).textContent.replace(regex15,"");
	
	var find16 = "</div>";
	var regex16 = new RegExp(find16, "g");
	document.getElementById(id).textContent = document.getElementById(id).textContent.replace(regex16,"\n");
	
	var find17 = "<div>";
	var regex17 = new RegExp(find17, "g");
	document.getElementById(id).textContent = document.getElementById(id).textContent.replace(regex17,"");
	
	var find18 = '<span style="color:#1f497d; font-family:arial,sans-serif; font-size:11pt; line-height:115%; mso-ansi-language:FR; mso-bidi-language:AR-SA; mso-fareast-font-family:Calibri; mso-fareast-language:EN-US; mso-fareast-theme-font:minor-latin; mso-themecolor:text2">'
	var regex18 = new RegExp(find18, "g");
	document.getElementById(id).textContent = document.getElementById(id).textContent.replace(regex18,"");
}*/