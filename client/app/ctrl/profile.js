'use strict';

app.controller('ProfileCtrl', function($scope) {
  $scope.test = 'Profile'

  $scope.editProfile = (profile) => {
  	console.log('submit')
    console.log(profile)
  }
})