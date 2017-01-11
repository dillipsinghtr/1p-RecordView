'use strict';
(function(angular) {
  	angular
    .module('rv.components.RVHeaderModule')
    .service('recordViewHeaderService', RecordViewHeaderService);

  RecordViewHeaderService.$inject = [];

  function RecordViewHeaderService() {

    var menuBar = [{
    name: 'Add to Work File',
    value: 'add-to-work-file',
    subMenu: [{
      name: 'New Work File',
      value: 'new-work-file',
      subMenu: null
    }, {
      name: 'Existing Work File',
      value: 'existing-work-file',
      subMenu: null
    }]
  }, {
    name: 'Mark Record',
    value: 'mark-record',
    subMenu: null
  }, {
    name: 'Watch Record',
    value: 'watch-record',
    subMenu: null
  }, {
    name: 'Download',
    value: 'download',
    subMenu: [{
      name: 'Order Patent Document',
      value: 'order-patent-document',
      subMenu: null
    }, {
      name: 'Order File History',
      value: 'order-file-history',
      subMenu: null
    }]
  }];



  function getMenuDetails() {
    return menuBar;
  }
  return {
    getMenuDetails: getMenuDetails
  };
  }
})(angular);
