'use strict';

app.controller('LoginCtrl', function($scope, $http, $location, $localStorage) {
  $scope.test = 'login'

  $scope.loginUser = () => {
    const newLogin = {
      email: $scope.email,
      password: $scope.password
    }

    $http
      .post('/api/login', newLogin)
      .then(({data: {user: {email, _id}}}) => {
        $localStorage.email = email
        $localStorage.userID = _id
        $location.path('/profile')
      })
      .catch(console.error)
  }

})
