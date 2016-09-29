'use strict';

app.controller('ProfileCtrl', function($scope, $http) {
  $scope.test = 'Profile'

  $http({
      method: 'GET',
      url: '/profile',
      params: { _id: "57ed40856bb03cd8922bdd57" }
    })
    .then((res) => {
      $scope.profile = res.data[0]
      console.log($scope.profile)
    })

  $scope.editProfile = (profile) => {
    console.log(profile)

    $http({
      method: 'PATCH',
      url: '/profile',
      data: profile
    })
    .then(res => {
      console.log(res)
    })
    .catch(console.error)
  }

})
