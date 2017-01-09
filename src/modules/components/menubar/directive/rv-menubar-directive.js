'use strict';
(function (angular) {

  angular
  .module('rv.components.RVMenubarModule')
  .directive('rvMenubar', RVMenubarDirective)
  .controller('rvMenubarController', RVMenubarCtrl);

  RVMenubarDirective.$inject = [];

  function RVMenubarDirective() {
    return {
      scope: {},
      restrict: 'EA',
      templateUrl: 'modules/components/Menubar/templates/rv-Menubar-template.html',
      controller: 'rvMenubarController',
      controllerAs: 'menuCtrl',
      bindToController: {
        menuItems:'='
      },
      link: function(_scope, _elements, _attrs, _ctrl) {
        console.log(_ctrl.menuItems);
      }
    };
  }
  RVMenubarCtrl.$inject = [];

  function RVMenubarCtrl() {
    var vm = this;
    vm.menuOptions = vm.menuItems;
    vm.handleClick = function(menuName) {
      alert(menuName);
    };
  }
})(angular);