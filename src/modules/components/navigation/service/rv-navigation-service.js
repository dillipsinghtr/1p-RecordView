'use strict';

(function(angular){
	angular
		.module('rv.components.RVNavigationModule')
		.service('navigationService', navigationService);

	navigationService.$inject = ['$http','$q'];

	function navigationService($http,$q){
		
	var menuBar = [{
    "menuName": "Add to Work File",
    "menuUrl": null,
    "subMenu": [{
      "menuName": "New Work File",
      "menuUrl": null,
      "subMenu": null,
      "priority": 1,
      "nested": false
    }, {
      "menuName": "Existing Work File",
      "menuUrl": null,
      "subMenu": null,
      "priority": 2,
      "nested": false
    }],
    "priority": 1,
    "nested": true
  }, {
    "menuName": "Mark Record",
    "menuUrl": null,
    "subMenu": null,
    "priority": 2,
    "nested": false
  }, {
    "menuName": "Watch Record",
    "menuUrl": null,
    "subMenu": null,
    "priority": 3,
    "nested": false
  }, {
    "menuName": "Download",
    "menuUrl": null,
    "subMenu": [{
      "menuName": "Order Patent Document",
      "menuUrl": null,
      "subMenu": null,
      "priority": 1,
      "nested": false
    }, {
      "menuName": "Order File History",
      "menuUrl": null,
      "subMenu": null,
      "priority": 2,
      "nested": false
    }],
    "priority": 2,
    "nested": true
  }]

		

		function getMenuDetails(){
			return menuBar;
		}

		/*function getNextRec(recordNo){
			var deferred = $q.defer();
			var config ={
				method: 'GET',
				url : SERVICE_URL,    // service url to fetch the data
				data:{
					recordNo : recordNo
				}
			};

			$http(config).then(function (data){
				deffered.resolve(data);
			}, function(data){
				deferred.reject(data.status);
			});
			return deffered.promise;
		}*/
		return{
			getMenuDetails : getMenuDetails
			
			
		};
	}

})(angular);
