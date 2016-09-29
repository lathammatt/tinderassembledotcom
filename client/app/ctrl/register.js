'use strict';

app.controller('RegisterCtrl', function($scope, $http, $location) {
  $scope.test = 'register'

  $scope.registerUser = () => {
    const newUser = {
      email: $scope.email,
      password: $scope.password
    }
    console.log(newUser)

    $http
      .post('/register', newUser)
      .then(res => {
        console.log(res)
        $location.path('/login')
      })
      .catch(console.error)
  }
})
