'use strict';

(function (angular) {

  angular
  .module('rv.components.RVNavigationModule')
  .directive('rvNavigation', RVNavigationDirective)
  .controller('rvNavigationController', RVNavigationCtrl);

  function RVNavigationDirective() {
    return {
      restrict: 'E',
      templateUrl: 'modules/components/navigation/templates/rv-navigation-template.html',
      scope: {
        title: '@'
      },
      //bindToController: true,
      controllerAs: 'vm',
      controller: 'rvNavigationController'
    };
  }

  RVNavigationCtrl.$inject = ['navigationService'];

  function RVNavigationCtrl (navigationService) {
    var vm = this;
    vm.title = "Patent Record View";
    vm.tgMark = "Mark Record";
    vm.MenuBar = navigationService.getMenuDetails();
    

  }
})(angular);