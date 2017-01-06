'use strict';

(function (angular) {

  angular
  .module('rv.components.RVHeaderModule')
  .directive('rvHeader', RVHeaderDirective)
  .controller('rvHeaderController', RVHeaderController);

  function RVHeaderDirective() {
    return {
      restrict: 'E',
      templateUrl: 'modules/components/rv-header/templates/rv-header-template.html',
      scope: {
        title: '@?'
      },
      bindToController: true,
      controllerAs: 'vm',
      controller: 'rvHeaderController'
    };
  }

  RVHeaderController.$inject = ['recordViewHeaderService'];

  function RVHeaderController(RecordViewHeaderService) {
    var vm = this; // jshint ignore:line
    vm.menuItems = RecordViewHeaderService.getMenuDetails();
    // vm.title = "Patent Record View";
    console.log(vm.title);
  }

  
})(angular);