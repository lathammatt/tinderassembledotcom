'use strict';

app.controller('LoginCtrl', function($scope, $http, $location) {
  $scope.test = 'login'

  $scope.loginUser = () => {
    console.log($scope.email, $scope.password)
    const newLogin = {
      email: $scope.email,
      password: $scope.password
    }

    $http
      .post('/login', newLogin)
      .then(res => {
        console.log(res)
        $location.path(`/profile/${res.data.userID}`)
      })
      .catch(console.error)
  }

})
