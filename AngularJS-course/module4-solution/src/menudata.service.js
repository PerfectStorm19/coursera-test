(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http']
function MenuDataService($http) {
var service = this;

service.getAllCategories = function () {
    var response = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/categories.json")
    });

    return response;
  };


  service.getItemsForCategory = function (categoryShortName) {
    var response = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category="),
      params: {
        category: categoryShortName
      }
    });

    return response;
  };

}

})();
// service.getItemsForCategory = function (categoryShortName) {
//     var deferred = $q.defer();
//     var promise = $http({
//       method: "GET",
//       url: (urlBase + 'menu_items.json'),
//       params: {
//         category: categoryShortName
//       }
//     });
//     promise.then(function (response){
//       deferred.resolve({
//         menuItems: response.data.menu_items,
//         name: response.data.category.name
//       });
//     });
//     return deferred.promise;
//   };
