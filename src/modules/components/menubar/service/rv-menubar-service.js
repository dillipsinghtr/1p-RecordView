'use strict';
(function(angular){
  	angular
    .module('rv.components.RVMenubarModule')
    .service('menubarService', menubarService);

  menubarService.$inject = [];

  function menubarService(){

   var menuBar = [{
    'menuName': 'Add to Work File',
    'menuUrl': null,
    'subMenu': [{
      'menuName': 'New Work File',
      'menuUrl': null,
      'subMenu': null
    }, {
      'menuName': 'Existing Work File',
      'menuUrl': null,
      'subMenu': null
    }],
    
    'nested': true
  }, {
    'menuName': 'Mark Record',
    'menuUrl': null,
    'subMenu': null,
    'nested': false
  }, {
    'menuName': 'Watch Record',
    'menuUrl': null,
    'subMenu': null,
    'nested': false
  }, {
    'menuName': 'Download',
    'menuUrl': null,
    'subMenu': [{
      'menuName': 'Order Patent Document',
      'menuUrl': null,
      'subMenu': null
    }, {
      'menuName': 'Order File History',
      'menuUrl': null,
      'subMenu': null
    }],
    'nested': true
  }];



    function getMenuDetails(){
     return menuBar;
   }
   return{
     getMenuDetails : getMenuDetails
   };
  }
  })(angular);
