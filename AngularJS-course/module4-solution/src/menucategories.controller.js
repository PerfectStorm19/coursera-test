(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuCategoriesController', MenuCategoriesController);


MenuCategoriesController.$inject = ['MenuDataService', 'categories'];
function MenuCategoriesController(MenuDataService, categories) {
  var categoriesList = this;

  var promise = MenuDataService.getAllCategories();

  promise.then(function (response) {
    categoriesList.categories = response.data;
  })
}

})();
