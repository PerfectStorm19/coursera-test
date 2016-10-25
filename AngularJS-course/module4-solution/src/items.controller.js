(function () {
'use strict';

angular.module('data')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['MenuDataService','items'];
function ItemsController(MenuDataService, items) {
  var itemsList = this;



  var promise = MenuDataService.getItemsForCategory(categoryShortName);

  promise.then(function (response) {
    itemsList.items = response.data.menu_items;
  })
}

})();
