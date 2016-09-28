'use strict';

app.controller('SearchCtrl', function($scope) {

	console.log('search.js')

  $scope.search = (searchParams) => {
  	console.log('search')
    console.log(searchParams)
    $scope.searchParams.name = ''
    $scope.searchParams.gender = ''
  }
})