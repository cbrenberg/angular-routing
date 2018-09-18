const colorApp = angular.module('ColorApp', []);

colorApp.controller('RedController', ['$http', function($http) {
  const vm = this;

  vm.message = 'Angular loaded!'
}])