'use strict';

angular.module('myApp.libs', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/libs', {
    templateUrl: 'libs/libs.html',
    controller: 'LibsCtrl'
  });
}])

.controller('LibsCtrl', ['$scope', '$location', '$anchorScroll', function($scope, $location, $anchorScroll) {


	$scope.scrollTo = function(id) {
		var old = $location.hash();
	    $location.hash('answer-bottom');
	    $anchorScroll();
	    $location.hash(old);
   };

    $scope.scroll = function () {
      $anchorScroll();
    };

	$scope.addLib = function(){

		$scope.lib.$add({
			name: $scope.name,
			email: $scope.email,
			phone: $scope.phone
		}).then(function(){
			console.log("added lib");

			$scope.name = '';
			$scope.email = '';
			$scope.phone = '';
		})
	}
}]);