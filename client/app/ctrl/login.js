'use strict';

app.controller('LoginCtrl', function($scope, $http) {
  $scope.test = 'login'

  $scope.loginUser = () => {
    console.log($scope.user, $scope.password)
  }

})
