'use strict';

app.controller('LoginCtrl', function($scope, $http, $location, $localStorage) {
  $scope.test = 'login'

  $scope.loginUser = () => {
    console.log($scope.email, $scope.password)
    const newLogin = {
      email: $scope.email,
      password: $scope.password
    }

    $http
      .post('/api/login', newLogin)
      .then(({data: {email, userID}}) => {
        $localStorage.email = email
        $localStorage.userID = userID
        $location.path('/profile')
      })
      .catch(console.error)
  }

})
