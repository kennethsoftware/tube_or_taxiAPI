taxitube.controller('JourneyCtrl', ['$http','$scope', function($http, $scope) {

  $scope.getTest = function() {
    $http.get("https://api.uber.com/v1/estimates/products?server_token=RjSC2fS4joKvbtWjMkXrVwGs5rf4Blp0i97q-Kiu&latitude=51.528490&longitude=-0.084728", "GET").then(
      function success(response){
        console.log(response)
      });
  }
}]);
