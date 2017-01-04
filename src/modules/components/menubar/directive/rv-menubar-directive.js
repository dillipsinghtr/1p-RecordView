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
      controllerAs: 'vm',
      bindToController: {
        links:'='
      },
      //link: linkFunction
    };
  }
  RVMenubarCtrl.$inject = ['menubarService'];

  function RVMenubarCtrl (MenubarService) {
    var vm = this;
    vm.MenuBar = MenubarService.getMenuDetails();
    vm.handleClick = function(menuName){
      alert(menuName);
    };    
  }
})(angular);