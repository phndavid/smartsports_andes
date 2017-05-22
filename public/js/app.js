angular.module('app', ['ngRoute'])
.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
         $routeProvider
            .when('/Overall',{
              templateUrl: 'views/overall.html'
            })
            .when('/Top10',{
              templateUrl: 'views/topten.html'
            })
            .otherwise({
              redirectTo: 'Top10'
            });
 }])
.controller('OverallCtrl', function($scope, $http){
  $http.get("/Overall?bracket=overall")
      .then(function(response) {
        $scope.overall_result = response.data;
  });
  $("#select").on('change', function() {
    var value = $(this).children(":selected").attr("value");
    $http.get("/Overall?bracket="+value)
    .then(function(response) {
      $scope.overall_result = response.data;
  });
  });
})