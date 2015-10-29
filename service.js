var app = angular.module('userProfiles');

app.service('mainService', function($http, $q) {

  this.getUsers = function() {

  	var deferred = $q.defer();

    $http({
        method: 'GET',
        url: 'http://reqres.in/api/users?page=1'
    }).then(function(response){
    	var parsedResponse = response.data.data;

    	parsedResponse.forEach(function(user){
    		user.first_name = 'Ralf';
    	});

    	deferred.resolve(parsedResponse);
    });

    return deferred.promise;
  };

});
