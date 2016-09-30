'use strict';

app.controller('ProfileCtrl', function($scope, $http, $routeParams) {
  $scope.test = 'Profile'

  var userID = $routeParams.id

  $http({
      method: 'GET',
      url: '/api/profile',
      params: { userID}
    })
    .then((res) => {
      $scope.profile = res.data[0]
      console.log($scope.profile)
    })

  $scope.editProfile = (profile) => {
    console.log(profile)

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

