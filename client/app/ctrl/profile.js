'use strict';

app.controller('ProfileCtrl', function($scope, $http, $routeParams, $localStorage) {
  $scope.user = $localStorage.email
  // console.log('$scope.user', $scope.user)
  // const userID = userStorage.getID()
  // console.log('userID', userID)
  console.log('email', $localStorage.email)
  console.log('userID', $localStorage.userID)

  $http({
      method: 'GET',
      url: '/api/profile',
      params: { _id: $localStorage.userID }
    })
    .then((res) => {
      console.log('$http res', res)
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

