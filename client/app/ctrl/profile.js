'use strict';

app.controller('ProfileCtrl', function($scope, $http) {
  $scope.test = 'Profile'
  
  $http
  .get('/profile')
  .then((res) => {
    console.log(res)
  })

  $scope.editProfile = (profile) => {
  	console.log('submit')
    console.log(profile)
  }

})
