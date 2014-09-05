angular.module('myApp', []).
    controller('LevelA', function($scope) {
        $scope.title = 'LevelA';
        $scope.valueA = 1;
        $scope.inc = function() {
            $scope.valueA += 1;
        };
    }).
    controller('LevelB', function($scope) {
        $scope.title = 'LevelB';
        $scope.valueB = 1;
        $scope.inc = function() {
            $scope.valueB += 1;
        };
    }).
    controller('LevelC', function($scope) {
        $scope.title = 'LevelC';
        $scope.valueC = 1;
        $scope.inc = function() {
            $scope.valueC += 1;
        };
    });
