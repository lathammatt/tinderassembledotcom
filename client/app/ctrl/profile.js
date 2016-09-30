'use strict';

app.controller('ProfileCtrl', function($scope, $http, $routeParams, $localStorage) {
  $scope.user = $localStorage.email

  $http({
      method: 'GET',
      url: '/api/profile',
      params: { _id: $localStorage.userID }
    })
    .then((res) => {
      $scope.profile = res.data[0]
    })

  $scope.editProfile = (profile) => {

    $http({
      method: 'PATCH',
      url: '/api/profile',
      data: profile
    })
    .then(res => {
      console.log(res)
    })
    .catch(console.error)
  }

})

