

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var CMNEApp = angular.module('starter', ['ionic', 'starter.controllers','starter.services','ngCordova','ngCordovaOauth','ionic-ratings'])

CMNEApp.config(function($ionicConfigProvider) {
  $ionicConfigProvider.views.maxCache(5);

  // note that you can also chain configs
  $ionicConfigProvider.backButton.text(false);
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})



.controller("ExampleController", function($scope, $state){
	
var test=window.localStorage.getItem("test");
	if(test==null){
	$scope.saveData= function(){
		var userName=window.localStorage.getItem("firsName");
		var lastName=window.localStorage.getItem("lastName");
		var localisation=window.localStorage.getItem("localisation");
		var situation=window.localStorage.getItem("situation");
		var path=window.localStorage.getItem("path");
		var tweet=window.localStorage.getItem("tweet");
		
		
		
			if(document.getElementById("firstName_input").value!= "" && document.getElementById("lastName_input").value!= "" && document.getElementById("situation_input").value!= "")
			{
		
					window.localStorage.setItem("firsName", document.getElementById("firstName_input").value);
					window.localStorage.setItem("lastName", document.getElementById("lastName_input").value);
					window.localStorage.setItem("situation", document.getElementById("situation_input").value);
					
				if(document.getElementById("position_input").value!= "" ){
					window.localStorage.setItem("localisation", document.getElementById("position_input").value);
				}
		
				if(document.getElementById("path_input").value!= "" && document.getElementById("path_input").value != path ){
					window.localStorage.setItem("path", document.getElementById("path_input").value);
				}
	
				if(document.getElementById("tweetInput").value!= "" && document.getElementById("tweetInput").value != tweet ){
					window.localStorage.setItem("tweet", document.getElementById("tweetInput").value);
				}
				window.localStorage.setItem("test", '1');
				window.location.reload(true);
			$state.go('validation');
			
			}
			else{
				alert("Vous n'avez pas remplis les champs obligatoires");
			}
	
	}
	}
	else{
		window.location.reload(true);
		$state.go('validation');
	}
	

	
})

.controller("testController", function($scope){
	
	
	var intitule=window.localStorage.getItem("intitule");
	$scope.Intitule = intitule;
	var IdResponsableRH=window.localStorage.getItem("IdResponsableRH");
	$scope.IdResponsableRH = IdResponsableRH;
	var NiveauxExperience=window.localStorage.getItem("NiveauxExperience");
	$scope.NiveauxExperience = NiveauxExperience;
	var NiveauxFormation=window.localStorage.getItem("NiveauxFormation");
	$scope.NiveauxFormation = NiveauxFormation;
	var Localisation=window.localStorage.getItem("Localisation");
	$scope.Localisation = Localisation;
	var DatePublication=window.localStorage.getItem("DatePublication");
	$scope.DatePublication = DatePublication;
	var DateLimite=window.localStorage.getItem("DateLimite");
	$scope.DateLimite = DateLimite;
	
		var userName=window.localStorage.getItem("firsName");
		var lastName=window.localStorage.getItem("lastName");
		if(userName!= "" && lastName!="" && lastName!= null && userName!= null){
			document.getElementById("name").textContent=userName+" "+lastName;
		}
		
		var picture=window.localStorage.getItem("picture");
		if(picture!= "" && picture!= null){
			document.getElementById("picture").src=picture;
		}
		
		var localisation=window.localStorage.getItem("localisation");
		if(localisation!= "" && localisation!= null){
			document.getElementById("localisation").textContent=localisation;
		}
		
		var situation=window.localStorage.getItem("situation");
		if(situation!= "" && situation!= null){
		document.getElementById("situation").placeholder=situation;
		}
		
		var path=window.localStorage.getItem("path");
		if(path!= "" && path!= null){
		document.getElementById("path").placeholder=path;
		}
		
		var tweet=window.localStorage.getItem("tweet");
		if(tweet!= "" && tweet!= null){
		document.getElementById("tweet").placeholder=tweet;
		}
		
		
	})
	
	
/*.controller("ProfilController", function($scope){
	
		var userName=window.localStorage.getItem("firsName");
		var lastName=window.localStorage.getItem("lastName");
		if(userName!= "" && lastName!="" && lastName!= null && userName!= null){
			document.getElementById("name").textContent=userName+" "+lastName;
		}
		
		var picture=window.localStorage.getItem("picture");
		if(picture!= "" && picture!= null){
			document.getElementById("picture").src=picture;
		}
		
		
		var localisation=window.localStorage.getItem("localisation");
		if(localisation!= "" && localisation!= null){
			document.getElementById("position").textContent=localisation;
		}
		
		var situation=window.localStorage.getItem("situation");
		if(situation!= "" && situation!= null){
		document.getElementById("situation").placeholder=situation;
		}
		
		var path=window.localStorage.getItem("path");
		if(path!= "" && path!= null){
		document.getElementById("path").placeholder=path;
		}
		
		var tweet=window.localStorage.getItem("tweet");
		if(tweet!= "" && tweet!= null){
		document.getElementById("tweetInput").placeholder=tweet;;
		}
		
		
	})*/
	

.controller('MainCtrl', function ($scope,$cordovaOauth,$http,$state) {

  $scope.login = function () {
    $cordovaOauth.linkedin( '78wflk3z27izlj', 'Ra6bmsXc0bA6TvdO' ,  ['r_basicprofile', 'r_emailaddress'],{'redirect_uri':''}).then(function (d) {
        console.log('linkedin response',d);

        $http({method: 'GET', url: 'https://api.linkedin.com/v1/people/~:(firstName,lastName,picture-url,location,industry,summary,emailAddress,positions,public-profile-url)?format=json', headers: {
          'Authorization': 'Bearer ' + d.access_token }
        }).then(function (data) {

          if(data.status == 200){
            var userData = data.data;
			console.log('user profile',userData);
			test=JSON.parse(JSON.stringify(userData));
			firstName=test['firstName'].toString();
			if(firstName!="" && firstName!=null){
				window.localStorage.setItem("firsName",firstName);
			}
			
			var localisation=test['location']['name'].toString();
			if(localisation!="" && localisation!=null){
			window.localStorage.setItem("localisation",localisation);
			}
			var situation=test['industry'].toString();
			if(situation!="" && situation!=null){
			window.localStorage.setItem("situation",situation);
			}
			var lastName=test['lastName'].toString();
			if(lastName!="" && lastName!=null){
			window.localStorage.setItem("lastName",lastName);
			}
			var pictureUrl=test['pictureUrl'];
			if(pictureUrl!="" && pictureUrl!=null){
			window.localStorage.setItem("picture",pictureUrl);
			}
			var profileUrl=test['publicProfileUrl'].toString();
			if(profileUrl!="" && profileUrl!=null){
			window.localStorage.setItem("path",profileUrl);	
			}
			window.location.reload(true);
			window.localStorage.setItem("test", '1');
			$state.go('validation');
			window.location.reload(true);
          }
		    
        },function(e){
          console.error('linkedin info query error',JSON.stringify(e));
        });

      },
      function (error) {
        console.error('linkedin sign in error',error);
      });
	  
	  
  };
})



.controller('AnnonceTest', function($scope){
	 $scope.Intitule = Annonce.get();
})

.controller('ModifProfil', function ($scope) {
	
	
	
	var firstName=window.localStorage.getItem("firsName");
	var lastName=window.localStorage.getItem("lastName");
	var localisation=window.localStorage.getItem("localisation");
	var situation=window.localStorage.getItem("situation");
	var path=window.localStorage.getItem("path");
	var picture=window.localStorage.getItem("picture");
	
	document.getElementById("name").placeholder=firstName;
	document.getElementById("lastName").placeholder=lastName;
	document.getElementById("localisation").placeholder=localisation;
	document.getElementById("situation").placeholder=situation;
	document.getElementById("path").placeholder=path;
	document.getElementById("picture").src=picture;

  $scope.modifer = function () {
	
			window.location.reload(true);
			var firstName_input = document.getElementById("name").value;
			
			if(firstName_input!= ""   && firstName_input!= null && firstName_input!=firstName)
			{
			window.localStorage.setItem("firsName",firstName_input);
			}

			var lastName_input = document.getElementById("lastName").value;
			
			if(lastName_input!= ""   && lastName_input!= null && lastName_input!=firstName)
			{
			window.localStorage.setItem("firsName",firstName_input);
			}
			
			
			var position_input = document.getElementById("localisation").value;
			
			if(position_input!= ""   && position_input!= null && position_input!=localisation)
			{
			window.localStorage.setItem("localisation",position_input);
			}
			
			var situation_input = document.getElementById("situation").value;
			
			if(situation_input!= ""   && situation_input!= null && situation_input!=situation)
			{
			window.localStorage.setItem("situation",situation_input);
			}
			
			var path_input = document.getElementById("path").value;
			
			if(path_input!= ""   && path_input!= null && path_input!=path)
			{
			window.localStorage.setItem("path",path_input);
			}
			window.location.reload(true)
          };
		  
		    
    
  })

/*Envoi de mails*/
.controller("MailgunController", function($scope, $http, $ionicPopup, $timeout, $state) {
 
    var mailgunUrl = "sandboxdbeb402b833c42619487fbce8e2a8850.mailgun.org";
    var mailgunApiKey = window.btoa("api:key-0c233689883f37926dbc2f8e118393d0")
 
  // Triggered on a button click, or some other target
  $scope.showPopup = function() {
    $scope.data = {};

    myPopup.then(function(res) {
    console.log('Tapped!', res);
    });

    $timeout(function() {
     myPopup.close(); //close the popup after 3 seconds for some reason
    }, 3000);
   };
 
    $scope.send = function() {
	
    var intitule = document.getElementById('intitule').textContent;
    var idResp = document.getElementById('idResp').textContent;
    var nivExp = document.getElementById('nivExp').textContent;
    var nivForm = document.getElementById('nivForm').textContent;
    var localisation = document.getElementById('localisation').textContent;
    var datePub = document.getElementById('datePub').textContent;
    var dateLim = document.getElementById('dateLim').textContent;
    var name = document.getElementById("name").textContent;
    var lieu = document.getElementById("localisation").textContent;
    var situation = document.getElementById('situation').placeholder;
    var url = document.getElementById('path').placeholder;
    var picture = document.getElementById('picture').src;
    var tweetInput = document.getElementById('tweet').placeholder
	
    var objet = idResp+" a reçu une nouvelle Candidature de "+name;
    var message = "Le candidat: "+name +"\n ressemblant à : "+picture+"\nhabitant à: "+lieu+"\n dont la situation actuelle est:"+situation+"\n dont le linkedin est: "+url+"\na soumis sa candidature pour l'offre : "+intitule+". \nMise en ligne le "+datePub+" expirant le "+dateLim+". \nLe poste est basé à "+localisation+" \nPour les niveaux d'expérience : "+nivExp+" \nEt un niveau de formation :"+nivForm+"\n\n\nTweet de motivation :"+tweetInput
    
        $http(
            {
                "method": "POST",
                "url": "https://api.mailgun.net/v3/" + mailgunUrl + "/messages",
                "headers": {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": "Basic " + mailgunApiKey
                },
                data: "from=" + "c.m.candidat.mobile@gmail.com" + "&to=" + "c.m.recrute.mobile@gmail.com" + "&subject=" + objet + "&text=" + message
            }
        ).then(function(success) {
            console.log("SUCCESS " + JSON.stringify(success));
        }, function(error) {
            console.log("ERROR " + JSON.stringify(error));
        });
    
    var alertPopup = $ionicPopup.alert({
      title: 'Félicitation',
      template: "Vous venez de postuler à l'une de nos offres"
    });
	$state.go('accueil');
    };
  
  $scope.sendFeedback = function(feedbackInput) {
    
    var valobjet1 = document.getElementById('valobjet1').textContent;
    var valobjet2 = document.getElementById('valobjet2').textContent;
    var valobjet3 = document.getElementById('valobjet3').textContent;
    
    var objet = "Retour Utilisateur";
    var message = "Note de "+valobjet1+" pour le design."+"\n\nNote de "+valobjet2+" pour la fluidité."+"\n\nNote de "+valobjet3+" pour l'utilité."+"\n\n\nCommentaire laissé:\n\n"+feedbackInput
    
        $http(
            {
                "method": "POST",
                "url": "https://api.mailgun.net/v3/" + mailgunUrl + "/messages",
                "headers": {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": "Basic " + mailgunApiKey
                },
                data: "from=" + "c.m.candidat.mobile@gmail.com" + "&to=" + "c.m.recrute.mobile@gmail.com" + "&subject=" + objet + "&text=" + message
            }
        ).then(function(success) {
            console.log("SUCCESS " + JSON.stringify(success));
        }, function(error) {
            console.log("ERROR " + JSON.stringify(error));
        });
    
    var alertPopup = $ionicPopup.alert({
      title: 'Merci',
      template: "Vous venez de donner votre avis"
    });
    };

    $scope.sendMotivation = function(prenomInput,nomInput,mailInput,coordInput,formInput,expProInput,motivInput) {

    	if(document.getElementById("prenomInput").value!= "" && document.getElementById("nomInput").value!= "" && document.getElementById("mailInput").value!= "")
    	{
    		
    		var objet = "Candidature spontanée de "+prenomInput+" "+nomInput;
    		var message = "Le candidat "+prenomInput+" "+nomInput+"qui a pour adresse mail " +mailInput+" nous fait part de sa motivation pour rejoindre nos rangs :\n\n Ses coordonnées : "+coordInput+"\nSa formation : "+formInput+"\nSon experience professionnelle : "+expProInput+"\nSa motivation : "+motivInput
    

		        $http(
		            {
		                "method": "POST",
		                "url": "https://api.mailgun.net/v3/" + mailgunUrl + "/messages",
		                "headers": {
		                    "Content-Type": "application/x-www-form-urlencoded",
		                    "Authorization": "Basic " + mailgunApiKey
		                },
		                data: "from=" + "c.m.candidat.mobile@gmail.com" + "&to=" + "c.m.recrute.mobile@gmail.com" + "&subject=" + objet + "&text=" + message
		            }
		        ).then(function(success) {
		            console.log("SUCCESS " + JSON.stringify(success));
		        }, function(error) {
		            console.log("ERROR " + JSON.stringify(error));
		        });
		    
		    var alertPopup = $ionicPopup.alert({
		      title: 'Merci',
		      template: "Vous venez de nous envoyer votre candidature spontanée."
		    });

		    	$state.go('accueil');
   		}

   		else{
				alert("Vous n'avez pas remplis les champs obligatoires");	
		}

    };
 
})

/* Feedback */
.controller('FeedbackCtrl', ['$scope', function($scope) {

      $scope.ratingsObject1 = {
        iconOn : 'ion-ios-star',
        iconOff : 'ion-ios-star-outline',
        iconOnColor: 'rgb(200, 200, 100)',
        iconOffColor:  'rgb(200, 100, 100)',
        rating:  5,
        minRating:1,
        callback: function(rating) {
          $scope.ratingsCallback(rating);
      document.getElementById('valobjet1').textContent=rating;
        }
      };

      $scope.ratingsObject2 = {
        iconOn : 'ion-ios-star',
        iconOff : 'ion-ios-star-outline',
        iconOnColor: 'rgb(200, 200, 100)',
        iconOffColor:  'rgb(200, 100, 100)',
        rating:  5,
        minRating:1,
        callback: function(rating) {
          $scope.ratingsCallback(rating);
      document.getElementById('valobjet2').textContent=rating;
        }
      };

      $scope.ratingsObject3 = {
        iconOn : 'ion-ios-star',
        iconOff : 'ion-ios-star-outline',
        iconOnColor: 'rgb(200, 200, 100)',
        iconOffColor:  'rgb(200, 100, 100)',
        rating:  5,
        minRating:1,
        callback: function(rating) {
          $scope.ratingsCallback(rating);
      document.getElementById('valobjet3').textContent=rating;
        }
      };

      $scope.ratingsCallback = function(rating) {
        console.log('Selected rating is : ', rating);
      };

}])

.controller('PopupCtrl',function($scope, $ionicPopup, $timeout) {

// Triggered on a button click, or some other target
$scope.showPopup = function() {
  $scope.data = {};

  myPopup.then(function(res) {
    console.log('Tapped!', res);
  });

  $timeout(function() {
     myPopup.close(); //close the popup after 3 seconds for some reason
  }, 3000);
 };

 // An alert dialog
 $scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Information',
     template: "Action non disponible pour le moment."
   });
 };
})

/*

    .run(function($ionicPlatform, $ionicPopup) {
        $ionicPlatform.ready(function() {
            if(window.Connection) {
                if(navigator.connection.type == Connection.NONE) {
                    $ionicPopup.confirm({
                        title: "Internet Disconnected",
                        content: "The internet is disconnected on your device."
                    })
                    .then(function(result) {
                        if(!result) {
                            ionic.Platform.exitApp();
                        }
                    });
                }
            }
        });
    })

*/
.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
   
 

 $stateProvider

  // Each tab has its own nav history stack:

   $stateProvider.state('postuler', {
    url: '/postuler/:IdAnnonce',
		templateUrl: 'views/postuler.html',
	
  })
  
  .state('annonce', {
        url: '/annonce/:IdAnnonce',
        templateUrl: 'views/annonce.html'
      })
  .state('profil', {
        url: '/profil',
        templateUrl: 'views/profil.html'
      })
    
	.state('validation', {
        url: '/validation',
        templateUrl: 'views/validation_postulation.html'
      })
	

  .state('toutesLesAnnonces', {
      url: '/toutesLesAnnonces/:recherche',
      templateUrl: 'views/toutesLesAnnonces.html'
    })

  .state('recherche', {
      url: '/recherche',
      templateUrl: 'views/recherche.html'
    })

  .state('feedback', {
      url: '/feedback',
      templateUrl: 'views/feedback.html'
    })

  .state('c_spontannee', {
      url: '/c_spontannee',
      templateUrl: 'views/c_spontannee.html'
    })
	
  .state('accueil', {
    url: '/accueil',
    templateUrl: 'views/accueil.html'
  });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/accueil');
	
});
