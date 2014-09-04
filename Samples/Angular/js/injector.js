var myMod = angular.module('myMod', []);
myMod.value('modMsg', 'Hello from my module');
myMod.controller('controllerB', ['$scope', 'modMsg', function($scope, msg) {
    $scope.message = msg;
}]);

var myApp = angular.module('myApp', ['myMod']);
myApp.value('appMsg', 'Hello from my app');
myApp.controller('controllerA', ['$scope', 'appMsg', function($scope, msg) {
    $scope.message = msg;
}]);
