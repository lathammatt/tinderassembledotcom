'use strict';

app.controller('RegisterCtrl', function($scope) {
  $scope.test = 'register'

  $scope.registerUser = () => {
    console.log($scope.user, $scope.password, $scope.confirmation)
  }
})
