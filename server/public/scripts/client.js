const colorApp = angular.module('ColorApp', ['ngRoute']);

colorApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      template: '<h1>Home</h1>',
    })
    .when('/red', {
      templateUrl: 'views/red.html',
      controller: 'RedController as vm'
    })
    .when('/blue', {
      templateUrl: 'views/blue.html',
      controller: 'BlueController as vm'
    })
    .when('/green', {
      templateUrl: 'views/green.html',
      controller: 'GreenController as vm'
    })
    .otherwise({
      template: '<h1>404</h1>'
    })
}]);

colorApp.controller('RedController', ['$http', function ($http) {
  console.log('Running RedController');

  let vm = this;

  vm.message = 'Red page loaded!'
}]);//end RedController

colorApp.controller('BlueController', ['$http', function ($http) {
  console.log('Running BlueController');

  let vm = this;

  vm.message = 'Blue page loaded!'
}])//end BlueController

colorApp.controller('GreenController', ['$http', function ($http) {
  console.log('Running GreenController');

  let vm = this;

  vm.message = 'Green page loaded!'
}])//end GreenController