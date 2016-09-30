'use strict';

app.controller('LoginCtrl', function($scope, $http, $location, userStorage) {
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
        userStorage.setUser(email)
        userStorage.setID(userID)
        $location.path('/profile')
      })
      .catch(console.error)
  }

})
