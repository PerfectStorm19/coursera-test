(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['MenuDataService', 'categorydata'];
function ItemsController(MenuDataService, categorydata) {
  var itemsList = this;

    itemsList.items = categorydata.menu_items;
}

})();
