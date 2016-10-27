(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
 $scope.name = "";

$scope.sayMessage = function () {
var count = 0;
var items = $scope.name.split(",");
for (var i=0; i<items.length; i++) {
  if (items[i] != "") {
    count++;
  }
}
  if (count == 0) {
    $scope.Message = "Please enter data first";
    return;
  }
  if (count <= 3) {
    $scope.Message = "Enjoy!";
  } else {
    $scope.Message = "Too much!";
  }
}



}

})();
