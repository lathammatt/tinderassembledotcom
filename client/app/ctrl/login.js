'use strict';

app.controller('LoginCtrl', function($scope) {
  $scope.test = 'login'

  $scope.loginUser = () => {
    console.log($scope.user, $scope.password)
  }
})
