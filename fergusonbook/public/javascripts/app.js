var app = window.angular.module('app', [])

app.factory('fergusonFetcher', fergusonFetcher)
app.controller('mainCtrl', mainCtrl)

function fergusonFetcher($http) {

  var API_ROOT = 'fergusons'
  return {
    get: function() {
      return $http
        .get(API_ROOT)
        .then(function(resp) {
          return resp.data
        })
    },
    post: function(formData) {
      return $http
        .post(API_ROOT, formData)
        .then(function(resp) {
          console.log("Post worked");
        })
    }
  }
}

function mainCtrl($scope, fergusonFetcher) {

  $scope.pokemon = []

  fergusonFetcher.get()
    .then(function(data) {
      $scope.fergusons = data
    })
  $scope.addFerguson = function() {
    var formData = { name: "Turd Ferguson", avatarUrl: $scope.Url };
    console.log(formData);
    fergusonFetcher.post(formData); // Send the data to the back end
    $scope.fergusons.push(formData); // Update the model
  }
}
